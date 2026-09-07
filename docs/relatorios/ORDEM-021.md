# ORDEM #021 — Via Régia v1.1 (os 3 bugs do teste de 07/09)

**Status:** entregue pela diretoria direto na pasta de trabalho (bancada Python, sem oficina) ·
**Capitais:** os 8 region files de `config/pofnir/dimensions/` reassados · **Mods:** nenhum novo ·
**Scripts:** `kubejs/server_scripts/chegada.js` (novo) · **Bancada:** `docs/bancada/` (novo)

---

## 1. Bug 3 — giz flutuante: diagnóstico medido no arquivo

| | Highgarden (v1) | Vapor (v1) |
|---|---|---|
| Forma do ward | octógono, raio 76–110 | círculo, raio 79–112 |
| Forma da ilha | redonda, raio ~88 (min 76 a NO/NE) | quadrada, ±80 |
| Blocos do ward | 442 glifos + 8 velas | 576 (placas de cobre, rebites, para-raios) |
| Assentados no chão real | **0** | **0** |
| Pendurados no vazio (nada embaixo) | 267 | 446 |
| Sobre vão de 1 a 10 blocos | 175 | 130 |
| Patamares removidos (grama+terra+pedra sob cada bloco) | 2.033 | 1.352 |

As "escadinhas" eram os patamares de 3 blocos que o `setblock … keep` da v1 colocava sob cada
glifo, inclusive além da borda da ilha. Também saiu uma placa de 63 lãs pretas flutuando ao norte
de Highgarden (z −107, Y 109), resto de uma versão antiga do ward.

**Regra da v1.1:** o ward é o **contorno da ilha a 4 blocos da borda real** (distância euclidiana
sobre a máscara de colunas com ≥3 blocos sólidos na faixa Y 70–100), um bloco por passo, cada
bloco assentado no topo verdadeiro da própria coluna. Sem patamar, sem suavização. Onde o topo
não é chão (prédio, árvore, mureta), o passo recua até 8 blocos para dentro ou 3 para fora,
escolhendo a coluna com o menor degrau em relação ao passo anterior; sem coluna válida, fica
buraco registrado.

| | Highgarden (v1.1) | Vapor (v1.1) |
|---|---|---|
| Passos do anel | 539 | 584 |
| Blocos colocados | 522 giz ritual (glifos 0-1-2-3) + 56 giz dourado + 8 velas | 495 placas de cobre encerado (3 oxidações alternadas) + 132 blocos de cobre + 80 para-raios |
| Selos | 8, um por ponto cardeal/diagonal: 3×3 de giz dourado, vela acesa no centro | 8: 3×3 de cobre cortado encerado, para-raios no centro; rebite com para-raios a cada 8 passos |
| Y do ward | 86 a 88, degrau máximo 2 | 78 a 88, 10 degraus acima de 2 (terreno) |
| Buracos | 0 | 4 (prédios encostados na borda) |
| Blocos do ward com ar embaixo | **0** | **0** |

Selos (X, Y, Z): Highgarden E (87,87,0) · SE (68,88,68) · S (0,88,105) · SO (−72,88,71) ·
O (−87,88,0) · NO (−52,88,−51) · N (0,86,−76) · NE (54,87,−53). Vapor E (71,80,0) · SE (73,83,74) ·
S (0,79,75) · SO (−76,83,77) · O (−77,79,0) · NO (−75,83,−75) · N (0,83,−75) · NE (73,83,−72).

## 2. Bug 1 — nascer na rocha

O `tp @s 0 90 0` do roteiro da #020 cai dentro da pedra: em Highgarden o chão em (0,0) é Y 102
(caminho de terra), em Vapor é Y 104 (escada de um prédio). Pontos canônicos de chegada, medidos
no arquivo (topo real + 1, céu aberto):

| era | ponto | sobre |
|---|---|---|
| medieval | **0.5, 103, 0.5** | caminho de terra, centro de Highgarden |
| steampunk | **2.5, 77, −22.5** | praça plana de andesito |

`kubejs/server_scripts/chegada.js`: `/chegar medieval` e `/chegar steampunk` (perm 2) fazem o
`execute in <era> run tp`. A era TEC entra na tabela `CHEGADA` quando a capital existir.

## 3. Bug 2 — camas invisíveis: a hipótese do "NBT mínimo" está descartada

A alma de cama gravada nos region files é `{id:"minecraft:bed", x, y, z, keepPacked:0b}`, **exatamente
o que o vanilla 1.20.1 grava** (a cor vem do bloco, não da alma). Não há NBT a corrigir. As 694
camas de Highgarden têm 694 almas, 1:1. Detalhe do próprio build: 389 são **pés soltos** (a
cabeceira é prateleira ou quartzo, decoração do autor); 305 são camas inteiras.

Prateleiras Handcrafted e barris não provam o pipeline: nenhum dos dois usa renderer de block
entity. O pack roda **EntityCulling** e **ImmediatelyFast**, os dois mexem no render de block
entities (mesma família da praga da câmera). Teste in-game, nesta ordem:

```
/chegar medieval
/execute in pofnir:era_medieval run data get block -6 104 -33     (cama inteira, cabeceira)
```
Se devolver `{id:"minecraft:bed", …}`, o servidor carregou a alma e a falha é do cliente:
olhando a cama invisível, `/culling` (liga/desliga o EntityCulling na hora). Se aparecer, achado.
Se não, Boot 1 (ImmediatelyFast desligado).

## 4. A bancada (docs/bancada/)

Pipeline reconstituído para não morrer com um chat: `mundo.py` (leitor/escritor Anvil, ida e volta
byte-idêntica aos .mca do repo), `voxel.py` (era inteira em array 3D + gravação com heightmaps),
`schem.py` (Sponge v2), `ward.py` (limpeza do ward antigo, contorno, assentamento), `assar.py`
(a ordem inteira, saída em staging), `inspecionar.py` (censo de um .mca). Requer Python 3 com
`nbtlib`, `numpy`, `scipy`. Não é distribuído ao jogador (`docs/**` está no `.packwizignore`).

## 5. Prova (Moon)

```
mundo novo → console: as duas linhas "assentada pristina"
/chegar medieval      → pé no caminho de terra, castelo ao norte; ir à borda: giz colado na grama, sem degrau no ar
/chegar steampunk     → praça de andesito; borda: placas de cobre no chão, para-raios de pé
quebrar um bloco da cidade → sair → reabrir → o bloco voltou (fecha o teste de fumaça da #020)
```

## Trava

8 `.mca` substituídos (2 MB), 1 script KubeJS novo, `docs/bancada/` novo, nenhum mod tocado,
`MUDANCAS.md` sem entrada (nada capado). Commit via `atualizar.bat` (refresh + push).
