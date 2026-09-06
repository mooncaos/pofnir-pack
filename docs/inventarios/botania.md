# Botania — censo

`botania` · jar `Botania-1.20.1-455-FABRIC.jar` · namespace(s): `botania`, `emi`, `modern_industrialization`, `quark`, `quilt`, `trinkets`

> O jar traz `lang/pt_br.json`. Nomes abaixo são do `en_us` (batem com wiki/receitas).

| categoria | nº |
|---|---|
| Entidades | 19 |
| Blocos | 675 |
| Itens | 299 |
| Efeitos | 6 |
| Atributos | 1 |

## Entidades (19)

| ID | Nome | Tipo |
|---|---|---|
| `botania:babylon_weapon` | Treasury Weapon | — |
| `botania:corporea_spark` | Corporea Spark | — |
| `botania:doppleganger` | Guardian of Gaia | **boss** |
| `botania:ender_air` | Ender Air Cloud | — |
| `botania:ender_air_bottle` | Bottle of Ender Air | — |
| `botania:falling_star` | Falling Star | — |
| `botania:flame_ring` | Flame Ring | — |
| `botania:magic_landmine` | Gaia Trap | — |
| `botania:magic_missile` | Magic Missile | — |
| `botania:mana_burst` | Mana Burst | — |
| `botania:mana_storm` | Manastorm Epicenter | — |
| `botania:pink_wither` | Pink Wither | — |
| `botania:pixie` | Pixie | — |
| `botania:player_mover` | Luminizer Beam | — |
| `botania:pool_minecart` | Mana Pool Minecart | — |
| `botania:spark` | Spark | — |
| `botania:thorn_chakram` | Thorn Chakram | — |
| `botania:thrown_item` | Thrown Item | — |
| `botania:vine_ball` | Vine Ball | — |

> Tipo: lido do `MobCategory` no bytecode de registro do mod. **boss** vem da tag `c:bosses` declarada pelo próprio mod. `—` = registro não pareado pelo extrator.

## Blocos (675)

