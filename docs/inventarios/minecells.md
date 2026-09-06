# Mine Cells — censo

`minecells` · jar `minecells-2.0.0.jar` · namespace(s): `bewitchment`, `create`, `ftbchunks`, `minecells`, `rpgdifficulty`, `supplementaries`

> O jar traz `lang/pt_br.json`. Nomes abaixo são do `en_us` (batem com wiki/receitas).

| categoria | nº |
|---|---|
| Entidades | 31 |
| Blocos | 172 |
| Itens | 83 |
| Efeitos | 8 |
| Biomas | 5 |

## Entidades (31)

| ID | Nome | Tipo |
|---|---|---|
| `minecells:big_grenade` | Big Grenade | técnico (projétil/misc) |
| `minecells:buzzcutter` | Buzzcutter | hostil |
| `minecells:concierge` | Concierge | hostil |
| `minecells:concierge_obelisk` | Concierge Spawn Obelisk | técnico (projétil/misc) |
| `minecells:conjunctivius` | Conjunctivius | **boss** (hostil) |
| `minecells:conjunctivius_obelisk` | Conjunctivius Spawn Obelisk | técnico (projétil/misc) |
| `minecells:conjunctivius_projectile` | Conjunctivius Projectile | técnico (projétil/misc) |
| `minecells:disgusting_worm` | Disgusting Worm | hostil |
| `minecells:disgusting_worm_egg` | Disgusting Worm Egg | técnico (projétil/misc) |
| `minecells:elevator` | Elevator (Right Click to Activate) | técnico (projétil/misc) |
| `minecells:elite` | ELITE | — |
| `minecells:elite_obelisk` | Elite Obelisk | técnico (projétil/misc) |
| `minecells:grenade` | Grenade | técnico (projétil/misc) |
| `minecells:grenadier` | Grenadier | hostil |
| `minecells:inquisitor` | Inquisitor | hostil |
| `minecells:kamikaze` | Kamikaze | hostil |
| `minecells:leaping_zombie` | Leaping Zombie | hostil |
| `minecells:magic_orb` | Magic Orb | técnico (projétil/misc) |
| `minecells:mutated_bat` | Mutated Bat | hostil |
| `minecells:protector` | Protector | hostil |
| `minecells:rancid_rat` | Rancid Rat | hostil |
| `minecells:runner` | Runner | hostil |
| `minecells:scorpion` | Scorpion | hostil |
| `minecells:scorpion_spit` | Scorpion Spit | técnico (projétil/misc) |
| `minecells:sewers_tentacle` | Sewer's Tentacle | hostil |
| `minecells:shieldbearer` | Shieldbearer | hostil |
| `minecells:shocker` | Shocker | hostil |
| `minecells:spawner_rune` | Spawner Rune | técnico (projétil/misc) |
| `minecells:sweeper` | Sweeper | hostil |
| `minecells:tentacle_weapon` | Tentacle Weapon | técnico (projétil/misc) |
| `minecells:undead_archer` | Undead Archer | hostil |

> Tipo: lido do `MobCategory` no bytecode de registro do mod. Onde o registro não
> pareia nome e categoria no mesmo método, cai para a **superclasse real** da classe
> da entidade (marcado `(superclasse)`): `class_1588`=Monster, `class_1429`=Animal,
> `class_1321`=domesticável, `class_1480`=aquático, `class_3988`=comerciante.
> **boss** vem da tag `c:bosses` declarada pelo próprio mod. `—` = não determinado.

## Blocos (172)

