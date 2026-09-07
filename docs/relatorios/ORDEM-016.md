# ORDEM #016 — "A Mega do Feriado"

**Status:** entregue em um commit · **Mods:** 142 → **146** · **Índice:** 190 → 195 ·
**Configs novos:** `config/yigd.json` · **MUDANCAS.md:** sem entrada (nenhum fix aplicado na Parte E)

---

## Parte A — camas não explodem em casa

Já estava aplicada pela ordem curta anterior (commit `b300de7`, "Camas funcionam nas eras").
Estado confirmado nos três `dimension_type`:

| era | `bed_works` | `respawn_anchor_works` | `fixed_time` |
|---|---|---|---|
| `era_medieval` | **true** | false | 1000 (dia) |
| `era_steampunk` | **true** | false | 12200 (dia) |
| `era_tec` | **true** | false | 18500 (noite) |
| `auren` (não alterada) | **false** | **false** | 23200 |

Diff da mudança (3 arquivos, 1 linha cada): `"bed_works": false` → `"bed_works": true`.
`respawn_anchor_works` já era `false` nas quatro. Lembrete de mecânica: a cama grava o
respawn nas três eras, mas o sono só é aceito onde a hora fixa é noite (era_tec); nas outras
duas o jogo recusa com "só é possível dormir à noite".

## Parte B — despensa de sistemas

| # | pedido | mod | versão | fonte | lado | pin |
|---|---|---|---|---|---|---|
| 1 | yigd | You're in Grave Danger | **2.0.16** (release, 22/06/2025; a mais nova para 1.20.1 Fabric) | Modrinth `HnD1GX6e` / `FsXdhUb2` | both | não (última da linha) |
| 2 | ftb-chunks | FTB Chunks (Fabric) | **2001.3.8** | CurseForge projeto 472657 / arquivo 8216873 | both | não |
| 3 | fallingtree | FallingTree | **1.20.1-4.3.4** (release, 05/01/2024) | Modrinth `Fb4jn8m6` / `NrtzFkZE` | both (ver nota) | não |
| 4 | PlayerRevive | — **não adicionado** | — | — | — | — |
| 5 | barra de vida | Neat | **1.20.1-41-FABRIC** (release, 23/10/2024, build oficial da Vazkii) | Modrinth `Ins7SzzR` / `lA2qbY0w` | **client** | não |

Dependências: yigd exige Fabric API e Cloth Config (presentes); FTB Chunks exige FTB
Library 2001.2.13, FTB Teams 2001.3.2 e Architectury 9.2.14 (presentes); Neat só Fabric API.
Nenhum pin: os quatro estão na última versão publicada para 1.20.1 e não há linha mais nova
para onde o `packwiz update` possa escorregar.

**Nota FallingTree.** O Modrinth marca o projeto como `server_only_client_optional`, valor
que o packwiz não conhece; ele avisou e marcou `both`. É o comportamento correto: o mod
funciona no servidor e, no cliente, só acrescenta a tecla/config.

**Incidente corrigido.** O `packwiz cf add ftb-chunks-fabric` reescreveu os `pw.toml` de
Fabric API e Architectury, trocando a fonte Modrinth por CurseForge (mesma versão, outra
origem). Como troca de fonte não estava na ordem, os dois arquivos foram restaurados ao HEAD
antes do refresh (`git checkout`), conferido: `fabric-api-0.92.12+1.20.1` e
`architectury-9.2.14-fabric` continuam apontando para o Modrinth.

### B4 — PlayerRevive: decisão

**Não existe build Fabric do PlayerRevive** de CreativeMD para 1.20.1: o projeto no Modrinth
declara só `forge, neoforge`; todos os arquivos 1.20.1 do CurseForge são `PlayerRevive_FORGE_*`;
o GitHub não tem releases. O "PlayerReviveFabric" que aparece nas buscas é outro projeto
(TNTNetta), não o original. Sem adicionar nada, as opções Fabric de "estado caído":