| ID | Nome |
|---|---|
| `botania:<cor>_buried_petals` | 16 cores (ex.: Buried Red Petal) |
| `botania:<cor>_double_flower` | 16 cores (ex.: Tall Mystical Cyan Flower) |
| `botania:<cor>_floating_flower` | 16 cores (ex.: Floating Gray Flower) |
| `botania:<cor>_mushroom` | 16 cores (ex.: Orange Shimmering Mushroom) |
| `botania:<cor>_mystical_flower` | 16 cores (ex.: Mystical Green Flower) |
| `botania:<cor>_pavement` | 6 cores (ex.: Yellow Portuguese Pavement) |
| `botania:<cor>_pavement_slab` | 6 cores (ex.: Green Portuguese Pavement Slab) |
| `botania:<cor>_pavement_stairs` | 6 cores (ex.: Red Portuguese Pavement Stairs) |
| `botania:<cor>_petal_block` | 16 cores (ex.: Gray Petal Block) |
| `botania:<cor>_shiny_flower` | 16 cores (ex.: Glimmering Yellow Flower) |
| `botania:potted_<cor>_mushroom` | 16 cores (ex.: Potted Orange Shimmering Mushroom) |
| `botania:potted_<cor>_mystical_flower` | 16 cores (ex.: Potted Mystical Gray Flower) |
| `botania:potted_<cor>_shiny_flower` | 16 cores (ex.: Potted Glimmering White Flower) |
| `botania:<x>_block` | 11 variantes — blaze, cacophonium, cell, corporea, dragonstone, elementium, ender_eye, mana_diamond, manasteel, terrasteel, tiny_planet |
| `botania:<x>_bricks` | 20 variantes — chiseled_livingrock, chiseled_metamorphic_desert, chiseled_metamorphic_forest, chiseled_metamorphic_fungal, chiseled_metamorphic_mesa, chiseled_metamorphic_mountain, chiseled_metamorphic_plains, chiseled_metamorphic_swamp, chiseled_metamorphic_taiga, cracked_livingrock, livingrock, metamorphic_desert, metamorphic_forest, metamorphic_fungal, metamorphic_mesa, metamorphic_mountain, metamorphic_plains, metamorphic_swamp, … (+2) |
| `botania:<x>_chibi` | 30 variantes — agricarnation, bellethorn, bubbell, clayconia, floating_agricarnation, floating_bellethorn, floating_bubbell, floating_clayconia, floating_hopperhock, floating_jiyuulia, floating_marimorphosis, floating_rannuncarpus, floating_solegnolia, floating_tangleberrie, hopperhock, jiyuulia, marimorphosis, potted_agricarnation, … (+12) |
| `botania:<x>_cobblestone` | 8 variantes — metamorphic_desert, metamorphic_forest, metamorphic_fungal, metamorphic_mesa, metamorphic_mountain, metamorphic_plains, metamorphic_swamp, metamorphic_taiga |
| `botania:<x>_grass` | 6 variantes — dry, golden, infused, mutated, scorched, vivid |
| `botania:<x>_log` | 8 variantes — dreamwood, glimmering_dreamwood, glimmering_livingwood, glimmering_stripped_dreamwood, glimmering_stripped_livingwood, livingwood, stripped_dreamwood, stripped_livingwood |
| `botania:<x>_motif` | 6 variantes — daybloom, hydroangeas, nightshade, potted_daybloom, potted_hydroangeas, potted_nightshade |
| `botania:<x>_pillar` | 7 variantes — blaze_quartz, dark_quartz, elf_quartz, lavender_quartz, mana_quartz, red_quartz, sunny_quartz |
| `botania:<x>_quartz` | 14 variantes — blaze, chiseled_blaze, chiseled_dark, chiseled_elf, chiseled_lavender, chiseled_mana, chiseled_red, chiseled_sunny, dark, elf, lavender, mana, red, sunny |
| `botania:<x>_relay` | 6 variantes — detector_light, fork_light, light, piston, red_string, toggle_light |
| `botania:<x>_slab` | 45 variantes — blaze_quartz, corporea, corporea_brick, dark_quartz, dreamwood, dreamwood_planks, elf_quartz, lavender_quartz, livingrock, livingrock_bricks, livingwood, livingwood_planks, mana_quartz, metamorphic_desert_bricks, metamorphic_desert_cobblestone, metamorphic_desert_stone, metamorphic_forest_bricks, metamorphic_forest_cobblestone, … (+27) |
| `botania:<x>_stairs` | 45 variantes — blaze_quartz, corporea, corporea_brick, dark_quartz, dreamwood, dreamwood_planks, elf_quartz, lavender_quartz, livingrock, livingrock_bricks, livingwood, livingwood_planks, mana_quartz, metamorphic_desert_bricks, metamorphic_desert_cobblestone, metamorphic_desert_stone, metamorphic_forest_bricks, metamorphic_forest_cobblestone, … (+27) |
| `botania:<x>_stone` | 8 variantes — metamorphic_desert, metamorphic_forest, metamorphic_fungal, metamorphic_mesa, metamorphic_mountain, metamorphic_plains, metamorphic_swamp, metamorphic_taiga |
| `botania:<x>_wall` | 33 variantes — corporea_brick, dreamwood, livingrock, livingrock_bricks, livingwood, metamorphic_desert_bricks, metamorphic_desert_cobblestone, metamorphic_desert_stone, metamorphic_forest_bricks, metamorphic_forest_cobblestone, metamorphic_forest_stone, metamorphic_fungal_bricks, metamorphic_fungal_cobblestone, metamorphic_fungal_stone, metamorphic_mesa_bricks, metamorphic_mesa_cobblestone, metamorphic_mesa_stone, metamorphic_mountain_bricks, … (+15) |
| `botania:abstruse_platform` | Abstruse Platform |
| `botania:agricarnation` | Agricarnation |
| `botania:alchemy_catalyst` | Alchemy Catalyst |
| `botania:alfheim_portal` | Elven Gateway Core |
| `botania:animated_torch` | Animated Torch |
| `botania:apothecary_deepslate` | Deepslate Petal Apothecary |
| `botania:apothecary_default` | Petal Apothecary |
| `botania:apothecary_desert` | Solite Petal Apothecary |
| `botania:apothecary_forest` | Fuchsite Petal Apothecary |
| `botania:apothecary_fungal` | Mycelite Petal Apothecary |
| `botania:apothecary_livingrock` | Livingrock Petal Apothecary |
| `botania:apothecary_mesa` | Rosy Talc Petal Apothecary |
| `botania:apothecary_mossy` | Mossy Petal Apothecary |
| `botania:apothecary_mountain` | Gneiss Petal Apothecary |
| `botania:apothecary_plains` | Talc Petal Apothecary |
| `botania:apothecary_swamp` | Cataclasite Petal Apothecary |
| `botania:apothecary_taiga` | Lunite Petal Apothecary |
| `botania:avatar` | Livingwood Avatar |
| `botania:azulejo_0` | Azulejo |
| `botania:azulejo_1` | Azulejo |
| `botania:azulejo_10` | Azulejo |
| `botania:azulejo_11` | Azulejo |
| `botania:azulejo_12` | Azulejo |
| `botania:azulejo_13` | Azulejo |
| `botania:azulejo_14` | Azulejo |
| `botania:azulejo_15` | Azulejo |
| `botania:azulejo_2` | Azulejo |
| `botania:azulejo_3` | Azulejo |
| `botania:azulejo_4` | Azulejo |
| `botania:azulejo_5` | Azulejo |
| `botania:azulejo_6` | Azulejo |
| `botania:azulejo_7` | Azulejo |
| `botania:azulejo_8` | Azulejo |
| `botania:azulejo_9` | Azulejo |
| `botania:bellethorn` | Bellethorne |
| `botania:bellows` | Manatide Bellows |
| `botania:bergamute` | Bergamute |
| `botania:bifrost` | Temporary Bifrost Block |
| `botania:bifrost_pane` | Bifrost Pane |
| `botania:bifrost_perm` | Bifrost Block |
| `botania:brewery` | Botanical Brewery |
| `botania:bubbell` | Bubbell |
| `botania:clayconia` | Clayconia |
| `botania:cocoon` | Cocoon of Caprice |
| `botania:conjuration_catalyst` | Conjuration Catalyst |
| `botania:corporea_brick` | Corporea Brick |
| `botania:corporea_crystal_cube` | Corporea Crystal Cube |
| `botania:corporea_funnel` | Corporea Funnel |
| `botania:corporea_index` | Corporea Index |
| `botania:corporea_interceptor` | Corporea Interceptor |
| `botania:corporea_retainer` | Corporea Retainer |
| `botania:crafty_crate` | Crafty Crate |
| `botania:creative_pool` | The Everlasting Guilty Pool |
| `botania:daffomill` | Daffomill |
| `botania:dandelifeon` | Dandelifeon |
| `botania:diluted_pool` | Diluted Mana Pool |
| `botania:dreadthorn` | Dreadthorne |
| `botania:dreamwood` | Dreamwood |
| `botania:dreamwood_fence` | Dreamwood Fence |
| `botania:dreamwood_fence_gate` | Dreamwood Fence Gate |
| `botania:dreamwood_planks` | Dreamwood Planks |
| `botania:drum_canopy` | Drum of the Canopy |
| `botania:drum_gathering` | Drum of the Gathering |
| `botania:drum_wild` | Drum of the Wild |
| `botania:elf_glass` | Alfglass |
| `botania:elf_glass_pane` | Alfglass Pane |
| `botania:elven_spreader` | Elven Mana Spreader |
| `botania:enchanted_soil` | Enchanted Soil |
| `botania:enchanter` | Mana Enchanter |
| `botania:endoflame` | Endoflame |
| `botania:entropinnyum` | Entropinnyum |
| `botania:exoflame` | Exoflame |
| `botania:fabulous_pool` | Fabulous Mana Pool |
| `botania:fallen_kanade` | Fallen Kanade |
| `botania:fel_pumpkin` | Fel Pumpkin |
| `botania:floating_agricarnation` | Floating Agricarnation |
| `botania:floating_bellethorn` | Floating Bellethorne |
| `botania:floating_bergamute` | Floating Bergamute |
| `botania:floating_bubbell` | Floating Bubbell |
| `botania:floating_clayconia` | Floating Clayconia |
| `botania:floating_daffomill` | Floating Daffomill |
| `botania:floating_dandelifeon` | Floating Dandelifeon |
| `botania:floating_dreadthorn` | Floating Dreadthorne |
| `botania:floating_endoflame` | Floating Endoflame |
| `botania:floating_entropinnyum` | Floating Entropinnyum |
| `botania:floating_exoflame` | Floating Exoflame |
| `botania:floating_fallen_kanade` | Floating Fallen Kanade |
| `botania:floating_gourmaryllis` | Floating Gourmaryllis |
| `botania:floating_heisei_dream` | Floating Heisei Dream |
| `botania:floating_hopperhock` | Floating Hopperhock |
| `botania:floating_hyacidus` | Floating Hyacidus |
| `botania:floating_hydroangeas` | Floating Hydroangeas |
| `botania:floating_jaded_amaranthus` | Floating Jaded Amaranthus |
| `botania:floating_jiyuulia` | Floating Jiyuulia |
| `botania:floating_kekimurus` | Floating Kekimurus |
| `botania:floating_labellia` | Floating Labellia |
| `botania:floating_loonium` | Floating Loonium |
| `botania:floating_manastar` | Floating Manastar |
| `botania:floating_marimorphosis` | Floating Marimorphosis |
| `botania:floating_medumone` | Floating Medumone |
| `botania:floating_munchdew` | Floating Munchdew |
| `botania:floating_narslimmus` | Floating Narslimmus |
| `botania:floating_orechid` | Floating Orechid |
| `botania:floating_orechid_ignem` | Floating Orechid Ignem |
| `botania:floating_pollidisiac` | Floating Pollidisiac |
| `botania:floating_pure_daisy` | Floating Pure Daisy |
| `botania:floating_rafflowsia` | Floating Rafflowsia |
| `botania:floating_rannuncarpus` | Floating Rannuncarpus |
| `botania:floating_rosa_arcana` | Floating Rosa Arcana |
| `botania:floating_shulk_me_not` | Floating Shulk Me Not |
| `botania:floating_solegnolia` | Floating Solegnolia |
| `botania:floating_spectranthemum` | Floating Spectranthemum |
| `botania:floating_spectrolus` | Floating Spectrolus |
| `botania:floating_tangleberrie` | Floating Tangleberrie |
| `botania:floating_thermalily` | Floating Thermalily |
| `botania:floating_tigerseye` | Floating Tigerseye |
| `botania:floating_vinculotus` | Floating Vinculotus |
| `botania:forest_eye` | Eye of the Ancients |
| `botania:framed_dreamwood` | Framed Dreamwood Planks |
| `botania:framed_livingwood` | Framed Livingwood Planks |
| `botania:gaia_head` | Gaia Guardian's Head |
| `botania:gaia_pylon` | Gaia Pylon |
| `botania:gaia_spreader` | Gaia Mana Spreader |
| `botania:ghost_rail` | Spectral Rail |
| `botania:glimmering_dreamwood` | Glimmering Dreamwood |
| `botania:glimmering_livingwood` | Glimmering Livingwood |
| `botania:glimmering_stripped_dreamwood` | Glimmering Stripped Dreamwood |
| `botania:glimmering_stripped_livingwood` | Glimmering Stripped Livingwood |
| `botania:gourmaryllis` | Gourmaryllis |
| `botania:heisei_dream` | Heisei Dream |
| `botania:hopperhock` | Hopperhock |
| `botania:hourglass` | Hovering Hourglass |
| `botania:hyacidus` | Hyacidus |
| `botania:hydroangeas` | Hydroangeas |
| `botania:incense_plate` | Incense Plate |
| `botania:infrangible_platform` | Infrangible Platform |
| `botania:jaded_amaranthus` | Jaded Amaranthus |
| `botania:jiyuulia` | Jiyuulia |
| `botania:kekimurus` | Kekimurus |
| `botania:labellia` | Labellia |
| `botania:light_launcher` | Luminizer Launcher |
| `botania:livingrock` | Livingrock |
| `botania:livingrock_slate` | Livingrock Slate |
| `botania:livingwood` | Livingwood |
| `botania:livingwood_fence` | Livingwood Fence |
| `botania:livingwood_fence_gate` | Livingwood Fence Gate |
| `botania:livingwood_planks` | Livingwood Planks |
| `botania:loonium` | Loonium |
| `botania:mana_bomb` | Manastorm Charge |
| `botania:mana_detector` | Mana Detector |
| `botania:mana_distributor` | Mana Splitter |
| `botania:mana_flame` | Mana Flash |
| `botania:mana_fluxfield` | Mana Fluxfield |
| `botania:mana_glass` | Managlass |
| `botania:mana_glass_pane` | Managlass Pane |
| `botania:mana_pool` | Mana Pool |
| `botania:mana_pylon` | Mana Pylon |
| `botania:mana_spreader` | Mana Spreader |
| `botania:mana_void` | Mana Void |
| `botania:manastar` | Manastar |
| `botania:marimorphosis` | Marimorphosis |
| `botania:medumone` | Medumone |
| `botania:mossy_dreamwood_planks` | Mossy Dreamwood Planks |
| `botania:mossy_livingwood_planks` | Mossy Livingwood Planks |
| `botania:munchdew` | Munchdew |
| `botania:narslimmus` | Narslimmus |
| `botania:natura_pylon` | Natura Pylon |
| `botania:open_crate` | Open Crate |
| `botania:orechid` | Orechid |
| `botania:orechid_ignem` | Orechid Ignem |
| `botania:pattern_framed_dreamwood` | Pattern Framed Dreamwood Planks |
| `botania:pattern_framed_livingwood` | Pattern Framed Livingwood Planks |
| `botania:polished_livingrock` | Polished Livingrock |
| `botania:pollidisiac` | Pollidisiac |
| `botania:potted_agricarnation` | Potted Agricarnation |
| `botania:potted_bellethorn` | Potted Bellethorne |
| `botania:potted_bergamute` | Potted Bergamute |
| `botania:potted_bubbell` | Potted Bubbell |
| `botania:potted_clayconia` | Potted Clayconia |
| `botania:potted_daffomill` | Potted Daffomill |
| `botania:potted_dandelifeon` | Potted Dandelifeon |
| `botania:potted_dreadthorn` | Potted Dreadthorne |
| `botania:potted_endoflame` | Potted Endoflame |
| `botania:potted_entropinnyum` | Potted Entropinnyum |
| `botania:potted_exoflame` | Potted Exoflame |
| `botania:potted_fallen_kanade` | Potted Fallen Kanade |
| `botania:potted_gourmaryllis` | Potted Gourmaryllis |
| `botania:potted_heisei_dream` | Potted Heisei Dream |
| `botania:potted_hopperhock` | Potted Hopperhock |
| `botania:potted_hyacidus` | Potted Hyacidus |
| `botania:potted_hydroangeas` | Potted Hydroangeas |
| `botania:potted_jaded_amaranthus` | Potted Jaded Amaranthus |
| `botania:potted_jiyuulia` | Potted Jiyuulia |
| `botania:potted_kekimurus` | Potted Kekimurus |
| `botania:potted_labellia` | Potted Labellia |
| `botania:potted_loonium` | Potted Loonium |
| `botania:potted_manastar` | Potted Manastar |
| `botania:potted_marimorphosis` | Potted Marimorphosis |
| `botania:potted_medumone` | Potted Medumone |
| `botania:potted_munchdew` | Potted Munchdew |
| `botania:potted_narslimmus` | Potted Narslimmus |
| `botania:potted_orechid` | Potted Orechid |
| `botania:potted_orechid_ignem` | Potted Orechid Ignem |
| `botania:potted_pollidisiac` | Potted Pollidisiac |
| `botania:potted_pure_daisy` | Potted Pure Daisy |
| `botania:potted_rafflowsia` | Potted Rafflowsia |
| `botania:potted_rannuncarpus` | Potted Rannuncarpus |
| `botania:potted_rosa_arcana` | Potted Rosa Arcana |
| `botania:potted_shulk_me_not` | Potted Shulk Me Not |
| `botania:potted_solegnolia` | Potted Solegnolia |
| `botania:potted_spectranthemum` | Potted Spectranthemum |
| `botania:potted_spectrolus` | Potted Spectrolus |
| `botania:potted_tangleberrie` | Potted Tangleberrie |
| `botania:potted_thermalily` | Potted Thermalily |
| `botania:potted_tigerseye` | Potted Tigerseye |
| `botania:potted_vinculotus` | Potted Vinculotus |
| `botania:prism` | Mana Prism |
| `botania:pump` | Mana Pump |
| `botania:pure_daisy` | Pure Daisy |
| `botania:rafflowsia` | Rafflowsia |
| `botania:rannuncarpus` | Rannuncarpus |
| `botania:red_string_comparator` | Red Stringed Comparator |
| `botania:red_string_container` | Red Stringed Container |
| `botania:red_string_dispenser` | Red Stringed Dispenser |
| `botania:red_string_fertilizer` | Red Stringed Nutrifier |
| `botania:red_string_interceptor` | Red Stringed Interceptor |
| `botania:redstone_spreader` | Pulse Mana Spreader |
| `botania:root` | Living Root |
| `botania:rosa_arcana` | Rosa Arcana |
| `botania:runic_altar` | Runic Altar |
| `botania:shimmerrock` | Shimmerrock |
| `botania:shimmerwood_planks` | Shimmerwood Planks |
| `botania:shulk_me_not` | Shulk Me Not |
| `botania:solegnolia` | Solegnolia |
| `botania:spark_changer` | Spark Tinkerer |
| `botania:spawner_claw` | Life Imbuer |
| `botania:spectral_platform` | Spectral Platform |
| `botania:spectranthemum` | Spectranthemum |
| `botania:spectrolus` | Spectrolus |
| `botania:starfield` | Starfield Creator |
| `botania:stripped_dreamwood` | Stripped Dreamwood |
| `botania:stripped_livingwood` | Stripped Livingwood |
| `botania:tangleberrie` | Tangleberrie |
| `botania:terra_plate` | Terrestrial Agglomeration Plate |
| `botania:teru_teru_bozu` | Teru Teru Bozu |
| `botania:thermalily` | Thermalily |
| `botania:tigerseye` | Tigerseye |
| `botania:tiny_potato` | Tiny Potato |
| `botania:turntable` | Spreader Turntable |
| `botania:vinculotus` | Vinculotus |

