# FTB Chunks — censo

`ftb-chunks-fabric` · jar `ftb-chunks-fabric-2001.3.8.jar` · namespace: `ftbchunks` · lado:
both · depende de Architectury ≥ 9.1.12, FTB Library ≥ 2001.2.9, FTB Teams ≥ 2001.3.1 ·
Ordem #016 (inventário pela Lei 5)

> **Não registra item, bloco nem entidade.** É sistema puro: claims por chunk, force-load,
> mapa/minimapa e waypoints, com proteção por time (FTB Teams).

| categoria | nº |
|---|---|
| Itens / Blocos / Entidades | 0 |
| Tags próprias (`ftbchunks:`) | 6 |
| Teclas (keybinds) | 5 |
| Propriedades de time (config por equipe) | 14 |
| Chaves de lang | 282 |
| Texturas (ícones de mapa) | 261 |
| Paletas de cor de mapa para outros mods | 15 namespaces |

## Tags (`data/ftbchunks/tags/`) (6)

| tipo | tag | função |
|---|---|---|
| blocos | `edit_whitelist` | blocos que qualquer um pode editar em claim alheio |
| blocos | `interact_whitelist` | blocos com que qualquer um pode interagir em claim alheio |
| entidades | `entity_interact_whitelist` | entidades interagíveis em claim alheio |
| entidades | `entity_mob_griefing_blacklist` | mobs cujo griefing é bloqueado |
| itens | `right_click_blacklist`, `right_click_whitelist` | itens cujo uso é bloqueado/permitido em claim alheio |

O yigd (mesma ordem) injeta o túmulo nas duas whitelists de bloco.

## Teclas (5)

`key.ftbchunks.map` (abrir mapa), `claim_manager`, `add_waypoint`, `waypoint_manager`,
`toggle_minimap`.

## Propriedades de time (`ftbteamsconfig.ftbchunks.*`) (14)

`allow_fake_players`, `allow_named_fake_players`, `allow_fake_players_by_id`,
`allow_explosions`, `allow_pvp`, `allow_mob_griefing`, `block_edit_and_interact_mode`,
`block_edit_mode`, `block_interact_mode`, `entity_interact_mode`,
`nonliving_entity_attack_mode`, `minimap_mode`, `location_mode`, `claim_visibility`.
Padrões em `ftbchunks.team_prop_defaults` (14 chaves de lang).

## Config de mundo (`FTBChunksWorldConfig`, strings do bytecode)

`max_claimed_chunks`, `max_force_loaded_chunks`, `hard_team_claim_limit`,
`hard_team_force_limit`, `claim_dimension_blacklist`, `claim_dimension_whitelist`,
`no_wilderness`, `no_wilderness_dimensions`, `chunk_load_offline`, `force_load_mode`,
`max_idle_days_before_unclaim`, `max_idle_days_before_unforce`, `disable_protection`,
`protect_unknown_explosions`, `allow_fake_players`, `pvp_mode`, `require_game_stage`,
`force_disable_minimap`, `long_range_tracker_interval`, `max_prevented_log_age`,
`waypoint_sharing` (`_party`, `_players`, `_server`), `team_prop_defaults`. Nenhum config
distribuído pelo pack: valores de fábrica.

## Mapa

Grupos de lang: `ftbchunks.minimap` 42, `ftbchunks.gui` 30, `minimap.info` 14,
`ftbchunks.waypoints` 12, `ftbchunks.appearance` 12, `ftbchunks.claim_result` 9,
`ftbchunks.advanced` 9, `ftbchunks.biome_blend` 8. Traz `ftbchunks_block_colors.json` para
`minecraft` e 14 mods de terceiros (`abundance`, `ars_nouveau`, `autumnity`, `betterendforge`,
`biomesoplenty`, `byg`, `environmental`, `integrateddynamics`, `mininggadgets`, `myrtrees`,
`pneumaticcraft`, `psi`, `traverse`) — nenhum deles está no pack; sem efeito.
