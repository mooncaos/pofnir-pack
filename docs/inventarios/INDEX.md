# Censo dos mods — sumário

Extração dos jars do manifesto (Ordem #003). Um arquivo por mod. **Isto é dado, não
proposta:** nada aqui é sugestão de design.

## Como os números foram obtidos

- **IDs e nomes**: chaves de `assets/<ns>/lang/en_us.json` com exatamente 3 segmentos
  (`item.<ns>.<path>`, `block.`, `entity.`, `fluid.`, `effect.`, `enchantment.`,
  `biome.`), mais `spell.<ns>.<x>.name` e `attribute.name.<ns>.<x>`. Chaves de tooltip,
  UI e advancement ficaram de fora e estão contabilizadas ao pé de cada arquivo.
- **Famílias colapsadas**: itens e blocos que só diferem por cor (≥6) ou que partilham
  sufixo (≥6) viram uma linha, sempre listando as variantes. A contagem no topo é
  sempre a real, não a das linhas.
- **Tipo de entidade**: `MobCategory` lido do bytecode de registro. Onde o mod não
  põe nome e categoria no mesmo método, cai para a **superclasse real** da classe da
  entidade (lida do campo `super_class`, não por grep). **boss** vem da tag `c:bosses`
  declarada pelo próprio mod.
- **Rituais, magias e receitas de sistema**: listagem de `data/<ns>/spells/`,
  `spell_assignments/`, `weapon_attributes/`, subpastas de `recipes/` e registros
  próprios do mod.

Âncoras usadas para traduzir nomes intermediary (todas verificadas por cruzamento):
`class_1588`=Monster (Cave Dweller estende direto, e é MONSTER por `MobCategory`),
`class_1429`=Animal (base dos passivos do Naturalist), `class_1480`=WaterAnimal
(os 12 peixes do Alex's Mobs), `class_1297`=Entity (projéteis e partes),
`class_1548`=Creeper, `class_3988`=Merchant, `class_1321`=domesticável.

## Bruxaria

| Mod | Itens | Blocos | Entid. | Destaques |
|---|---|---|---|---|
| [Bewitchment](bewitchment.md) | 102 | 336 | 23 | 4 bosses declarados (`baphomet`, `herne`, `leonard`, `lilith`); **25 rituais**, 13 maldições, 48 receitas de caldeirão, 7 incensos, 6 óleos; 27 efeitos |
| [Enchanted](enchanted-witchcraft.md) | 100 | 63 | 5 | registro próprio `data/enchanted/enchanted/`: **45 ritos de círculo mágico** + 3 formatos de círculo, 61 entradas de configuração de altar (blocos/tags/upgrades — não são receitas) |
| [Botania](botania.md) | 299 | 675 | 19 | maior acervo de blocos do pack; 62 tags de item e 48 de bloco próprias |
| [Eldritch End](eldritch-end.md) | 21 | 77 | 9 | 8 das 9 entidades hostis; 2 magias Spell Engine (`arcane_laser`, `arcane_missile`); 2 biomas; material próprio (Etyr) com minério, lingote e armadura |

## Combate mágico (série RPG / Spell Engine)

Os cinco mods de classe (`wizards`, `paladins`, `rogues`, `archers`, `invoke`) partilham
o namespace `rpg_series`, que expõe **tags de tier de 0 a 9** para arma e armadura
(`rpg_series:tier_<0-9>_weapons` / `_armors`).

| Mod | Itens | Magias | Destaques |
|---|---|---|---|
| [Spell Engine](spell-engine.md) | 0 | 2 | o motor: define o formato `data/<ns>/spells/`, `spell_pools/`, `spell_assignments/` |
| [Spell Power](spell-power.md) | 0 | 0 | **17 atributos de poder mágico** (arcane, fire, frost, holy, shadow, soul, unholy, blood, nature, lightning, air, earth, water, healing + crítico e haste) e 8 encantamentos |
| [Wizards](wizards.md) | 48 | 15 | 3 escolas (arcane/fire/frost), 3 pools, 17 varinhas e cajados com perfil de arma próprio |
| [Paladins & Priests](paladins-and-priests.md) | 62 | 9 | 28 perfis de arma e 28 vínculos magia↔item |
| [Invocations](invocations.md) | 6 | **60** | maior catálogo de magias do pack: 66 arquivos em `data/invoke/spells/`, 6 pools, 4 vínculos |
| [Archers](archers.md) | 34 | 4 | 15 perfis de arma, 5 magias em `data/archers/spells/` |
| [Rogues & Warriors](rogues-and-warriors.md) | 52 | 8 | 27 perfis de arma e 27 vínculos magia↔item |

## As três eras

| Mod | Itens | Blocos | Entid. | Destaques |
|---|---|---|---|---|
| [Create](create-fabric.md) | 99 | 643 | 9 | 4 fluidos; base das outras três |
| [Create: Steam 'n' Rails](create-steam-n-rails.md) | 472 | 1447 | 3 | maior contagem de blocos do pack (variantes de trilho e paleta) |
| [Create: Big Cannons](create-big-cannons.md) | 64 | 139 | 23 | 23 entidades (projéteis e peças de canhão); 4 fluidos |
| [Create Deco](create-deco.md) | 21 | 397 | 0 | puramente estético — 397 blocos, zero entidade |
| [Modern Industrialization](modern-industrialization.md) | 621 | 305 | 0 | **34 metais** com cadeia completa em tags `c:` — 111 famílias de pó, 34 de minério, 34 de lingote, 33 de placa, 35 de pepita, 17 de haste, 11 de engrenagem |
| [Tech Reborn](techreborn.md) | 383 | 330 | 0 | **22 metais** em tags `c:` (inclui ligas: advanced_alloy, iridium_alloy, tungstensteel, mixed_metal) |
| [Ad Astra](ad-astra.md) | 83 | 333 | 20 | 20 entidades (foguetes, rovers e mobs espaciais) |
| [Applied Energistics 2](ae2.md) | 262 | 103 | 1 | quase tudo é item (células, processadores); 1 entidade só |
| [TaCZ Refabricated](tacz-refabricated.md) | 1 | 3 | 1 | **não registra armas como itens** — 54 armas, 24 munições e 99 acessórios vivem no gun pack `tacz_default_gun`. O arquivo traz a estrutura completa de um pack |
| [Pomkot's Mechs](pomkots-mechs.md) | 202 | 15 | 28 | **6 mechs pilotáveis** (têm Core Stone) contra **22 inimigos**; nenhum declarado boss |

## Mundo vivo

| Mod | Itens | Blocos | Entid. | Destaques |
|---|---|---|---|---|
| [Alex's Mobs (Continued)](alexs-mobs-continued.md) | 257 | 37 | **117** | maior acervo de entidades do pack; 15 hostis, 40 passivas, 20 domesticáveis e 12 aquáticas identificadas; 30 sem tipo resolvido |
| [The Graveyard](the-graveyard-fabric.md) | 33 | 107 | 12 | 10 hostis, 1 comerciante (`nameless_hanged`), 1 não resolvido; 189 arquivos de estrutura |
| [Naturalist](naturalist.md) | 56 | 30 | 32 | 26 passivas, 3 de ambiente, 2 aquáticas, 1 sem tipo — **nenhuma hostil** |
| [Mine Cells](minecells.md) | 83 | 172 | 31 | declara `c:bosses`; 5 biomas próprios, 16 spawner runes, 133 arquivos de worldgen |
| [Marium's Soulslike Weaponry](mariums-soulslike-weaponry.md) | 145 | 26 | 64 | declara `c:bosses`; 26 efeitos, 12 encantamentos, 57 perfis de arma, 25 vínculos de magia |
| [Bosses of Mass Destruction](bosses-of-mass-destruction.md) | 9 | 12 | 9 | **4 bosses declarados** (`gauntlet`, `lich`, `obsidilith`, `void_blossom`) e 5 projéteis — mais nada |
| [Eldritch Mobs](eldritch-mobs.md) | 0 | 1 | 0 | não adiciona mob: promove os existentes a 3 patamares com **28 modificadores** e 5 tags de controle |

## Terror

Os três estão sob a Lei 3 do `CLAUDE.md` (spawn natural desligado). O estado atual das
configs está registrado em cada arquivo.

| Mod | Itens | Entid. | Destaques |
|---|---|---|---|
| [The Man From The Fog](the-man-from-the-fog-fabric.md) | 3 | 2 | duas formas (`man:manfromthefog` espreita, `man:managgresive` caça); config JSON de 16 chaves em `config/man/man.json` |
| [Cave Dweller](cave-dweller-fabric.md) | 1 | 1 | config owo de 23 chaves; `SPAWN_CHANCE_PER_TICK` é o único caminho de spawn natural |
| [From The Fog](from-the-fog.md) | 0 | 0 | **não registra nada**: 340 funções, 111 advancements, 39 estruturas, 26 skins, 35 opções de config em scoreboard. O Herobrine é armor stand com tag |

## O que ficou de fora

- **Receitas de crafting comuns** — só o agrupamento por subsistema entrou (rituais,
  altares, caldeirão etc.). Create sozinho tem 1926 receitas; listar seria ruído.
- **Advancements, loot tables e worldgen** — aparecem só como contagem.
- **Texturas, modelos, sons e animações** — fora do escopo.
- **Nomes em pt_br** — 9 jars trazem `lang/pt_br.json` (`ae2`, `alexsmobs`, `botania`,
  `create`, `minecells`, `modern_industrialization`, `naturalist`, `tacz`, `techreborn`).
  Os censos usam `en_us`, que é o que bate com wiki e receitas.
