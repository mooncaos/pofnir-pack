# Radiografia da Curva — síntese

Ordem #005. Dado extraído dos jars do manifesto. **Nenhuma proposta, nenhum esboço de
T6–T7, nenhuma sugestão de ajuste.** É a linha d'água medida.

| Arquivo | Conteúdo |
|---|---|
| [armas-por-tier.md](armas-por-tier.md) | escada `rpg_series` T0–T9, dano e velocidade por item, e o que ficou sem tier |
| [bosses.md](bosses.md) | HP, dano, armadura e fases dos bosses declarados |
| [mobs-comuns.md](mobs-comuns.md) | hostis comuns dos 5 mods + régua vanilla |
| [magias.md](magias.md) | 105 magias: escola, tier, conjuração, cooldown, coeficiente |
| [tacz-armas.md](tacz-armas.md) | 54 armas de fogo por DPS |

## Método

Três fontes, nesta ordem de confiança:

1. **Atributo base no bytecode** — o mod embute a constante na chamada
   `AttributeSupplier.Builder.add`. Leitura direta.
2. **Default de classe de config** — o mod passa o valor de uma classe de configuração;
   foi lido o default. O jogador pode alterar.
3. **JSON de dado** — magias e armas TaCZ vêm de `data/`, sem ambiguidade.

O mapa de campos intermediary→atributo foi ancorado no `CaveDwellerEntity`, que nomeia
cada campo pelo getter de config correspondente: isso fixou `MAX_HEALTH`,
`FOLLOW_RANGE`, `MOVEMENT_SPEED`, `ATTACK_DAMAGE` e `ATTACK_SPEED`. Os outros seis
seguem a ordem de declaração contígua da classe `Attributes` do 1.20.1.

## Faixas observadas

### Vida

| patamar | faixa | quem |
|---|---|---|
| mob comum vanilla (régua) | 20–40 | zumbi a enderman |
| mob comum de mod | 2–100 | `alexsmobs:skreecher` a `alexsmobs:warped_mosco` |
| terror | 10–300 | as duas formas do Man From The Fog |
| boss de entrada | 250–350 | os quatro do BoMD |
| boss médio | 375–600 | Bewitchment e Soulslike |
| boss de topo | 800–2500 | Eldritch End |

### Dano corpo a corpo

| patamar | faixa |
|---|---|
| mob comum de mod | 1–12 |
| boss | 4–24 |
| arma de jogador (escada `rpg_series`) | 1.8–14.1 |
| habilidade de arma (Soulslike) | 15–100 |

### Armadura

Mob comum vai de 0 a 20 (`alexsmobs:rocky_roller`). Boss vai de 0 a 20
(`fallen_icon`). **Não há separação de armadura entre mob comum e boss** — a diferença
entre os dois está em vida e em ataques codificados, não em mitigação.

## Outliers (apontados, não julgados)

- **`eldritch_end:hastur` — 2500 de vida.** Mais de 4x o segundo colocado. Fora de
  escala em relação a tudo mais no manifesto.
- **`alexsmobs:bone_serpent` — velocidade 1.45.** Quase 5x um enderman, com 25 de vida.
- **`alexsmobs:rocky_roller` — armadura 20 com 10 de vida.** A mesma armadura do boss
  mais blindado do pack, num mob comum.
- **`minecells:disgusting_worm` — 12 de dano com 15 de vida.** Maior razão dano/vida de
  mob comum.
- **`eldritch_end:tentacle` — alcance de percepção 100.** O enderman vanilla tem 64.
- **`invoke:flameray` — coeficiente 4.0** com 0.5s de conjuração e 1s de cooldown.
  O dobro do segundo maior coeficiente do pack.
- **`tacz:m107` — 366.7 de DPS teórico.** 72% acima da segunda arma de fogo.
- **`wizards:wand_novice` recebe bônus da escola FIRE**, não arcana. Anomalia de dado,
  pode ser engano do autor do mod — conferir in-game.
- **Variantes douradas do `rpg_series` existem no código mas em nenhuma tag de tier.**

## Lacunas

**Da escada declarada:**

- **T5 a T9 estão vazios.** As tags existem nos 5 mods, todas sem item. A escada
  `rpg_series` declara 10 degraus e preenche 5.
- **T0 e T4 não têm armadura.** A progressão de armadura declarada cobre só T1–T3.
- **T2 → T3 é o mesmo conjunto em netherita**, sem ganho de variedade.

**Do que não foi extraível:**

| O quê | Por quê |
|---|---|
| Stats dos 23 itens T4 (`ruby_*`, `aeternium_*`, `crystal_*`) | registrados dentro de `isModLoaded("betterend"/"betternether")`; o walker para no primeiro desvio. Nenhum dos dois mods está no manifesto |
| Stats das 88 peças de armadura T1–T3 | vêm de `ItemConfig.ArmorSet`, mesma limitação de fluxo condicional |
| Bônus de Spell Power dos cajados e das variantes netherite | idem |
| Dano base das armas do Soulslike | guardado em arrays de config (`[F`) e em classes de item, fora do padrão lido |
| Stats dos 28 mechs do Pomkots | classes concretas não declaram atributo com constante; `PomkotsConfig` só tem opção de comportamento; não há JSON de spec |
| `minecells:conjunctivius` | classe de entidade servidor não localizada na extração |
| `graveyard:acolyte`, `graveyard:lich` | não declaram atributo / leem de config sem default legível |
| Itens de combate de Ad Astra, Botania, Bewitchment, Eldritch End, Mine Cells, Create | fora do alcance de tempo desta ordem — **maior lacuna conhecida** |
| Valores vanilla (zumbi, esqueleto, creeper, enderman) | jar do Minecraft é ofuscado e não faz parte do manifesto; entram como régua conhecida, marcados como não medidos |

