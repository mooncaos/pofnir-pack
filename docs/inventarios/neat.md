# Neat — censo

`neat` · jar `Neat-1.20.1-41-FABRIC.jar` · namespace: `neat` · lado: **client** (o
`fabric.mod.json` declara `environment: client`; o Modrinth marca servidor `unsupported`) ·
depende de Fabric API ≥ 0.76 · Ordem #016 (inventário pela Lei 5)

> **Não registra nada no servidor.** Desenha barras de vida sobre entidades no cliente,
> via 4 mixins de render (`EntityRendererMixin`, `LevelRendererMixin`, `MinecraftMixin`,
> `AccessorRenderType`).

| categoria | nº |
|---|---|
| Itens / Blocos / Entidades | 0 |
| Teclas | 1 (`neat.keybind.toggle` — Toggle Health Bars) |
| Chaves de config | 27 |
| Texturas | 3 |
| Chaves de lang | 1 |

## Config (`config/neat.json5`, Fiber; 27 campos lidos do `NeatConfig$ConfigAccess`)

| grupo | campos |
|---|---|
| quem recebe barra | `showOnPlayers`, `showOnBosses`, `showOnHostile`, `showOnPassive`, `showOnlyFocused`, `showFullHealth`, `blacklist` |
| o que a barra mostra | `showCurrentHP`, `showMaxHP`, `showPercentage`, `showEntityName`, `showArmor`, `showAttributes`, `groupArmor`, `colorByType`, `textColor`, `drawBackground` |
| geometria | `plateSize`, `plateSizeBoss`, `heightAbove`, `hpTextHeight` |
| alcance | `maxDistance`, `maxDistanceWithoutLineOfSight` |
| interação com nametag | `disableNameTag`, `disableNameTagIfHealthbar` |
| outros | `renderInF1`, `enableDebugInfo` |

Nenhum config distribuído pelo pack: valores de fábrica. Num servidor dedicado o mod não
é instalado (side `client` no `pw.toml`), sem efeito para quem entra sem ele.