| ID | Nome |
|---|---|
| `minecells:<cor>_ribbon_flag` | 16 cores (ex.: Cyan Ribbon Flag) |
| `minecells:large_<cor>_ribbon_flag` | 16 cores (ex.: Large Light Blue Ribbon Flag) |
| `minecells:<x>_doorway` | 6 variantes — black_bridge, insufferable_crypt, overworld, prison, promenade, ramparts |
| `minecells:<x>_flag` | 6 variantes — black_bridge, insufferable_crypt, kings_crest, promenade_of_the_condemned, ramparts, torn_kings_crest |
| `minecells:<x>_leaves` | 9 variantes — orange_wilted, orange_wilted_hanging, orange_wilted_wall, red_wilted, red_wilted_hanging, red_wilted_wall, wilted, wilted_hanging, wilted_wall |
| `minecells:<x>_slab` | 11 variantes — bloomrock, bloomrock_brick, bloomrock_tile, cracked_bloomrock_brick, cracked_prison_brick, prison_brick, prison_cobblestone, prison_stone, putrid, putrid_board, small_prison_brick |
| `minecells:<x>_stairs` | 11 variantes — bloomrock, bloomrock_brick, bloomrock_tile, cracked_bloomrock_brick, cracked_prison_brick, prison_brick, prison_cobblestone, prison_stone, putrid, putrid_board, small_prison_brick |
| `minecells:<x>_wall` | 9 variantes — bloomrock, bloomrock_brick, bloomrock_tile, cracked_bloomrock_brick, cracked_prison_brick, prison_brick, prison_cobblestone, prison_stone, small_prison_brick |
| `minecells:alchemy_equipment_0` | Alchemical Equipment |
| `minecells:alchemy_equipment_1` | Spilled Alchemical Vials |
| `minecells:alchemy_equipment_2` | Alchemical Vials |
| `minecells:ancient_sewage` | Ancient Sewage |
| `minecells:arrow_sign` | Arrow Sign |
| `minecells:barrier_rune` | Barrier Rune |
| `minecells:beam_placer` | Beam Placer |
| `minecells:big_chain` | Big Chain |
| `minecells:biome_banner` | Flag |
| `minecells:bloomrock` | Bloomrock |
| `minecells:bloomrock_bricks` | Bloomrock Bricks |
| `minecells:bloomrock_tiles` | Bloomrock Tiles |
| `minecells:bloomrock_wilted_grass_block` | Bloomrock Wilted Grass Block |
| `minecells:boss_barrier_controller` | Boss Barrier Controller |
| `minecells:boss_entry_barrier_controller` | Boss Entry Barrier Controller |
| `minecells:brittle_barrel` | Brittle Barrel |
| `minecells:broken_cage` | Broken Cage |
| `minecells:cage` | Cage |
| `minecells:cell_crafter` | Cell Crafter |
| `minecells:cell_forge` | Cell Forge |
| `minecells:chain_pile` | Chain Pile |
| `minecells:chain_pile_block` | Chain Pile Block |
| `minecells:concierge_box` | Concierge Box |
| `minecells:conditional_barrier` | Conditional Barrier |
| `minecells:conjunctivius_box` | Conjunctivius Box |
| `minecells:corpse` | Corpse |
| `minecells:cracked_bloomrock_bricks` | Cracked Bloomrock Bricks |
| `minecells:cracked_prison_bricks` | Cracked Prison Bricks |
| `minecells:crate` | Crate |
| `minecells:doorway_frame` | Doorway Frame |
| `minecells:elevator_assembler` | Elevator Assembler |
| `minecells:flag_pole` | Flag Pole |
| `minecells:flowing_ancient_sewage` | Ancient Sewage |
| `minecells:flowing_sewage` | Sewage |
| `minecells:hanged_corpse` | Hanged Corpse |
| `minecells:hanged_rotting_corpse` | Hanged Rotting Corpse |
| `minecells:hanged_skeleton` | Hanged Skeleton |
| `minecells:hardstone` | Hardstone |
| `minecells:king_statue` | King Statue |
| `minecells:kingdom_portal_core` | BREAK ME! |
| `minecells:orange_putrid_sapling` | Orange Putrid Sapling |
| `minecells:player_barrier_controller` | Player Barrier Controller |
| `minecells:prison_box` | Prison Box |
| `minecells:prison_bricks` | Prison Bricks |
| `minecells:prison_cobblestone` | Prison Cobblestone |
| `minecells:prison_stone` | Prison Stone |
| `minecells:prison_stone_button` | Prison Stone Button |
| `minecells:prison_stone_pressure_plate` | Prison Stone Pressure Plate |
| `minecells:prison_torch` | Prison Torch |
| `minecells:promenade_torch` | Promenade Torch |
| `minecells:putrid_board_block` | Putrid Board Block |
| `minecells:putrid_boards` | Putrid Boards |
| `minecells:putrid_button` | Putrid Button |
| `minecells:putrid_door` | Putrid Door |
| `minecells:putrid_fence` | Putrid Fence |
| `minecells:putrid_fence_gate` | Putrid Fence Gate |
| `minecells:putrid_log` | Putrid Log |
| `minecells:putrid_planks` | Putrid Planks |
| `minecells:putrid_pressure_plate` | Putrid Pressure Plate |
| `minecells:putrid_sapling` | Putrid Sapling |
| `minecells:putrid_sign` | Putrid Sign |
| `minecells:putrid_trapdoor` | Putrid Trapdoor |
| `minecells:putrid_wall_sign` | Putrid Wall Sign |
| `minecells:putrid_wood` | Putrid Wood |
| `minecells:ramparts_torch` | Ramparts Torch |
| `minecells:red_putrid_sapling` | Red Putrid Sapling |
| `minecells:return_stone` | Return Stone |
| `minecells:rift` | Rift |
| `minecells:rotting_corpse` | Rotting Corpse |
| `minecells:runic_vine` | Runic Vine |
| `minecells:runic_vine_plant` | Runic Vine Plant |
| `minecells:runic_vine_stone` | Runic Vine Stone |
| `minecells:sewage` | Sewage |
| `minecells:shocker_box` | Shocker Box |
| `minecells:shockwave_flame` | Shockwave Flame |
| `minecells:shockwave_flame_player` | Player's Shockwave Flame |
| `minecells:skeleton` | Skeleton |
| `minecells:small_crate` | Small Crate |
| `minecells:small_prison_bricks` | Small Prison Bricks |
| `minecells:solid_barrier_rune` | Solid Barrier Rune |
| `minecells:spawner_rune` | Spawner Rune |
| `minecells:spikes` | Spikes |
| `minecells:stripped_putrid_log` | Stripped Putrid Log |
| `minecells:stripped_putrid_wood` | Stripped Putrid Wood |
| `minecells:unbreakable_cell_crafter` | Unbreakable Cell Crafter |
| `minecells:unbreakable_chain` | Unbreakable Chain |
| `minecells:unbreakable_doorway_frame` | Doorway Frame |
| `minecells:wilted_grass_block` | Wilted Grass Block |