## Itens (299)

| ID | Nome |
|---|---|
| `botania:<cor>_petal` | 16 cores (ex.: Mystical Orange Petal) |
| `botania:<x>_pendant` | 6 variantes — blood, cloud, ice, lava, super_cloud, super_lava |
| `botania:<x>_ring` | 12 variantes — aura, dodge, loki, magnet, mana, mining, odin, pixie, reach, swap, thor, water |
| `botania:<x>_rod` | 13 variantes — cobble, dirt, divining, exchange, fire, gravity, missile, rainbow, skydirt, smelt, terraform, tornado, water |
| `botania:<x>_seeds` | 9 variantes — dry, golden, grass, infused, mutated, mycelium, podzol, scorched, vivid |
| `botania:ancient_will_ahrim` | Will of Ahrim |
| `botania:ancient_will_dharok` | Will of Dharok |
| `botania:ancient_will_guthan` | Will of Guthan |
| `botania:ancient_will_karil` | Will of Karil |
| `botania:ancient_will_torag` | Will of Torag |
| `botania:ancient_will_verac` | Will of Verac |
| `botania:astrolabe` | Worldshaper's Astrolabe |
| `botania:aura_ring_greater` | Greater Band of Aura |
| `botania:auto_crafting_halo` | Manufactory Halo |
| `botania:balance_cloak` | Cloak of Balance |
| `botania:bauble_box` | Trinket Case |
| `botania:black_hole_talisman` | Black Hole Talisman |
| `botania:black_lotus` | Black Lotus |
| `botania:blacker_lotus` | Blacker Lotus |
| `botania:brew_flask` | Flask of %s (%s) |
| `botania:brew_vial` | Vial of %s (%s) |
| `botania:cacophonium` | Cacophonium |
| `botania:clip` | Lens Clip |
| `botania:composite_lens` | Composite Lens: %s %s |
| `botania:corporea_spark` | Corporea Spark |
| `botania:corporea_spark_creative` | Creative Corporea Spark |
| `botania:corporea_spark_master` | Master Corporea Spark |
| `botania:cosmetic_alien_antenna` | Alien Antenna |
| `botania:cosmetic_anaglyph_glasses` | Anaglyph Glasses |
| `botania:cosmetic_ancient_mask` | Ancient Mask |
| `botania:cosmetic_black_bowtie` | Black Bowtie |
| `botania:cosmetic_black_tie` | Black Tie |
| `botania:cosmetic_blue_butterfly` | Blue Butterfly |
| `botania:cosmetic_botanist_emblem` | Botanist Emblem |
| `botania:cosmetic_cat_ears` | Cat Ears |
| `botania:cosmetic_clock_eye` | Clock Eye |
| `botania:cosmetic_devil_horns` | Devil Horns |
| `botania:cosmetic_devil_tail` | Devil Tail |
| `botania:cosmetic_eerie_mask` | Eerie Mask |
| `botania:cosmetic_engineer_goggles` | Engineer Goggles |
| `botania:cosmetic_eyepatch` | Eyepatch |
| `botania:cosmetic_four_leaf_clover` | Four-Leafed Clover |
| `botania:cosmetic_googly_eyes` | Googly Eyes |
| `botania:cosmetic_groucho_glasses` | Groucho Glasses |
| `botania:cosmetic_hyper_plus` | Hyper Plus |
| `botania:cosmetic_kamui_eye` | Kamui Eye |
| `botania:cosmetic_lusitanic_shield` | Lusitanic Shield |
| `botania:cosmetic_orange_shades` | Orange Shades |
| `botania:cosmetic_pink_flower_bud` | Pink Flower Bud |
| `botania:cosmetic_polka_dotted_bows` | Polka-Dotted Bows |
| `botania:cosmetic_puffy_scarf` | Puffy Scarf |
| `botania:cosmetic_questgiver_mark` | Questgiver Mark |
| `botania:cosmetic_red_glasses` | Red Glasses |
| `botania:cosmetic_red_ribbons` | Red Ribbons |
| `botania:cosmetic_thick_eyebrows` | Thick Eyebrows |
| `botania:cosmetic_thinking_hand` | Thinking Hand |
| `botania:cosmetic_tiny_potato_mask` | Tiny Potato Mask |
| `botania:cosmetic_unicorn_horn` | Unicorn Horn |
| `botania:cosmetic_wicked_eyepatch` | Wicked Eyepatch |
| `botania:cosmetic_witch_pin` | Witch Pin |
| `botania:crafting_halo` | Assembly Halo |
| `botania:crystal_bow` | Crystal Bow |
| `botania:dice` | Dice of Fate |
| `botania:diva_charm` | Charm of the Diva |
| `botania:dragonstone` | Dragonstone |
| `botania:dreamwood_twig` | Dreamwood Twig |
| `botania:dreamwood_wand` | Wand of the Elven Forest |
| `botania:elementium_axe` | Elementium Axe |
| `botania:elementium_boots` | Elementium Boots |
| `botania:elementium_chestplate` | Elementium Chestplate |
| `botania:elementium_helmet` | Elementium Helmet |
| `botania:elementium_hoe` | Elementium Hoe |
| `botania:elementium_ingot` | Elementium Ingot |
| `botania:elementium_leggings` | Elementium Leggings |
| `botania:elementium_nugget` | Elementium Nugget |
| `botania:elementium_pickaxe` | Elementium Pickaxe |
| `botania:elementium_shears` | Elementium Shears |
| `botania:elementium_shovel` | Elementium Shovel |
| `botania:elementium_sword` | Elementium Sword |
| `botania:ender_air_bottle` | Ender Air Bottle |
| `botania:ender_dagger` | Soulscribe |
| `botania:ender_hand` | Hand of Ender |
| `botania:fertilizer` | Floral Fertilizer |
| `botania:flare_chakram` | Flare Chakram |
| `botania:flask` | Alfglass Flask |
| `botania:flight_tiara` | Flügel Tiara |
| `botania:flower_bag` | Flower Pouch |
| `botania:flugel_eye` | Eye of the Flügel |
| `botania:gaia_ingot` | Gaia Spirit Ingot |
| `botania:gaiahead` | Gaia Guardian's Head |
| `botania:glass_pickaxe` | Vitreous Pickaxe |
| `botania:goddess_charm` | Benevolent Goddess' Charm |
| `botania:holy_cloak` | Cloak of Virtue |
| `botania:horn_grass` | Horn of the Wild |
| `botania:horn_leaves` | Horn of the Canopy |
| `botania:horn_snow` | Horn of the Covering |
| `botania:incense_stick` | Incense Stick |
| `botania:infinite_fruit` | The Fruit of Grisaia |
| `botania:invisibility_cloak` | Invisibility Cloak |
| `botania:itemfinder` | The Spectator |
| `botania:keep_ivy` | Resolute Ivy |
| `botania:king_key` | Key of the King's Law |
| `botania:knockback_belt` | Tectonic Girdle |
| `botania:laputa_shard` | Shard of Laputa |
| `botania:lens_bounce` | Bounce Lens |
| `botania:lens_damage` | Damaging Lens |
| `botania:lens_efficiency` | Efficiency Lens |
| `botania:lens_explosive` | Entropic Lens |
| `botania:lens_fire` | Kindle Lens |
| `botania:lens_firework` | Celebratory Lens |
| `botania:lens_flare` | Flare Lens |
| `botania:lens_gravity` | Gravity Lens |
| `botania:lens_influence` | Influence Lens |
| `botania:lens_light` | Flash Lens |
| `botania:lens_magnet` | Magnetizing Lens |
| `botania:lens_messenger` | Messenger Lens |
| `botania:lens_mine` | Bore Lens |
| `botania:lens_normal` | Mana Lens |
| `botania:lens_paint` | Paintslinger Lens |
| `botania:lens_phantom` | Phantom Lens |
| `botania:lens_piston` | Force Lens |
| `botania:lens_power` | Potency Lens |
| `botania:lens_redirect` | Redirective Lens |
| `botania:lens_speed` | Velocity Lens |
| `botania:lens_storm` | Storm Lens |
| `botania:lens_time` | Resistance Lens |
| `botania:lens_tripwire` | Tripwire Lens |
| `botania:lens_warp` | Warp Lens |
| `botania:lens_weight` | Weight Lens |
| `botania:lexicon` | Lexica Botania |
| `botania:life_essence` | Gaia Spirit |
| `botania:living_root` | Living Root |
| `botania:livingwood_bow` | Livingwood Bow |
| `botania:livingwood_twig` | Livingwood Twig |
| `botania:magnet_ring_greater` | Greater Ring of Magnetization |
| `botania:mana_bottle` | Mana in a Bottle |
| `botania:mana_cookie` | Biscuit of Totality |
| `botania:mana_diamond` | Mana Diamond |
| `botania:mana_gun` | Mana Blaster |
| `botania:mana_mirror` | Mana Mirror |
| `botania:mana_pearl` | Mana Pearl |
| `botania:mana_powder` | Mana Powder |
| `botania:mana_ring_greater` | Greater Band of Mana |
| `botania:mana_string` | Mana Infused String |
| `botania:mana_tablet` | Mana Tablet |
| `botania:manasteel_axe` | Manasteel Axe |
| `botania:manasteel_boots` | Manasteel Boots |
| `botania:manasteel_chestplate` | Manasteel Chestplate |
| `botania:manasteel_helmet` | Manasteel Helmet |
| `botania:manasteel_hoe` | Manasteel Hoe |
| `botania:manasteel_ingot` | Manasteel Ingot |
| `botania:manasteel_leggings` | Manasteel Leggings |
| `botania:manasteel_nugget` | Manasteel Nugget |
| `botania:manasteel_pick` | Manasteel Pickaxe |
| `botania:manasteel_shears` | Manasteel Shears |
| `botania:manasteel_shovel` | Manasteel Shovel |
| `botania:manasteel_sword` | Manasteel Sword |
| `botania:manaweave_boots` | Manaweave Boots |
| `botania:manaweave_chestplate` | Manaweave Robe Top |
| `botania:manaweave_cloth` | Manaweave Cloth |
| `botania:manaweave_helmet` | Manaweave Cowl |
| `botania:manaweave_leggings` | Manaweave Robe Bottom |
| `botania:monocle` | Manaseer Monocle |
| `botania:obedience_stick` | Floral Obedience Stick |
| `botania:open_bucket` | Extrapolated Bucket |
| `botania:overgrowth_seed` | Overgrowth Seed |
| `botania:pattern_1_1` | Crafting Pattern #1: 1x1 |
| `botania:pattern_1_2` | Crafting Pattern #3: 1x2 |
| `botania:pattern_1_3` | Crafting Pattern #5: 1x3 |
| `botania:pattern_2_1` | Crafting Pattern #4: 2x1 |
| `botania:pattern_2_2` | Crafting Pattern #2: 2x2 |
| `botania:pattern_2_3` | Crafting Pattern #7: 2x3 |
| `botania:pattern_3_1` | Crafting Pattern #6: 3x1 |
| `botania:pattern_3_2` | Crafting Pattern #8: 3x2 |
| `botania:pattern_donut` | Crafting Pattern #9: Donut |
| `botania:pebble` | Pebble |
| `botania:phantom_ink` | Phantom Ink |
| `botania:pinkinator` | The Pinkinator |
| `botania:pixie_dust` | Pixie Dust |
| `botania:placeholder` | Crafting Placeholder |
| `botania:pool_minecart` | Minecart with Mana Pool |
| `botania:quartz_blaze` | Blaze Quartz |
| `botania:quartz_dark` | Smokey Quartz |
| `botania:quartz_elven` | Elven Quartz |
| `botania:quartz_lavender` | Lavender Quartz |
| `botania:quartz_mana` | Mana Quartz |
| `botania:quartz_red` | Redquartz |
| `botania:quartz_sunny` | Sunny Quartz |
| `botania:record_gaia_1` | Scathed Music Disc |
| `botania:record_gaia_2` | Scathed Music Disc |
| `botania:red_string` | Red String |
| `botania:redstone_root` | Redstone Root |
| `botania:rune_air` | Rune of Air |
| `botania:rune_autumn` | Rune of Autumn |
| `botania:rune_earth` | Rune of Earth |
| `botania:rune_envy` | Rune of Envy |
| `botania:rune_fire` | Rune of Fire |
| `botania:rune_gluttony` | Rune of Gluttony |
| `botania:rune_greed` | Rune of Greed |
| `botania:rune_lust` | Rune of Lust |
| `botania:rune_mana` | Rune of Mana |
| `botania:rune_pride` | Rune of Pride |
| `botania:rune_sloth` | Rune of Sloth |
| `botania:rune_spring` | Rune of Spring |
| `botania:rune_summer` | Rune of Summer |
| `botania:rune_water` | Rune of Water |
| `botania:rune_winter` | Rune of Winter |
| `botania:rune_wrath` | Rune of Wrath |
| `botania:santaweave_boots` | Santaweave Boots |
| `botania:santaweave_chestplate` | Santaweave Robe Top |
| `botania:santaweave_helmet` | Santaweave Cowl |
| `botania:santaweave_leggings` | Santaweave Robe Bottom |
| `botania:sextant` | Worldshaper's Sextant |
| `botania:slime_bottle` | Slime in a Bottle |
| `botania:slingshot` | Livingwood Slingshot |
| `botania:spark` | Spark |
| `botania:spark_upgrade_dispersive` | Spark Augment: Dispersive |
| `botania:spark_upgrade_dominant` | Spark Augment: Dominant |
| `botania:spark_upgrade_isolated` | Spark Augment: Isolated |
| `botania:spark_upgrade_recessive` | Spark Augment: Recessive |
| `botania:spawner_mover` | Life Aggregator |
| `botania:speed_up_belt` | Planestrider's Sash |
| `botania:spell_cloth` | Spellbinding Cloth |
| `botania:star_sword` | Starcaller |
| `botania:super_travel_belt` | Globetrotter's Sash |
| `botania:temperance_stone` | Stone of Temperance |
| `botania:terra_axe` | Terra Truncator |
| `botania:terra_pick` | Terra Shatterer |
| `botania:terra_sword` | Terra Blade |
| `botania:terrasteel_boots` | Terrasteel Boots |
| `botania:terrasteel_chestplate` | Terrasteel Chestplate |
| `botania:terrasteel_helmet` | Terrasteel Helmet |
| `botania:terrasteel_ingot` | Terrasteel Ingot |
| `botania:terrasteel_leggings` | Terrasteel Leggings |
| `botania:terrasteel_nugget` | Terrasteel Nugget |
| `botania:third_eye` | Third Eye |
| `botania:thorn_chakram` | Thorn Chakram |
| `botania:thunder_sword` | Thundercaller |
| `botania:tiny_planet` | Tiny Planet |
| `botania:travel_belt` | Sojourner's Sash |
| `botania:twig_wand` | Wand of the Forest |
| `botania:unholy_cloak` | Cloak of Sin |
| `botania:vial` | Managlass Vial |
| `botania:vine_ball` | Vine Ball |
| `botania:virus_necrodermal` | Necrodermal Virus |
| `botania:virus_nullodermal` | Nullodermal Virus |
| `botania:water_bowl` | Bowl of Water |
| `botania:world_seed` | World Seed |

