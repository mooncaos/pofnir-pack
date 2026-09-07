# Prominence II: Hasturian Era — anatomia (Ordem #017)

**Pack:** "Prominence™ II: Hasturian Era" v4.0.3, de ElocinDev · **Loader:** Fabric 0.19.3 ·
**1.20.1** · **445 mods** · instância CurseForge `Prominence_ II Hasturian Era` ·
**licença: All Rights Reserved** — o próprio `boss_level_definitions.json5` avisa que
reupload é violação. Este arquivo é anatomia derivada; os arquivos copiados para estudo vivem
em `docs/referencias/escolas/_local/prominence/` (fora do git).

**Tese em uma linha:** o Prominence é um RPG *escrito em Java* — o mod próprio **Prominent**
(`Prominent-GLOBAL-MC1.20.1-4.0.2.jar`, 68 MB) carrega a cidade-hub, os NPCs, os diálogos,
as lojas, os eventos e os artefatos; classes e talentos são dados (Puffish Skills + Simply
Skills) e o balanceamento é config declarativa (CEA, DAS, níveis de boss).

---

## A. Quests (`config/ftbquests/`)

| medida | valor |
|---|---|
| Capítulos | **31** em **7 grupos**: Tutorials, Campaign, Exploration, Combat & Gear, Magic, Tech, Quest To Eternal Knowledge |
| Quests | **1.754** (1.720 com dependência, 47 opcionais) |
| Maiores | `einformation_7new_mechanics` (559 ids — o manual do pack), `applied_energistics_2` 494, `tech_reborn` 435, `collectibles_2` 397, `create` 375, `botania` 373, `powah` 343, `modern_industrialization` 302, `simply_swords` 299, `to_the_end` 273 |
| Ocultação | `hide_until_deps_complete` **133**, `invisible` 25, `hide_dependency_lines` 30, `min_required_dependencies` 21, `dependency_requirement one_completed` 47 / `all_started` 5 / `one_started` 4; nenhum gamestage |
| `data.snbt` | autoclaim desligado, `detection_delay 20`, ícone `prominent:item/skellak_spawn_egg` |
| Tabelas | 13 (`runes`/`runes_more`/`runes_most`, `spell_enchants(_best)`, `tier4rings`, `wands`, `transmogallskins`, `xmogpool_void_touched`, `eyes`, `gettingstarted`…) |

**Tipos de tarefa:** `item` ×2.532, **`xp` ×875 e `xp_levels` ×188** (XP como *custo*),
`checkmark` ×134, `kill` ×76, `structure` ×60, `biome` ×24, `dimension` ×19,
`advancement` ×18, `custom` ×17, `stat` ×14. **Recompensas:** `item` ×2.007,
**`xp` ×1.080, `xp_levels` ×293**, `custom` ×54, `choice` ×5.

**Ritmo de recompensa.** XP é a moeda das quests (entra e sai), com itens em cima; XP alimenta
o nível do jogador, que alimenta o talento (1 ponto a cada 2 níveis). O livro é também o
**manual**: um capítulo inteiro de "new mechanics" e capítulos por mod (AE2, Create, Botania,
TR, MI, Powah…) com o texto do próprio autor. O mod Prominent traz UI própria de quest
(`elocindev/prominent/questing/ui`) e fundos por capítulo (`ftbquests_compat.json5`).

**Três quests exemplares (`getting_started`):**

