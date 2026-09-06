# Magias — Spell Engine

Radiografia da Ordem #005. Dado extraído de `data/<ns>/spells/*.json` nos jars.

## Como ler

O Spell Engine **não guarda dano absoluto na magia**. Guarda um
`spell_power_coefficient`: o dano (ou cura) final é esse coeficiente multiplicado pelo
Spell Power da escola correspondente, que vem do equipamento do jogador. Ou seja, a
coluna **Coef.** é o multiplicador de escala, não dano.

- **Escola** casa com o atributo `spell_power:<escola>` do jogador.
- **Tier** é o `learn.tier` da própria magia (escada interna do mod, não a Curva Mestra).
- **Conj.** = tempo de conjuração em segundos (`cast.duration`).
- **CD** = `cost.cooldown_duration` em segundos; `-` = sem cooldown declarado.
- **Efeito** = tipos de ação no impacto. Quando há mais de um coeficiente, aparecem
  separados por `/` na ordem em que estão no arquivo.

**105 magias** extraídas de 7 namespaces.

## Invocations — `invoke` (65)

| Magia | Escola | Tier | Conj. (s) | CD (s) | Efeito | Coef. |
|---|---|---|---|---|---|---|
| `invoke:agonizingblast` | ARCANE | 0 | 1 | 1 | DAMAGE | 1.2 |
| `invoke:amethystburst` | ARCANE | 0 | 1 | 1 | DAMAGE+STATUS_EFFECT | 0.3 |
| `invoke:arcane_launch` | ARCANE | 1 | 1 | 2 | DAMAGE+STATUS_EFFECT | 0.5 |
| `invoke:arcane_nova` | ARCANE | 0 | 1 | 1 | DAMAGE | 1 |
| `invoke:arcaneoverdrive` | ARCANE | 1 | 1 | 6 | DAMAGE+STATUS_EFFECT | 0.8 |
| `invoke:armageddon` | FIRE | 0 | 1 | 1 | DAMAGE | 1.2 |
| `invoke:blink` | ARCANE | 0 | 1 | 1 | DAMAGE | 2 |
| `invoke:buckshot` | FIRE | 1 | 1 | 1 | DAMAGE | 0.2 |
| `invoke:chill` | FROST | 0 | 1 | 1 | DAMAGE+STATUS_EFFECT | 0.6 |
| `invoke:combust` | FIRE | 1 | 1 | 2 | DAMAGE | 1.5 |
| `invoke:combustion` | FIRE | 1 | 1 | 1 | DAMAGE | 2.0 |
| `invoke:deathchill` | FROST | 0 | 30 | 6 | DAMAGE | 1 |
| `invoke:deep_chill` | FROST | 0 | 1 | 1 | DAMAGE+STATUS_EFFECT | 0.6 |
| `invoke:eldritch_blast` | ARCANE | 0 | 1 | 1 | DAMAGE | 2.0 |
| `invoke:eldritch_blasts` | ARCANE | 0 | 1 | 0 | DAMAGE | 2.0 |
| `invoke:enders_gaze` | ARCANE | 0 | 1 | 1 | DAMAGE | 0.1 |
| `invoke:essence_drain` | FROST | 0 | 1 | 1 | DAMAGE | 1.2 |
| `invoke:flame_geyser` | FIRE | 1 | 1 | 2 | DAMAGE+STATUS_EFFECT | 1.5 |
| `invoke:flameray` | FIRE | 0 | 0.5 | 1 | DAMAGE | 4 |
| `invoke:freezeaura` | FROST | 0 | 1 | - | DAMAGE | 1 |
| `invoke:frozen_resonance` | FROST | 0 | 3 | 1 | DAMAGE | 0.4 |
| `invoke:frozenmiasma` | FROST | 2 | 1 | 6 | DAMAGE+STATUS_EFFECT | 0.5 |
| `invoke:glacialhammer` | FROST | 2 | 0 | 6 | DAMAGE | 0.5 |
| `invoke:glacier` | FROST | 2 | 1 | 1 | DAMAGE | 1 |
| `invoke:gon` | ARCANE | 2 | 0.5 | 0.6 | DAMAGE+STATUS_EFFECT | 0.3 |
| `invoke:greater_combust` | FIRE | 1 | 1 | 2 | DAMAGE | 3 |
| `invoke:greater_fireball` | FIRE | 1 | 1 | 1 | DAMAGE | 1.8 |
| `invoke:heo` | FROST | 2 | 0.5 | 0.6 | DAMAGE+STATUS_EFFECT | 0.25 |
| `invoke:hijack` | ARCANE | 0 | 1 | 1 | DAMAGE | 2 |
| `invoke:homing` | FIRE | 1 | 1 | 1 | DAMAGE | 0.6 |
| `invoke:ice_nova` | FROST | 0 | 1 | 1 | DAMAGE | 0.9 |
| `invoke:icebarrage` | FROST | 1 | 1 | 1 | DAMAGE+STATUS_EFFECT | 1 |
| `invoke:icestorm` | FROST | 1 | 1 | 1 | DAMAGE+STATUS_EFFECT | 0.8 |
| `invoke:inferno` | FIRE | 0 | 1 | 1 | DAMAGE | 1.8 |
| `invoke:invoke` | PHYSICAL_MELEE | 1 | 0 | 1 | DAMAGE | 2 |
| `invoke:magic_missile2` | ARCANE | 1 | 2 | 2 | DAMAGE | 1.6 |
| `invoke:magic_missile` | ARCANE | 1 | 2 | 2 | DAMAGE | 1.6 |
| `invoke:mass_hypothermia` | FROST | 0 | 1 | 1 | DAMAGE+STATUS_EFFECT | 1 |
| `invoke:meteorrush` | FIRE | 1 | 2 | 6 | DAMAGE | 1.5 |
| `invoke:multilob` | FIRE | 1 | 0 | 1 | DAMAGE | 2 |
| `invoke:nullinvoke` | PHYSICAL_MELEE | 1 | 5 | 20 | DAMAGE | 1.5 |
| `invoke:onearcane` | ARCANE | 1 | 1 | 2 | DAMAGE | 2 |
| `invoke:onefire` | FIRE | 1 | 1 | 2 | DAMAGE | 2 |
| `invoke:onefrost` | FROST | 1 | 1 | 2 | DAMAGE | 2 |
| `invoke:overload` | ARCANE | 0 | 1 | 1 | DAMAGE | 1.5 |
| `invoke:power_word_kill` | ARCANE | 1 | 1 | 2 | DAMAGE+STATUS_EFFECT | 1.5 |
| `invoke:rah` | FIRE | 2 | 0.5 | 0.6 | DAMAGE+STATUS_EFFECT | 0.4 |
| `invoke:runic_invocation` | PHYSICAL_MELEE | 1 | 1 | 4 | DAMAGE | 0.01 |
| `invoke:scorching_agony` | FIRE | 0 | 1 | 1 | DAMAGE | 0.9 |
| `invoke:scorching_ray` | FIRE | 0 | 1 | 1 | DAMAGE | 2.0 |
| `invoke:scorchingwind` | FIRE | 0 | 1 | 1 | DAMAGE | 0.9 |
| `invoke:sharedsuffering` | FROST | 0 | 1 | 1 | DAMAGE+STATUS_EFFECT | 0.6 |
| `invoke:shatter` | FROST | 0 | 1 | 1 | DAMAGE+STATUS_EFFECT | 0.9 |
| `invoke:snare` | ARCANE | 1 | 1 | 2 | DAMAGE+STATUS_EFFECT | 0.1 |
| `invoke:sonicboom` | ARCANE | 0 | 1 | 1 | DAMAGE | 2.0 |
| `invoke:supernova` | FIRE | 0 | 1 | 1 | DAMAGE | 2.0 |
| `invoke:threearcane` | ARCANE | 3 | 1 | 2 | DAMAGE | 2 |
| `invoke:threefire` | FIRE | 3 | 1 | 2 | DAMAGE | 2 |
| `invoke:threefrost` | FROST | 3 | 1 | 2 | DAMAGE | 2 |
| `invoke:time_dilate` | ARCANE | 0 | 1 | 1 | DAMAGE+STATUS_EFFECT | 0.5 |
| `invoke:twoarcane` | ARCANE | 2 | 1 | 2 | DAMAGE | 2 |
| `invoke:twofire` | FIRE | 2 | 1 | 2 | DAMAGE | 2 |
| `invoke:twofrost` | FROST | 2 | 1 | 2 | DAMAGE | 2 |
| `invoke:upheaval` | FROST | 0 | 3 | 1 | DAMAGE | 1.2 |
| `invoke:wild` | PHYSICAL_MELEE | 1 | 10 | 10 | DAMAGE | 2 |

