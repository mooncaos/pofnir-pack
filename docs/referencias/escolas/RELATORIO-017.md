# ORDEM #017 — O Grande Benchmark: As Duas Escolas

**Status:** entregue · **Commits:** parte 0 em `93a579f`; benchmark neste commit ·
**Anatomias:** [`superior/ANATOMIA.md`](superior/ANATOMIA.md) e
[`prominence/ANATOMIA.md`](prominence/ANATOMIA.md) · **Apêndice:**
[`APENDICE-arvore-colhida.md`](APENDICE-arvore-colhida.md) · **Cópias de estudo:**
`docs/referencias/escolas/_local/` (12 MB, 839 arquivos, **fora do git**)

**Decisão de execução que a diretoria precisa saber.** A ordem pedia copiar os arquivos das
duas escolas para `docs/referencias/escolas/`. O Prominence é *All Rights Reserved* com aviso
explícito contra reupload dentro dos próprios configs, o Superior não declara licença
(direito do autor por padrão), e **este repositório é público** no GitHub (61 commits visíveis,
API `visibility: public`). Copiar para `docs/` seria redistribuir. Executei o "colher" por
inteiro, mas a cópia verbatim ficou em `_local/`, ignorada pelo `.gitignore`; ao repo foram
as anatomias derivadas, números, trechos curtos e listagens. Mesma conduta da Ordem #014.

---

## 0. Pendências da casa (commit `93a579f`)

**0.1 Censo de blocos.** Nove listas novas em `docs/inventarios/blocos/` (Handcrafted 267,
Chipped 6.981, Supplementaries 231, Enchanted 63, Bewitchment 344, Create 643, Create Deco
397, Copycats+ 46, Epic Knights 2), todas lidas dos jars instalados na instância Modrinth.

**Resposta explícita — as prateleiras do Handcrafted:** **`handcrafted:spruce_shelf` existe**
e se chama "Spruce Shelf". São 11 prateleiras, uma por madeira: `acacia_shelf`,
`bamboo_shelf`, `birch_shelf`, `cherry_shelf`, `crimson_shelf`, `dark_oak_shelf`,
`jungle_shelf`, `mangrove_shelf`, `oak_shelf`, `spruce_shelf`, `warped_shelf`. O id usado
pelas funções da Highgarden estava certo; o que faltou na última versão do schem foi o bloco
em si, não o nome.

**0.2 Higiene.** `packwiz.exe` (12,7 MB) saiu do versionamento com `git rm --cached` — o
arquivo continua na máquina e nunca esteve no `index.toml` (o packwiz ignora o próprio
executável). `.gitignore` novo ignora `*.exe`, `*.dll`, `*.jar`, logs e lixo de sistema, e
agora também `docs/referencias/escolas/_local/`. `*.exe` entrou no `.packwizignore` por
redundância.

