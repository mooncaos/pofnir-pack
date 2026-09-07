# ORDEM #015 — A Highgarden definitiva

**Status:** entregue · **Parte A:** `era_medieval.json` (vazio absoluto) + `MUDANCAS.md` ·
**Parte B:** `pofnir:capital_v1` instalada (51.725 comandos) · **v0, etapa1, etapa2:**
intocadas · **Mods:** intocados

---

## Parte A — o diff do dimension json

`config/paxi/datapacks/pofnir_dimensoes/data/pofnir/dimension/era_medieval.json`:

```diff
       "structure_overrides": [],
-      "layers": [
-        {
-          "block": "minecraft:bedrock",
-          "height": 1
-        },
-        {
-          "block": "minecraft:deepslate",
-          "height": 20
-        },
-        {
-          "block": "minecraft:stone",
-          "height": 40
-        },
-        {
-          "block": "minecraft:dirt",
-          "height": 3
-        },
-        {
-          "block": "minecraft:grass_block",
-          "height": 1
-        }
-      ]
+      "layers": []
```

Nada mais mudou: gerador `minecraft:flat`, bioma `pofnir:era_medieval`, `lakes: false`,
`features: false`, `structure_overrides: []` (estruturas já estavam desligadas — não havia
o que desligar). O `dimension_type` (`min_y -64`, `height 384`) não foi tocado: abaixo de
y −64 o vazio mata. JSON validado (parse ok, LF, sem BOM).

Registro em `MUDANCAS.md` com cânone, alcance e reversão. Alcance real: só chunks que
ainda não existem; o que já foi explorado (v0, testes) fica como está.

## Parte B — a contagem

| verificação | resultado |
|---|---|
| Arquivo | `capital_v1.mcfunction`, 2.295.579 bytes, ASCII, LF, sem BOM, idêntico ao zip |
| Comandos | **51.725** (44.602 `setblock` + 7.114 `fill` + 8 `summon` + 1 `tellraw`) |
| Coordenadas | 100 % relativas (`~`); nenhuma absoluta, nenhum `^` |
| Extensão | x ±96, z ±96, **y −54 .. +99** em relação ao ponto de execução |
| Blocos | 42 ids vanilla + `enchanted:ritual_chalk` / `enchanted:golden_chalk` com `glyph` 0–3 (existem no Enchanted 3.1.14 do pack) |
| Rebanho | 8 `summon` (4 vacas, 4 ovelhas) a +2 de altura nos pomares |
| `tellraw` final | "[POFNIR] HIGHGARDEN DO FUNDAMENTO erguida no vazio: ilha completa (raiz -48), 3 muralhas + canal, pomares com rebanho, donjon-Templo a +99." |

`capital_etapa1` e `capital_etapa2` continuam no datapack (história), como a ordem permite.

## Comando de teste (Moon)

```
/execute in pofnir:era_medieval run tp @s 100000 30 100000
```
Deve estar **tudo preto**. Se aparecer grama, é chunk antigo: afastar mais. Aviso prático:
o `tp` cai no vazio — esteja em criativo/voando, ou o próximo comando não chega a ser
digitado.

```
/execute in pofnir:era_medieval positioned 100000 20 100000 run function pofnir:capital_v1
```
Com o ponto em y 20, a ilha ocupa y **−34 .. 119**: a raiz fica 30 blocos acima do
`min_y` (−64) e o donjon-Templo bem abaixo do teto (320). Executar uma vez só: a função
não é idempotente para os 8 animais (cada execução invoca outro rebanho).

```
/execute in pofnir:era_medieval run tp @s 100000 40 100000
```
E voar.

## Trava

Índice 187 → 188 (o `.mcfunction` novo; `docs/**` e `MUDANCAS.md` seguem fora da
distribuição), 142 mods, hash do `era_medieval.json` renovado no índice.