## Itens (83)

| ID | Nome |
|---|---|
| `minecells:<x>_egg` | 16 variantes — buzzcutter_spawn, disgusting_worm_spawn, grenadier_spawn, inquisitor_spawn, kamikaze_spawn, leaping_zombie_spawn, mutated_bat_spawn, protector_spawn, rancid_rat_spawn, runner_spawn, scorpion_spawn, sewers_tentacle_spawn, shieldbearer_spawn, shocker_spawn, sweeper_spawn, undead_archer_spawn |
| `minecells:<x>_rune` | 6 variantes — blank, charged_interdimensional, concierge_respawn, conjunctivius_respawn, reset, vine |
| `minecells:ability_cooldown` | Cooldown: %ss |
| `minecells:ability_damage` | Damage: %sHP |
| `minecells:ancient_sewage_bucket` | Ancient Sewage Bucket |
| `minecells:arcane_goo` | Arcane Goo |
| `minecells:assassins_dagger` | Assassin's Dagger |
| `minecells:assault_shield` | Assault Shield |
| `minecells:balanced_blade` | Balanced Blade |
| `minecells:biome_banner` | Flag |
| `minecells:blood_bottle` | Blood Bottle |
| `minecells:blood_sword` | Blood Sword |
| `minecells:bloodthirsty_shield` | Bloodthirsty Shield |
| `minecells:boss_stem_cell` | Boss Stem Cell |
| `minecells:bow_and_endless_quiver` | Bow and Endless Quiver |
| `minecells:broadsword` | Broadsword |
| `minecells:buzzcutter_fang` | Buzzcutter Fang |
| `minecells:cell_holder` | Cell Holder |
| `minecells:cell_infused_steel` | Cell-infused Steel |
| `minecells:cooked_sewer_calamari` | Cooked Sewer Calamari |
| `minecells:crit_damage` | Critical Damage: +%sHP |
| `minecells:crowbar` | Crowbar |
| `minecells:cudgel` | Cudgel |
| `minecells:cursed_sword` | Cursed Sword |
| `minecells:electric_whip` | Electric Whip |
| `minecells:elevator_mechanism` | Elevator Mechanism |
| `minecells:explosive_bolt` | Explosive Bolt |
| `minecells:explosive_bulb` | Explosive Bulb |
| `minecells:explosive_crossbow` | Explosive Crossbow |
| `minecells:firebrands` | Firebrands |
| `minecells:flint` | The Flint |
| `minecells:frost_blast` | Frost Blast |
| `minecells:greed_shield` | Greed Shield |
| `minecells:guts` | Guts |
| `minecells:hattoris_katana` | Hattori's Katana |
| `minecells:health_flask` | Health Flask |
| `minecells:heavy_crossbow` | Heavy Crossbow |
| `minecells:hold` | Hold |
| `minecells:ice_arrow` | Ice Arrow |
| `minecells:ice_bow` | Ice Bow |
| `minecells:ice_shield` | Ice Shield |
| `minecells:infantry_bow` | Infantry Bow |
| `minecells:infected_flesh` | Infected Flesh |
| `minecells:lightning_bolt` | Lightning Bolt |
| `minecells:marksmans_bow` | Marksman's Bow |
| `minecells:metal_shards` | Metal Shards |
| `minecells:molten_chunk` | Molten Chunk |
| `minecells:monster_cell` | Monster Cell |
| `minecells:monsters_eye` | Monster's Eye |
| `minecells:multiple_nocks_bow` | Multiple-Nocks Bow |
| `minecells:nerves_of_steel` | Nerves of Steel |
| `minecells:nutcracker` | Nutcracker |
| `minecells:phaser` | Phaser |
| `minecells:quick_bow` | Quick Bow |
| `minecells:rampart` | Rampart |
| `minecells:sewage_bucket` | Sewage Bucket |
| `minecells:sewer_calamari` | Sewer Calamari |
| `minecells:special_ability_hold` | Hold [Right Click] to use ability: %sHP (%ss cooldown) |
| `minecells:speical_ability_press` | Press [Right Click] to use ability: %sHP (%ss cooldown) |
| `minecells:spite_sword` | Spite Sword |
| `minecells:tentacle` | Conjunctivius's Tentacle |
| `minecells:throwing_knife` | Throwing Knife |
| `minecells:transposition_core` | Transposition Core |

