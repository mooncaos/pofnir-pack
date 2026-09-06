# The Man From The Fog — censo

`the-man-from-the-fog-fabric` · jar `TheManFromTheFog-1.1.1+fabric.mc.1.20.1.jar` · namespace(s): `man`

| categoria | nº |
|---|---|
| Entidades | 2 |
| Itens | 3 |

## Entidades (2)

| ID | Nome | Tipo |
|---|---|---|
| `man:managgresive` | Man From The Fog | hostil |
| `man:manfromthefog` | Man From The Fog | hostil |

> Tipo: lido do `MobCategory` no bytecode de registro do mod. Onde o registro não
> pareia nome e categoria no mesmo método, cai para a **superclasse real** da classe
> da entidade (marcado `(superclasse)`): `class_1588`=Monster, `class_1429`=Animal,
> `class_1321`=domesticável, `class_1480`=aquático, `class_3988`=comerciante.
> **boss** vem da tag `c:bosses` declarada pelo próprio mod. `—` = não determinado.

## Itens (3)

| ID | Nome |
|---|---|
| `man:managgresive_spawn_egg` | Man From The Fog Spawn Egg |
| `man:manfromthefog_spawn_egg` | Man From The Fog Spawn Egg |
| `man:tearoftheman` | Tear Of The Man |

## Chaves de lang fora do censo

Prefixos ignorados (texto de UI, tooltips, patchouli, advancements):

`subtitles` (18), `config` (1)


## As duas entidades

`man:manfromthefog` é a forma que espreita; `man:managgresive` é a forma que caça.
As duas usam o mesmo nome legível ("Man From The Fog") e têm spawn egg própria.
A conversão de uma na outra acontece em `ManfromthefogOnEntityTickUpdateProcedure`.

## Config — `config/man/man.json` (+ `config/man/mod_version.json`)

Gerado em runtime por `CreateconfigProcedure` (Gson, pretty-print). O arquivo
`mod_version.json` guarda `{"mod_version": "1.1.0"}` e serve de sentinela: se a versão
divergir, o mod regenera `man.json` com os defaults. Chaves, unidades e defaults lidos
do bytecode (`CreateconfigProcedure` e `ConfighelpcallProcedure`).

| Chave | Tipo | Default | Descrição (texto do `/confighelp` do mod) |
|---|---|---|---|
| `min_spawn_rate` | int (ticks) | `1000` | duração mínima até o spawn |
| `max_spawn_rate` | int (ticks) | `10000` | duração máxima até o spawn |
| `jumpscare` | bool | `true` | mostra a imagem de jumpscare ao matar |
| `min_chase_duration` | int (ticks) | `400` | duração mínima da perseguição |
| `max_chase_duration` | int (ticks) | `1000` | duração máxima da perseguição |
| `climbing` | bool | `true` | escala blocos na vertical |
| `vanish_distance` | int (blocos) | `30` | raio mínimo antes de sumir |
| `spawn_at_day` | bool | `false` | pode nascer de dia |
| `darkness_effect` | bool | `true` | aplica Darkness ao iniciar a perseguição |
| `darkness_effect_duration` | int (ticks) | `150` | duração do Darkness |
| `all_dimensions` | bool | `false` | pode nascer em todas as dimensões |
| `break_blocks` | bool | `true` | quebra portas e vidro ao perseguir |
| `litghtnings` | bool | `true` | invoca raios ao surgir/sumir (typo é do mod) |
| `spawn_sounds` | bool | `true` | toca um dos cinco sons de aproximação |
| `stage1_spawn_rate` | int (ticks) | `600` | tempo até se aproximar quando não observado |
| `stage2_spawn_rate` | int (ticks) | `900` | tempo até começar a perseguir |

O único caminho de spawn natural é o timer global (`TimerglobalProcedure`), que sorteia
entre `min_spawn_rate` e `max_spawn_rate`. **No pack esses valores estão em 1e9 e 2e9
ticks** (Lei 3, Ordem #002) — `summon` continua funcionando normalmente.

## Estruturas

`data/man/structures/s1.nbt` — uma única estrutura.
