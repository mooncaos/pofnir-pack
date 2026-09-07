# ORDEM #018 — O Segredo de Vaaz (o fim do paste)

**Status:** entregue · **Fonte lida:** jar `Prominent-GLOBAL-MC1.20.1-4.0.2.jar` (497 classes
raiz + 4 jars aninhados) e `config/prominent/dimensions/` da instância · **Piloto:**
`kubejs/server_scripts/forja_automatica.js` + dimensão `pofnir:teste_forja` + função
`pofnir:teste_forja_marco` · **Capitais:** intocadas · **Mods:** nenhum novo

---

## 1. Onde a fonte vive

Os region files **não estão no jar**. Vivem como *override* de config do pack, na instância:

```
<instância>/config/prominent/dimensions/
├── vaaz_present/ {region 36 .mca 136 MB, entities 18, poi 24, data 9 .dat}
├── vaaz_past/    {region 37 .mca 137 MB, entities 19, poi 24, data 9}
├── vaaz_assault/ {region 37 .mca 137 MB, entities 19, poi 25, data 9}
├── vaaz_present_build/, vaaz_past_build/, vaaz_assault_build/   (cópias de construção, ignoradas)
└── challenge_arena/r.0.0.mca                                      (652 KB, arena instanciada)
```

Dono: o mod **Prominent** (`elocindev`, id `prominent` 4.0.0, jar 4.0.2), próprio do pack, ARR.
As dimensões em si são datapack comum dentro do jar (`data/prominent/dimension/vaaz_present.json`:
tipo `prominent:cinderstone_depths`, flat de 1 bedrock + 100 lava, bioma `city_of_vaaz` com
`spawners {}`). A cidade não é gerada: os chunks já vêm prontos. Um chunk aberto
(`r.0.0.mca`, chunk 0,0): `DataVersion 3465` (1.20.1), `Status minecraft:full`, 16 seções,
`Heightmaps`, `block_entities`, `PostProcessing`, `isLightOn` — chunk normal de mundo salvo.
`r.0.0.mca` tem 1.002 dos 1.024 chunks presentes; o conjunto por era cobre `r.-8..2` × `r.-11..3`
mais quatro regiões distantes (`r.60/61 . -64/-65`, um posto avançado).

## 2. O injetor

**`elocindev.prominent.mixin.capital_cities.LoadCapitalCitiesMixin`** (jar raiz, pacote
`mixin/capital_cities`, listado em `prominent.fabricmixins.json`). É um mixin em
**`MinecraftServer`**, método `createLevels(ChunkProgressListener)` (`class_3949`), injeção
`beforeCreateWorlds` em **HEAD** — ou seja, roda **antes de qualquer `ServerLevel` existir**,
a cada abertura de mundo. Lógica, lida do bytecode:

```
configDims = FabricLoader.getConfigDir() / "prominent" / "dimensions"
worldDims  = server.getWorldPath(LevelResource.ROOT) / "dimensions" / "prominent"
pastas = getSyncableDimensionFolders(configDims)
         // só diretórios; ignora "vaaz_volcano" e qualquer nome terminado em "_build"
se pastas vazio → sai
Files.createDirectories(worldDims)
para cada pasta:
    deleteRecursive(worldDims / nome)              // apaga o que o mundo tinha
    copyRecursive(configDims / nome → worldDims / nome)   // Files.walk + Files.copy REPLACE_EXISTING
erro → LOGGER.error("Failed to override prominent dimensions")
```

Consequências que explicam o Prominence: **Vaaz é reconstruída do zero a cada abertura**
(por isso é sempre pristina, por isso nada que o jogador faz lá persiste, por isso o
assalto é instanciado e o progresso vive em componentes do jogador, não no chunk). O
momento (HEAD de `createLevels`) garante que o `RegionFileStorage` da dimensão só abre
arquivos já copiados.

Duas peças acessórias, para completar a anatomia:

