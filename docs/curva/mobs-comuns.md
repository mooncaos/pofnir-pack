# Hostis comuns — radiografia

Ordem #005. Atributos base lidos do bytecode. Mesmo mapa de campos e mesmo aviso sobre
`ATTACK_DAMAGE` descritos em [bosses.md](bosses.md).

Legenda: `HP` vida · `Dano` ataque corpo a corpo básico · `Arm` armadura ·
`Ten` tenacidade · `Vel` velocidade de movimento · `KBr` resistência a repulsão ·
`—` atributo não declarado (herda o padrão da classe base).

---

## A régua: referência vanilla

**Estes valores NÃO foram extraídos.** O jar do Minecraft não faz parte do manifesto do
pack e o jar oficial da Mojang é ofuscado — sem tabela de mapeamento não dá para ler os
atributos dele com o método usado no resto deste documento. Ficam aqui como régua
conhecida, e é assim que devem ser tratados: referência, não medição.

| Mob | HP | Dano | Arm | Vel |
|---|---|---|---|---|
| `minecraft:zombie` | 20 | 3 | 2 | 0.23 |
| `minecraft:skeleton` | 20 | — (arco) | 0 | 0.25 |
| `minecraft:creeper` | 20 | — (explosão 3) | 0 | 0.25 |
| `minecraft:enderman` | 40 | 7 | 0 | 0.30 |

---

## Alex's Mobs (hostis, `MobCategory.MONSTER`)

| Entidade | HP | Dano | Arm | Ten | Vel | KBr |
|---|---|---|---|---|---|---|
| `alexsmobs:warped_mosco` | **100** | **10** | 10 | 2 | 0.30 | 1.0 |
| `alexsmobs:farseer` | 70 | 4.5 | 6 | — | 0.35 | — |
| `alexsmobs:centipede_head` | 35 | 8 | 6 | — | 0.22 | 0.5 |
| `alexsmobs:mimicube` | 30 | 2 | — | — | 0.45 | — |
| `alexsmobs:murmur` | 30 | 3 | — | — | 0.20 | 0.3 |
| `alexsmobs:straddler` | 28 | 2 | 5 | — | 0.30 | 0.8 |
| `alexsmobs:bone_serpent` | 25 | 5 | — | — | 1.45 | — |
| `alexsmobs:drop_bear` | 22 | 2 | — | — | 0.25 | 0.7 |
| `alexsmobs:skelewag` | 20 | 3 | — | — | 0.45 | — |
| `alexsmobs:guster` | 16 | 1 | — | — | 0.20 | — |
| `alexsmobs:soul_vulture` | 12 | 4 | — | — | 0.25 | — |
| `alexsmobs:crimson_mosquito` | 10 | 5 | 0 | — | 0.25 | — |
| `alexsmobs:rocky_roller` | 10 | 2 | **20** | — | 0.25 | 0.7 |
| `alexsmobs:skreecher` | 2 | 1 | — | — | 0.20 | — |
| `alexsmobs:void_worm` | via config | 5 | 4 | — | 0.30 | — |

Partes de corpo (entidades técnicas, não contam como mob): `centipede_body` 10/8/6,
`murmur_head` 30/3, `bone_serpent_part` 10, `void_worm_part` 30.

Dois destoam do resto e valem registro: `rocky_roller` tem **armadura 20** com 10 de
vida, e `bone_serpent` tem **velocidade 1.45**, quase 5x a de um enderman.

## The Graveyard

| Entidade | HP | Dano | Arm | Ten | Vel | KBr |
|---|---|---|---|---|---|---|
| `graveyard:ghouling` | 50 | 6.5 | 5 | 2 | 0.31 | 0.5 |
| `graveyard:nightmare` | 45 | 10 | 3 | — | 0.19 | — |
| `graveyard:nameless_hanged` | 45 | — | — | — | — | — |
| `graveyard:wraith` | 27.5 | 6.5 | — | — | 0.20 | — |
| `graveyard:revenant` | 25 | 3.5 | 2 | — | 0.155 | — |
| `graveyard:corrupted_pillager` | 24 | 3 | — | — | 0.35 | — |
| `graveyard:corrupted_vindicator` | 24 | 5 | 2 | — | 0.35 | — |
| `graveyard:reaper` | 20 | 4 | — | — | — | — |
| `graveyard:ghoul` | — | 4 | 3 | — | 0.175 | 0.5 |
| `graveyard:skeleton_creeper` | — | — | — | — | 0.29 | — |
| `graveyard:acolyte` | não declarado | | | | | |
| `graveyard:lich` | via config | via config | via config | via config | 0 | 1.0 |