## Efeitos (6)

| ID | Nome |
|---|---|
| `botania:allure` | Allure |
| `botania:bloodthirst` | Bloodthirst |
| `botania:clear` | Absolution |
| `botania:emptiness` | Emptiness |
| `botania:feather_feet` | Feather Feet |
| `botania:soul_cross` | Soul Cross |

## Atributos (1)

| ID | Nome |
|---|---|
| `botania:pixieSpawnChance` | Pixie Spawn Chance |

## Tags de item (`botania:`) (62)

burst_viewers, contributor_headflowers, disposable, double_mystical_flowers, dragonstone_gems, dreamwood_logs, elementium_blocks, elementium_ingots, elementium_nuggets, floating_flowers, functional_floating_flowers, functional_special_flowers, generating_floating_flowers, generating_special_flowers, glimmering_dreamwood_logs, glimmering_livingwood_logs, lens, lens_glue, livingwood_logs, loonium_blacklist, loonium_offhand_equipment, magnet_ring_blacklist, mana_diamond_gems, mana_dusts, mana_using_items, manasteel_blocks, manasteel_ingots, manasteel_nuggets, mini_flowers, misc_floating_flowers, misc_special_flowers, mundane_floating_flowers, mystical_flowers, petals, petals/black, petals/blue, petals/brown, petals/cyan, petals/gray, petals/green, petals/light_blue, petals/light_gray, petals/lime, petals/magenta, petals/orange, petals/pink, petals/purple, petals/red, petals/white, petals/yellow, pickable_block_providers, rods, runes, seed_apothecary_reagent, semi_disposable, shimmering_mushrooms, special_floating_flowers, special_flowers, terra_pick_blacklist, terrasteel_blocks, terrasteel_ingots, terrasteel_nuggets