## Wizards — `wizards` (15)

| Magia | Escola | Tier | Conj. (s) | CD (s) | Efeito | Coef. |
|---|---|---|---|---|---|---|
| `wizards:arcane_beam` | ARCANE | 3 | 5 | 10 | DAMAGE | 1 |
| `wizards:arcane_blast` | ARCANE | 2 | 1.5 | - | DAMAGE+STATUS_EFFECT | 0.9 |
| `wizards:arcane_blink` | ARCANE | 4 | 0 | 12 | TELEPORT | - |
| `wizards:arcane_bolt` | ARCANE | 0 | 1 | - | DAMAGE | 0.6 |
| `wizards:arcane_missile` | ARCANE | 1 | 1.5 | - | DAMAGE | 0.5 |
| `wizards:fire_breath` | FIRE | 2 | 5 | 10 | DAMAGE | 0.9 |
| `wizards:fire_meteor` | FIRE | 3 | 1 | 10 | DAMAGE | 1.0 |
| `wizards:fire_scorch` | FIRE | 0 | 1.2 | - | DAMAGE | 0.6 |
| `wizards:fire_wall` | FIRE | 4 | 0 | 24 | DAMAGE | 0.8 |
| `wizards:fireball` | FIRE | 1 | 1.5 | - | DAMAGE | 0.8 |
| `wizards:frost_blizzard` | FROST | 4 | 8 | 16 | DAMAGE+STATUS_EFFECT | 0.7 |
| `wizards:frost_nova` | FROST | 2 | 0.5 | 10 | DAMAGE+STATUS_EFFECT | 0.5 |
| `wizards:frost_shard` | FROST | 0 | 1 | - | DAMAGE | 0.5 |
| `wizards:frost_shield` | FROST | 3 | 0 | 30 | STATUS_EFFECT | - |
| `wizards:frostbolt` | FROST | 1 | 1.2 | - | DAMAGE+STATUS_EFFECT | 0.8 |

