# ORDEM #014 — Anatomia de Highgarden

**Status:** entregue · **Entrega:** `docs/referencias/highgarden-anatomia.md` · **Repo:**
só números e ASCII; nenhum bloco, nenhum arquivo do mapa · **Mods/índice:** intocados

---

## Fonte

"Highgarden - Seat of House Tyrell - Game of Thrones", de Cash Banks, Planet Minecraft
(2016–2017, 5,1 mil downloads). É a recriação nomeada na ordem; as alternativas da mesma
busca (Desertwarrior 2021, "miniature vibe"; joshpwnstango 2016) são menores e não foram
baixadas. O download é um **`.schematic` MCEdit 1.7.10** com blocos do mod WesterosBlocks
(o autor exige o modpack/resource pack do WesterosCraft para texturizar), não um mundo com
region files — a ordem previa `.mca`; o parser foi escrito para o formato real.

Termos registrados no documento: página sem licença própria; Termos de Uso do PMC
(04/01/2020) — direito autoral fica com o criador, redistribuição proibida (cláusula 7).
Uso de estudo; arquivo ficou só no `Downloads` do Moon (duas cópias idênticas, uma do
clique dele e uma do meu, 493.858 bytes cada).

## Como foi feito

- Planet Minecraft está atrás do Cloudflare Turnstile: o navegador embutido e o Chrome
  real receberam o checkbox "Confirme que é humano", que **não** cliquei. No Chrome real
  ele resolveu sozinho após alguns segundos e a página abriu; o botão de download foi
  clicado por mim, autorizado pela ordem.
- Parser próprio em C# (`Nbt.cs` + `Hg.cs`, compilados por `Add-Type` no PowerShell 5.1,
  único compilador da máquina): NBT completo, IDs de 12 bits via nibble de `AddBlocks`,
  classificação terreno / vegetação / água / construção, mapas de altura, estatística
  azimutal com 720 ângulos por raio, 8 raios, componentes conexos por camada, cortes.
- Nomes dos blocos do mod: `WesterosBlocks.json` do ramo 1.7.10 no GitHub do WesterosCraft
  (último commit 2015). Cobre 24 dos IDs encontrados; os outros (1792, 2048, 2207, 235…)
  ficaram como "[WB sem nome]" — o servidor de 2017 usava um catálogo maior que o público.
- Vanilla retexturizado: "dispenser" com data 6/7, camada de neve a y 158 e gelo dentro de
  paredes só fazem sentido como cantaria do resource pack; o documento avisa.

## Os cinco pedidos

1. **Bounding box / altura:** 237 × 160 × 236; cilindro útil r ≈ 117 centrado em (122, 119);
   monte de y 7 (saia) a 29 (platô) e 39 (terraço alto, só a leste); donjon a y 150,
   agulha 159.
2. **Perfil radial:** tabela azimutal por raio + tabela "onde cada muralha senta" a partir
   dos 8 raios + meia-seção ASCII centro→leste (115 colunas, y 0–100). Três muralhas
   (r ≈ 97 / 74 / 22) e dois muros de contenção; cada anel é também um degrau de terreno.
3. **Mapas top-down:** mapa de alturas (dígito = y/10) e cortes a y 8, 32, 55 e 95, passo 3.
4. **Paleta:** 40 IDs mais usados com contagem, faixa de y e leitura (argila branca + quartzo
   = a pedra branca; ardósia verde/vermelha nos telhados; cantaria rosa "Reach"; pilar de
   mármore CTM nas colunatas).
5. **Cume:** footprints (coroa 37 × 23; recinto r 17–27), lista de corpos e torres com
   footprint e topo, e corte fino W→E pelo miolo (z 115).

Seção 6 do documento traduz em números o que a diretoria pode comparar com a Capital v1
(raios 96/68/38 vs 97/74/22 daqui) — sem decidir nada.

## Ferramentas deixadas no scratchpad (fora do repo)

`Nbt.cs`, `Hg.cs`, `assemble.ps1`, `doc_template.md`, raios `ray_*.tsv`, `azimuthal.tsv`,
cortes e mapas `.txt`, `WesterosBlocks-1.7.10.json`, `wb_map.tsv`. Reutilizáveis para
dissecar outro `.schematic` (formato MCEdit); para `.mca` seria preciso acrescentar o
leitor de região (cabeçalho de 8 KiB + chunks zlib), que não foi necessário.
