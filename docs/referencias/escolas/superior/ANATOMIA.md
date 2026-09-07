# Superior — anatomia (Ordem #017)

**Pack:** "Superior" V1.8.2, de Chummycho · **Loader:** Forge 47.4.20 · **1.20.1** · **361 mods** ·
instância CurseForge `SUPERIOR - RPG` · licença: nenhuma declarada no pack (padrão
CurseForge, direitos do autor). Este arquivo é anatomia derivada; os arquivos copiados para
estudo vivem em `docs/referencias/escolas/_local/superior/` (fora do git).

**Tese em uma linha:** o Superior é um RPG *escrito em KubeJS* — classes, habilidades,
economia, escala de monstros e revive são scripts (65 arquivos de servidor, 32 de startup,
4 MB de JS), e os mods de RPG são só a infraestrutura (Puffish Skills, SkillSlots,
Hardcore Revival, Apotheosis).

---

## A. Quests (`config/ftbquests/`)

| medida | valor |
|---|---|
| Capítulos | **7**, sem grupos (`chapter_groups.snbt` vazio) |
| Quests | **813** (797 com dependência, 44 opcionais) |
| Maior capítulo | `path_a` — 308 KB, o "caminho" principal |
| Ocultação | `hide_until_deps_complete` 7, `invisible` 2, `hide_dependency_lines` 25; nenhum gamestage |
| `data.snbt` | autoclaim desligado, `detection_delay 40`, ícone `kubejs:admin_sword` |
| Tabelas de recompensa | **37** (`classes`, `subclasses`, `new_subclasses`, `starter_packs`, `starter_points`, `lootboxes`, `summons`, `orbs`, `runes`, `affinity_gems`, `gameplay_modifiers`…) |

Capítulos: `tutorial` (94 ids), `path_a` (1.729 ids), `ore_crafting` (202), `rats` (203),
`tips__tricks` (65), `boss_variant_guide` (25), `fast_travel_basics` (18).

**Tipos de tarefa:** `superior_shop:currency` ×515, `item` ×466, `kill` ×107,
`questsadditions:use` ×103, `command` ×66, `structure` ×65, `dimension` ×31, `custom` ×29,
`checkmark` ×27, `observation` ×15, `advancement` ×13, `questsadditions:place/interaction/break`.
**Tipos de recompensa:** `superior_shop:currency` ×552, `item` ×269, `command` ×68, `choice` ×2,
`random` ×1.

**Ritmo de recompensa.** A moeda do pack (`internal:coins`, mod Superior Shop) é ao mesmo tempo
**tarefa** (pague X moedas) e **recompensa** (ganhe Y): o livro de quests é o circuito da
economia, fechado com duas lojas (`superior_shop` com catálogo e "flash sales" via KubeJS,
`SDMShop`). Quase nada dá XP vanilla. Os `command` (68) chamam scripts KubeJS (dar classe,
desbloquear nó, marcar progresso).

**Três quests exemplares:**

1. **"Travel to an Evoker Fort"** (`tutorial`, tarefa `structure: irons_spellbooks:evoker_fort`,
   ícone o elmo do Archevoker; recompensa 200 moedas). Abre o jogo mandando o jogador a uma
   estrutura de mod com a Structure Compass — tutorial pela ação, não pelo texto.
2. **"Kill the Archevoker"** (dependente da 1; recompensa `bonfires:ash_bone_pile` +
   `bonfires:titanite_shard`): o primeiro boss entrega o kit da fogueira (fast travel).
3. **"Choose a Class from the Skill Tree"** (tutorial; task `checkmark`/`command`): a escolha
   de classe é uma quest cujo `command` roda o KubeJS; antes dela, "Open your Skill Tree by
   pressing P".

## B. Classes e sistema de escolha

Dois níveis, ambos em KubeJS (`kubejs/server_scripts/Player/`):

- **Ordens** (4): `vanguard`, `marksman`, `warlock`, `beastmaster` (+ `shaman`/`ranger` nas
  tabelas antigas). Dadas pela tabela de recompensa **"Classes"** (`loot_size: 1`, escolha
  entre itens `kubejs:warlock`, `kubejs:vanguard`, `kubejs:ranger`, `kubejs:shaman`,
  `kubejs:beastmaster`). Cada ordem tem XP e nível próprios em `persistentData`
  (`warlock_xp`, `warlock_level`…) e um pet (`alexsmobs:tarantula_hawk`, `grizzly_bear`…).
- **Subclasses** (16, um script cada em `Player/classes/`): battlemage, berserker,
  bloodripper, conjurer, disciple, frostpiercer, guardian, juggernaut, kensei, mercenary,
  monk, mystic, nomad, plague_doctor, trickster, vampire (+ `dragonlord`, `soulbinder`,
  `spellblade` em `unfinished/`). Escolhidas com um item: **`kubejs:rune_of_the_<subclasse>`**.

