# Armas e armaduras por tier — radiografia

Ordem #005. A única escada de tier **declarada em dado** no manifesto é a do
`rpg_series`, partilhada por Wizards, Paladins & Priests, Rogues & Warriors, Archers e
Spell Engine. Ela vai de 0 a 9 em tag, mas só 0 a 4 têm item.

Nada aqui é proposta. Esta é a escada dos mods, não a Curva Mestra.

---

## Onde a escada existe e onde ela para

As tags `rpg_series:tier_<N>_weapons` e `_armors` são declaradas pelos 5 mods e
mescladas pelo jogo. Contagem real de itens em cada uma:

| Tier | Armas | Armaduras |
|---|---|---|
| T0 | 9 | **0 (tag vazia)** |
| T1 | 12 | 24 |
| T2 | 16 | 32 |
| T3 | 16 | 32 |
| T4 | 23 | **0 (tag vazia)** |
| T5 | **0** | **0** |
| T6 | **0** | **0** |
| T7 | **0** | **0** |
| T8 | **0** | **0** |
| T9 | **0** | **0** |

As tags de T5 a T9 **existem como arquivo em todos os 5 mods e estão todas vazias**.
A escada declarada tem 10 degraus; o conteúdo ocupa 5.

Duas outras lacunas: **T0 e T4 não têm armadura nenhuma**. A progressão de armadura
declarada cobre só T1–T3.

---

## Velocidade de ataque por arquétipo

Os mods definem a velocidade no arquétipo, não no item. O número é o **modificador**
somado à base 4.0 do jogador; a velocidade final é `4.0 + modificador`.

| Arquétipo | Mod | Modificador | Vel. final | Dano |
|---|---|---|---|---|
| `dagger` | Rogues | −1.6 | 2.4 | por item |
| `sickle` | Rogues | −2.0 | 2.0 | por item |
| `wand` | Wizards, Paladins | −2.4 | 1.6 | **2.0 fixo** |
| `glaive` | Rogues | −2.6 | 1.4 | por item |
| `spear` | Archers | −2.6 | 1.4 | por item |
| `mace` | Paladins | −2.8 | 1.2 | por item |
| `axe` (machado duplo) | Rogues | −2.8 | 1.2 | por item |
| `claymore` | Paladins | −3.0 | 1.0 | por item |
| `staff` | Wizards, Paladins | −3.0 | 1.0 | **4.0 fixo** |
| `hammer` (grande martelo) | Paladins | −3.2 | 0.8 | por item |

Referência: a espada vanilla fica em 1.6 e o machado em 1.0.

## Dano por item (extraído do `<clinit>` de `Weapons.class`)

