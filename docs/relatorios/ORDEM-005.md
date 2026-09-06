# ORDEM #005 — Radiografia da Curva

**Status:** entregue com lacunas declaradas · **Produto:** `docs/curva/` (6 arquivos)

---

## 1. O que foi entregue

| Arquivo | Linhas de dado |
|---|---|
| `docs/curva/armas-por-tier.md` | escada T0–T9, 38 armas com dano e velocidade, 10 arquétipos |
| `docs/curva/bosses.md` | 20 bosses com HP/dano/armadura/fases |
| `docs/curva/mobs-comuns.md` | 51 hostis de 5 mods + 4 vanilla de régua |
| `docs/curva/magias.md` | 105 magias com escola, tier, conjuração, cooldown e coeficiente |
| `docs/curva/tacz-armas.md` | 54 armas de fogo com DPS calculado |
| `docs/curva/INDEX.md` | faixas, outliers, lacunas e **O TETO** |

## 2. Método

Três fontes, em ordem decrescente de confiança:

1. **Constante embutida no bytecode.** O mod chama
   `AttributeSupplier.Builder.add(atributo, valor)` com o número literal. Escrevi um
   extrator (`attrs.ps1`) que percorre todos os métodos de cada classe, casa o
   `getstatic class_5134.field_N` com a constante numérica seguinte e emite o par ao
   encontrar a chamada `method_26868`. Rodou em 10 mods, 758 pares extraídos.
2. **Default de classe de config.** Onde o mod passa o valor de uma classe de
   configuração, li o default dessa classe (`classdump.ps1`, que casa `putfield`/
   `putstatic` com a constante anterior). Vale para BoMD, Soulslike, Eldritch End,
   Cave Dweller e The Graveyard. **O jogador pode alterar esses números no config** — a
   tabela diz o padrão de fábrica, não o valor garantido em jogo.
3. **JSON de dado.** Magias (`data/<ns>/spells/`) e armas TaCZ
   (`data/tacz/data/guns/`) são JSON puro, sem ambiguidade.

### A âncora dos atributos

Os jars Fabric vêm em nomes *intermediary* (`field_23716`), não em nomes legíveis.
Em vez de assumir o mapeamento, achei uma âncora: o `CaveDwellerEntity` monta os
atributos lendo de getters de config com nome descritivo, o que amarra cinco campos de
uma vez:

```
field_23716 <- CONFIG.MAX_HEALTH()
field_23721 <- CONFIG.ATTACK_DAMAGE()
field_23723 <- CONFIG.ATTACK_SPEED()
field_23719 <- CONFIG.MOVEMENT_SPEED()
field_23717 <- CONFIG.SPOTTING_RANGE()   (FOLLOW_RANGE)
```

Os cinco caem exatamente nas posições 1, 6, 8, 4 e 2 da ordem de declaração da classe
`Attributes` do 1.20.1, e a numeração é contígua de 23716 a 23726 — o que fixa os seis
restantes (`KNOCKBACK_RESISTANCE`, `FLYING_SPEED`, `ATTACK_KNOCKBACK`, `ARMOR`,
`ARMOR_TOUGHNESS`, `LUCK`) sem chute. Cross-check independente: os valores que saíram do
Cave Dweller batem com os defaults do `config/cave-dweller-config.json5` que eu já tinha
lido na Ordem #002 por outro caminho (HP 60, dano 6, atk speed 0.35, vel 0.5).

### DPS do TaCZ

`DPS = dano x rpm / 60`. É teto teórico: não desconta recarga, recuo, modo de tiro
semi/rajada nem queda de dano por distância. Serve para **ordenar**, não como número de
combate. Em espingarda o campo `damage` já é o total do disparo (o mod divide entre os
projéteis), então a fórmula vale igual.

## 3. Limitações — o que não foi extraível, e por quê

**A limitação estrutural:** o meu walker de bytecode percorre o fluxo linearmente e
**para no primeiro desvio condicional** (`tableswitch`, `lookupswitch`, `wide`). Isso
derrubou tudo que os mods registram dentro de `if (isModLoaded(...))`:

| Não extraído | Razão |
|---|---|
| Stats dos 23 itens T4 (`ruby_*`, `aeternium_*`, `crystal_*`, `smaragdant_*`) | dentro de `isModLoaded("betterend"/"betternether")`. Como nenhum dos dois mods está no manifesto, esses itens provavelmente nem chegam a existir em jogo — mas isso é inferência sobre carregamento, não leitura, e está marcado como tal |
| Stats das 88 peças de armadura T1–T3 | `ItemConfig.ArmorSet` montado depois do mesmo tipo de desvio |
| Bônus de Spell Power dos cajados e das variantes netherite | idem |
| Dano base das armas do Soulslike | o mod guarda em arrays de config (`[F`) e em classes de item, fora do padrão que o extrator lê. Só saiu **dano de habilidade**, que é outra métrica — está rotulado como tal no arquivo |
| Stats dos 28 mechs do Pomkots | as classes concretas não declaram atributo com constante; as classes base leem de config; e `PomkotsConfig` só tem opções de comportamento (destruição de bloco, HUD, alvo). Não há JSON de spec no jar. **Nada a extrair pelos três caminhos** |
| `minecells:conjunctivius` | não localizei a classe de entidade servidor na extração — só renderizadores de cliente e a boss bar |
| `graveyard:acolyte` e `graveyard:lich` | o primeiro não declara atributo próprio; o segundo lê de `CorruptedChampionEntry` sem default legível |
| Itens de combate de Ad Astra, Botania, Bewitchment, Eldritch End, Mine Cells e Create | **fora do alcance de tempo desta ordem.** É a maior lacuna consciente da entrega |
| Valores vanilla de zumbi/esqueleto/creeper/enderman | o jar do Minecraft não faz parte do manifesto e o jar oficial é ofuscado. Entraram como régua conhecida, **explicitamente marcados como não medidos** |

**Sobre o mapeamento de nomes no Soulslike:** as chaves de `BossConfig` não usam os
mesmos nomes dos entity IDs. Só 4 dos 8 bosses tagueados casam por nome
(`returning_knight`, `chaos_monarch`, `day_stalker`, `night_prowler`). As outras 4
chaves (`decaying_king`, `fallen_icon`, `old_champions_remains`, `frenzied_shade`)
existem com valores, mas eu não consigo amarrá-las a um entity ID com certeza a partir
do jar. Listei as duas coisas em tabelas separadas em vez de chutar a correspondência.

## 4. Uma anomalia que vale conferência in-game

`wizards:wand_novice` recebe bônus de Spell Power da escola **FIRE**, não da arcana,
apesar de ser a varinha genérica de entrada. O bytecode é inequívoco:
`getstatic SpellSchools.FIRE` seguido de `ItemConfig$Attribute.bonus(id, 3f)`. As três
varinhas seguintes casam certo (arcane→ARCANE, fire→FIRE, frost→FROST), então não é
erro de leitura minha.

Pode ser intenção do autor do mod ou engano dele. Registrei como outlier no INDEX sem
julgar, mas vale um `/give` e uma olhada no tooltip antes de a diretoria assentar
qualquer coisa em cima disso.

## 5. O achado que mais importa para a Curva

**Não existe uma escada. Existem quatro réguas paralelas sem conversão entre si:**

1. `rpg_series` — tier declarado T0–T9, conteúdo só até T4, armadura só T1–T3.
2. Soulslike — progressão própria por config, sem tier, com sistema paralelo de
   mitigação (sangramento e *posture*) que a régua vanilla não tem.
3. TaCZ — eixo isolado. **O teto de DPS do manifesto inteiro está aqui**, uma ordem de
   grandeza acima do corpo a corpo (`m107` a 366.7 contra 11.5 da melhor arma branca).
4. Produção (MI, Tech Reborn, AE2) — zero itens de combate. Não entram na Curva.

E o teto de inimigo é `eldritch_end:hastur` com **2500 de vida** — mais de 4x o segundo
colocado, num mod que sequer declara a tag `c:bosses`.

## 6. Ferramentas

Tudo no scratchpad da sessão, não versionado: `attrs.ps1` (atributos de entidade),
`classdump.ps1` (defaults de config), `trace.ps1` (fluxo de bytecode), `pivot.sh`
(pivô das tabelas), mais os extratores de magia e TaCZ. Se a diretoria quiser rodar de
novo depois de atualizar mods, é ordem de uma linha que eu reconstruo.
