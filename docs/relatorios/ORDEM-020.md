# ORDEM #020 — A Via Régia (integração final)

**Status:** entregue, com **uma pendência que só o Moon fecha** (a Release no GitHub — ver §2) ·
**Mods:** 146 → **147** (`pofnir-core`) · **Capitais:** `config/pofnir/dimensions/` (2 MB, 8 region
files) · **Schems:** os dois saíram do repo · **Inventário do núcleo:** Lei 5 cumprida

---

## 1. Compilar o núcleo

**Resultado:** `BUILD SUCCESSFUL in 1m 13s` → `pofnir-core-0.1.0.jar` (6.471 bytes; 3 classes,
`fabric.mod.json` com versão expandida `0.1.0`, `pofnir-core.mixins.json`, refmap).

**O alvo do mixin não reclamou.** O refmap gerado pelo Loom prova o mapeamento:
`createWorlds` → `Lnet/minecraft/server/MinecraftServer;method_3786(Lnet/minecraft/class_3949;)V`
— o mesmo `method_3786` / `class_3949` (ChunkProgressListener) que o `LoadCapitalCitiesMixin` do
Prominent injeta (Ordem #018). Nada foi ajustado no fonte da diretoria.

**Ambiente de build (não estava pronto; ficou tudo fora do repo):**

| item | o que havia | o que foi feito |
|---|---|---|
| JDK | só um **JDK 25** (Adoptium) no PATH e o JRE 17 do Modrinth (sem `javac`) | Loom `1.6-SNAPSHOT` exige Gradle 8.x, que não roda no JDK 25 → **Temurin JDK 17.0.20.1 portátil** (zip da API da Adoptium) no scratchpad |
| Gradle | nenhum, e o zip não traz wrapper | **Gradle 8.10.2** (zip oficial) no scratchpad |
| `org.gradle.jvmargs=-Xmx2G` | com `--no-daemon` o Gradle bifurca um daemon de uso único para honrar a linha | na **cópia de trabalho** a linha foi removida e a memória passada ao cliente (`JAVA_OPTS=-Xmx2G`); o fonte da diretoria ficou intacto |
| **Bug de ambiente** | todo `Pipe.open()`/`Selector.open()` do Java 17 falhava com "Unable to establish loopback connection / Invalid argument: connect" — o JDK 17 implementa pipes NIO sobre socket **AF_UNIX** num arquivo em `TMP`, e a ferramenta injeta `TMP=C:\Users\GUILHE~1\…` (nome curto 8.3), que o AF_UNIX do Windows rejeita | build rodado com `TMP=TEMP=C:\Temp\pofnir-build` (e `-Djdk.net.unixdomain.tmpdir` idem). Documentado porque vai morder de novo qualquer build Java nesta máquina |

**Receita reproduzível** (fonte original intacto em `C:\Users\Guilherme\Desktop\pofnir-core\pofnir-core\`,
fora do repo, com o jar ao lado):

```
set JAVA_HOME=<JDK 17>
set TMP=C:\Temp\pofnir-build
set TEMP=C:\Temp\pofnir-build
set JAVA_OPTS=-Xmx2G
gradle build --no-daemon
```

**Teste de fumaça — preparado, não executado por mim (não rodo o jogo):** o jar está em
`…\ModrinthApp\profiles\Pofnir Preview\mods\` e as regiões em `…\config\pofnir\dimensions\`.
Ao abrir um mundo novo, o log deve mostrar:

```
[POFNIR] Nucleo desperto. A Forja do Mundo vigia as dimensoes.
[POFNIR] Forja do Mundo: 'era_medieval' assentada pristina em <save>\dimensions\pofnir\era_medieval
[POFNIR] Forja do Mundo: 'era_steampunk' assentada pristina em <save>\dimensions\pofnir\era_steampunk
```

## 2. Distribuir o jar

- **`mods/pofnir-core.pw.toml`** escrito à mão (sem `[update]`: é externo, manual), `side both`,
  URL determinística do asset e `sha512` do jar compilado:
  `814f466a…a63ccdf2` (6.471 bytes). O `packwiz refresh` aceitou e o índice o lista.
- **Release `pofnir-core-0.1.0`: não pude criar.** Não há `gh` nesta máquina e a API do GitHub
  exige token — a credencial que o git usa para `push` fica no gerenciador do Windows e eu não
  a manuseio. O que está feito: a **tag `pofnir-core-0.1.0`** anotada e enviada ao `origin`,
  apontando para este commit, e o jar em `C:\Users\Guilherme\Downloads\pofnir-core-0.1.0.jar`.
  **Fecha em 1 minuto:** GitHub → Releases → *Draft a new release* → escolher a tag
  `pofnir-core-0.1.0` → anexar o jar do Downloads → *Publish*. O nome do asset tem de ser
  exatamente `pofnir-core-0.1.0.jar` para a URL do `pw.toml` bater.
- **Aviso:** até a Release existir, o instalador do packwiz falha nesse único arquivo (404). O
  resto do pack instala; o jar já está na instância de teste por cópia direta.
- **Lei 5:** `docs/inventarios/pofnir-core.md` (o que a Forja faz, o que a fonte precisa
  conter, fluxo de assar uma era) + `docs/inventarios/blocos/pofnir-core.md` (0 blocos) +
  linha no `INDEX.md`.

## 3. Instalar as capitais

`config/pofnir/dimensions/` no repo, 2.048 KB, direto do zip da diretoria:

| era | region files | chunks presentes |
|---|---|---|
| `era_medieval` | `r.-1.-1`, `r.-1.0`, `r.0.-1`, `r.0.0` | 28 + 37 + 28 + 38 = 131 |
| `era_steampunk` | `r.-1.-1`, `r.-1.0`, `r.0.-1`, `r.0.0` | 32 + 32 + 28 + 35 = 127 |

Sem `entities/`, `poi/` nem `data/` — só blocos (o rebanho do `capital_v1` não vem nos
region files; se a diretoria quiser bichos, é `entities/` no próximo assar). Entram no índice
como qualquer config e chegam à máquina de todo jogador pelo instalador.

## 4. Aposentar o passado

- `git rm` de `config/worldedit/schematics/highgarden.schem` e `vapor.schem` (a pasta some do
  índice; a cópia local que o Moon tem na instância não foi tocada).
- `docs/MEDIEVAL_RESOURCES.md`: o guia de WorldEdit/Litematica do clã continua (é para
  construções de membro), mas ganhou o aviso de que **capitais não passam mais por paste** —
  chegam pela Forja. Era a única menção viva ao ritual fora de `CREDITOS.md` (intacto, as
  compras seguem creditadas) e dos relatórios (histórico).
- Ficam no datapack, sem uso pela Forja: `capital_v1`, `capital_etapa1/2`, a v0, `teste_forja`
  e `forja_automatica.js` (piloto da #018). Remover é ordem própria; nada foi capado.

## 5. Prova (Moon)

```
mundo novo → console: as duas linhas "assentada pristina"
/execute in pofnir:era_medieval run tp @s 0 90 0    → castelo de pé; prateleiras Handcrafted à vista
/execute in pofnir:era_steampunk run tp @s 0 90 0   → cidade do vapor
quebrar um bloco na cidade → sair do mundo → reabrir → o bloco voltou
```

Se uma era abrir vazia: procurar no log `Forja do Mundo falhou em '<era>'` (a exceção vem
junto). Se o log não tiver nenhuma linha `[POFNIR]`, o jar não carregou (conferir `mods/`).

## Trava

| verificação | resultado |
|---|---|
| Mods | 146 → **147** |
| Índice | 198 − 2 schems + 8 `.mca` + 1 `pw.toml` = **205** |
| `packwiz refresh` | sem erros |
| Fora do repo | fonte + jar em `Desktop\pofnir-core\`; JDK/Gradle no scratchpad; jar no Downloads para a Release |
| Não tocado | `CREDITOS.md`, capitais em funções, `MUDANCAS.md` (nada capado), qualquer outro mod |