---

# O TETO

A linha d'água do manifesto: o mais forte que os mods de prateleira oferecem hoje.
É acima disto que T6 e T7 serão erguidos pela diretoria.

## Os 10 itens mais fortes

Ordenados dentro de cada eixo, porque não são comparáveis entre si.

**Por dano por golpe (arma corpo a corpo):**

| # | Item | Dano | Vel. | DPS bruto |
|---|---|---|---|---|
| 1 | `paladins:netherite_great_hammer` | 14.1 | 0.8 | 11.3 |
| 2 | `paladins:diamond_great_hammer` | 12.2 | 0.8 | 9.8 |
| 3 | `paladins:netherite_claymore` | 11.5 | 1.0 | 11.5 |
| 4 | `paladins:iron_great_hammer` | 10.3 | 0.8 | 8.2 |
| 5 | `rogues:netherite_double_axe` | 9.6 | 1.2 | 11.5 |
| 6 | `paladins:netherite_mace` | 9.6 | 1.2 | 11.5 |

**Por dano de habilidade (Soulslike):**

| # | Item / habilidade | Dano |
|---|---|---|
| 7 | `supernova` — escudo de metal fundido | 100 |
| 8 | queda calculada (7 armas) | até 100 |
| 9 | `shadow_assassin_scythe` — umbral trespass | 40 |
| 10 | `hunter_cannon` / `mehrunes_razor` | 30 |

**Por DPS de fogo (eixo separado, TaCZ):** `tacz:m107` a 366.7, `tacz:spas_12` a 213.3,
`tacz:m95` a 188.8. O teto de DPS do manifesto inteiro está aqui, não nas armas
corpo a corpo — a diferença é de uma ordem de grandeza.

## As 5 magias mais fortes

O Spell Engine não guarda dano absoluto: guarda coeficiente que multiplica o Spell Power
do jogador. Estas são as de maior coeficiente.

| # | Magia | Escola | Coef. | Conjuração | CD |
|---|---|---|---|---|---|
| 1 | `invoke:flameray` | FIRE | **4.0** | 0.5s | 1s |
| 2 | `invoke:greater_combust` | FIRE | 3.0 | 1s | 2s |
| 3 | `eldritch_end:arcane_laser` | FIRE | 3.0 | 2s | 12s |
| 4 | `invoke:wild` | PHYSICAL_MELEE | 2.0 | 10s | 10s |
| 5 | `invoke:supernova` / `sonicboom` / os `two*` e `three*` | FIRE/FROST/ARCANE | 2.0 | 1s | 1–2s |

O teto de Spell Power que alimenta esses coeficientes vem do equipamento: os maiores
bônus extraídos são **+4 por varinha** (`wizards:wand_arcane`, `wand_fire`,
`wand_frost`). Os cajados e as variantes netherite não foram extraídos e são
provavelmente maiores.

## Os 5 inimigos mais fortes

| # | Inimigo | HP | Dano | Armadura | O que o torna o teto |
|---|---|---|---|---|---|
| 1 | `eldritch_end:hastur` | **2500** | — | — | relâmpago de encarnação a 100 de dano; invoca 3 lacaios; omnivampirismo; 5%/s de tentáculo |
| 2 | `eldritch_end:eye` | 800 | 12 | 12 | vida e armadura simultaneamente no topo |
| 2 | `eldritch_end:the_faceless` | 800 | 12 | — | — |
| 4 | `soulsweapons:day_stalker` | 600 | — | 15 | 2 fases; reduz dano de projétil recebido a 60% na fase 2 |
| 4 | `decaying_king` (Soulslike, config) | 600 | — | 10 | — |

Menções ao lado do pódio, por atributo isolado:

- **Maior dano corpo a corpo de boss:** `bewitchment:herne`, 24.
- **Maior armadura de boss:** `fallen_icon` (Soulslike), 20.
- **Únicos bosses com cura passiva:** os quatro do BoMD.
- **Únicos bosses imunes a repulsão:** `bewitchment:herne` e `bewitchment:lilith`.

---

## Uma observação de forma, não de conteúdo

Os mods não partilham uma escada. O `rpg_series` tem tier declarado e para no T4; o
Soulslike tem a sua própria progressão por config; o TaCZ é um eixo à parte que não
conversa com nenhum dos dois; MI, Tech Reborn e AE2 não têm combate. O que existe hoje
são **quatro réguas paralelas sem conversão entre si** — e é isso que a Curva Mestra vai
ter que reconciliar.