`ghoul` e `skeleton_creeper` não declaram HP próprio — herdam do que estendem
(`class_1588` Monster e `class_1548` Creeper). `graveyard:lich` ("Corrupted Champion")
lê tudo de `com/lion/graveyard/config/entries/CorruptedChampionEntry`.

`corrupted_vindicator` e `corrupted_pillager` são os mais rápidos do mod (0.35), acima
do enderman vanilla.

## Eldritch End

| Entidade | HP | Dano | Arm | Vel | Alcance |
|---|---|---|---|---|---|
| `eldritch_end:dendler` | 40 | — | — | 0.30 | — |
| `eldritch_end:aberration` | 20 | 4 | — | 0.30 | — |
| `eldritch_end:tentacle` | 20 | 6 | — | 0 | 100 |
| `eldritch_end:undead_tentacle` | via config | via config | — | 0 | 100 |
| `eldritch_end:crystal` | via config | via config | via config | — | 10 |
| `eldritch_end:ominous_eye` | via config | via config | via config | — | 10 |

Todos leem de `elocindev/eldritch_end/config/entries/entities/`. Os valores da tabela
são os defaults dessas classes; `undead_tentacle`, `crystal` e `ominous_eye` não têm
classe de config própria localizada, então ficam sem número.

`tentacle` tem **alcance de percepção 100** — o maior de qualquer mob comum do
manifesto (enderman vanilla: 64).

## Mine Cells

| Entidade | HP | Dano | Arm | Vel | KBr |
|---|---|---|---|---|---|
| `minecells:sewers_tentacle` | 30 | 6 | 2.5 | 0.22 | 1.0 |
| `minecells:runner` | 25 | 8 | — | 0.30 | — |
| `minecells:scorpion` | 25 | 8 | 5 | 0.30 | — |
| `minecells:inquisitor` | 25 | — | 2 | 0.15 | — |
| `minecells:sweeper` | 24 | 6 | — | 0.19 | 0.5 |
| `minecells:grenadier` | 20 | — | 4 | 0.20 | — |
| `minecells:leaping_zombie` | 20 | 4 | 3 | 0.20 | — |
| `minecells:shieldbearer` | 20 | 5 | 5 | 0.23 | — |
| `minecells:undead_archer` | 20 | 4 | 3 | 0.23 | — |
| `minecells:disgusting_worm` | 15 | 12 | — | 0.20 | — |
| `minecells:shocker` | 15 | — | **10** | — | 1.0 |
| `minecells:protector` | 20 | — | **8** | — | 1.0 |
| `minecells:rancid_rat` | 10 | 5 | — | 0.40 | — |
| `minecells:fly` | 10 | 6 | — | 0 | 0.6 |
| `minecells:mutated_bat` | 4 | 2 | — | 0 | — |
| `minecells:kamikaze` | 2 | 1 | — | 0.20 | — |

`disgusting_worm` tem **12 de dano com 15 de vida** — a maior razão dano/vida de mob
comum do manifesto.

## Terror

| Entidade | HP | Dano | Arm | Vel | KBr |
|---|---|---|---|---|---|
| `man:managgresive` | 300 | 15 | 0 | 0.35 | 0.7 |
| `man:manfromthefog` | 10 | 7 | 0 | 0.30 | — |
| `cave_dweller:cave_dweller` | 60 | 6 | — | 0.50 | — |

Cave Dweller lê tudo de `config/cave-dweller-config.json5`; os números são os defaults
do mod. Os três estão com spawn natural desligado no pack (Lei 3, Ordem #002) — só
entram por comando ou pela Marca da Presença.

---

## Faixas observadas em mob comum

| conjunto | HP mín–máx | Dano mín–máx | Armadura máx | Vel. máx |
|---|---|---|---|---|
| vanilla (referência) | 20–40 | 3–7 | 2 | 0.30 |
| Alex's Mobs | 2–100 | 1–10 | 20 | 1.45 |
| The Graveyard | 20–50 | 3–10 | 5 | 0.35 |
| Eldritch End | 20–40 | 4–6 | — | 0.30 |
| Mine Cells | 2–30 | 1–12 | 10 | 0.40 |
| Terror | 10–300 | 6–15 | 0 | 0.50 |

O topo de mob comum do manifesto é `man:managgresive` (300 HP / 15 dano) — mas ele só
aparece pela Marca, e a forma que anda pelo mundo tem 10 de vida. Descontando o terror,
o teto de hostil comum é `alexsmobs:warped_mosco`, com 100 de vida e 10 de dano: 5x a
vida e 3x o dano de um zumbi.