**Fluxo real (`class_init.js`, `unlock_class`):** clique direito na runa →
`persistentData` (`kubejs_class:<x> = true`, `subclass`, XP/nível zerados, `tree_level`) →
`/puffish_skills category unlock <p> superior:skill_tree` → `/puffish_skills points add … 1` →
`/puffish_skills skills unlock … <nó raiz da classe>` (mapa `class_first_unlock`) →
`/skillslots level set <p> 4` → loot box tutorial da classe → `/ftbquests change_progress`
→ **todas** as runas são limpas do inventário (`/clear` + `/kill @e[type=item…]`) → a runa
só é consumida se a classe era nova. **Troca de classe:** não há caminho de jogador — só
comandos de admin (`reset_all_abilities`, `<habilidade>_reset`, `resetClassUnlockFlags`);
classe é decisão permanente por desenho. Pontos de habilidade são compráveis
(`Items/utility/skill_point.js`, `skill_node_tokens.js`) e a loja vende "starter points".

## C. Árvores de talento (Puffish Skills 0.17.3 + SkillSlots 2.1.1)

Categorias em `kubejs/data/superior/puffish_skills/categories/` (não em `config/`):

| categoria | nós | definições | raízes | como paga | recompensas |
|---|---|---|---|---|---|
| `skill_tree` | **958** | 1.361 | **16** (`unlock_<classe>` ×15 + `base_parry1`) | pontos dados por script | `puffish_skills:command` ×1.355, `attribute` ×6 |
| `beastmaster_skills` | 273 | 1.229 | 1 | idem | `command` ×1.223, `attribute` ×6 |

Sem `experience.json`: o Puffish não dá XP — os pontos vêm do KubeJS (`leveling.js` converte
kills em XP da ordem; `total_levels`; nível do SkillSlots). Sem `spent_points_limit` nem
`exclusive_root`: a exclusividade de classe é feita pelo script, não pelo Puffish. Quase todo
nó é um **comando** que liga uma habilidade no sistema próprio (`startupSkillData.js` define
~60 habilidades com 3–5 níveis cada, com comentários de design por nível; `skill_data.js`
guarda estado em `persistentData`; "EZActions" para slots ativos). Habilidades passivas por
cooldown em `Mechanics/skill_cooldowns.js`. Fundo da árvore: `polished_blackstone_bricks`;
cores locked `#9e9e9e` / available `#42a5f5` / unlocked `#4caf50`.

**Integração com quests:** o script marca a quest de escolha como completa; o livro dá os
itens de classe; `Integrations/miapi/quests.js` liga equipamento modular a quests.

## D. Hub e spawn (o "equivalente de Vaaz")

**Não há hub.** O Superior começa no mundo comum e se apoia em:

- **FTB Essentials** (`defaultconfigs/ftbessentials.snbt`): `/spawn`, `/home`, `/warp`, `/tpa`,
  kits, admin (fly/god/heal/invsee/mute); `anvil`/`crafting` virtuais desligados.
- **Bonfires** (mod): fogueiras como pontos de viagem (capítulo "Fast Travel Basics"; o kit
  vem do primeiro boss). A pasta `bonfires/` da instância guarda as capturas de cada fogueira
  do jogador (nomes em PT: "alto do morro", "bunker", "mar do safado", "sapopemba").
- **Structure Compass** + capítulo tutorial mandam ao Evoker Fort — a "praça inicial" é uma
  estrutura de mod.
- `Misc/server_start.js`: no primeiro login fixa gamerules (`showDeathMessages false`,
  `disableRaids true`) e os slots de Curios (ring 1, bracelet 1, hands 1, belt 1, necklace 1,
  accessory 1; charm/talent/scroll 0).
- Datapack **Aurora Palace – Regeared** (Paxi, 896 KB): estrutura `gearsaw_palace` (pontes,
  torres, salas de boss) — um palácio de boss, não spawn.
- Traveler's Titles dá o título de lugar ao entrar em biomas/estruturas.

## E. Sistemas perseguidos

