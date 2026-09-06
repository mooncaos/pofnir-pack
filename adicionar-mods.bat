@echo off
REM ============================================
REM  POFNIR — adiciona os mods ancora via packwiz
REM  Requisito: packwiz.exe nesta pasta (github.com/packwiz/packwiz/releases)
REM  Rode: adicionar-mods.bat  (aceite os prompts com Enter)
REM ============================================
REM -- Espinha
packwiz mr add fabric-api
packwiz mr add fabric-language-kotlin
packwiz mr add kubejs
packwiz mr add rhino
packwiz mr add architectury-api
packwiz mr add ftb-quests-fabric
packwiz mr add ftb-teams-fabric
packwiz mr add ftb-library-fabric
packwiz mr add emi
packwiz mr add patchouli
packwiz mr add trinkets
packwiz mr add essential-commands
REM -- Bruxaria (alma)
packwiz mr add bewitchment
packwiz mr add enchanted-witchcraft
packwiz mr add botania
packwiz mr add eldritch-end
packwiz mr add pehkui
REM -- Combate magico
packwiz mr add spell-engine
packwiz mr add spell-power
packwiz mr add wizards
packwiz mr add paladins-and-priests
packwiz mr add invocations
packwiz mr add archers
packwiz mr add rogues
REM -- Steampunk
packwiz mr add create-fabric
packwiz mr add create-steam-n-rails
packwiz mr add valkyrien-skies
packwiz mr add eureka-ships
REM -- Tec
packwiz mr add modern-industrialization
packwiz mr add techreborn
packwiz mr add ad-astra
packwiz mr add ae2
packwiz mr add tacz-refabricated
packwiz mr add pomkots-mechs
packwiz mr add geckolib
REM -- Mundo
packwiz mr add terralith
packwiz mr add lithostitched
packwiz mr add yungs-api
packwiz mr add yungs-better-dungeons
packwiz mr add yungs-better-strongholds
packwiz mr add yungs-better-mineshafts
REM -- Colheita (classes/skills/combate)
packwiz mr add puffish-skills
packwiz mr add origins
packwiz mr add better-combat
packwiz mr add combat-roll
packwiz mr add eldritch-mobs
packwiz mr add mine-cells
packwiz mr add soulslike-weaponry
packwiz mr add bosses-of-mass-destruction
REM -- Fauna & Flora
packwiz mr add alexs-mobs-continued
packwiz mr add naturalist
packwiz mr add creeper-overhaul
packwiz mr add enderman-overhaul
packwiz mr add the-graveyard-fabric
packwiz mr add farmers-delight-refabricated
REM -- Performance & QoL
packwiz mr add sodium
packwiz mr add lithium
packwiz mr add ferrite-core
packwiz mr add modernfix
packwiz mr add iris
packwiz mr add appleskin
packwiz mr add jade
packwiz mr add xaeros-minimap
packwiz mr add xaeros-world-map
packwiz mr add mouse-tweaks
packwiz mr add controlling
echo.
echo ===== FEITO. Rode: packwiz refresh  e depois commit+push =====
pause