## Efeitos (8)

| ID | Nome |
|---|---|
| `minecells:assassins_strength` | Assassination |
| `minecells:bleeding` | Bleeding |
| `minecells:cursed` | Cursed |
| `minecells:disarmed` | Disarmed |
| `minecells:electrified` | Electrified |
| `minecells:frozen` | Frozen |
| `minecells:protected` | Protected |
| `minecells:stunned` | Stunned |

## Biomas (5)

| ID | Nome |
|---|---|
| `minecells:black_bridge` | Black Bridge |
| `minecells:insufferable_crypt` | Insufferable Crypt |
| `minecells:prison` | Prisoners' Quarters |
| `minecells:promenade` | Promenade of The Condemned |
| `minecells:ramparts` | Ramparts |

## Tags de item (`bewitchment:`) (3)

average_swords, strong_swords, weak_wands

## Tags de bloco (`bewitchment:`) (1)

gives_altar_power

## Tags de item (`create:`) (3)

modded_stripped_logs, modded_stripped_wood, upright_on_belt

## Tags de bloco (`create:`) (2)

fan_transparent, non_movable

## Tags de item (`ftbchunks:`) (1)

right_click_blacklist

## Tags de bloco (`ftbchunks:`) (1)

interact_whitelist

## Perfis de arma (`minecells`) (10)

assassins_dagger, balanced_blade, blood_sword, broadsword, crowbar, cursed_sword, flint, hattoris_katana, nutcracker, tentacle

## Tags de item (`minecells:`) (7)

bows/accepting_flame, bows/accepting_infinity, bows/accepting_power, bows/accepting_punch, bows/accepting_quick_charge, discard_in_high_dimensions, putrid_logs

## Tags de bloco (`minecells:`) (6)

conjunctivius_breakable, elevator_chains, protected, putrid_logs, return_stone_targets, tree_root_replaceable

## Tags de item (`supplementaries:`) (1)

chains

## Tags de bloco (`supplementaries:`) (1)

bomb_breakable

## Tags comuns de item (`c:`) — materiais/minérios (1)

swords

## Receitas por subsistema (`data/minecells/recipes/`)

| grupo | nº | entradas |
|---|---|---|
| `cell_crafter` | 47 | — |
| `compat` | 15 | create/crushing/cage, create/crushing/corpses, create/crushing/skeleton, create/cutting/putrid_log, create/cutting/putrid_wood, create/cutting/stripped_putrid_log, create/cutting/stripped_putrid_wood, create/filling/ancient_sewage_bucket, create/filling/sewage_bucket, create/haunting/corpse_to_rotting_corpse, create/haunting/rotting_corpse_to_skeleton, farmersdelight/cutting/putrid_door, farmersdelight/cutting/putrid_log, farmersdelight/cutting/putrid_trapdoor, farmersdelight/cutting/putrid_wood |
| `special` | 2 | clear_doorway, clone_doorway |

## Registro próprio `data/minecells/spawner_runes/`

| grupo | nº | entradas |
|---|---|---|
| `boss` | 2 | concierge, conjunctivius |
| `elite` | 1 | vine_rune |
| `prison` | 3 | corridor, melee, ranged |
| `promenade` | 3 | melee, protector, ranged |

## Registro próprio `data/minecells/value_calculators/`

| grupo | nº | entradas |
|---|---|---|
| `melee` | 12 | assassins_dagger, balanced_blade, blood_sword, broadsword, conjunctivius_tentacle, crowbar, cursed_sword, global, hattoris_katana, nutcracker, spite_sword, the_flint |
| `ranged` | 13 | default, endless, explosive_bolt, firebrands, global, heavy_bolt, ice, infantry, marksman, multiple_nocks, nerves_of_steel, quick, throwing_knife |
| `shields` | 7 | assault, blood, cudgel, default, greed, ice, rampart |
| `spells` | 4 | electric_whip, frost_blast, lightning_bolt, phaser |

## Chaves de lang fora do censo

Prefixos ignorados (texto de UI, tooltips, patchouli, advancements):

`book` (97), `advancements` (56), `item` (52), `block` (15), `entity` (11), `chat` (9), `death` (9), `gui` (8), `itemGroup` (6), `dimension` (6), `travelerstitles` (5), `options` (2), `color` (1), `toast` (1)

