# FallingTree — censo

`fallingtree` · jar `FallingTree-1.20.1-4.3.4.jar` · namespace: `fallingtree` · lado: both
(Modrinth: servidor obrigatório, cliente opcional) · depende de Fabric API ≥ 0.20 ·
Ordem #016 (inventário pela Lei 5)

> **Não registra item, bloco nem entidade.** Derruba a árvore inteira ao quebrar um
> tronco; tudo é regra de config, mais 6 encantamentos opcionais.

| categoria | nº |
|---|---|
| Itens / Blocos / Entidades | 0 |
| Encantamentos | 6 (desligados por padrão: `enchantment.registerEnchant false`) |
| Chaves de config | 40 em 5 grupos |
| Comandos | 1 (`/fallingtree toggle`) |
| Mensagens de chat | 6 |
| Arquivos em `data/` | 0 |

## Encantamentos (6, registro condicional)

| id | nome |
|---|---|
| `fallingtree:chopper` | Chopper |
| `fallingtree:chopper_instantaneous` | Chopper (instantaneous) |
| `fallingtree:chopper_fall_block` | Chopper (fall block) |
| `fallingtree:chopper_fall_all_block` | Chopper (fall all block) |
| `fallingtree:chopper_fall_item` | Chopper (fall item) |
| `fallingtree:chopper_shift_down` | Chopper (shift down) |

Só existem se `enchantment.registerEnchant` / `registerSpecificEnchant` estiverem ligados;
`requireEnchantment` faz o mod exigir o encantamento para derrubar.

## Config (Cloth AutoConfig; 40 chaves)

| grupo | chaves |
|---|---|
| raiz (4) | `sneakMode`, `breakInCreative`, `lootInCreative`, `notificationMode` |
| `trees` (23) | `allowedLogs`, `deniedLogs`, `allowedLeaves`, `deniedLeaves`, `allowedNonDecayLeaves`, `breakMode`, `detectionMode`, `maxScanSize`, `maxSize`, `maxSizeAction`, `maxLeafDistanceFromLog`, `breakOrder`, `minimumLeavesAroundRequired`, `includePersistentLeavesInRequiredCount`, `treeBreaking`, `leavesBreaking`, `leavesBreakingForceRadius`, `allowMixedLogs`, `breakNetherTreeWarts`, `breakMangroveRoots`, `searchAreaRadius`, `allowedAdjacentBlocks`, `adjacentStopMode` |
| `tools` (8) | `allowed`, `denied`, `preserve`, `ignoreTools`, `damageMultiplicand`, `damageRounding`, `speedMultiplicand`, `forceToolUsage` |
| `player` (1) | `allowedTags` |
| `enchantment` (4) | `registerEnchant`, `registerSpecificEnchant`, `hideEnchant`, `requireEnchantment` |

Nenhum config distribuído pelo pack: valores de fábrica (detecção por tag de tronco,
quebra instantânea, sem exigir encantamento).

## Comandos e mensagens

`/fallingtree toggle` (liga/desliga por jogador: "FallingTree enabled/disabled").
Mensagens: árvore grande demais para varrer, grande demais para quebrar de uma vez,
ferramenta prestes a quebrar, busca abortada (bloco adjacente não permitido), uso de
ferramenta forçado.

## Chaves de lang fora do censo

108 no total: 88 `text.autoconfig` (config e tooltips), 12 `enchantment.fallingtree`
(6 nomes + 6 descrições), 6 `chat.fallingtree`, 2 `command.fallingtree`.
