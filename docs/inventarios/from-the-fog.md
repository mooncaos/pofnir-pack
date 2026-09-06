# From The Fog — censo

`from-the-fog` · jar `From-The-Fog-1.20-v1.9.2-Forge-Fabric.jar` · namespace(s): `watching`, `fromthefog`

> **Este mod não registra nada.** Zero itens, zero blocos, zero entidades. É um datapack
> com uma casca Java de uma classe só (`studio.lunareclipse.watching.Init`). Todo o
> conteúdo é `.mcfunction`, advancement, predicate e estrutura. O Herobrine é uma
> montagem de `minecraft:armor_stand` com tags — não existe entity ID para ele.

| categoria | nº |
|---|---|
| Itens / Blocos / Entidades registrados | 0 |
| Funções (`watching:` + `fromthefog:`) | 340 |
| Advancements (motor de eventos) | 111 |
| Predicados (chances e checagens) | 27 |
| Estruturas (`.nbt`) | 39 |
| Skins de Herobrine | 26 |
| Opções de config | 35 |

## Como o Herobrine é montado

`data/watching/functions/events/sightings/stalking.mcfunction` invoca:

```
summon armor_stand ~ 0 ~ {Tags:["spread","model","stalking","herobrine",
  "smithed.entity","smithed.strict","herobrineEntity"], Marker:0b, Invisible:1b, ...}
```

Seletores úteis: `@e[type=armor_stand,tag=herobrine]`, `@e[tag=herobrineEntity]`,
`@e[type=marker,tag=herobrineEntity]`.

Invocação manual por função (não por `summon`):

| Função | Tipo de aparição |
|---|---|
| `fromthefog:admin/sightings/stalking` | observa de longe |
| `fromthefog:admin/sightings/creeping` | fica atrás do jogador |
| `fromthefog:admin/sightings/lurking` | espreita |
| `fromthefog:admin/sightings/nightmare` | pesadelo |
| `fromthefog:admin/fake_herobrine/create` | boneco estático controlável |
| `fromthefog:admin/fake_herobrine/remove` | remove o boneco |
| `fromthefog:admin/cleanup` | limpa entidades do mod |
| `fromthefog:admin/debug_mode` | liga o modo debug |

## Config — scoreboard, não arquivo

Não existe arquivo de config. Tudo vive no objetivo `ftf.configOptions`, editado
in-game por menu clicável (`/function fromthefog:admin/config`, 6 páginas).
Cada opção é aplicada rodando `function watching:config/<opção>/<valor>`.

**Chances de aparição** (`sightingChanceConfig` em `ftf.configOptions`) — valores lidos
dos predicados em `data/watching/predicates/chances/sighting_chances/`:

| valor | função | chance/dia | chance/noite |
|---|---|---|---|
| 1 | `watching:config/sighting_chance/1_common` | 0.01 | 0.045 |
| 2 (padrão) | `watching:config/sighting_chance/2_uncommon` | 0.008 | 0.01 |
| 3 | `watching:config/sighting_chance/3_rare` | 0.0008 | 0.001 |

Demais opções (uma pasta por opção em `data/watching/functions/config/`):

`advancements`, `burning_base`, `chilled_candles`, `crash`, `creeping`,
`creeping_vanishing_delay`, `crimson_curse`, `disappearing_torches`,
`dreadful_donation`, `fearful_footsteps`, `ghost_door`, `ghost_mine`, `glowing_eyes`,
`griddy`, `herobrine_skin`, `jumpscare`, `lurking`, `lurking_language`, `nametag`,
`nightmare`, `no_sleep`, `og_shrine`, `randomize_custom_skins`, `randomize_skins`,
`rekindling_shrine`, `shrine_suprise`, `sighting_chance`, `sighting_sense`,
`sinister_signs`, `spot_noise`, `stalking`, `stalking_vanishing_delay`, `start_delay`,
`window_watcher`

## Eventos (`data/watching/functions/events/`)

`angry_wolf`, `block_detection`, `burning_base`, `chilled_candles`, `crimson_curse`,
`door_open`, `dreadful_donation`, `ghost_miner`, `relighting_shrine`, `scheduled`,
`sightings`, `sounds`, `special`, `torch_break`

## Estruturas geradas no mundo

| Estrutura | Variantes |
|---|---|
| `leafless_grove` | oak_birch |
| `logless_tree` | acacia, birch, oak, spruce |
| `mossy_pyramid` | — |
| `redstone_torch_trail` | — |
| `sand_pyramid` | — |
| `torch_tunnel` | — |

## Skins de Herobrine (26)

`alex`, `apparition`, `black_eyed`, `classic`, `custom` (1–5), `default`, `distorted`,
`entity_303`, `faceless`, `fallen_kingdom`, `farlander`, `glitch`, `grimreaper`, `lick`,
`lumbering_jack`, `netherbrine`, `null`, `nullified`, `sculk_infested`, `smile`,
`template`, `the_headless`, `webster`, `white_eyes_classic`, `white_pumpkin`, `zombie`

Trocadas por `watching:config/herobrine_skin/<n>_<nome>`.