1. **"How To: Questing!"** — tarefa `item` com filtro de tag `c:crops` ("Find a fruit or
   vegetable!"), recompensa 2 XP; a descrição ensina o livro em três frases.
2. **"How To: Chapters"** — tarefa `checkmark` ("Click here!"), 2 níveis; ensina a barra de
   capítulos. O jogador ganha nível por *ler*.
3. **"Upgrading: Chests"** (forma `rsquare`) — `ironchests:copper_chest_upgrade`, 3 níveis;
   quest de conforto com nome padronizado ("Upgrading:") e subtítulo com a receita.
Além delas, `elhasturian_era` abre com **"Unlock 51-65 Leveling"**: a faixa de nível é
recompensa de quest (via advancement `prominent:level_50`).

## B. Classes e sistema de escolha (o "Voto da Classe")

**Não existe item de classe.** A classe é a **raiz escolhida na Árvore de Talento**
(`config/puffish_skills/categories/prom`), com `exclusive_root: true`:

| raiz (definição) | título | recompensa da raiz |
|---|---|---|
| `path_rogue` | Rogue's Path | +1 dano físico, +5 % haste |
| `path_archer` | Ranger's Path | +1 dano à distância |
| `path_protector` | Protector's Path | tanque |
| `path_arcane` | Enigmatic Knowledge | poder arcano |
| `path_fire` | Pyrotechnic Knowledge | poder de fogo |
| `path_frost` | Frozen Knowledge | poder de gelo |

Escolher uma raiz **exclui** as outras cinco (Puffish faz isso sozinho). Dentro do caminho, os
nós são atributos (`health+2.5%` ×17, `attack_speed+2%` ×13, `arcane_power+3%_critical_damage+1%`
×13, `fire_power+3%_critical_chance+1%` ×13, `frost_power+3%_spell_haste+1%` ×13,
`ranged_damage+3%` ×13, `melee_damage+3.5%` ×11, `holy_power+3%_self_healing+3%` ×10,
`roll_distance/cooldown` ×7, `stamina+10%` ×7…) e **14 nós de habilidade passiva do Simply
Skills**: as *ascendências* (`ascendancyCyclonicCleave`, `Cataclysm`, `Rapidfire`,
`SkywardSunder`, `RighteousHammers/Shield`, `BoneArmor`, `Dissonance` = bardo), mais
`warriorSwordfall` ("Skellak's Call"), `wayfarerQuickfire`, `initiateEmpower`,
`warriorTwinstrike` e o par `combatLeap`/`noCombatLeap`.

**Custos e troca.** 176 nós, 49 definições, `spent_points_limit 32`, nível máximo 32;
**1 ponto a cada 2 níveis**; XP por nível `220 × 1.125^nível`; XP só de abates
(`shared_kill_entity`: `xp_dropado/9 + vida_máxima/3`, armor stand vale 0, anti-farm 25 por
chunk a cada 12 h). **Trocar de classe = usar um `prominent:knowledge_scroll`**: o item é
consumido e os pontos voltam (texto do capítulo de mecânicas). Não há custo em moeda; o custo
é o pergaminho. `treeResetOnDeath false`, `treeExpLossOnDeath 0`.

**Camadas ao redor:** Simply Skills 1.7.2 (`general.json5`: `enableAscendancy true`,
`disableDefaultPuffishTrees true` — as árvores nativas do Simply Skills são substituídas
pela `prom`; 10 especializações configuradas em `simplyskills/*.json5`: berserker, cleric,
crusader, necromancer, ranger, rogue, spellblade, warrior, wayfarer + initiate; `Skill
Chronicle` com cooldown 12.000 ticks); More RPG Classes, Forcemaster, Bards, Death Knights,
Archers/Paladins/Rogues/Wizards (um livro de magia por classe, ícone de nametag por livro em
`nametag_spellbook_icons.json`). **Teto de nível por advancement**
(`prominent_talents.json5`: nível 10 → `prominent:level_10`, nível 50 → `prominent:level_50`).
A tela inicial de escolha de arma é um layout FancyMenu (`tutorial_weapon_selection_layout.txt`).

## C. Árvores de talento (Puffish Skills 0.17.3)

| categoria | título | nós | defs | raízes | limite | padrão | XP |
|---|---|---|---|---|---|---|---|
| `prom` | Talent Tree | **176** | 49 | 6 (exclusivas) | 32 | aberta | `220·1.125^n`, cap 32 |
| `fyralath` | Fyr'alath, The Scorched Agony | 12 | 4 | 1 | 7 | fechada | `100·n` |
| `frostmourne` | Frostmourne, Blade of the Fallen King | 12 | 9 | 1 | 7 | fechada | `100·n` |
| `thunderwrath` | Thunderwrath, The Lava Storm | 12 | 4 | 1 | 7 | fechada | `100·n` |
| `apophis` | Apophis, The Divine Hand | 12 | 4 | 1 | 7 | fechada | `100·n` |
| `vaazkar` | Vaazkar, Protector of the Molten City | 13 | 5 | 1 | 7 | fechada | `100·n` |
| `ekavar_staff` | Ekavar, The Great Cinderstone Staff | 19 | 8 | 1 | 7 | fechada | `100·n` |
| `orion` | Orion, Hunter of the Stars | 19 | 9 | 19 (não exclusivas) | 7 | fechada | `100·n` |
| `azhar`, `ghaj`, `fury_of_a_thousand_fists` | armas | 11 | 3 | 1 | 7 | fechada | `100·n` |
| `ashedar_essence`, `supernova` | armas | 9 | 4 | 1 | 7 | fechada | `100·n` |
| `skillet` | Granny's Pan (piada) | 0 | 0 | 0 | 7 | fechada | desligado |

**Formato:** cada categoria = `category.json` (título, ícone, fundo 5120×1440 `fill_height`,
cores de conexão locked `#23211d`, available `#595856`, unlocked `#b37d12` dourado, excluded
`#b31212`), `definitions.json` (título com glifo de fonte custom, descrição, `size 1.3` nas
raízes, `frame` com textura selected/unlocked, `icon`, `rewards`), `skills.json` (nó → definição,
x/y, `root`), `connections.json` (`normal.bidirectional` pares; a exclusividade é só das raízes),
`experience.json`. **Árvores de arma:** uma por artefato lendário, 7 pontos, própria XP
`100·nível`, desbloqueada quando o artefato entra (advancements `fyralath`, `frostmourne`,
`azhar`… no jar; `ArtifactAPI`/`Orion` citam o Puffish). É o molde direto de "uma árvore por
coisa": 13 árvores pequenas + 1 grande.

## D. Vaaz — anatomia completa do hub

O hub do Prominence **se chama Vaaz** ("Kingdom of Vaaz", bioma `city_of_vaaz`,
"Vaazkar, Protector of the Molten City"). Como se monta:

**1. Dimensão própria, pré-construída.** `data/prominent/dimension/vaaz_present.json`: tipo
`prominent:cinderstone_depths` (**sem céu**, `fixed_time 18000`, efeitos do Nether,
`piglin_safe`, `bed_works false`, `has_raids false`, altura 256, `min_y −64`, luz de spawn 15),
gerador **flat: 1 bedrock + 100 de lava**, bioma `city_of_vaaz` com **`spawners: {}`**. A
cidade não é gerada: os **region files vêm no pack** (`config/prominent/dimensions/vaaz_present/
region|entities|poi|data`, 138 MB; 240 `.mca` nas três eras) e o mod os copia para o mundo.
Há versões `_build` de cada dimensão (cópias de construção) e `challenge_arena` (652 KB).

**2. Três eras da mesma cidade.** `vaaz_past` (tutorial: o rei S'kellak manda, Radin treina,
`welcome_to_vaaz` → `reaching_overworld`), `vaaz_assault` (evento instanciado: classes
`VaazAssaultInstances/State/Quest`, "This battle is not yours to fight" para intrusos; Hastur
ataca, Ama'gul destrói a Forja Primordial) e `vaaz_present` (cutscene "1071 years later —
Kingdom of Vaaz", "You must abandon the Overworld… come to Vaaz and help us rebuild").
Mensagens de tranca: `era_locked` ("casts you out of this era"), `era_passed`.

**3. NPCs do próprio mod** (`entity.prominent.*`): Dwarf e Serkonid (povo), **Radin of the
Side Rail** (guia do tutorial), Mirgaff the Great, Ama'gul (vilão), **S'kellak, Creator of All
Things** (rei), `?????` (Unspeakable), Blood Clot. Diálogo é sistema Java (`DialogueManager`,
falas temporizadas, tipos `(Telepathically)`/`(Whispering)`, tela própria via FancyMenu
`dialoguescreen_layout.txt`) alimentado por lang (`dialogue.radin.tutorial.1…8`,
`dialogue.skellak.assault.*`) e JSON (`data/prominent/prominent/dialogue/guard.json`: o guarda
dá direções para **20+ lugares** — armorer, armory, barracks, blacksmith, brewery, community
campfire, dark arts vendor, engineering lounge, great kitchen, guild hall, historian, jeweler,
potion shop, property manager, runemaster shop, tavern, throne room, training zone,
transmogrifier… com marcador de rota `GuardDirections`).

**4. Lojas por dado.** `trade_data_list/` com **39 tabelas** em `past/` e `present/`:
armorer(-low/-high), blacksmith(-low/-high), brewery, chef, dark_arts_vendor(-low/-high/-both),
herbalist(-low/-med/-high), jeweler, librarian, runemaster, tavern_keeper, template_vendor,
transmogging_vendor, treasurer, artifact_vendor, skellak. Formato: `{"type":"prominent:single",
"trade":{"price_cinders":0,"price_items":[…],"reward_cinders":0,"reward_items":[…]}}` — moeda
**cinders** + itens. 13 tabelas de loteria (`lottery_data`: entradas com `weight` e `rarity`).

**5. Proteção e regras.** `prominent.json5`: **voo criativo desligado** e **velocidade máxima
1.5** nas três dimensões de Vaaz; bioma sem spawns; sem céu (nada de fantasma). Não localizei
no bytecode string de modo aventura ou cancelamento de quebra — a proteção de blocos, se
existe, vem de claim de servidor (OPAC `serverClaimPermission`) ou de mixin sem string
literal; fica como hipótese.

**6. Spawn e entrada.** `entering_animation.json`: câmera em (362.5, 40, 1093.5), 40 ticks,
fade 30/20/15/15, anda 5 blocos — a chegada é uma cena. Advancements ocultos marcam o arco
(`welcome_to_vaaz` "A Quest from S'kellak", `reaching_overworld` "First Steps",
`1000_years_later`). Títulos de lugar do próprio mod: "Kingdom of Vaaz", "The Overworld —
Era of Tranquility / Hasturian Era".

**7. Música e ambiência.** Mod separado **Prominent OST** (8 faixas: `void_core`, `time_flows`,
`promordial`, `iv`, `festivities`, `convergence`, `a_dance_of_the_blades` 1–2) + ReactiveMusic
(songpack, posição de "casa" salva) + AmbientSounds; fundo do menu = `vaaz_backgrounds/
talent_tree.png`; `prominent_resources/old-main-menu.ogg`.

**Mapa mental "como se monta um Vaaz":** dimensão flat + bioma vazio + região pré-construída
copiada pelo mod → NPCs do mod com diálogo em lang e lojas em JSON → regras de dimensão
(sem voo, sem spawn, sem cama) → cena de entrada + advancements como marcos → variantes da
mesma cidade para contar o tempo → trilha própria.

## E. Sistemas perseguidos

| sistema | mod/arquivo | calibração encontrada |
|---|---|---|
| Prostrado / revive | **nenhum** (sem mod de estado caído) | |
| Túmulos | yigd 2.0.16 (`yigd.json`) | `graveRobbing.enabled true` após **1 h**, `generateGraveInVoid true`, `dropPlayerHead false`, Trinkets `PUT_IN_GRAVE`, `claimPriority GRAVE`, sem timeout |
| Party | OPAC parties (`primaryPartySystem = argonauts_guilds`, permissões `prometheus`, 64 membros/aliados, expiração 720 h) + FTB Teams | |
| PvP | `opacpvp.json5`: comando `/opacpvp` pessoal, **padrão desligado** | |
| Barra de vida | **Mob Health Bar 2.3.0** (`mobhealthbarconfig.properties`): escala 0.75, `show_on_aggro`, `hovered`, blacklist `ender_dragon` | |
| Claims | OPAC 0.25.10: `maxPlayerClaims 500`, forceloads 10, expiração 8.760 h, `maxClaimDistance 5`, mensagens de boas-vindas | |
| **Mob scaling** | 5 camadas declarativas: (1) **Simply Skills DAS** (`general.json5`: raio 64, peso por jogador 10, HP base 1.6 ×1.085/nível, ataque 0.15 ×1.02, armadura 0.05, passivos ×0.15 — escala pelo **nível dos jogadores próximos**); (2) **Custom Entity Attributes** (`custom_entity_attributes/basic.json5`: por regex de entidade — Conjunctivius +15 dano e HP ×6, Blackstone Golem +4 / ×3…); (3) **`boss_level_definitions.json5`** (boss → nível exigido, `hard_requirement`); (4) `rpg-minibosses` (Templar 436 HP, armadura 16…), `gun-scaling` (fórmula com `power_lvl`); (5) **Zenith** com módulo *adventure desligado* (só encantamento, poção, jardim) + `attributefix` + `tierify` (qualidades Common→Mythic, reforja 0.9) | escala por **nível do jogador**, não por estado do servidor |
| Stages | advancements como portões (`level_10`, `level_50`, trancas de era) + 133 quests escondidas até dependência | sem mod de gamestage |
| Receitas | 26 datapacks em `datapacks/` (`alms_recipe_additions`, `*_spell_tweaks`, `*_all_the_smites`, `spell_enchants_for_all`, `tierify-prominence-tweaks`, `onlyExcavators-balancing`, `crossbows_reloaded`…) + 19 em `config/paxi/datapacks` (fixes, `TierAdjustments`, `TrophyAdjustments`, `LessStructures`) | cada remoção/ajuste é um datapack nomeado — documentação pelo nome |
| Loot | `rpg_series/loot_v2.json` (injetores por baú: `ruined_portal` 2 rolls de `#rpg_series:golden_weapons` com encanto 1–30…), `Prominence-Custom-Lootr` (resourcepack), `artifacts_loot_table_tweaks`, `rpg_series_loot_table_tweaks` | |

## F. UX e acabamento

- **FancyMenu 3.7.0 com 26 layouts** (`config/fancymenu/customization/`): `Prominence.txt`
  (95 KB, tela-título, escala 3, fundo `vaaz_backgrounds/talent_tree.png`, requisito
  "ftbquests carregado"), `noftbquests.txt` (87 KB, alternativa), `Esc Menu` (62 KB),
  `inventory.txt` (34 KB), **`tutorial_weapon_selection_layout.txt`** (28 KB), `welcomescreen_*`,
  `dialoguescreen_layout`, `accessoriesscreen_layout`, `classicoptionsscreen_layout`,
  `test_character_customization_layout`, `LoadingScreen`, `SavingWorld`, `World Creation`,
  `Updater`, `mpmenu`/`spmenu`, `luna_screen`, `vr_warning`; 25 MB de assets; `locals/`.
- **Drippy Loading Screen** (fade out, espera texturas) + **WelcomeScreen** (mod, `welcomescreen.json5`).
- **YOSBR** (Your Options Shall Be Respected): `config/yosbr/options.txt` é o `options.txt`
  padrão — fov 0.25, render 8, guiScale 3, `tutorialStep none`, `hideMatchedNames`, e a
  **ordem de ~150 resourcepacks** (Ashen 16x + suportes, Mandala × Prominent UI, Fresh
  Animations, Prominence Custom Lootr, Fancy Server Listing, Enhanced Boss Bars e dezenas de
  packs de tradução PT-BR/ES). Também guarda `essential/` e texturas do FancyMenu.
- **Essential** (cosméticos/amigos), Crash Assistant, Legendary Tooltips, cursor custom
  (`prominent/client/cursor.json5`), ordem de atributos no tooltip, Xaero minimap/worldmap.
- **Trilha:** Prominent OST + ReactiveMusic + AmbientSounds; Mine Cells 3D Weapons, Simply
  Swords Reforged (packs visuais de arma).