- **`VaazAssaultInstance`** e **`MythicChallenge`** usam a biblioteca **Fantasy**
  (`xyz.nucleoid.fantasy`, versão `0.4.11+1.20-rc1`, **embutida** como jar-in-jar do
  `prominentbase`) para criar dimensões *em tempo de execução* (`RuntimeWorldConfig` /
  `RuntimeWorldHandle`, id `vaaz_assault_i_<uuid>`), e copiam o template
  (`prominent/dimensions/vaaz_assault` ou `challenge_arena/r.0.0.mca`) para
  `dimensions/prominent/<id>/region/` com `Files.walk` + `Files.copy`. É o mesmo truque,
  por instância.
- Proteção de Vaaz (a dúvida da #017): `VaazPlayerManagementMixin` cancela **dano** e
  teleporta ao portão (`inVaaz`, `teleportToGate`); `InteractionLockConfig` tem listas
  `locked_dimensions` (as três Vaaz), `breakable_blocks`, `interactable_blocks/entities/
  items` (dwarf, serkonid, skellak, flameborn_stone, primordial_forge) aplicadas por
  `InteractionLockManagerMixin`, `PlayerDropPreventionMixin`, `EntityInteractMixin`,
  `PlayerCanConsumeVaazMixin`, `ServerNetworkSpellLockMixin`; `VaazDimensionUtils` trata
  fome congelada, armadura, voo. Ou seja: **sem modo aventura** — é lista branca por mixin.

## 3. Disponibilidade

| via | veredito |
|---|---|
| O injetor do Prominence | código interno do mod, **All Rights Reserved**; não é adotável |
| Fantasy (NucleoidMC) | biblioteca pública, **LGPL-3.0**, Maven `xyz.nucleoid:fantasy` em `maven.nucleoid.xyz`; **não é mod de usuário** (sem jar no Modrinth), serve a quem escreve mod; e resolve dimensão *runtime*, não a cópia de arquivos |
| Multiverse (senseiwells) | MIT; `/multiverse clone <de> <para> [região]` clona dimensões **já existentes no mundo** — não importa arquivos externos; versão 1.20.1 não confirmada |
| Custom Dimensions / CustomDimensions | criam dimensões vazias por comando; sem importação |
| **KubeJS + `java.nio.file`** | **bloqueado**: o filtro de classes do KubeJS 2001.6.5 nega `java.io`, `java.nio`, `java.net`, `java.util.zip` (lido em `BuiltinKubeJSPlugin`). Script não copia arquivo |
| **KubeJS + comandos** | **disponível hoje**: `runCommandSilent`, `forceload`, `function`, `persistentData` — é o caminho do piloto |

**Se a diretoria quiser a réplica literal (region files) no pofnir-core:** é pequena.
Um mixin em `MinecraftServer#createLevels` (ou, sem mixin, o evento Fabric
`ServerLifecycleEvents.SERVER_STARTING`, que dispara antes de `createLevels`) com ~40 linhas:
`FabricLoader.getConfigDir().resolve("pofnir/regioes")`, `server.getWorldPath(LevelResource.ROOT)
.resolve("dimensions/pofnir")`, listar pastas, copiar recursivamente com `REPLACE_EXISTING`.
Decisão de desenho a fazer: copiar **sempre** (Prominence: hub pristino) ou **só se não
existir** (preserva o que a guilda fizer no mundo). Estimativa: 1 dia de trabalho com
template Fabric, mais o custo de manter o mod a cada versão. Não precisa da Fantasy.

## 4. Plano de replicação POFNIR

**Recomendação: não replicar region files. Replicar o *efeito* — a cidade nasce sozinha —
com o que a POFNIR já tem.** As quatro áreas já são funções e schems; a "cópia" vira
"executar a função no primeiro carregamento". Foi isso que o piloto implementou.

| ponto | region files (via pofnir-core) | Forja Automática (piloto) |
|---|---|---|
| Peso no pack | ~140 MB por cidade no Prominence; nossas 4 áreas talvez 5–30 MB (só os chunks tocados) | **zero** além das funções (2,3 MB o `capital_v1`) |
| GitHub Pages | limite prático 100 MB por arquivo; solução: `.pw.toml` externo apontando para asset de Release (packwiz aceita arquivos externos por URL + hash) | não se aplica |
| Mundo novo | copia antes de criar os níveis | forceload + função no `loaded`, flag gravada |
| Mundo existente | copia por cima (Prominence) ou pula se existir (opção) | roda uma vez se a flag não existir; sobrescreve a área da obra — coordenadas virgens (as eras são vazio absoluto: sem risco fora do que a guilda construiu) |
| "Assar" cidade nova | construir num mundo, `/save-all`, copiar `saves/<m>/dimensions/pofnir/<dim>/{region,entities,poi}` para `config/pofnir/regioes/<dim>/` | construir com WorldEdit/função, exportar `.schem` ou `.mcfunction` (fluxo que a diretoria já usa), registrar em `OBRAS` |
| Entidades/NPCs | vêm nos `entities/*.mca` | `summon` na função (o `capital_v1` já faz com o rebanho) |
| Reset/pristino | apagar e copiar de novo a cada abertura | `/forja reforjar <id>` |
| Mod novo | sim (pofnir-core) | não |

Onde as obras moram no plano: `OBRAS` em `forja_automatica.js` — uma linha por área
(dimensão, ponto, função, raio). Quando a diretoria aprovar, as quatro entradas seriam
`pofnir:capital_v1` em `era_medieval`, o Vapor (quando virar função ou for colado pelo
`//schem` uma vez) em `era_steampunk`, e as duas restantes. Se um schem precisar entrar
por função, a diretoria já tem o conversor (é como nasceu `capital_v1`).

Limite honesto do caminho por função: funções muito grandes (centenas de milhares de
comandos) demoram segundos e travam o tick; `capital_v1` (51.725) é confortável. Acima
disso, dividir em etapas agendadas ou voltar ao caminho dos region files.

## 5. Piloto instalado

- **Dimensão de teste** `pofnir:teste_forja` (`dimension/teste_forja.json`): tipo e bioma
  da era medieval, flat sem camadas — vazio absoluto. Não toca em nenhuma capital.
- **Função** `pofnir:teste_forja_marco`: plataforma 9×9 de deepslate polida, ouro no
  centro, 4 lanternas, placa "POFNIR / Forja Automatica / Ordem #018", `tellraw`.
- **Script** `forja_automatica.js`: registro `OBRAS` (uma entrada: o marco em
  `pofnir:teste_forja` @ 0 64 0, raio 16), `ServerEvents.loaded` faz o `forceload add` na
  área, `ServerEvents.tick` roda a função 100 ticks depois, remove o forceload e grava
  `pofnir_forja:teste_forja_marco = true` no `persistentData` do servidor; `/forja status`
  e `/forja reforjar <id>` (perm 2). Tudo com API já usada no repo (`runCommandSilent`,
  `persistentData`, `tickCount`, `commandRegistry`).

**Roteiro de prova (Moon), mundo novo:**

```
(abrir o mundo; no console: "[Forja] teste_forja_marco: forceload em pofnir:teste_forja (…)"
 e ~5 s depois "[Forja] teste_forja_marco: assada em pofnir:teste_forja @ 0 64 0 (função devolveu N)")
/forja status                                   -> teste_forja_marco … assada
/execute in pofnir:teste_forja run tp @s 0 66 0 -> plataforma, ouro, lanternas e a placa já estão lá
/forceload query                                 (em pofnir:teste_forja) -> nenhum chunk: o forceload foi removido
(fechar e reabrir o mundo) -> console: "já assada neste mundo"; nada refeito
/forja reforjar teste_forja_marco               -> re-assa em 5 s
```

Se a função devolver 0 (chunks não carregados a tempo), o script não grava a flag e tenta
na próxima abertura; `ESPERA` sobe de 100 para 200 ticks. Não testado in-game por mim.

## Trava

Índice +3 (dimensão, função, script); 146 mods; capitais e `capital_v1` intocados;
nenhum mod adicionado; `MUDANCAS.md` sem entrada (nada capado).