## Paladins & Priests — `paladins` (9)

| Magia | Escola | Tier | Conj. (s) | CD (s) | Efeito | Coef. |
|---|---|---|---|---|---|---|
| `paladins:barrier` | HEALING | 4 | 0.5 | 40 | SPAWN | - |
| `paladins:battle_banner` | HEALING | 4 | 0 | 45 | STATUS_EFFECT | - |
| `paladins:circle_of_healing` | HEALING | 3 | 0.5 | 10 | HEAL+STATUS_EFFECT | 0.5 |
| `paladins:divine_protection` | HEALING | 2 | 0 | 30 | STATUS_EFFECT | - |
| `paladins:flash_heal` | HEALING | 1 | 0.5 | 6 | HEAL | 1 |
| `paladins:heal` | HEALING | 0 | 2 | - | HEAL | 0.8 |
| `paladins:holy_beam` | HEALING | 2 | 5 | 10 | DAMAGE+HEAL | 0.5/0.8 |
| `paladins:holy_shock` | HEALING | 1 | 1.5 | - | DAMAGE+HEAL | 0.75/1 |
| `paladins:judgement` | PHYSICAL_MELEE | 3 | 0.5 | 15 | DAMAGE+STATUS_EFFECT | 0.9 |

## Rogues & Warriors — `rogues` (8)

