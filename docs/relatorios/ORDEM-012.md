# ORDEM #012 — Biblioteca e despensa do Vapor

**Status:** entregue · **Mods:** 140 → **142** · **Índice:** 183 → 185

---

## Parte A — os dois códices na biblioteca

| arquivo | estado |
|---|---|
| `docs/referencias/codice-westeros.md` | **já estava arquivado** pela ordem anterior (`0a2b82c`); o `Downloads` é byte a byte idêntico ao do repo (`cmp` sem diferença), então a "versão final" era a mesma — nada a refazer |
| `docs/referencias/codice-vapor.md` | **arquivado agora** — 95 linhas, 5.518 bytes, UTF-8, LF; "Códice do Vapor — biblioteca de referência da era steampunk (Paris do Vapor)" |

Exclusão da distribuição confirmada: `docs/**` no `.packwizignore`; após o `refresh`,
nenhum dos dois aparece no `index.toml`.

## Parte B — a despensa

| pedido | slug real | projeto | versão | lado | notas |
|---|---|---|---|---|---|
| `create-schematic-helper` | **`create-schematic-upload`** | Create: Schematic Helper (`vDsPXWBh`) | **2.0.3** release, jun/2026 | **client** | o slug da ordem não existe no Modrinth; o projeto é este — autor **uberswe** (mantenedor do createmod.com), fonte `github.com/uberswe/CreateSchematicUpload`, descrição: *"automatically uploads Create mod schematics to createmod.com"*. Sem dependências além do Create |
| `copycats` | `copycats` | Create: Copycats+ (`UT2M39wf`) | **3.0.10** release, 06/09/2026 | both | dependência dura: `create-fabric` (presente); JEI opcional (usamos EMI, não faz falta). 35 builds para 1.20.1 Fabric |

Ambos com versão 1.20.1 Fabric **estável** (`release`), então os dois entraram — o
caso "reporte e siga" não se aplicou.

O packwiz avisou inconsistência de numeração no Copycats+ (`fabric.1.20.1-1.3.4` vs
`3.0.10+mc.1.20.1-fabric`) — o mesmo esquema de nomes mudado que já vimos com a
Moonlight; ele escolheu a mais nova por data, 3.0.10, que é a que conferi.

**Lado do Schematic Helper.** É client-only por natureza: ele mexe na mesa de schematic do
próprio jogador e sobe/baixa arquivos do site. Num servidor dedicado não precisa (e não
deve) estar instalado — o packwiz já o marca `client`, e o instalador respeita.

## Contagem final

142 mods · índice 185 (183 + os dois `.pw.toml`) · `docs/` inteiro fora da distribuição.
