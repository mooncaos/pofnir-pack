# POFNIR — calibracao de mundo (Ordem #011). Roda a cada load do mundo.
# Fixa a frequencia de avistamento do From The Fog em 3_rare (10% do padrao 2_uncommon).
# Fonte: data/watching/functions/config/sighting_chance/3_rare.mcfunction do FTF 1.9.2,
# linha 1. A linha 2 daquele arquivo abre o menu clicavel e foi omitida de proposito.
# So esta pontuacao e tocada. Nenhuma outra opcao do FTF (Lei 1).

# 1) aplica agora (vale se o reload do FTF ja rodou neste load)
scoreboard players set sightingChanceConfig ftf.configOptions 3

# 2) aplica de novo 2 ticks depois: funcoes agendadas rodam apos TODOS os load do tick,
#    entao o reload do FTF (que cria ftf.configOptions e aplica o default 2 se ausente)
#    ja passou, seja qual for a ordem dos datapacks. Idempotente: e um set.
schedule function pofnir_calibracao:aplicar 2t
