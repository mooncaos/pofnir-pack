# Eldritch Mobs — censo

`eldritch-mobs` · jar `eldritch-mobs-1.15.2.jar` · namespace(s): `eldritch_mobs`

> **Não adiciona mobs.** É um sistema de modificadores que promove mobs já existentes
> (de qualquer mod) a três patamares, sorteando poderes. Não há `entity.` no lang.
> O lang mora em `data/eldritch_mobs/lang/en_us.json` (não em `assets/`), por isso
> este censo é manual.

| categoria | nº |
|---|---|
| Blocos | 1 |
| Entidades próprias | 0 |
| Patamares | 3 |
| Modificadores | 28 |
| Tags de controle | 5 |
| Loot tables | 4 |

## Blocos (1)

| ID | Nome |
|---|---|
| `eldritch_mobs:soothing_lantern` | Soothing Lantern |

## Patamares

| Patamar | Loot table | Pool de títulos |
|---|---|---|
| Elite | `eldritch_mobs:entities/elite_loot` | `data/eldritch_mobs/title/elite.json` |
| Ultra | `eldritch_mobs:entities/ultra_loot` | `data/eldritch_mobs/title/ultra.json` |
| Eldritch | `eldritch_mobs:entities/eldritch_loot` | `data/eldritch_mobs/title/eldritch.json` |

Cada patamar tem, por config, taxa de spawn, multiplicador de vida, multiplicador de
XP e nº mínimo/máximo de modificadores sorteados.

## Modificadores (28)

`alchemist`, `berserk`, `blinding`, `burning`, `cloaked`, `deflector`, `draining`,
`drowning`, `duplicator`, `ender`, `ghastly`, `gravity`, `lethargic`, `lifesteal`,
`regenerating`, `resistant`, `rust`, `speedster`, `sprinter`, `starving`, `stormy`,
`thorny`, `toxic`, `undying`, `weakness`, `webslinging`, `withering`, `yeeter`

Cada um tem chave de config própria (`text.autoconfig.eldritch_mobs.option.<nome>Config`),
ou seja, dá para ligar/desligar modificador a modificador.

## Tags de controle (`data/eldritch_mobs/tags/entity_types/`)

| Tag | Função |
|---|---|
| `eldritch_mobs:allowed` | quais mobs podem ser promovidos |
| `eldritch_mobs:blacklist` | quais nunca são promovidos |
| `eldritch_mobs:always_elite` | sempre nascem Elite |
| `eldritch_mobs:always_ultra` | sempre nascem Ultra |
| `eldritch_mobs:always_eldritch` | sempre nascem Eldritch |

## Config (autoconfig, `config/eldritch_mobs.json`)

Além dos 28 modificadores: `EliteSpawnRates`, `UltraSpawnRates`, `EldritchSpawnRates`,
`Elite/Ultra/EldritchHealthMultiplier`, `Elite/Ultra/EldritchXpMultiplier`,
`Elite/Ultra/EldritchMinModifiers`, `Elite/Ultra/EldritchMaxModifiers`,
`ignoreNamedMobs`, `turnOffBossBars`, `crosshairBossBars`, `turnOffTitles`,
`genericTitles`, `turnOnGlowingMobs`, `onlyDropLootIfKilledByPlayers`,
`combinedLootDrop`, `distantVisibleNameTags`