## Tags de bloco (`botania:`) (48)

agricarnation/apply_bonemeal, agricarnation/growth_candidate, agricarnation/growth_excluded, corporea_spark_override, double_mystical_flowers, dreamwood_logs, elementium_blocks, enchanter_flowers, ender_air_convertable, fel_blaze_base, floating_flowers, functional_floating_flowers, functional_special_flowers, gaia_break_blacklist, generating_floating_flowers, generating_special_flowers, ghost_rail_barrier, glimmering_dreamwood_logs, glimmering_livingwood_logs, horn_of_the_canopy_breakable, horn_of_the_covering_breakable, horn_of_the_wild_breakable, laputa_immobile, laputa_no_double_block, livingwood_logs, magnet_ring_blacklist, manasteel_blocks, marimorphosis_convertable, mini_flowers, misc_floating_flowers, misc_special_flowers, mundane_floating_flowers, mystical_flowers, pasture_seed_replaceable, potted_mystical_flowers, potted_shiny_flowers, shimmering_mushrooms, shiny_flowers, single_item_insert, special_floating_flowers, special_flowers, terra_plate_base, terraformable, terrasteel_blocks, unethical_tnt_check, unsupported_platform_disguise, unwandable, weight_lens_whitelist

## Tags de item (`modern_industrialization:`) (1)

