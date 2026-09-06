# TaCZ Refabricated — censo

`tacz-refabricated` · jar `TACZ-Refabricated-1.20.1-0.7.0-forge1.1.8-hotfix.jar` · namespace(s): `tacz`

> O jar traz `lang/pt_br.json`. Nomes abaixo são do `en_us` (batem com wiki/receitas).

| categoria | nº |
|---|---|
| Entidades | 1 |
| Blocos | 3 |
| Itens | 1 |

## Entidades (1)

| ID | Nome | Tipo |
|---|---|---|
| `tacz:target_minecart` | Minecart with Target | — |

> Tipo: lido do `MobCategory` no bytecode de registro do mod. **boss** vem da tag `c:bosses` declarada pelo próprio mod. `—` = registro não pareado pelo extrator.

## Blocos (3)

| ID | Nome |
|---|---|
| `tacz:gun_smith_table` | Gun Smith Table |
| `tacz:statue` | Stone Statue |
| `tacz:target` | Humanoid Target |

## Itens (1)

| ID | Nome |
|---|---|
| `tacz:target_minecart` | Minecart with Target |

## Tags de bloco (`tacz:`) (3)

bullet_ignore, interact_key/blacklist, interact_key/whitelist

## Receitas por subsistema (`data/tacz/recipes/`)

| grupo | nº | entradas |
|---|---|---|
| `misc` | 1 | blood_strike_1 |

## Chaves de lang fora do censo

Prefixos ignorados (texto de UI, tooltips, patchouli, advancements):

`config` (99), `tooltip` (76), `gui` (48), `message` (18), `key` (12), `commands` (12), `item` (7), `painting` (4), `toast` (4), `itemGroup` (2), `death` (2), `jei` (2), `subtitle` (2), `tacz` (1)


> O TaCZ registra quase nada no jogo. Armas, munições e acessórios **não são itens
> registrados** — são conteúdo de *gun pack*, carregado em runtime. Por isso o censo de
> lang acima é minúsculo e o que importa está abaixo.

## Gun packs embutidos (1)

| Pack | Namespace | Versão | Licença | Autor |
|---|---|---|---|---|
| `tacz_default_gun` | `tacz` | 1.1.8 | CC BY-NC-ND 4.0 | TACZ Dev Team |

Fica em `assets/tacz/custom/tacz_default_gun/` dentro do jar. Packs do usuário vão
soltos em `<instância>/tacz/` (pasta ou `.zip`).

## Conteúdo do pack padrão

**Armas (54)** — `aa12`, `ai_awp`, `ak47`, `aug`, `b93r`, `cz75`, `db_long`, `db_short`,
`deagle`, `deagle_golden`, `fn_evolys`, `fn_fal`, `g36k`, `glock_17`, `hk416d`, `hk_g3`,
`hk_mk23`, `hk_mp5a5`, `kar98`, `lonetrail`, `m1014`, `m107`, `m16a1`, `m16a4`, `m1911`,
`m249`, `m320`, `m4a1`, `m700`, `m870`, `m95`, `m9a4`, `minigun`, `mk14`, `p320`, `p90`,
`qbz_191`, `qbz_95`, `rhino357`, `rpg7`, `rpk`, `scar_h`, `scar_l`, `sks_tactical`,
`spas_12`, `spr15hb`, `springfield1873`, `taurus500`, `taurus943`, `timeless50`,
`type_81`, `ump45`, `uzi`, `vector45`

**Munições (24)** — `12g`, `22wmr`, `308`, `30_06`, `338`, `357mag`, `40mm`, `45_70`,
`45acp`, `46x30`, `500mag`, `50ae`, `50bmg`, `545x39`, `556x45`, `57x28`, `58x42`,
`68x51fury`, `762x25`, `762x39`, `762x54`, `792x57`, `9mm`, `rpg_rocket`

**Acessórios (99)** — por família: `ammo_mod_*` (5: fmj, he, hp, i, slug),
`bayonet_*` (2), `grip_*` (11), `laser_*` (5), `extended_mag_*` / `light_extended_mag_*` /
`shotgun_extended_mag_*` / `sniper_extended_mag_*` (12, 3 níveis cada),
`muzzle_brake_*` / `muzzle_choke_*` / `muzzle_compensator_*` / `muzzle_silencer_*` (17),
`scope_*` (13), `sight_*` (19), `stock_*` / `oem_stock_*` (12), `deagle_golden_long_barrel`

**Blocos (3)** — `gun_smith_table`, `ammo_workbench`, `attachment_workbench`

## Estrutura de um gun pack

```
<pack>/
├── gunpack.meta.json                    { "namespace": "tacz" }
├── assets/<ns>/
│   ├── gunpack_info.json                versão, nome, desc, licença, autores, data, url
│   ├── lang/                            nomes e descrições localizados
│   ├── display/                         efeitos visuais da arma (1 por arma)
│   ├── geo_models/                      modelos GeckoLib
│   ├── animations/                      animações
│   ├── textures/                        texturas
│   ├── tacz_sounds/                     sons
│   ├── scripts/                         lógica cliente
│   └── player_animator/                 animações de jogador
└── data/<ns>/
    ├── index/{guns,ammo,attachments,blocks}/   entrada de catálogo (o que aparece no jogo)
    ├── data/{guns,attachments,blocks}/         parâmetros de balanceamento
    ├── scripts/                                lógica servidor (recarga, etc.)
    ├── recipes/                                receitas da bancada de armas
    ├── recipe_filters/                         filtros de receita
    ├── tacz_tags/                              tags do TaCZ
    └── tacz_loot_injectors/                    injeção em loot tables
```

**`index/guns/<arma>.json`** — o catálogo. Aponta para os arquivos de display e data:

```jsonc
{
  "name": "tacz.gun.ak47.name",     // chave de lang
  "display": "tacz:ak47_display",   // arquivo em assets/<ns>/display/
  "data": "tacz:ak47_data",         // arquivo em data/<ns>/data/guns/
  "tooltip": "tacz.gun.ak47.desc",
  "type": "rifle",                  // aba do criativo
  "item_type": "modern_kinetic",    // lógica de disparo/recarga
  "sort": 1                         // ordem no criativo
}
```

**`data/guns/<arma>_data.json`** — o balanceamento. Campos de topo observados no `ak47`:
`ammo` (id da munição), `ammo_amount`, `extended_mag_ammo_amount` (3 níveis),
`script` + `script_param` (tempos de recarga por estado), `can_crawl`, `can_slide`,
`bolt` (`open_bolt` / `closed_bolt` / `manual_action`), `rpm` (teto recomendado 1200),
e o bloco de propriedades do projétil.

> Os JSON do pack usam comentários `//` (JSON5) e a documentação interna do pack padrão
> está em chinês. Wiki oficial: `https://tacwiki.mcma.club/zh/`
