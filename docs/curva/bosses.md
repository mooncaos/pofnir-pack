# Bosses — radiografia

Ordem #005. Valores lidos do bytecode dos jars (atributos base) ou das classes de
config de cada mod. Nada aqui é proposta.

## Método e leitura

Dois caminhos, conforme o mod:

- **Atributo base no bytecode** — o mod chama `AttributeSupplier.Builder.add(atributo,
  valor)` com o número embutido. Foi lido direto.
- **Config** — o mod passa o valor de uma classe de configuração. Foi lido o **default**
  dessa classe. O jogador pode alterar depois no arquivo de config.

Mapa de atributos usado (âncora: o `CaveDwellerEntity` nomeia cada campo pelo getter de
config, o que fixou 5 dos 11; o resto segue a ordem de declaração contígua da classe
`Attributes` do 1.20.1):

| campo intermediary | atributo |
|---|---|
| `field_23716` | MAX_HEALTH |
| `field_23717` | FOLLOW_RANGE |
| `field_23718` | KNOCKBACK_RESISTANCE |
| `field_23719` | MOVEMENT_SPEED |
| `field_23721` | ATTACK_DAMAGE |
| `field_23723` | ATTACK_SPEED |
| `field_23724` | ARMOR |
| `field_23725` | ARMOR_TOUGHNESS |

**Aviso sobre "dano":** `ATTACK_DAMAGE` é só o golpe corpo a corpo básico. Nenhum boss
desta lista mata por isso — todos têm ataques especiais codificados que não passam pelo
atributo. Os números de dano abaixo são o piso, não o perfil de ameaça.

---

## Bosses of Mass Destruction (4 declarados em `c:bosses`)

Valores de `net/barribob/boss/config/*Config`.

| Boss | HP | Armadura | Ataque | Regen/tick | XP | Extras |
|---|---|---|---|---|---|---|
| `bosses_of_mass_destruction:void_blossom` | **350** | 4 | 12 | 0.5 | 1000 | — |
| `bosses_of_mass_destruction:obsidilith` | **300** | 14 | 16 | 0.5 | 1000 | explosão de bigorna força 4; gera pilar ao morrer |
| `bosses_of_mass_destruction:lich` | **300** | — | — | 0.2 | 1500 | míssil 15; noite eterna ligada; cometa e invocação próprios |
| `bosses_of_mass_destruction:gauntlet` | **250** | 8 | 16 | 0.5 | 1000 | soco energizado explode raio 4.5; soco normal x1.5; dropa debris ao morrer |

Os quatro têm **cura passiva** (`idleHealingPerTick`) — o Lich a metade dos outros.

## Bewitchment (4 declarados em `c:bosses`)

Atributos base no bytecode.

| Boss | HP | Dano | Armadura | Vel. | Res. knockback |
|---|---|---|---|---|---|
| `bewitchment:herne` | **500** | **24** | 10 | 0.30 | 1.0 |
| `bewitchment:lilith` | **500** | 16 | 10 | 0.30 | 1.0 |
| `bewitchment:baphomet` | 375 | 12 | 6 | 0.25 | 0.75 |
| `bewitchment:leonard` | 375 | 12 | 6 | 0.25 | 0.75 |

Herne e Lilith são imunes a repulsão (`KNOCKBACK_RESISTANCE = 1.0`). Herne tem o maior
`ATTACK_DAMAGE` corpo a corpo de todos os bosses do manifesto.

## Marium's Soulslike Weaponry (8 declarados em `c:bosses`)

Valores de `net/soulsweaponry/config/BossConfig`. **Atenção:** as chaves de config não
usam os mesmos nomes dos entity IDs. Só 4 das 8 entidades tagueadas casam por nome; as
outras 4 chaves de config existem mas eu não consigo amarrá-las a um entity ID com
certeza a partir do jar, então listo as duas coisas separadas em vez de chutar.

**Casam por nome com a tag `c:bosses`:**

| Boss | HP | Armadura | XP | Fases / extras |
|---|---|---|---|---|
| `soulsweapons:day_stalker` | **600** | 15 | 500 | 2 fases; dano de projétil recebido x0.8 (f1) e x0.6 (f2); combustão aérea abaixo de 50% HP |
| `soulsweapons:returning_knight` | 500 | 15 | 500 | cooldown 40/80/200 ticks (ataque/especial/invocação); quebra escudo; imune a fogo; cura e dano invertidos; imune a veneno |
| `soulsweapons:night_prowler` | 500 | 10 | 500 | 2 fases; cura 5 por projétil abaixo de 50% HP; cura de eclipse 3; 30% de chance de teleporte |
| `soulsweapons:chaos_monarch` | 450 | 4 | 500 | wither no chão raio 6; quebra escudo; imune a fogo; cura e dano invertidos; imune a wither |

**Chaves de config sem amarração confirmada a entity ID:**

| chave | HP | Armadura |
|---|---|---|
| `decaying_king` | **600** | 10 |
| `fallen_icon` | 550 | 20 |
| `old_champions_remains` | 300 | 10 |
| `frenzied_shade` | 150 | 2 |

`fallen_icon` tem a **maior armadura de boss do manifesto (20)**.

