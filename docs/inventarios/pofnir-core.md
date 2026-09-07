# POFNIR Core — censo

`pofnir-core` · jar `pofnir-core-0.1.0.jar` · id `pofnir_core` · namespace: nenhum (não
registra conteúdo) · lado: both · depende só de Fabric Loader ≥ 0.15 e Minecraft ~1.20.1 ·
**mod nosso** (fonte da diretoria, compilado pela Ordem #020) · licença ARR da guilda

> **Não registra item, bloco, entidade nem receita.** É um mixin só: a **Forja do Mundo**.

| categoria | nº |
|---|---|
| Itens / Blocos / Entidades | 0 |
| Mixins | 1 (`pofnir.core.mixin.ForjaDoMundoMixin` em `MinecraftServer`) |
| Entrypoints | 1 (`pofnir.core.PofnirCore`, `main`) |
| Config | nenhuma chave; a "config" é a pasta `config/pofnir/dimensions/` |
| Comandos | 0 |

## O que a Forja do Mundo faz

Réplica do mecanismo de Vaaz (Prominence II, lido na Ordem #018), em ~90 linhas:

1. Injeta em **`MinecraftServer#createWorlds`** (yarn 1.20.1; em mojmap seria
   `createLevels`), em `HEAD` — antes de qualquer dimensão existir, a **cada abertura de
   mundo** (singleplayer ou servidor).
2. Lê `config/pofnir/dimensions/` (via `FabricLoader.getConfigDir()`). Cada subpasta é uma
   era: `era_medieval/`, `era_steampunk/`… Pastas terminadas em `_build` são ignoradas
   (bancada de construção).
3. Para cada era: **apaga** `<save>/dimensions/pofnir/<era>/` inteira e **copia** a árvore
   da fonte por cima (`Files.walk` + `Files.copy REPLACE_EXISTING`). Log:
   `[POFNIR] Forja do Mundo: '<era>' assentada pristina em <caminho>`.
4. Erros por era não derrubam o servidor: a era abre vazia naquela sessão e o log grava
   `Forja do Mundo falhou em '<era>'`.

**Consequência canônica:** as capitais renascem **pristinas a cada abertura**. Bloco
quebrado, baú saqueado, item largado — tudo volta. O ward protege até da persistência. É o
comportamento do Prominence, escolhido pela diretoria; a alternativa "copiar só se faltar"
não está implementada.

**O que a fonte precisa conter:** a pasta da era com `region/*.mca` (obrigatório) e,
opcionalmente, `entities/`, `poi/` e `data/` — o mesmo layout que o jogo grava em
`saves/<mundo>/dimensions/pofnir/<era>/`. Os chunks têm de ter sido salvos na **mesma
dimensão** (`pofnir:<era>`), porque o gerador declarado no datapack (flat vazio) é o que
preenche o que não vier nos region files.

## Como assar uma era nova (fluxo da guilda)

1. Num mundo de bancada, entrar em `pofnir:<era>` e construir (WorldEdit, funções, à mão).
2. `/save-all flush`, fechar o mundo.
3. Copiar `saves/<bancada>/dimensions/pofnir/<era>/{region,entities,poi}` para
   `config/pofnir/dimensions/<era>/` no repositório; `packwiz refresh`; commit.
4. Na próxima abertura de qualquer mundo, a Forja assenta a versão nova. Para uma era em
   obras que não deve ir para o pack ainda, usar o sufixo `_build`.

## Distribuição

O jar é asset da Release `pofnir-core-0.1.0` do repositório do pack; o manifesto aponta
para ele em `mods/pofnir-core.pw.toml` (URL + sha512), como qualquer mod externo.

## Chaves de lang fora do censo

Nenhuma: o mod não tem `assets/`.
