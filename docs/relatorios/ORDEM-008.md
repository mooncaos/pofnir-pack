# ORDEM #008 — Mundo medieval vivo: vilas, deco, aço e bancada da guilda

**Status:** entregue · **Mods:** 131 → **140** (+6 pedidos, +3 dependências) · **Índice:** 170 → 179

---

## Parte A — adições (Modrinth, 1.20.1 Fabric, projeto principal)

| # | pedido | slug real | versão | lado | resultado |
|---|---|---|---|---|---|
| 1 | Towns and Towers | `towns-and-towers` | 1.12 (Fabric+Forge) | server req. / client opt. | **já estava no manifesto**, na versão mais recente para 1.20.1 — no-op |
| 2 | COTOV | **`ct-overhaul-village`** (título "ChoiceTheorem's Overhauled Village", id `fgmhI8kH`) | 3.4.14 | server req. / client unsupported | **já estava no manifesto**, na mais recente — no-op |
| 3 | Epic Knights | `epic-knights-shields-armor-and-weapons` | **10.11** (linha 10.x, mar/2026) | both | adicionado; Architectury e Cloth Config **não duplicaram** ("all dependencies already added") |
| 4 | Chipped | `chipped` | 3.0.7 | both | adicionado + dependência **Athena** (`athena-ctm` 3.1.2). O Resourceful Lib já estava (2.1.29) |
| 5 | Handcrafted | `handcrafted` | 3.0.6 | both | adicionado; Resourceful Lib já estava |
| 6 | Supplementaries | `supplementaries` | **1.20-3.1.43-fabric** | both | **oficial e estável — adicionado** + dependência **Moonlight Lib** (1.20-2.16.35-fabric) |
| 7 | WorldEdit | `worldedit` | 7.2.15 | both (Modrinth: "unknown") | adicionado; única versão Fabric 1.20.1 |
| 8 | Litematica | `litematica` | 0.15.4 | **client** | adicionado + dependência **MaLiLib** (0.16.3, client) |

### Supplementaries — o veredito pedido

**Oficial.** Não é um port de terceiro: é um único projeto Modrinth (`fFEIiSDQ`) que publica
os dois loaders, e a equipe é **Plantkillable + MehVahdJukaar** — o autor original.
**Estável:** 131 versões para 1.20.1 Fabric, todas marcadas `release`, a mais recente de
06/04/2026. Depende de `moonlight >= 1.20-2.16.26`; entrou a 2.16.35, que satisfaz.

