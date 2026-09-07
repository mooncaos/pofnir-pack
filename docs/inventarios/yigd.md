# You're in Grave Danger — censo

`yigd` · jar `youre-in-grave-danger-fabric-2.0.16.jar` · namespace: `yigd` · lado: both ·
depende de Fabric API e Cloth Config ^11 · Ordem #016 (inventário pela Lei 5)

| categoria | nº |
|---|---|
| Blocos | 1 |
| Itens (além do bloco) | 3 |
| Entidades | 0 |
| Encantamentos | 2 |
| Receitas | 2 |
| Tags próprias (`yigd:`) | 8 (5 de item, 3 de bloco) |
| Tags que injeta em outros namespaces | 9 |
| Registros próprios (`data/yigd/custom/`) | 3 |
| Chaves de config (`text.autoconfig`) | 186 |
| Subcomandos de `/yigd` | 9 |

## Blocos (1)

| id | nome | notas |
|---|---|---|
| `yigd:grave` | Grave | o túmulo; loot table própria; declarado `dragon_immune`, `wither_immune`, `mineable/pickaxe`, `c:unbreakable` |

## Itens (3)

| id | nome | função |
|---|---|---|
| `yigd:death_scroll` | Death Scroll | teleporte/consulta ao túmulo (recurso opcional em `extraFeatures.scrollConfig`) |
| `yigd:grave_key` | Grave Key | chave para túmulo de outro jogador (`extraFeatures.graveKeyConfig`) |
| `yigd:grave_compass` | Grave Compass | bússola que aponta o túmulo (`extraFeatures.graveCompassConfig`) |

## Encantamentos (2)

| id | nome | efeito |
|---|---|---|
| `yigd:soulbound` | Soulbound | o item fica com o jogador na morte |
| `yigd:death_sight` | Death Sight | recurso de `extraFeatures.deathSightConfig` |

## Receitas (`data/yigd/recipes/`)

`grave.json`, `death_scroll.json`. Chave, bússola e encantamentos não têm receita própria
(vêm por comando, GUI ou mesa de encantar, conforme `extraFeatures`).

## Tags de item (`yigd:`) (5)

`grave_incompatible`, `loss_immune`, `natural_soulbound`, `natural_vanishing`,
`soulbound_blacklist`.

## Tags de bloco (`yigd:`) (3)

`keep_strict_blacklist`, `replace_grave_blacklist`, `replace_soft_whitelist` — controlam em
que bloco o túmulo pode ser gerado (`useSoftBlockWhitelist` / `useStrictBlockBlacklist`).

## Tags injetadas em outros namespaces (9)

| namespace | tag | efeito |
|---|---|---|
| `minecraft` | `dragon_immune`, `wither_immune`, `mineable/pickaxe` | o túmulo resiste a dragão e wither |
| `c` | `unbreakable` | |
| `ftbchunks` | `edit_whitelist`, `interact_whitelist` | o dono abre o túmulo dentro de claim alheio (relevante: FTB Chunks entrou na mesma ordem) |
| `botania` | `gaia_break_blacklist` | |
| `twilightforest` | `common_protections` | |
| `inventorytabs` | `mod_compat_blacklist` | |

## Registro próprio `data/yigd/custom/` (3)

`grave_areas.json`, `grave_shape.json`, `graveyard.json` — áreas fixas de sepultamento e
formato do túmulo; padrões vazios/neutros.

## Comandos (`/yigd`)

`restore`, `rob`, `delete`, `lock`, `obtain_key`, `obtain_compass`, `view_self`,
`whitelist` (show/add/remove/toggle/set_mode), `latest`. Permissões em `commandConfig`
(12 chaves). GUI de administração com 27 botões (`button.yigd.gui.*`).

## Config — `config/yigd.json` (Cloth AutoConfig, serializador Gson)

186 chaves de opção em 11 seções: `graveConfig` 68, `extraFeatures` 34, `compatConfig` 21,
`inventoryConfig` 19, `commandConfig` 12, `respawnConfig` 9, `graveRendering` 7 (client),
`expConfig` 4, mais `EffectConfig` 5, `ExtraItemDrop` 4 e `MapEntry` 3 (tipos auxiliares).

Calibração canônica em vigor (Ordem #016, Parte C): `graveRobbing.enabled false`,
`graveTimeout.enabled false`, `generateGraveInVoid false` (morte no vazio não gera túmulo e
o mod solta os itens no ponto da morte — somem), Trinkets e Traveler's Backpack em
`PUT_IN_GRAVE`. Compat declarada pelo mod (21 chaves): Accessories, Inventorio, LevelZ,
Numismatic Overhaul, Origins, Traveler's Backpack, Trinkets, Beans' Backpacks, Respawn
Obelisks, Protection API (claims).

## Chaves de lang fora do censo

265 chaves no total: 186 `text.autoconfig` (config), 44 `text.yigd` (mensagens e
comandos), 27 `button.yigd` (GUI), 4 `enchantment.yigd` (2 nomes + 2 descrições), 3
`item.yigd`, 1 `block.yigd`.
