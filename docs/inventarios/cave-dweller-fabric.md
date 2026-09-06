# Cave Dweller — censo

`cave-dweller-fabric` · jar `cavedweller-1.3.0.jar` · namespace(s): `cave_dweller`

| categoria | nº |
|---|---|
| Entidades | 1 |
| Itens | 1 |

## Entidades (1)

| ID | Nome | Tipo |
|---|---|---|
| `cave_dweller:cave_dweller` | Cave Dweller | hostil |

> Tipo: lido do `MobCategory` no bytecode de registro do mod. Onde o registro não
> pareia nome e categoria no mesmo método, cai para a **superclasse real** da classe
> da entidade (marcado `(superclasse)`): `class_1588`=Monster, `class_1429`=Animal,
> `class_1321`=domesticável, `class_1480`=aquático, `class_3988`=comerciante.
> **boss** vem da tag `c:bosses` declarada pelo próprio mod. `—` = não determinado.

## Itens (1)

| ID | Nome |
|---|---|
| `cave_dweller:cave_dweller_spawn_egg` | Cave Dweller Spawn Egg |

## Chaves de lang fora do censo

Prefixos ignorados (texto de UI, tooltips, patchouli, advancements):

`text` (23), `itemGroup` (1)


## Config — `config/cave-dweller-config.json5`

owo-lib (Jankson/JSON5). Nome do arquivo vem de `@Config(name = "cave-dweller-config")`
em `ModConfigModel`. Chaves e defaults lidos do bytecode do construtor.

| Chave | Tipo | Default | Descrição (lang do mod) |
|---|---|---|---|
| `GIVE_DARKNESS` | bool | `true` | aplica Darkness durante a perseguição |
| `DISAPPEAR` | bool | `true` | some depois de matar o alvo |
| `SPAWN_CHANCE_PER_TICK` | double | `0.005` | chance de spawn por tick |
| `RESET_CALM_MIN` | int | `300` | tempo mín. para respawn (s) |
| `RESET_CALM_MAX` | int | `600` | tempo máx. para respawn (s) |
| `RESET_CALM_COOLDOWN` | int | `1200` | cooldown da tentativa de respawn (s) |
| `RESET_CALM_COOLDOWN_CHANCE` | double | `0.4` | chance de reduzir o tempo de respawn |
| `RESET_NOISE_MIN` | int | `240` | tempo mín. para reset do som de caverna (s) |
| `RESET_NOISE_MAX` | int | `360` | tempo máx. para reset do som de caverna (s) |
| `SPAWN_HEIGHT` | int | `40` | altura de spawn (range −64..256) |
| `ALLOW_SURFACE_SPAWN` | bool | `false` | permite spawn na superfície |
| `SKY_LIGHT_LEVEL` | int | `8` | luz do céu máxima |
| `BLOCK_LIGHT_LEVEL` | int | `15` | luz de bloco máxima |
| `SPOTTING_RANGE` | int | `60` | alcance de avistamento (exige restart) |
| `TIME_UNTIL_LEAVE` | int | `300` | tempo até ir embora (s) |
| `TIME_UNTIL_LEAVE_CHASE` | int | `30` | tempo até desistir da perseguição (s) |
| `CAN_CLIMB` | bool | `true` | escala paredes |
| `ALLOW_RIDING` | bool | `false` | pode ser montado |
| `TARGET_INVISIBLE` | bool | `true` | mira jogadores invisíveis |
| `MAX_HEALTH` | double | `60.0` | vida (exige restart) |
| `ATTACK_DAMAGE` | double | `6.0` | dano (exige restart) |
| `ATTACK_SPEED` | double | `0.35` | velocidade de ataque (exige restart) |
| `MOVEMENT_SPEED` | double | `0.5` | velocidade (exige restart) |

`SPAWN_CHANCE_PER_TICK` é lida por uma única classe (`MixingServerWorld`) — é o único
caminho de spawn natural do mod. **No pack ela está em `0.0`** (Lei 3, Ordem #002).