**0.3 O histórico do git.** A premissa da ordem não confere: **não há commit único**. O
repositório local tem **61 commits** contínuos, do `3b138c6` "Fundação do POFNIR Pack" ao
atual, e a API do GitHub lista os mesmos 61 no `origin/main` (`page=61; rel="last"`). Não
houve re-init nem force push; os reflogs mostram só commits normais e um `reset: moving to
HEAD` (meu `git stash` na Ordem #016, que deixou o único objeto pendurado, `0135888` "WIP on
main"). O que pode ter dado a impressão de "um commit só" é a página de arquivo do GitHub
mostrando apenas o último commit que tocou cada arquivo, ou uma visão "squash" de comparação.
Lição registrada: verificar com `git log --oneline | wc -l` e com a API antes de concluir
perda; os arquivos estão íntegros e o histórico também.

---

## Síntese comparada por seção

### A. Quests

| | Superior | Prominence |
|---|---|---|
| Volume | 7 capítulos, 813 quests, sem grupos | 31 capítulos em 7 grupos, 1.754 quests |
| Moeda do livro | **moedas** (`superior_shop:currency` como tarefa ×515 e recompensa ×552) | **XP** (tarefa ×1.063, recompensa ×1.373) + itens |
| Papel | circuito da economia + tutorial por ação | manual do pack + campanha + guias por mod |
| Ocultação | quase nada (7 `hide_until_deps`) | pesada (133 `hide_until_deps`, 25 invisíveis, 21 `min_required_dependencies`) |
| Gamestages | zero | zero (portões = advancements) |
| Comando como recompensa | 68 (KubeJS faz o resto) | 0 (o mod Prominent tem API de quest própria) |
| Tabelas de recompensa | 37 (classes, loot boxes, starter packs) | 13 (runas por tier, encantos de magia, cosméticos) |

**Veredito POFNIR:** *adaptar* o modelo Prominence de grupos e ocultação (o livro como
manual + campanha), *imitar* do Superior a tarefa-moeda (a Marca/Censo já são scripts — uma
moeda de quest fecha o circuito da guilda), *descartar* o volume de 1.700 quests: a POFNIR
tem 146 mods, não 445.

### B. Classes e escolha

| | Superior | Prominence |
|---|---|---|
| Mecanismo | item-runa `kubejs:rune_of_the_<x>` → script `unlock_class` → comandos Puffish + SkillSlots | raiz exclusiva da Árvore de Talento (`exclusive_root`) — 6 caminhos |
| Camadas | 4 ordens + 16 subclasses (+3 inacabadas) | 6 caminhos de talento × 10 especializações Simply Skills × livros de magia por classe |
| Troca | não há para o jogador (comandos de admin) — classe permanente | **Knowledge Scroll**: consome o item, devolve todos os pontos |
| Custo | moeda e loot box tutorial | um pergaminho |
| Onde vive | 65 scripts KubeJS, `persistentData` | JSON do Puffish + config do Simply Skills |

**Veredito POFNIR ("Voto da Classe"):** *imitar* o Prominence — raiz exclusiva numa
categoria Puffish é exatamente "votar": zero código, o mod garante a exclusividade, e o
custo de mudar de voto é um item (o pergaminho) que a diretoria pode tornar caro ou ritual.
*Adaptar* do Superior a ideia de item cerimonial de classe (a runa) como *gatilho* do voto,
não como mecanismo. *Descartar* o `persistentData` como fonte da verdade.

### C. Árvores de talento

| | Superior | Prominence |
|---|---|---|
| Categorias | 2 (`skill_tree` 958 nós / 16 raízes; `beastmaster` 273) | 14 (`prom` 176 nós / 6 raízes; 12 árvores de arma de 7 pontos; 1 piada) |
| Recompensa dos nós | `puffish_skills:command` (1.355) → habilidades em JS | `attribute` (104) + 14 `passive_skill` do Simply Skills |
| XP | nenhuma no Puffish; pontos por script/loja | `220·1.125^n`, cap 32, 1 ponto/2 níveis, XP de abate com anti-farm |
| Limites | nenhum declarado | `spent_points_limit 32`; armas 7 |
| Visual | fundo de bloco, cores azul/verde | fundo 5120×1440 por árvore, molduras próprias, glifos de fonte, dourado |

**Veredito POFNIR (15 árvores):** *imitar* o formato Prominence — é o molde: uma categoria
por árvore, `category.json` + `definitions.json` + `skills.json` + `connections.json` +
`experience.json`, limites declarados, XP por expressão. As 12 árvores de arma de 7 pontos
provam que "árvore pequena, muitas árvores" funciona. *Adaptar* a fonte de XP (a POFNIR já
tem Censo/Marca em KubeJS: podem alimentar pontos via `/puffish_skills points add`, como o
Superior faz). *Descartar* nós-comando em massa: manter os nós como atributos e passivas.

### D. O hub

| | Superior | Prominence |
|---|---|---|
| Hub | **não tem**: `/spawn`, `/home`, `/warp` (FTB Essentials) + fogueiras (Bonfires) | **Vaaz**: dimensão própria, flat de lava, bioma sem spawn, cidade pré-construída em region files (138 MB por era), 3 eras |
| NPCs | villagers (Easy Villagers) | 7 entidades do mod com diálogo, guarda que dá direções a 20+ lugares, 39 tabelas de loja, 13 loterias |
| Proteção | claims | sem voo criativo, velocidade máx 1.5, sem spawn; bloqueio de quebra não localizado |
| Entrada | Structure Compass → Evoker Fort | cena de câmera + advancements + tutorial com Radin |
| Som | BattleMusic por boss, sons de UI | OST própria de 8 faixas + música reativa |

**Veredito POFNIR (Vaaz da POFNIR):** *adaptar* a receita inteira do Prominence, que já está
80 % pronta na POFNIR sem saber: dimensão flat + bioma sem spawn (feito: as eras já são flat
e `monster: []`), cidade pré-construída (feito: `capital_v1` e o `highgarden.schem` — funções
e schem no lugar de region files, o que é mais leve e versionável), regras por dimensão
(`bed_works` já decidido). Falta: **NPCs com diálogo e loja** (o Prominence usa mod próprio;
para a POFNIR a via sem Java é KubeJS + entidades existentes + `tellraw` clicável, ou um mod
de NPC — decisão de mods para a diretoria), **cena de entrada** (KubeJS pode fazer título +
`spectate`/`tp` com fade via `/title`), e **proteção** (adventure mode por dimensão via
`gamemode` ao entrar, ou claim de servidor OPAC/FTB Chunks — FTB Chunks já está no pack).
*Imitar* do Superior só o `/spawn`-`/home` como rede de segurança. *Descartar* region files
de 138 MB no pack.

### E. Sistemas

| sistema | Superior | Prominence | veredito POFNIR |
|---|---|---|---|
| Prostrado/revive | **Hardcore Revival**: 2 min sangrando, 2 s para reviver, 5 blocos, brilha, 1 ♥ + fome/fraqueza; API chamada por script | nenhum | *imitar* os números do Superior (é a referência). Fabric 1.20.1 não tem o Hardcore Revival; a #016 listou as opções — os números de calibração estão aqui para quando um for escolhido |
| Túmulos | yigd + Gravestone, roubo padrão, fantasma amigável | yigd, **roubo após 1 h**, túmulo no vazio | *manter* a calibração da #016 (mais dura que ambas): sem roubo, sem túmulo no vazio |
| Party | SED Parties (5, sem fogo amigo) + FTB Teams | OPAC + Argonauts guilds + FTB Teams | *adaptar*: FTB Teams já está no pack e fala com FTB Chunks/Quests; 5 de tamanho e fogo amigo desligado são bons números |
| PvP | duelos por convite (script) | `/opacpvp` pessoal, padrão **off** | *imitar* o padrão-off do Prominence; duelo por convite é ideia de KubeJS barata |
| Barra de vida | pintada por script | Mob Health Bar 0.75 | Neat já entrou (#016); *descartar* barra por script |
| Claims | OPAC + FTB Chunks | OPAC (500 claims, 10 forceloads) | FTB Chunks já entrou; *adaptar* os tetos (500 é generoso para servidor de guilda) |
| **Mob scaling** | por **estado do servidor**: `power_level` 1–10 veste os mobs, 28 modificadores de gameplay, ameaça adaptativa pelo dano dos jogadores, Nightmare por voto, 4 dificuldades ×0.5–×6, +20 %/jogador | por **nível do jogador**: DAS (raio 64, HP ×1.085/nível), CEA por entidade, nível mínimo por boss, tiers de item | esta é a queixa do fundador: a POFNIR não escala nada hoje. *Adaptar* o Prominence (declarativo, previsível, testável) como base: CEA-like por regex (KubeJS `EntityEvents.spawned` + atributos) + nível-do-boss como portão; *imitar* do Superior o **voto de dificuldade** (Nightmare por maioria) como evento, não como base. Curva Mestra decide os números |
| Stages | AStages vazio | advancements + quests ocultas | *imitar* o Prominence: advancement como portão, sem mod de stage |
| Receitas | scripts KubeJS com listas comentadas | 26 datapacks nomeados | *adaptar*: a POFNIR já registra em `MUDANCAS.md`; datapack nomeado por mudança é a forma mais auditável (Lei 1) |
| Loot | LootJS + drops unificados por script | injetores JSON do RPG Series + Lootr custom | *imitar* o injetor por baú do Prominence via LootJS/KubeJS |

### F. UX

| | Superior | Prominence | veredito |
|---|---|---|---|
| Menu | FancyMenu: título (40 KB) + **HUD inteiro em layout** (41 KB) + panoramas 61 MB | FancyMenu: 26 layouts (título 95 KB, Esc, inventário, seleção de arma, diálogo, boas-vindas) | *adaptar* o Prominence: título + Esc + tela de boas-vindas; HUD por FancyMenu é caro de manter |
| Loading | Loading Backgrounds (3 packs), Seamless, Early Loading | Drippy Loading Screen | *imitar* Drippy (Fabric, leve) |
| Opções padrão | Default Options (fov 0.6, render 14, música 0) | YOSBR (fov 0.25, render 8, guiScale 3, ordem de 150 packs) | *imitar* YOSBR: a ordem de resourcepacks é o que faz o pack "abrir pronto" |
| Teclas | Controlling + KeybindsGalore | (vanilla) | *imitar* Controlling |
| Música | 5 mods de música + sons de UI | OST própria + ReactiveMusic + AmbientSounds | *adaptar*: uma OST curta por era (8 faixas bastam ao Prominence) + AmbientSounds |
| Idioma | inglês | PT-BR e ES por resourcepack para dezenas de mods | *imitar* — a POFNIR é em português |
| Boas-vindas | mensagem por script no 1º login | mod WelcomeScreen + layout | *adaptar* |

---

## Lista do que imitar / adaptar / descartar (resumo para a diretoria)

**Imitar (copiar a ideia como está):** raiz exclusiva Puffish como Voto da Classe; formato de
árvore Puffish com limites e XP por expressão; Knowledge Scroll como custo de troca;
advancements como portões; `/opacpvp` padrão desligado; YOSBR com ordem de packs; Drippy;
Controlling; injetor de loot por baú; números do Hardcore Revival.

**Adaptar (a ideia com os meios da POFNIR):** Vaaz por função + schem em vez de region files;
NPCs com diálogo e loja (decidir mod ou KubeJS); cena de entrada; proteção do hub por
gamemode/claim; livro de quests em grupos com manual + campanha; moeda de quest; escala de
mobs declarativa por regex + nível mínimo de boss, com voto de dificuldade como evento;
datapack nomeado por mudança de receita; FTB Teams como party; menu título + Esc +
boas-vindas; OST curta por era; PT-BR por resourcepack.

**Descartar:** classes e habilidades em `persistentData` (Superior); nós-comando em massa; HUD
inteiro em FancyMenu; 1.700 quests; region files de 138 MB; escala de mob por média móvel
de dano (opaca para o jogador); dois mods de túmulo ao mesmo tempo; barra de vida por script.

---

## Números que valem lembrar

| | Superior | Prominence |
|---|---|---|
| Mods | 361 (Forge) | 445 (Fabric) |
| KubeJS | 65 server + 32 startup + 20 client; 160 MB de assets | **zero** (tudo no mod Prominent, 68 MB) |
| Quests | 813 | 1.754 |
| Nós de talento | 1.231 em 2 árvores | 340 em 14 árvores |
| Config | 1.078 entradas | 389 entradas (+414 MB de dimensões) |
| Resourcepacks ativos | 36 | ~150 |
| Hub | — | 3 eras × 138 MB |

## O que não foi colhido, e por quê

- Region files de Vaaz, panoramas, `kubejs/assets`, OST e resourcepacks: binários, volumosos e
  cobertos por direito autoral — só listados (apêndice).
- Bytecode do mod Prominent: só strings e listagem de classes; sem descompilar.
- Nada foi testado in-game nas instâncias; toda a anatomia é de arquivo.