| sistema | mod/arquivo | calibração encontrada |
|---|---|---|
| **Prostrado / revive** | **Hardcore Revival 12.0.11** (`hardcorerevival-common.toml`) + `startup_scripts/revival.js` | `ticksUntilDeath 2400` (2 min sangrando), `rescueActionTicks 40` (2 s segurando), `rescueDistance 5`, `glowOnKnockout true`, `allowAcceptingFate true`, volta com 1 ♥ e 5 de fome + fome 30 s + fraqueza 60 s; lava mata na hora; sem arma corpo-a-corpo/arco/pistola enquanto caído. O script expõe `global.revivePlayer(player, skipEffects)` via `HardcoreRevival.getManager().wakeup` — itens como `effigy_of_the_undying` e `deathwarp_sigil` revivem por script |
| Túmulos | yigd 2.0.19 (`yigd.json`) **e** Gravestone (Blay) | gravestone: `spawn_ghost true`, `friendly_ghost true`, `only_owners_can_break false`, obituário desligado; dois mods de túmulo convivendo |
| Party | **SED Parties** (`partySize 5`, `friendlyFire false`, XP share off, vanilla teams) + FTB Teams + OPAC | |
| PvP | `Misc/duels.js` — duelos por convite (30 s), tag `in_duel` | PvP fora de duelo fica nas claims |
| Barra de vida | nenhum mod; `JSfunctions/barPainter.js` pinta barras via `player.paint` do KubeJS | |
| Claims | Open Parties and Claims 0.26.3 + `defaultconfigs/ftbchunks` | |
| **Dificuldade / mob scaling** | 5 camadas: (1) **Difficulty Enhancement** — 4 níveis `cozy/normal/extreme/torture`, HP e dano ×0.5/1/3/6, IA vingativa, sangramento, aleijamento; (2) **Dungeon Difficulty v2** — `perPlayerDifficulty` +20 % dano e HP por jogador, contando `EVERYWHERE`; (3) **KubeJS `power_level`** 1–10 do servidor → `ArmorPicker` veste monstros por tier (`Mechanics/powerlevel.js`, "modular monsters"); (4) **`gameplay_modifiers`** — 28 modificadores nomeados com multiplicador e sinergias (`beastriders` 1.15, `blood_moon`, `unending_horde`, `glass_bones`…) que alteram HP/dano/moedas globais; (5) **`damage_calc.js`** — média móvel do dano dos jogadores (janela 12.000 ticks, teto 400) vira "ameaça" que escala os mobs; **Nightmare mode** (maioria dos jogadores) dobra/triplica spawns. Apotheosis adventure: afixos 7,5 %, gemas 1 %, boss cooldown 3.600, sem auto-aggro | é o pack que mais escala por *estado do servidor*, não por nível do jogador |
| Stages | AStages instalado, `simple_restrictions.json = {}`; zero tarefas de stage | progressão só por dependência de quest e por moeda |
| Receitas | `Recipes/removed_recipes.js` (~30 ids: fichas do Rats, livros do Illusion Onslaught, `uncrafting_table`…), `material/misc/questline_recipes.js`; `startup/ore_removal.js` (minérios do Galosphere, SC Guns, Samurai Dynasty…), `removed_enchantments.js` (13 encantamentos), `Items/misc/item_bans.js` (Gorgon Head cancelado) | documentação = comentário no próprio script |
| Loot | `Misc/entity_drops.js` (drops unificados: `graveyard:corruption` de mobs do Born in Chaos e Mutant Monsters…), `Player/class_loottables.js` (bounties comum/incomum/raro, loot boxes de pet e de classe, `cave_dweller`), `night_loot_modifier.js`, LootJS | |

## F. UX e acabamento

- **FancyMenu 3.8.1**: `title_screen_layout.txt` (40 KB, fundo panorama "noon", 61 MB de
  panoramas próprios), **`hud.txt` (41 KB: o HUD inteiro é layout FancyMenu)**,
  `universal_layout.txt`; `fancymenu_data/` com panoramas e telas custom.
- **Loading:** Loading Backgrounds (5 s por imagem, packs medieval/oceans/structures),
  Seamless Loading Screen, Simple Custom Early Loading.
- **Default Options** (`config/defaultoptions/options.txt` + `keybindings.txt`): fov 0.6,
  render 14, guiScale 2, **música vanilla em 0.0** (a música vem dos mods), `tutorialStep none`,
  36 resourcepacks em ordem (Mandala's GUI dark, Frozy's Quest Book, Visual Titles, xali's
  books, loadingbackgrounds…). Controlling + KeybindsGalore Plus para o painel de teclas.
- **Som e música:** BattleMusic (mapa boss→faixa com 31 entradas: Lich→arena1, Ur-Ghast→ghast,
  Hydra→arena1…), BiomeMusic, ConstantMusic, MobBattleMusic, MusicManager, **Sounds**
  (`config/sounds/ui.json`: sons de hotbar/inventário; `dynamic_sounds` com 119 amostras),
  AmbientSounds, DragNSounds, ExtraSounds.
- **Tooltips:** Legendary Tooltips, Clean Tooltips, Great Scrollable Tooltips, Configurable
  Tooltips, Pin Tooltips. **Mapa:** Xaero minimap + worldmap + XaeroPlus, compass-to-map.
- `kubejs/assets/` tem **160 MB** de texturas e modelos próprios (`kubejs`, `minecraft`,
  `malfu_combat_animation`, `miapi`, geo do Iron's Spellbooks) — o pack redesenha assets.