O packwiz emitiu um aviso ao resolver a Moonlight ("versions inconsistent between latest
version number and newest release date: fabric_1.20-2.13.82 vs 1.20-2.16.35-fabric").
Conferi: é benigno — o esquema de numeração do Moonlight mudou e o packwiz escolheu a
mais nova por data, que é a correta e a que o Supplementaries exige.

### Faixas de versão conferidas contra os `fabric.mod.json` reais

| mod | exige | temos |
|---|---|---|
| Epic Knights | `architectury >= 9.0.8`, `cloth-config2 >= 11.0.99`, `minecraft >= 1.20 < 1.20.2` | 9.2.14, 11.1.136, 1.20.1 |
| Chipped | `resourcefullib >= 2.1.20`, `athena >= 3.1.1` | 2.1.29, 3.1.2 |
| Handcrafted | `resourcefullib >= 2.1.1` | 2.1.29 |
| Supplementaries | `moonlight >= 1.20-2.16.26` | 2.16.35 |

Nenhum projeto duplicado (`mod-id` único em todos os 140 arquivos).

## Parte B — convivência (reportado, não resolvido)

**Towns & Towers + COTOV + Terralith.** A página do Towns & Towers declara, em texto:
*"compatible with most world generation mods, like Terralith, WWOO, BYG, BoP, Repurposed
Structures or ChoiceTheorem's Overhauled Villages"* — cita **os dois** pelo nome. Declara
também *"works serverside"* e que, de 1.19.3 em diante, depende do CristelLib — que já está
no manifesto (`cristel-lib`). A página do COTOV declara compatibilidade genérica (*"works
with most world-generation and structure mods"*) e que é seguro adicioná-lo a mundo
existente (estruturas só em chunks novos); **não cita** Terralith nem T&T pelo nome. Ou
seja: a compatibilidade dos três é declarada por um dos lados, explicitamente, e pelo
outro só em termos gerais.

**Epic Knights e as tags `rpg_series`.** **Não entra em nenhuma.** O jar não tem
`data/rpg_series/`; seus dados vivem em `magistuarmory` (709 arquivos), `minecraft` e `c`.
Para a Curva, isso significa que os 460 itens dele ficam **fora da escada T0–T9** — uma
quinta régua paralela, como o Soulslike. Dois efeitos colaterais que vale registrar:
- Ele **acrescenta seus estiletes a `minecraft:swords`** (`wood/stone/iron/gold/diamond_stylet`,
  como entradas `required: false`). A tag `pofnir:aprimoravel_arma` da Ordem #004 inclui
  `#minecraft:swords`, então **os estiletes já aceitam o Selo do Rito e o Chip Modular**
  sem ninguém ter decidido isso. As outras ~455 peças não estão em `swords`.
- Ele acrescenta armaduras a `minecraft:head/chest/leg/foot_armor`, **não** a
  `minecraft:trimmable_armor` — que é a tag do Selo Temperado. Logo as armaduras dele
  **não** aceitam selo. Se a diretoria quiser, é uma linha na tag.

**Lados client/server (importa para o servidor):**

| mod | packwiz `side` | o que isso significa |
|---|---|---|
| Litematica | client | só na máquina de quem usa; o servidor não precisa dele |
| MaLiLib | client | idem (dependência do Litematica) |
| WorldEdit | both | roda onde o mundo roda: no singleplayer, no servidor integrado; em servidor dedicado, **tem que estar no servidor**. O Modrinth marca "unknown"; `both` é o correto |
| **Athena** (dep. do Chipped) | **client** | **ponto de atenção:** o Chipped o exige em `depends` (`athena >= 3.1.1`) e o Chipped é `both`. Num servidor dedicado o packwiz **não instala** mods `client`, e o Chipped se recusaria a carregar sem o Athena. Quando o servidor existir, é ordem de uma linha: `side = "both"` no `athena-ctm.pw.toml`. Não mexi. |

## Parte C — guia do clã

`docs/MEDIEVAL_RESOURCES.md`, PT-BR, nível iniciante, com as seções pedidas: fontes de
repertório (os quatro sites), "mapas são mundos" (vai em `saves/`, mundo separado, nunca
por cima do mundo do clã), "schematics são enxertos" (fluxo WorldEdit com `//schem load`,
`//paste`, `//paste -a`, `//undo`, `//rotate`; fluxo Litematica com carregar, projetar,
mover, Material List e Verifier), Create (Schematic Table + Empty Schematic +
Schematicannon com pólvora — ferramenta do próprio mod, sem mod extra) e o aviso de
licença apontando para `docs/CREDITOS.md`.

**Interno confirmado:** `docs/**` está no `.packwizignore` e o guia **não aparece** no
índice (0 ocorrências após o refresh).

## Vetos respeitados

Nada de MineColonies, Nef's, Conquest Reforged ou Simply Swords foi adicionado nem
pesquisado como alternativa. Vilas vanilla intocadas.

## Trava aritmética

`index.toml`: 179 (170 + 9) · `mods/`: 140 (131 + 9) · guia no índice: 0 · os 9 novos
`.pw.toml` presentes no índice: 9. Commit só depois de todos verdes.

## Correções minhas de passagem

- Os itens 1 e 2 já estavam no manifesto desde o censo da Ordem #003 — conferi antes de
  rodar `mr add` para não duplicar.
- Minha primeira extração de dependências e de citações de compatibilidade falhou (regex
  errada sobre o JSON do Modrinth). Refiz com parser de verdade; as citações acima são
  literais das páginas.
- A trava falhou uma vez por defeito do meu script (`bc` inexistente nesta máquina, slug
  `athena` em vez de `athena-ctm`), não dos números. Refeita sem `bc`.