Os quatro bosses restantes tagueados (`accursed_lord_boss`, `draugr_boss`, `night_shade`,
`moonknight`) não têm chave de config com o mesmo nome. Provavelmente são estes quatro
acima sob outro nome interno, mas isso é inferência e fica fora do dado.

O mod ainda declara `minecraft:ender_dragon` e `minecraft:wither` na própria tag
`c:bosses`.

### Semi-bosses e invocações do mesmo config

| chave | HP | Armadura |
|---|---|---|
| `withered_demon` | 80 | 2 |
| `soulmass` | 75 | 10 |
| `frost_giant` | 50 | 8 |
| `forlorn` / `evil_forlorn` | 30 | 0 |
| `remnant` | 20 | 0 |
| `warmth` | 20 | 0 |
| `moderatly_sized_chungus` | 14 | 0 |
| `dark_sorcerer` | 10 | 0 |
| `familiar_ghost` | 10 | 0 |
| `rime_spectre` | 10 | 0 |

## Eldritch End (3 bosses)

O mod **não declara `c:bosses`**; estes são os que têm classe de config em
`config/entries/entities/boss/`.

| Boss | HP | Dano | Armadura | Extras |
|---|---|---|---|---|
| `eldritch_end:hastur` | **2500** | — | — | invoca 3 lacaios; omnivampirismo 0.1; 5%/s de tentáculo; relâmpago de encarnação dano **100** |
| `eldritch_end:eye` | 800 | 12 | 12 | — |
| `eldritch_end:the_faceless` | 800 | 12 | — | vel. 0.25; atk speed 0.7 |

**Hastur é o maior HP do manifesto inteiro**, com folga de 4x sobre o segundo.

## Mine Cells (1 declarado em `c:bosses`)

| Boss | HP | Dano | Armadura | Vel. | Alcance | Res. knockback |
|---|---|---|---|---|---|---|
| `minecells:concierge` | 300 | 4 | 5 | 0.18 | 40 | 1.0 |
| `minecells:conjunctivius` | não extraível | | | | | |

`minecells:conjunctivius` é o único boss tagueado do mod, mas **não foi extraível**: não
localizei a classe de entidade servidor na extração do jar (só renderizadores de cliente
e a boss bar). O Concierge, que aparece na tabela, **não está** na tag `c:bosses` — foi
incluído porque tem atributos de porte de boss e é o outro chefe do mod.

## Pomkot's Mechs — não extraível

Os 22 mechs inimigos e os 6 pilotáveis **não tiveram stats extraídos**. Razão: as classes
concretas de mech não declaram atributo com constante embutida; as classes base
(`GenericPomkotsMonster`, `PomkotsVehicleBase`, `BaseSmallMonsterEntity`) leem de config,
e a classe `PomkotsConfig` do jar só tem opções de comportamento (destruição de bloco,
HUD, alvo) — nenhum valor de vida ou dano. Não há JSON de especificação no jar.

O que saiu, das entidades auxiliares do mod:

| Entidade | HP | Armadura |
|---|---|---|
| `ElevatorEntity` | 1024 | — |
| `RaidControllerEntity` | 1000 | 20 |
| `RaidObjectiveEntity` | 500 | 20 |
| `MechTraderEntity` | 500 | — |
| `PlateEntity` | 300 | — |
| `Pmvc01Entity` | via config | 18 |

## Terror

| Entidade | HP | Dano | Armadura | Vel. | Res. knockback |
|---|---|---|---|---|---|
| `man:managgresive` | 300 | 15 | 0 | 0.35 | 0.7 |
| `man:manfromthefog` | 10 | 7 | 0 | 0.30 | — |
| `cave_dweller:cave_dweller` | 60 | 6 | — | 0.50 | — |

Man From The Fog e Man Aggressive são a mesma criatura em dois estados: a forma que
espreita tem 10 de vida, a que caça tem 300. Cave Dweller lê tudo do config
(`config/cave-dweller-config.json5`); os valores são os defaults do mod.

`from_the_fog` não entra: o Herobrine é armor stand com tag, não tem atributos.

---

## Ordenação por HP (todos os bosses extraídos)

| # | Boss | HP |
|---|---|---|
| 1 | `eldritch_end:hastur` | **2500** |
| 2 | `eldritch_end:eye` | 800 |
| 2 | `eldritch_end:the_faceless` | 800 |
| 4 | `soulsweapons:day_stalker` | 600 |
| 4 | `decaying_king` (config) | 600 |
| 6 | `fallen_icon` (config) | 550 |
| 7 | `bewitchment:herne` | 500 |
| 7 | `bewitchment:lilith` | 500 |
| 7 | `soulsweapons:returning_knight` | 500 |
| 7 | `soulsweapons:night_prowler` | 500 |
| 11 | `soulsweapons:chaos_monarch` | 450 |
| 12 | `bewitchment:baphomet` | 375 |
| 12 | `bewitchment:leonard` | 375 |
| 14 | `bosses_of_mass_destruction:void_blossom` | 350 |
| 15 | `bosses_of_mass_destruction:obsidilith` | 300 |
| 15 | `bosses_of_mass_destruction:lich` | 300 |
| 15 | `minecells:concierge` | 300 |
| 15 | `old_champions_remains` (config) | 300 |
| 15 | `man:managgresive` | 300 |
| 20 | `bosses_of_mass_destruction:gauntlet` | 250 |