| Magia | Escola | Tier | Conj. (s) | CD (s) | Efeito | Coef. |
|---|---|---|---|---|---|---|
| `rogues:charge` | PHYSICAL_MELEE | 3 | 0 | 12 | STATUS_EFFECT | - |
| `rogues:shadow_step` | PHYSICAL_MELEE | 3 | 0 | 12 | STATUS_EFFECT+TELEPORT | - |
| `rogues:shock_powder` | PHYSICAL_MELEE | 2 | 0 | 16 | STATUS_EFFECT | - |
| `rogues:shout` | PHYSICAL_MELEE | 2 | 0 | 12 | DAMAGE+STATUS_EFFECT | 0.05 |
| `rogues:slice_and_dice` | PHYSICAL_MELEE | 1 | 0 | 15 | STATUS_EFFECT | - |
| `rogues:throw` | PHYSICAL_MELEE | 1 | 0.5 | 8 | DAMAGE+STATUS_EFFECT | 1 |
| `rogues:vanish` | PHYSICAL_MELEE | 4 | 0 | 30 | STATUS_EFFECT | - |
| `rogues:whirlwind` | PHYSICAL_MELEE | 4 | 8 | 30 | DAMAGE | 1.2 |

## Archers — `archers` (4)

| Magia | Escola | Tier | Conj. (s) | CD (s) | Efeito | Coef. |
|---|---|---|---|---|---|---|
| `archers:barrage` | PHYSICAL_RANGED | 3 | 0.5 | 10 | - | - |
| `archers:entangling_roots` | PHYSICAL_RANGED | 2 | 0 | 18 | STATUS_EFFECT | - |
| `archers:magic_arrow` | PHYSICAL_RANGED | 4 | 1 | 8 | DAMAGE | 1.2 |
| `archers:power_shot` | PHYSICAL_RANGED | 1 | 0 | - | STATUS_EFFECT | - |

## Eldritch End — `eldritch_end` (2)

| Magia | Escola | Tier | Conj. (s) | CD (s) | Efeito | Coef. |
|---|---|---|---|---|---|---|
| `eldritch_end:arcane_laser` | FIRE | 4 | 2 | 12 | DAMAGE | 3.0 |
| `eldritch_end:arcane_missile` | ARCANE | 0 | 0.75 | - | DAMAGE | 0.6 |

## Spell Engine (base) — `spell_engine` (2)

| Magia | Escola | Tier | Conj. (s) | CD (s) | Efeito | Coef. |
|---|---|---|---|---|---|---|
| `spell_engine:use_item` | PHYSICAL_MELEE | 0 | 0 | - | - | - |
| `spell_engine:use_offhand_item` | PHYSICAL_MELEE | 0 | 0 | - | - | - |

## Faixas de coeficiente

O coeficiente é o que ordena poder dentro do sistema. Só conta o primeiro coeficiente
de cada magia (magias com múltiplos impactos somam mais do que a tabela mostra).

| escola | nº | coef. mín | coef. máx |
|---|---|---|---|
| PHYSICAL_RANGED | 1 | 1.2 | 1.2 |
| HEALING | 5 | 0.5 | 1 |
| FROST | 24 | 0.25 | 2 |
| FIRE | 26 | 0.2 | 4 |
| ARCANE | 26 | 0.1 | 2 |
| PHYSICAL_MELEE | 8 | 0.01 | 2 |

### As 12 magias de maior coeficiente

| Magia | Escola | Coef. | Conj. | CD |
|---|---|---|---|---|
| `invoke:flameray` | FIRE | **4** | 0.5 | 1 |
| `invoke:greater_combust` | FIRE | **3** | 1 | 2 |
| `eldritch_end:arcane_laser` | FIRE | **3** | 2 | 12 |
| `invoke:wild` | PHYSICAL_MELEE | **2** | 10 | 10 |
| `invoke:twofrost` | FROST | **2** | 1 | 2 |
| `invoke:twofire` | FIRE | **2** | 1 | 2 |
| `invoke:twoarcane` | ARCANE | **2** | 1 | 2 |
| `invoke:threefrost` | FROST | **2** | 1 | 2 |
| `invoke:threefire` | FIRE | **2** | 1 | 2 |
| `invoke:threearcane` | ARCANE | **2** | 1 | 2 |
| `invoke:supernova` | FIRE | **2** | 1 | 1 |
| `invoke:sonicboom` | ARCANE | **2** | 1 | 1 |
