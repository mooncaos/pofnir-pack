# Guia do clã — construções de fora: mapas, schematics e Create

Para quem nunca importou nada. Tudo aqui é feito **dentro do jogo**, com os mods que o pack
já traz: **WorldEdit**, **Litematica** e o **Create**. Não precisa instalar mais nada.

Este arquivo é interno do repositório: fica em `docs/`, que o `.packwizignore` exclui da
distribuição. Ele não vai para a máquina de ninguém — é só nosso.

---

## Onde buscar repertório

| site | o que tem | formato |
|---|---|---|
| **planetminecraft.com** | mapas inteiros, cidades, castelos, e também schematics | `.zip` de mundo, ou `.schematic` / `.schem` / `.litematic` |
| **minecraftmaps.com** | mapas (mundos prontos) | `.zip` de mundo |
| **minecraft-schematics.com** | schematics avulsos: uma torre, uma ponte, uma casa | `.schematic` / `.schem` |
| **createmod.com/schematics** | contraptions do Create: fábricas, trens, elevadores | `.nbt` (schematic do próprio Create) |

Regra prática: **se veio como uma pasta de mundo, é mapa; se veio como um arquivo só, é
schematic.** Cada um tem um fluxo diferente, e misturar os dois é a fonte de quase todo
problema.

---

## Mapas são mundos

Um mapa baixado é um **mundo separado**. Ele não se "coloca" dentro do mundo do clã — ele
**é** um mundo, com o próprio spawn, o próprio terreno, os próprios chunks.

**Para abrir um mapa:**

1. Baixe o `.zip` e extraia. Vai sair uma pasta com `level.dat` dentro (às vezes dentro de
   outra pasta — procure o `level.dat`; a pasta que o contém é o mundo).
2. Copie essa pasta para a pasta `saves/` da instância:
   `%APPDATA%\ModrinthApp\profiles\Pofnir Preview\saves\`
3. Abra o jogo → Singleplayer → o mapa aparece na lista como um mundo novo.

**O que fazer com ele:** inspiração (andar, tirar print, entender a paleta) ou **base** —
você entra nele, seleciona a parte que interessa com o WorldEdit e salva como schematic
(`//copy` → `//schem save nome`). Aí sim ela vira um enxerto e vai para o mundo do clã pelo
fluxo da seção seguinte.

**O que nunca fazer:** copiar a pasta de um mapa por cima do mundo do clã, ou mexer nos
arquivos de região na mão. Isso destrói o mundo. Mapa é mundo separado; o que atravessa a
fronteira é schematic.

---

## Schematics são enxertos

> **As capitais não passam mais por aqui.** Desde a Ordem #020 ("A Via Régia"), as cidades
> das eras chegam prontas com o mundo: o mod **POFNIR Core** copia os region files de
> `config/pofnir/dimensions/<era>/` para dentro do save a cada abertura (a Forja do Mundo).
> Ninguém carrega nem cola schematic de capital; o ritual de paste foi aposentado. Os
> fluxos abaixo continuam valendo para **construções do clã** (torre, ponte, casa), não
> para as capitais.

Um schematic é uma **construção sem mundo em volta**: a torre, a ponte, a casa. Ele é
colado no lugar que você escolher dentro do mundo do clã. Dois fluxos, para dois momentos.

### Fluxo WorldEdit — colar pronto (criativo / admin)

Serve para pousar a construção inteira de uma vez. Os comandos começam com `//`.

1. Coloque o arquivo (`.schem` ou `.schematic`) em:
   `%APPDATA%\ModrinthApp\profiles\Pofnir Preview\config\worldedit\schematics\`
   (se a pasta não existir, crie).
2. No jogo: `//schem load nome` (sem a extensão). Ele confirma que carregou.
3. **Posicione-se.** O schematic cola em relação a onde você está, no ponto em que foi
   copiado — normalmente o canto onde o autor estava. Fique onde quer o canto, no chão.
4. `//paste`. Para colar **sem** trazer o ar do schematic (não apaga o que já existe em
   volta): `//paste -a`.
