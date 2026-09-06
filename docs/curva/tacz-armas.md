# Armas de fogo — TaCZ (gun pack `tacz_default_gun`)

Radiografia da Ordem #005. Dado extraído de
`assets/tacz/custom/tacz_default_gun/data/tacz/data/guns/<arma>_data.json`
e do índice em `.../index/guns/<arma>.json`.

## Como ler

- **Dano** é o dano total por disparo. Em espingardas o mod divide esse total entre os
  projéteis (`bullet_amount`), então o valor só sai inteiro se todos acertarem.
- **DPS** = `dano x rpm / 60`. É o teto teórico em fogo automático sustentado: não
  desconta recarga, recuo, modo de tiro (semi/rajada) nem queda de dano por distância.
  Serve para ordenar, não como número de combate.
- **Pen.** = `armor_ignore`, fração da armadura ignorada.
- **Cabeça** = multiplicador de dano em headshot.
- Todas as armas têm queda de dano por distância (`damage_adjust`); o dano da tabela é
  o de curta distância.

## Tabela (ordenada por DPS)

| # | Arma | Tipo | Dano | Proj. | RPM | Cap. | Munição | Pen. | Cabeça | DPS |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `m107` | sniper | 55 | 1 | 400 | 10 | `tacz:50bmg` | 0.5 | 1.5x | **366.7** |
| 2 | `spas_12` | shotgun | 64 | 8 | 200 | 5 | `tacz:12g` | 0.25 | 1.33x | **213.3** |
| 3 | `m95` | sniper | 75 | 1 | 151 | 5 | `tacz:50bmg` | 0.75 | 2.5x | **188.8** |
| 4 | `aa12` | shotgun | 30 | 10 | 350 | 8 | `tacz:12g` | 0.0 | 1.33x | **175.0** |
| 5 | `minigun` | mg | 8 | 1 | 1200 | ? | `tacz:308` | 0.5 | 1.5x | **160.0** |
| 6 | `fn_evolys` | mg | 12 | 1 | 750 | 75 | `tacz:308` | 0.4 | 1.6x | **150.0** |
| 7 | `vector45` | smg | 7 | 1 | 1200 | 20 | `tacz:45acp` | 0.2 | 1.25x | **140.0** |
| 8 | `m1014` | shotgun | 40 | 8 | 200 | 6 | `tacz:12g` | 0.25 | 1.33x | **133.3** |
| 9 | `scar_h` | rifle | 14 | 1 | 570 | 20 | `tacz:308` | 0.5 | 1.5x | **133.0** |
| 10 | `ai_awp` | sniper | 42 | 1 | 171 | 5 | `tacz:338` | 0.60 | 2x | **119.7** |
| 11 | `spr15hb` | rifle | 10 | 1 | 700 | 15 | `tacz:556x45` | 0.30 | 1.75x | **116.7** |
| 12 | `b93r` | pistol | 7.5 | 1 | 900 | 20 | `tacz:9mm` | 0.20 | 1.25x | **112.5** |
| 13 | `kar98` | sniper | 26 | 1 | 250 | 4 | `tacz:792x57` | 0.40 | 1.85x | **108.3** |
| 14 | `m870` | shotgun | 36 | 9 | 180 | 5 | `tacz:12g` | 0.25 | 1.33x | **108.0** |
| 15 | `rpk` | mg | 10 | 1 | 630 | 40 | `tacz:762x39` | 0.3 | 1.5x | **105.0** |
| 16 | `hk416d` | rifle | 6.5 | 1 | 943 | 30 | `tacz:556x45` | 0.2 | 1.5x | **102.2** |
| 17 | `m16a1` | rifle | 8 | 1 | 750 | 20 | `tacz:556x45` | 0.25 | 1.5x | **100.0** |
| 18 | `ump45` | smg | 9 | 1 | 660 | 25 | `tacz:45acp` | 0.2 | 1.5x | **99.0** |
| 19 | `type_81` | rifle | 9 | 1 | 630 | 30 | `tacz:762x39` | 0.2 | 1.5x | **94.5** |
| 20 | `qbz_191` | rifle | 7.5 | 1 | 750 | 30 | `tacz:58x42` | 0.4 | 1.5x | **93.8** |
| 21 | `m249` | mg | 7.5 | 1 | 750 | 75 | `tacz:556x45` | 0.3 | 1.5x | **93.8** |
| 22 | `sks_tactical` | rifle | 11 | 1 | 510 | 10 | `tacz:762x39` | 0.25 | 2x | **93.5** |
| 23 | `g36k` | rifle | 7 | 1 | 780 | 30 | `tacz:556x45` | 0.2 | 1.5x | **91.0** |
| 24 | `ak47` | rifle | 9 | 1 | 600 | 30 | `tacz:762x39` | 0.25 | 1.5x | **90.0** |
| 25 | `m4a1` | rifle | 6.5 | 1 | 810 | 30 | `tacz:556x45` | 0.2 | 1.5x | **87.8** |
| 26 | `aug` | rifle | 7 | 1 | 710 | 30 | `tacz:556x45` | 0.25 | 1.5x | **82.8** |
| 27 | `qbz_95` | rifle | 7.5 | 1 | 660 | 30 | `tacz:58x42` | 0.4 | 1.5x | **82.5** |
| 28 | `hk_mp5a5` | smg | 6 | 1 | 820 | 30 | `tacz:9mm` | 0.15 | 1.25x | **82.0** |
| 29 | `scar_l` | rifle | 7.5 | 1 | 650 | 30 | `tacz:556x45` | 0.25 | 1.75x | **81.2** |
| 30 | `taurus500` | pistol | 40 | 1 | 120 | 5 | `tacz:500mag` | 0.50 | 2x | **80.0** |
| 31 | `mk14` | rifle | 16 | 1 | 300 | 10 | `tacz:308` | 0.5 | 1.75x | **80.0** |
| 32 | `deagle` | pistol | 16 | 1 | 300 | 7 | `tacz:50ae` | 0.25 | 1.75x | **80.0** |
| 33 | `fn_fal` | rifle | 13 | 1 | 350 | 20 | `tacz:308` | 0.40 | 1.8x | **75.8** |
| 34 | `timeless50` | pistol | 15 | 1 | 300 | 8 | `tacz:50ae` | 0.25 | 1.5x | **75.0** |
| 35 | `p320` | pistol | 10 | 1 | 450 | 12 | `tacz:45acp` | 0.2 | 1.75x | **75.0** |
| 36 | `cz75` | pistol | 5 | 1 | 900 | 16 | `tacz:9mm` | 0.20 | 1.30x | **75.0** |
| 37 | `p90` | smg | 5.5 | 1 | 810 | 50 | `tacz:57x28` | 0.7 | 1.25x | **74.2** |
| 38 | `m700` | sniper | 24 | 1 | 180 | 5 | `tacz:30_06` | 0.50 | 2x | **72.0** |
| 39 | `hk_g3` | rifle | 12 | 1 | 350 | 20 | `tacz:308` | 0.5 | 1.5x | **70.0** |
| 40 | `deagle_golden` | pistol | 12 | 1 | 350 | 9 | `tacz:357mag` | 0.2 | 1.8x | **70.0** |
| 41 | `uzi` | smg | 6.5 | 1 | 600 | 20 | `tacz:9mm` | 0.15 | 1.25x | **65.0** |
| 42 | `m1911` | pistol | 11 | 1 | 350 | 7 | `tacz:45acp` | 0.2 | 1.5x | **64.2** |
| 43 | `db_short` | shotgun | 24 | 16 | 150 | 2 | `tacz:12g` | 0.33 | 1.25x | **60.0** |
| 44 | `m16a4` | rifle | 8 | 1 | 400 | 30 | `tacz:556x45` | 0.25 | 1.35x | **53.3** |
| 45 | `springfield1873` | sniper | 35 | 1 | 90 | 1 | `tacz:45_70` | 0.25 | 1.5x | **52.5** |
| 46 | `rpg7` | rpg | 20 | 1 | 150 | 1 | `tacz:rpg_rocket` | 0.0 | 1x | **50.0** |
| 47 | `db_long` | shotgun | 30 | 10 | 100 | 2 | `tacz:12g` | 0.33 | 1.2x | **50.0** |
| 48 | `m9a4` | pistol | 6 | 1 | 400 | 17 | `tacz:9mm` | 0 | 1.5x | **40.0** |
| 49 | `glock_17` | pistol | 6 | 1 | 400 | 17 | `tacz:9mm` | 0 | 1.5x | **40.0** |
| 50 | `rhino357` | pistol | 10.5 | 1 | 200 | 6 | `tacz:357mag` | 0.30 | 1.75x | **35.0** |
| 51 | `lonetrail` | pistol | 21.5 | 1 | 90 | 1 | `tacz:30_06` | 0.40 | 1.75x | **32.2** |
| 52 | `m320` | rpg | 10 | 1 | 150 | 1 | `tacz:40mm` | 0.0 | 1.0x | **25.0** |
| 53 | `taurus943` | pistol | 6 | 1 | 180 | 8 | `tacz:22wmr` | 0.25 | 1.5x | **18.0** |
| 54 | `hk_mk23` | pistol | 12 | 1 | 50 | 12 | `tacz:45acp` | 0.2 | 1.75x | **10.0** |

## Faixas observadas

| métrica | mínimo | máximo | média |
|---|---|---|---|
| DPS | 10.0 (`hk_mk23`) | 366.7 (`m107`) | 93.1 |
| Dano/disparo | 5 (`cz75`) | 75 (`m95`) | 17.0 |
| RPM | 50 (`hk_mk23`) | 1200 (`minigun`) | 474 |

## Por tipo

| tipo | nº | DPS mín | DPS máx | dano mín | dano máx |
|---|---|---|---|---|---|
| rifle | 17 | 53.3 | 133.0 | 6.5 | 16 |
| pistol | 14 | 10.0 | 112.5 | 5 | 40 |
| sniper | 6 | 52.5 | 366.7 | 24 | 75 |
| shotgun | 6 | 50.0 | 213.3 | 24 | 64 |
| smg | 5 | 65.0 | 140.0 | 5.5 | 9 |
| mg | 4 | 93.8 | 160.0 | 7.5 | 12 |
| rpg | 2 | 25.0 | 50.0 | 10 | 20 |