replicator_blacklist

## Tags de item (`trinkets:`) (8)

all, chest/cape, chest/necklace, hand/ring, head/face, head/hat, legs/belt, offhand/ring

## Tags comuns de item (`c:`) — materiais/minérios (9)

bows, glass, glass_blocks, glass_pane, glass_panes, mushrooms, quartz_blocks, shears, wooden_chests

## Tags comuns de bloco (`c:`) (8)

glass, glass_blocks, glass_pane, glass_panes, lapis_blocks, mushrooms, ores, quartz_blocks

## Receitas por subsistema (`data/botania/recipes/`)

| grupo | nº | entradas |
|---|---|---|
| `brew` | 20 | absorption, allure, bloodthirst, clear, emptiness, feather_feet, fire_resistance, haste, healing, invisibility, jump_boost, night_vision, overload, regeneration, resistance, soul_cross, speed, strength, water_breathing, weak_regeneration |
| `conversions` | 28 | black_petal_block_deconstruct, blazeblock_deconstruct, blue_petal_block_deconstruct, brown_petal_block_deconstruct, cyan_petal_block_deconstruct, dragonstone_block_deconstruct, elementium_block_deconstruct, elementium_from_nuggets, elementium_to_nuggets, gray_petal_block_deconstruct, green_petal_block_deconstruct, light_blue_petal_block_deconstruct, light_gray_petal_block_deconstruct, lime_petal_block_deconstruct, magenta_petal_block_deconstruct, manadiamond_block_deconstruct, manasteel_block_deconstruct, manasteel_from_nuggets, manasteel_to_nuggets, orange_petal_block_deconstruct, pink_petal_block_deconstruct, purple_petal_block_deconstruct, red_petal_block_deconstruct, terrasteel_block_deconstruct, terrasteel_from_nugget, terrasteel_to_nugget, white_petal_block_deconstruct, yellow_petal_block_deconstruct |
| `dynamic` | 16 | ancient_will_attach, black_hole_talisman_extract, composite_lens, cosmetic_attach, cosmetic_remove, keep_ivy, laputa_shard_upgrade, lens_dye, mana_gun_add_clip, mana_gun_add_lens, mana_gun_remove_lens, merge_vial, phantom_ink_apply, spell_cloth_apply, split_lens, terra_pick_tipping |
| `elven_trade` | 15 | diamond_block_return, diamond_return, dragonstone, dragonstone_block, dreamwood, dreamwood_log, elementium, elementium_block, elf_glass, elf_quartz, ender_pearl_return, iron_block_return, iron_return, lexicon_elven, pixie_dust |
| `mana_infusion` | 139 | — |
| `marimorphosis` | 8 | metamorphic_desert_stone, metamorphic_forest_stone, metamorphic_fungal_stone, metamorphic_mesa_stone, metamorphic_mountain_stone, metamorphic_plains_stone, metamorphic_swamp_stone, metamorphic_taiga_stone |
| `orechid` | 16 | coal_ore, copper_ore, deepslate_coal_ore, deepslate_copper_ore, deepslate_diamond_ore, deepslate_emerald_ore, deepslate_gold_ore, deepslate_iron_ore, deepslate_lapis_ore, deepslate_redstone_ore, diamond_ore, emerald_ore, gold_ore, iron_ore, lapis_ore, redstone_ore |
| `orechid_ignem` | 3 | ancient_debris, nether_gold_ore, nether_quartz_ore |
| `petal_apothecary` | 45 | — |
| `pure_daisy` | 9 | blue_ice, cobblestone, end_stone_to_cobbled_deepslate, livingrock, livingwood, obsidian, packed_ice, sand, snow_block |
| `runic_altar` | 17 | air, autumn, earth, envy, fire, gluttony, greed, head, lust, mana, pride, sloth, spring, summer, water, winter, wrath |
| `slab_recombine` | 48 | — |
| `smelting` | 9 | cracked_livingrock_bricks, metamorphic_desert_stone, metamorphic_forest_stone, metamorphic_fungal_stone, metamorphic_mesa_stone, metamorphic_mountain_stone, metamorphic_plains_stone, metamorphic_swamp_stone, metamorphic_taiga_stone |
| `stonecutting` | 215 | — |
| `terra_plate` | 1 | terrasteel_ingot |

## Registro próprio `data/quilt/attachments/`

| grupo | nº | entradas |
|---|---|---|
| `minecraft` | 1 | block/enchanting_boosters |

## Chaves de lang fora do censo

Prefixos ignorados (texto de UI, tooltips, patchouli, advancements):

`botania` (1769), `block` (294), `botaniamisc` (132), `advancement` (104), `tag` (52), `item` (32), `structure` (30), `emi` (10), `effect` (6), `worldgen` (6), `stat` (3), `lexicon` (3), `death` (2), `harvestLevel` (2)