| Item | Arquétipo | Dano | Vel. final | Tier |
|---|---|---|---|---|
| `paladins:netherite_great_hammer` | hammer | **14.1** | 0.8 | — |
| `paladins:diamond_great_hammer` | hammer | 12.2 | 0.8 | T2 |
| `paladins:netherite_claymore` | claymore | 11.5 | 1.0 | T3 |
| `paladins:iron_great_hammer` | hammer | 10.3 | 0.8 | T1 |
| `paladins:diamond_claymore` | claymore | 9.9 | 1.0 | T2 |
| `paladins:netherite_mace` | mace | 9.6 | 1.2 | T3 |
| `rogues:netherite_double_axe` | axe | 9.6 | 1.2 | T3 |
| `paladins:stone_great_hammer` | hammer | 8.5 | 0.8 | T0 |
| `paladins:iron_claymore` | claymore | 8.3 | 1.0 | T1 |
| `paladins:diamond_mace` | mace | 8.3 | 1.2 | T2 |
| `rogues:diamond_double_axe` | axe | 8.3 | 1.2 | T2 |
| `rogues:netherite_glaive` | glaive | 8.1 | 1.4 | T3 |
| `paladins:iron_mace` | mace | 7.0 | 1.2 | T1 |
| `rogues:iron_double_axe` | axe | 7.0 | 1.2 | T1 |
| `rogues:diamond_glaive` | glaive | 7.0 | 1.4 | T2 |
| `archers:netherite_spear` | spear | 7.0 | 1.4 | T3 |
| `paladins:wooden_great_hammer` | hammer | 6.6 | 0.8 | T0 |
| `paladins:golden_great_hammer` | hammer | 6.6 | 0.8 | — |
| `paladins:stone_claymore` | claymore | 6.8 | 1.0 | T0 |
| `archers:diamond_spear` | spear | 6.0 | 1.4 | T2 |
| `rogues:netherite_sickle` | sickle | 5.9 | 2.0 | T3 |
| `rogues:iron_glaive` | glaive | 5.8 | 1.4 | T1 |
| `rogues:stone_double_axe` | axe | 5.6 | 1.2 | T0 |
| `paladins:golden_claymore` | claymore | 5.2 | 1.0 | — |
| `rogues:diamond_sickle` | sickle | 5.0 | 2.0 | T2 |
| `archers:iron_spear` | spear | 5.0 | 1.4 | T1 |
| `rogues:netherite_dagger` | dagger | 4.7 | 2.4 | T3 |
| `paladins:golden_mace` | mace | 4.3 | 1.2 | — |
| `rogues:golden_double_axe` | axe | 4.3 | 1.2 | — |
| `rogues:iron_sickle` | sickle | 4.1 | 2.0 | T1 |
| `rogues:diamond_dagger` | dagger | 4.0 | 2.4 | T2 |
| `archers:flint_spear` | spear | 4.0 | 1.4 | T0 |
| `rogues:golden_glaive` | glaive | 3.5 | 1.4 | — |
| `rogues:iron_dagger` | dagger | 3.3 | 2.4 | T1 |
| `archers:golden_spear` | spear | 3.0 | 1.4 | — |
| `rogues:flint_dagger` | dagger | 2.6 | 2.4 | T0 |
| `rogues:golden_sickle` | sickle | 2.4 | 2.0 | — |
| `rogues:golden_dagger` | dagger | 1.8 | 2.4 | — |

Todas as **variantes douradas existem no código mas não estão em nenhuma tag de tier** —
ficam fora da escada declarada.

Arcos e bestas (`archers:*_longbow`, `*_shortbow`, `*_crossbow`) registram dano **0**:
a arma não bate, quem dá dano é a flecha. O que os diferencia é tempo de puxada
(`pullTime_shortBow` / `pullTime_longBow`) e durabilidade.

### T4 — não extraído

Os 23 itens de T4 (`ruby_*`, `aeternium_*`, `crystal_*`, `smaragdant_*`) estão nas tags
mas os stats deles **não saíram**. Razão: são registrados dentro de blocos condicionais
`isModLoaded("betterend")` / `isModLoaded("betternether")` no `<clinit>`, e o meu walker
de bytecode para no primeiro desvio de fluxo. Nenhum desses dois mods está no manifesto,
então **na prática esses 23 itens provavelmente nem existem no jogo** — mas isso é
inferência sobre carregamento, não leitura, e fica registrado como tal.

## Focos mágicos: dano fixo + bônus de escola

Varinhas e cajados têm dano e velocidade fixos do arquétipo. O que os separa é o bônus
de Spell Power, aplicado item a item.

| Item | Dano | Vel. | Escola do bônus | Bônus |
|---|---|---|---|---|
| `wizards:wand_novice` | 2.0 | 1.6 | FIRE | +3 |
| `wizards:wand_arcane` | 2.0 | 1.6 | ARCANE | +4 |
| `wizards:wand_fire` | 2.0 | 1.6 | FIRE | +4 |
| `wizards:wand_frost` | 2.0 | 1.6 | FROST | +4 |
| `wizards:wand_netherite_*` | 2.0 | 1.6 | ARCANE/FIRE/FROST | não extraído |
| `wizards:staff_*` | 4.0 | 1.0 | ARCANE/FIRE/FROST | não extraído |