| opção | versão 1.20.1 Fabric | maturidade | lado | leitura |
|---|---|---|---|---|
| **Down But Not Out** (`down-but-not-out`) | 0.4.2+1.20.1 (**alpha**, 12/2025) | 7,8 mil downloads, atualizado 08/2026, só servidor (cliente vanilla/Geyser) | server | o mais próximo do PlayerRevive em mecânica (cai a meio coração, rasteja, sangra 45 s, reviver segurando o botão direito), mas a build 1.20.1 é alpha |
| PlayerReviveFabric (`playerrevivefabric`) | 1.0.0 (release, 05/2026) | 2,5 mil downloads, autor novo, uma única versão | both | release, mas sem histórico |
| Absolut Revive (`absolut-revive`) | a verificar | 1,7 mil downloads | ? | estado KO em vez de morte; pouco rodado |
| Revive (`revive`, 1,29 mi downloads) | a verificar | muito rodado | ? | é "reviver amigos já mortos" (hardcore), **não** estado caído — outro sistema |

Recomendação para a diretoria decidir: nenhum dos três de "estado caído" tem build 1.20.1
estável e rodada; Down But Not Out é o mais maduro como projeto, mas 1.20.1 é alpha. Se o
critério for "só release", PlayerReviveFabric 1.0.0 é o único que cumpre, com o risco de ser
um projeto de uma versão só.

### B5 — barra de vida: Neat, por quê

Neat tem build **oficial** Fabric para 1.20.1 (a própria Vazkii publica `-FABRIC`), é
release, e é o mais rodado do gênero; não precisou de equivalente. Marcado `client` pelo
próprio Modrinth (servidor `unsupported`): num servidor dedicado não instala, e não faz falta.

## Parte C — calibração do yigd (`config/yigd.json`)

Formato: Cloth AutoConfig com serializador Gson → o arquivo é `config/yigd.json`. O arquivo
do repo é parcial: o mod completa o resto com os padrões ao carregar (campos ausentes ficam
com o default do construtor). Chaves lidas do fonte do ramo `1.20-fabric`
(`GraveConfig.java`, `CompatConfig.java`), conferidas contra o jar 2.0.16.

| pedido | chave | valor | padrão do mod |
|---|---|---|---|
| Só o dono abre | `graveConfig.graveRobbing.enabled` | **false** | true (roubo após 1 h) |
| — | `graveConfig.unlockable` | true (mantido) | true — permite ao **dono** liberar o túmulo pela GUI; não abre para terceiros por si |
| — | `graveConfig.retrieveMethods.onBreak` | false (mantido) | false |
| Sem expiração | `graveConfig.graveTimeout.enabled` | **false** (explícito) | false |
| Trinkets | `compatConfig.enableTrinketsCompat` / `defaultTrinketsDropRule` | **true / PUT_IN_GRAVE** (explícitos) | idem |
| Mochila | `compatConfig.enableTravelersBackpackCompat` / `defaultTravelersBackpackDropRule` | **true / PUT_IN_GRAVE** (explícitos) | idem |
| Vazio | `graveConfig.generateGraveInVoid` | **false** | true |

**A chave do vazio existe e foi ativada.** Semântica verificada no fonte: em
`YigdServerEventHandler` (linha 193), `!generateGraveInVoid && pos.y < bottomY` nega a
geração; e em `GraveComponent.generateOrDrop` (linhas 382–390), quando a geração é negada o
mod chama `dropGraveItems` / `expComponent.dropAll` **no ponto da morte** — no vazio, os
itens caem e desaparecem. É literalmente "a borda apaga, não leva": quem cai desintegra sem
lápide e sem espólio. Com `true` (padrão), o mod ergueria o túmulo no `minimumGraveYLevel`
da dimensão (3 para dimensões custom), salvando tudo.

Fica registrado que `ignoredDeathTypes` seria a alternativa por tipo de dano, mas
`outOfWorld` também cobre `/kill`; a chave posicional é a certa.

## Parte D — santuário por bioma

**Já estava zerado.** Os quatro biomas custom (`worldgen/biome/{auren,era_medieval,
era_steampunk,era_tec}.json`) trazem `"spawners"` com as oito categorias vazias — inclusive
`"monster": []` — e nada foi alterado (diff vazio; o overworld não tem arquivo no datapack).
Confirmação bruta:

```
"spawners":{"monster":[],"creature":[],"ambient":[],"axolotls":[],"underground_water_creature":[],"water_creature":[],"water_ambient":[],"misc":[]}
```

Dois avisos de mecânica que o bioma não cobre: (1) **phantoms** não usam a lista do bioma —
nascem por insônia em qualquer dimensão com céu quando `skyDarken ≥ 5`; com as horas fixas,
só a era tec (noite) está exposta, e a regra `doInsomnia` é de mundo, fora desta ordem;
(2) spawners de mod que ignoram bioma (o Homem da Névoa e o Morador seguem desligados por
config, como a Lei 3 manda).

