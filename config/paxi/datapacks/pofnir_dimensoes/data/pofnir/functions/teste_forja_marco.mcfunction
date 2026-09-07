# POFNIR - Ordem #018, piloto da Forja Automatica.
# Marco de teste: plataforma 9x9 de deepslate polida com um bloco de ouro no centro e 4 lanternas.
# Rode em pe no ponto da obra (a Forja usa `execute in <dim> positioned x y z run function`).
fill ~-4 ~-1 ~-4 ~4 ~-1 ~4 minecraft:polished_deepslate
fill ~-4 ~ ~-4 ~4 ~ ~4 minecraft:air
setblock ~ ~-1 ~ minecraft:gold_block
setblock ~-4 ~ ~-4 minecraft:lantern
setblock ~4 ~ ~-4 minecraft:lantern
setblock ~-4 ~ ~4 minecraft:lantern
setblock ~4 ~ ~4 minecraft:lantern
setblock ~ ~ ~ minecraft:oak_sign[rotation=0]{front_text:{messages:['{"text":"POFNIR"}','{"text":"Forja Automatica"}','{"text":"Ordem #018"}','{"text":"marco de teste"}']}}
tellraw @a {"text":"[POFNIR] Forja Automatica: marco de teste assado.","color":"light_purple"}