5. Errou o lugar? `//undo` desfaz. Pode repetir `//undo` várias vezes. `//redo` refaz.
6. Girar antes de colar: `//rotate 90` (ou 180, 270), depois `//paste` de novo.

Dicas: `//pos1` e `//pos2` marcam uma seleção; `//copy` copia o que está nela em relação a
você; `//schem save nome` guarda como schematic para reaproveitar. `//paste` grande pode
travar alguns segundos — é normal.

### Fluxo Litematica — construir guiado (survival / no servidor)

Serve para quando a construção tem que ser erguida bloco a bloco, com os materiais de
verdade. O Litematica **não coloca blocos**: ele projeta um holograma e você constrói em
cima.

1. Arquivo `.litematic` em:
   `%APPDATA%\ModrinthApp\profiles\Pofnir Preview\schematics\`
   Se o que você tem é `.schem`/`.schematic`, o Litematica converte pelo próprio menu
   (Schematic Manager → Load → escolha o arquivo → ele oferece converter).
2. No jogo, tecla **M** abre o menu do Litematica. Vá em **Load Schematics**, escolha o
   arquivo e clique em **Load**.
3. O holograma aparece. Para mover: **Schematic Placements** → selecione o seu → mude a
   origem (coordenadas) ou use a ferramenta de mover (por padrão, segurando um
   **stick** na mão e usando os controles indicados na tela).
4. Construa por cima do holograma. **Material List** (no menu M) mostra o que falta; o
   **Schematic Verifier** aponta bloco errado ou faltando.
5. Alternar visibilidade do holograma para enxergar o que está fazendo: tecla configurada
   em *Hotkeys → toggleAllRendering* (defina uma tecla que você lembre).

O Litematica é **só do seu computador** (client-side): funciona igual em singleplayer e em
servidor, e ninguém mais precisa tê-lo instalado para você usar. O WorldEdit precisa estar
onde o mundo roda — em servidor, no servidor.

---

## Create: schematics são coisa do próprio mod

Os arquivos do createmod.com são `.nbt` e **não passam pelo WorldEdit nem pelo
Litematica**. O Create tem a própria ferramenta, e ela já está no pack.

1. Coloque o `.nbt` em:
   `%APPDATA%\ModrinthApp\profiles\Pofnir Preview\schematics\`
   (a mesma pasta do Litematica — o Create lê a dele de lá também).
2. Crafteie uma **Schematic Table** (mesa de schematic) e um **Empty Schematic**
   (schematic vazio). Coloque a mesa, ponha o schematic vazio nela, escolha o arquivo na
   lista e confirme: ele vira um **schematic gravado**.
3. Com o schematic na mão, um holograma aparece. Posicione (as teclas aparecem na tela:
   mover, girar, espelhar) e confirme a posição.
4. Para construir de verdade: crafteie um **Schematicannon** (canhão de schematic),
   coloque-o perto, ponha o schematic dentro, alimente com **pólvora** e forneça os
   materiais (o canhão lê de baús encostados nele). Ele atira os blocos no lugar, um a um.
   Em criativo, a opção de ignorar materiais aparece na interface do canhão.

Isso vale para qualquer contraption: fábrica, trem, elevador. É o fluxo que a capital
steampunk vai usar.

---

## Licença: o que é de fora fica no mundo, não no repositório

Tudo que você baixa desses sites tem um autor, e cada autor decide o que permite. Muita
coisa é "use como quiser"; muita coisa é "não redistribua". A regra do clã, por isso:

- **Construção de terceiro é para usar no mundo do clã.** Colar, reformar, morar: pode.
- **Não vai para o repositório do pack** sem alguém checar a licença do autor e registrar
  em `docs/CREDITOS.md`, como foi feito com as estruturas do YUNG's e do Graveyard. Sem
  licença compatível e crédito, não entra — o pack é distribuído, e distribuir obra alheia
  sem permissão é problema nosso, não do autor.
- Na dúvida sobre a licença de algo, pergunte antes de subir. Reformar não apaga a autoria.