## Parte E — a praga visual da câmera

### O que a pesquisa achou

| onde | achado | relação com o sintoma |
|---|---|---|
| Particle Rain **#265** (aberto, 01/08/2026) "Mist intersects with player camera" | os planos 2D da névoa (`mist`) nascem alto demais e **atravessam a câmera**, tampando a visão; pedido de config para distância entre camadas e altura máxima; **sem fix** | é o sintoma "painéis colados na câmera". A névoa é azulada e, sob Complementary com `shaderpackTint: true`, ganha o dourado do sol |
| Particle Rain **#105** (aberto) "Ground fog bounding box" | a caixa da névoa rasteira é menor que o quad renderizado: "parece maior do que é" | reforça: os quads de névoa são grandes por desenho (`mist.size: 3.0`) |
| Iris **#2711** (aberto) | Particle Rain interfere no tingimento de partículas por shader | explica a cor, não o tamanho |
| ImmediatelyFast **#565** (fechado) | IF 1.6.12 impedia partículas do Particle Rain de nascer | o pack usa IF 1.5.5: não afeta |
| Falling Leaves / Visuality / Effective | nenhum issue com "huge/giant/camera"; Effective tem só problemas com Create e squids no céu | os "borrões de folha" podem ser folhas do Falling Leaves a 1 bloco do rosto (`leafSize: 5`, `minimumFreeSpaceBelow: 1`), que a névoa colada faz parecer maiores |

Versões no pack: Particle Rain **4.0.0-beta.11** (beta), Falling Leaves 1.15.6, Visuality 0.7.1,
Effective 2.3.2, ImmediatelyFast 1.5.5, Iris 1.7.6 + Complementary Reimagined r5.9, Sodium 0.5.13.

**Não há fix documentado** — nem versão nova (beta.11 é a última para 1.20.1) nem chave que
desligue a névoa (a config `particlerain/config.json` v6 só tem `mist.lifetime/opacity/size/
renderStyle`; `opacity: 0` seria mitigação, não fix, e capa conteúdo sem prova). Portanto,
nada foi alterado nem pinado; segue o plano de bissecção.

### Plano de bissecção (2–3 boots)

Antes de qualquer boot, **teste zero, sem reiniciar:** quando os quads aparecerem, apertar
`K` (Iris: liga/desliga shaders). Se somem, a interação é shader × partícula; se ficam, é a
partícula em si. Anotar.

1. **Boot 1 — só Particle Rain desligado** (suspeito principal, issue #265). Reproduzir nas
   condições do sintoma (chuva ou névoa de manhã, perto de água/folhas, andar 2–3 min).
   - Sumiu → culpado. Decisão da diretoria: manter a névoa e esperar o fix, ou ordem para
     `mist.opacity: 0` / `mist.size` menor no `config/particlerain/config.json` (com registro
     em MUDANCAS.md, por ser conteúdo capado).
   - Persistiu → boot 2.
2. **Boot 2 — Particle Rain de volta; Falling Leaves + Visuality + Effective desligados**
   (os três emissores de partícula restantes). Sumiu → religar um por boot na ordem Falling
   Leaves (borrões de folha) → Effective → Visuality até voltar. Persistiu → boot 3.
3. **Boot 3 — tudo ligado, só ImmediatelyFast desligado** (batching de render, com Iris
   "defeats some optimizations"). Sumiu → conflito de batching; ordem de pin/remoção
   documentada. Persistiu → o resto é Iris/Sodium puro: trocar o shaderpack por um boot
   (`shaderPack=` vazio em `iris.properties`) é o teste final.

Cada boot: desligar pelo próprio Modrinth App (toggle do mod), sem apagar jars, e guardar
`logs/latest.log` do boot em que o sintoma aparecer.

## Parte F — trava

| verificação | resultado |
|---|---|
| Mods | 142 → **146** (yigd, ftb-chunks-fabric, fallingtree, neat) |
| Índice | 190 → **195** (4 `pw.toml` + `config/yigd.json`) |
| `packwiz refresh` | sem erros |
| Arquivos tocados | 4 `pw.toml` novos, `config/yigd.json`, `index.toml`, `pack.toml`, este relatório |
| Não tocados | `dimension_type/*` (Parte A já em `b300de7`), `worldgen/biome/*` (Parte D já zerada), `MUDANCAS.md`, `docs/` além deste, nenhum mapa ou schematic |