**Anomalia registrada, não julgada:** `wand_novice` recebe o bônus da escola **FIRE**,
não da arcana, apesar de ser a varinha genérica de entrada. Está assim no bytecode
(`getstatic SpellSchools.FIRE` seguido de `bonus(id, 3f)`). Vale conferir in-game antes
de tratar como fato de design — pode ser tanto intenção do autor quanto engano dele.

Os bônus das variantes netherite e dos cajados ficaram sem número: aparecem depois do
primeiro desvio condicional no `<clinit>`, mesma limitação do T4.

---

## Armaduras

As tags T1–T3 listam 88 peças (22 conjuntos de 4). Os stats de armadura **não foram
extraídos**: vêm de `ItemConfig.ArmorSet` montado em `Armors.class`, e a extração ficou
fora do alcance desta radiografia pelo mesmo motivo dos condicionais.

O que dá para afirmar pelas tags:

| Tier | Conjuntos |
|---|---|
| T1 | archer, paladin, priest_robe, rogue, warrior, wizard_robe |
| T2 | ranger, crusader, prior_robe, assassin, berserker, arcane_robe, fire_robe, frost_robe |
| T3 | os mesmos 8 de T2, prefixados `netherite_` |

T2 → T3 é literalmente o mesmo conjunto em netherita. Não há salto de variedade, só de
material.

---

## Sem tier declarado

Mods de combate que **não participam** da escada `rpg_series`. Entram aqui com o que foi
extraível.

### Marium's Soulslike Weaponry

Os stats de ataque base das armas **não foram extraídos**: o mod guarda dano de arma em
arrays de config (`[F`) e em classes de item, fora do padrão que o extrator lê. O que
saiu de `ConfigConstructor` foi **dano de habilidade**, que é outra coisa — vale
registrar porque é o teto de dano por golpe único do manifesto:

| Habilidade | Dano |
|---|---|
| `supernova_molten_metal_shield_damage` | 100 |
| queda calculada (7 armas: supernova, nightfall, kirkhammer, heap_of_raw_iron, featherlight, darkin_blade, comet_spear) | máx. 100 |
| `shadow_assassin_scythe_umbral_trespass_base_damage` | 40 |
| `mehrunes_razor_missing_health_max_bonus_damage` | 30 |
| `hunter_cannon_damage` | 30 |
| `crucible_sword_empowered_bonus_damage` | 21 |
| `holy_moonlight_moonfall_damage` | 20 |
| `excalibur_life_save_stack_damage` | 20 |
| `darkin_scythe_prime_umbral_trespass_damage` | 20 |
| `nightfall_obliterate_base_damage` | 18 |

O mod também traz um sistema paralelo de armadura que a escada vanilla não tem:
resistência a sangramento e a *posture*. Ex.: `chaos_armor` = 5 de armadura + 60 de
resistência a acúmulo de sangramento + 40 de resistência a dano de sangramento;
`forlorn_armor` = 3 + 15 de posture + 30/40/20 de resistências.

### TaCZ

54 armas de fogo, tabela completa e ordenada por DPS em
[tacz-armas.md](tacz-armas.md). Não têm tier declarado nem participam de nenhuma escada
— o gun pack é um eixo de poder separado.

### Modern Industrialization, Tech Reborn, Applied Energistics 2

**Nenhum item de combate.** O censo da Ordem #003 já mostrava: MI e Tech Reborn
registram 0 entidades e nenhum item com atributo de ataque; AE2 idem. São mods de
produção, não entram na Curva de combate.

### Ad Astra, Botania, Bewitchment, Eldritch End, Mine Cells, Create

Têm itens de combate (armaduras espaciais, Terra Blade e afins, athame, armadura de
etyr, armas de Mine Cells) mas **nenhum declara tier** e os stats não foram extraídos
nesta passada — ficaram fora do alcance de tempo desta ordem. É a maior lacuna
conhecida da radiografia e está registrada no relatório.
