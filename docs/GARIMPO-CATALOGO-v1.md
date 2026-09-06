# Garimpo-Catálogo v1 — estruturas-fonte por capital (dados reais, extraídos dos .nbt)

## MEDIEVAL — fontes: YUNG's Better Strongholds (LGPL-3 ✅) e The Graveyard (GPL-3 ✅)
| Estrutura | Tamanho | Blocos | Paleta principal | Uso proposto |
|---|---|---|---|---|
| grand_library.nbt (YUNG) | 35x24x43 | 27.262 | stone_bricks, bookshelf | Templo do Fundamento / biblioteca |
| junction_lg.nbt (YUNG) | 31x24x31 | 18.662 | stone_bricks, walls | núcleo da Casa dos Ofícios |
| start_room.nbt (Graveyard) | 27x20x27 | 14.580 | deepslate_tiles/bricks | o Pilar Ritual (claustro sombrio) |
| room_04.nbt (Graveyard) | 29x15x29 | 12.615 | deepslate + cracked | cripta do marco da fratura |
| haunted_house_01.nbt (Graveyard) | 33x29x29 | 27.753 | dark_oak, spruce | Torre da Bruxa |
| portal_room.nbt (YUNG) | 25x14x19 | 6.250 | stone_bricks, lava->trocar | Portal do Limiar (reprocessado) |
- Veredito: paleta bate com "a que rezou" (pedra escura + deepslate + carvalho). Licenças permitem uso/modificação com atribuição.

## STEAMPUNK — fonte: Create oficial (CÓDIGO MIT, ASSETS ARR ⚠️)
| Estrutura | Tamanho | Nota |
|---|---|---|
| potion_brewing / belt_coaster / repackager | ~10x7x9 | schematics de ponder: PEQUENOS demais pra prédios |
- Veredito: os .nbt do Create são vinhetas de tutorial, não arquitetura, E os assets são All Rights Reserved — NÃO copiar estruturas do repo. Caminho correto: construir os prédios steampunk COM blocos Create no jogo (uso normal do mod, permitido) sobre bases neutras. Fontes de base: createmod.com/schematics (checar licença por autor) ou construção da guilda. O Cais Aéreo eu desenho do zero (caixas de colisão limpas pro Eureka: nada de blocos parciais na zona de acoplagem).

## TEC — fonte: Ad Astra (Terrarium License — permite modpacks, checado ✅)
| Estrutura | Tamanho | Blocos | Paleta | Uso proposto |
|---|---|---|---|---|
| space_station.nbt | 31x32x31 | 30.752 | iron_plating, iron_pillar, vidro preto | Laboratório Central (núcleo) |
| lunar_tower.nbt | 15x42x15 | 9.186 | moon_stone polido | torre do grid / emissor da barreira |
| boss_room.nbt | 48x12x35 | 14.092 | moon_pillar, polished | Hangar de Manutenção (mechs Pomkots expostos) |
| venus_tower.nbt | 16x48x15 | 2.980 | blackstone, vidro preto | o setor em blackout (marco da fratura) |
- Veredito: paleta "a que calculou" nasce pronta; hangar de 48x35 comporta mech com folga (validar hitbox Pomkots no pouso).

## Zoneamento do Trio de Risco (regra de engenharia)
- Cais Aéreo (steampunk): plataforma de acoplagem PLANA, sem slabs/stairs/fences na zona de contato; raio livre de 20 blocos acima; Eureka assembla apenas o que está fisicamente conectado — bordas da doca em bloco cheio
- Hangar (tec): pé-direito mínimo 14 blocos p/ mechs Pomkots; piso em bloco cheio; nada de estrutura sobre a bounding box de spawn
- Estruturas 1.20.1: todos os .nbt acima são formato structure template nativo — compatíveis com Structure Processors do datapack (vou usar processors pra: trocar paletas, envelhecer, inserir a fratura)

## Pendência de garimpo
- Hogwarts/castelo gótico GRANDE (a muralha e o castelo da medieval): esquemas públicos de Hogwarts em geral são ARR/sem licença — seguir caça por bases CC0/CC-BY em minecraft-schematics e planetminecraft com filtro de licença, OU erguer pela guilda sobre o kit YUNG+Graveyard
