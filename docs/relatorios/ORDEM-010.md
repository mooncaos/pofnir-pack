# ORDEM #010 — Marca da Presença v1: o crescendo

**Status:** entregue · **Arquivo:** `kubejs/server_scripts/marca_presenca.js` (reescrito) ·
**Configs de mod:** intocados · **Jaula:** intacta

---

## 1. O que mudou em relação à v0

| | v0 | v1 |
|---|---|---|
| Visita (nível 3) | `summon` a ±20 em x/z → ~60% morriam no 1º tick (autópsia da #009) | 20–40 blocos, eixo dominante ≥ 20, assentado no chão; 12% por 10s; só à noite do Overworld |
| Anti-empilhamento | nenhum | Homem: nada a até 200 (as duas formas); Morador: nada a até 100; vulto FTF: nada a até 128 |
| Sons | um `ambient.cave` fixo, no jogador | três paletas em crescendo, posicionadas atrás/ao lado |
| Visões (From The Fog) | não existia | cabeadas ao Marcado por nível, com `nightmare` na cama |
| Depuração | nada | `/marca status` + log no console a cada manifestação |
| Gatilhos, decaimento, morte | — | inalterados |

## 2. De-para dos sons (todos verificados no `sounds.json` vanilla 1.20.1)

A fonte foi o próprio jogo: `minecraft/sounds.json` do índice de assets 5 do 1.20.1
(objeto `40a4222b…`, 1.471 eventos). Os 32 candidatos que testei existem; escolhi estes.

| nível | chance / 10s | volume | pitch | paleta |
|---|---|---|---|---|
| 1 — Sussurros | 8% | 0.5 | 0.6–0.8 | `ambient.cave`, `ambient.basalt_deltas.mood`, `block.sculk_sensor.clicking` |
| 2 — Vultos | 15% | 0.8 | 0.7–0.9 | nível 1 + `entity.warden.heartbeat`, `entity.warden.listening`, `entity.warden.nearby_close`, `ambient.soul_sand_valley.mood` |
| 3 — A Visita | 25% | 1.0 | 0.6–1.0 | nível 2 + `ambient.nether_wastes.mood`, `ambient.warped_forest.mood`, `entity.warden.nearby_closest`, `entity.warden.agitated`, `entity.elder_guardian.curse`, `entity.enderman.stare` |

Leitura das escolhas: os `*.mood` são os "sons de humor" que o jogo usa para desconforto
ambiente (caverna, deltas, vale das almas, ermo, floresta distorcida); o Warden dá a camada
de **batida e escuta** (coração, ouvido, proximidade); `elder_guardian.curse` e
`enderman.stare` são o sussurro e o olhar — os dois sons vanilla que mais parecem "alguém
atrás de você".

**Direcionalidade.** O som não toca *no* jogador: toca num ponto relativo ao olhar dele,
sorteado entre atrás (`^ ^ ^-6`), os dois lados (`^±6 ^ ^`) e as duas diagonais traseiras
(`^±4 ^ ^-4`). Implementado sem geometria em JS: `execute as <p> at @s positioned <caret>
run playsound <som> ambient <p> ~ ~ ~ <vol> <pitch>` — o caret já é relativo à câmera.

**Nível 3 acorda.** Se o Marcado estiver dormindo quando um som de nível 3 dispara,
`stopSleeping()` (nome Mojmap verificado no `mm.jsmappings`) e uma linha no chat.

## 3. Visões: o mecanismo real do From The Fog e como o cabeei

**As funções são direcionáveis por jogador.** Li as quatro no jar 1.9.2
(`data/watching/functions/events/sightings/`): tudo nelas é relativo a `@s` — `summon ~ 0 ~`,
`spreadplayers ~ ~ …`, `tp … facing entity @s`. Logo `execute as <jogador> at @s run
function watching:events/sightings/<tipo>` faz a visão nascer em volta **daquele** jogador.
Os wrappers `fromthefog:admin/sightings/*` só acrescentam um tutorial em chat e uma tag; usei
as funções de evento diretas, que são as mesmas que a rota natural do mod chama.

**Sem gate global.** Os únicos `startedEvents`/`configOptions` na pasta estão em
`chances/*.mcfunction` — a rota **natural** (que continua rara para todos, como o cânone
quer). A função `setup/models`, agendada 5 ticks após cada invocação para construir a
figura, só consulta `glowingEyesConfig` (variante dos olhos). A figura se constrói para o
Marcado independentemente do que a diretoria configurar.

**Anti-empilhamento nativo — com um efeito colateral.** Cada função começa com
`execute as @e[type=armor_stand,tag=herobrine] … run function …/kill`: mata **todo** vulto
do mundo antes de criar o novo. Numa mesa com dois Marcados, a visão de um apaga a do
outro. É comportamento do mod, não meu; acrescentei uma guarda própria (não invoca se já
há `herobrineEntity` a ≤ 128 do jogador) para o próprio Marcado não "piscar" vultos.

| tipo | o que a função faz | distância | nível |
|---|---|---|---|
| `stalking` | vulto parado a 35–46 blocos, some se você chega a 20 | longe | 1, 2, 3 |
| `creeping` | vulto 5 blocos atrás de você, virado para você, some a 16 | perto | 1, 2, 3 |
| `lurking` | vulto a 70–100 blocos, some se você chega a 40 | muito longe | 2, 3 |
| `nightmare` | 30 s de Darkness + vulto ao lado da **cama** | na cama | 3 (só dormindo) |

O `nightmare` exige o jogador **na cama** (`if block ~ ~ ~ #beds`); fora dela só dá o
Darkness. Por isso, no nível 3, se o Marcado estiver dormindo a visão é sempre `nightmare`;
acordado, sorteia entre as outras três. Os números da lei: 1,5% / 5% / 12% por 10 s.

## 4. A Visita: a correção posicional

Deslocamento **eixo-maior**: o eixo dominante recebe 20..40 e o outro fica limitado a
`floor(sqrt(40² − maior²))`, garantindo `|dx| ≥ 20 ou |dz| ≥ 20` **e** distância total
≤ 40. A ordem pedia 18; usei 20 porque, logo após o `summon`, um `spreadplayers ~ ~ 0 3`
assenta o Homem no chão num raio de 3 (evita nascer dentro de encosta e sufocar, ou no ar)
— e 18 − 3 = 15 cairia exatamente na borda do cubo de sumiço. Com 20, a pior hipótese é 17.

Guarda no próprio `execute`: `unless entity @e[type=man:manfromthefog,distance=..200]
unless entity @e[type=man:managgresive,distance=..200]`. Se qualquer das duas formas já
está por perto, o ciclo `ring_timer` do mod está rodando (espreita → aproxima → caça) e
o script **não interfere**. O resultado inteiro do comando (verificado: `runCommandSilent`
do nível devolve `int`) diz se invocou ou pulou, e o log registra cada caso.

Janela: `dayTime % 24000` do **Overworld** entre 13000 e 23000, como o cânone manda —
mesmo que o Marcado esteja numa era de tempo fixo.

## 5. Depuração

`/marca status` (perm 2) mostra: nível e nome do patamar; última manifestação (tipo, som ou
função, posição) e há quantos segundos; segundos até a próxima checagem; hora do Overworld
e se a Visita é possível. Cooldowns: **"nenhum"** — a ordem não fixou nenhum e os números
são lei, então não inventei; a v1 é só chance por checagem de 10 s. Se a diretoria quiser
cooldown, é número novo.

Cada manifestação grava no console do servidor:
`[Marca] <jogador> | nivel N | <tipo> | <detalhe> | pos x y z | dim <dimensão>`,
e as puladas por anti-empilhamento também, com o motivo.

## 6. APIs conferidas no jar (KubeJS 2001.6.5 + Rhino)

- `level.runCommandSilent(String)` → `int` (único descritor `(String)I` em `LevelKJS`;
  nenhum `(String)V`). É o que permite ler "invocou / pulou".
- `mm.jsmappings` é gzip e contém `getDayTime`, `stopSleeping`, `isSleeping`,
  `getItemBySlot`: `s.overworld().dayTime`, `p.sleeping`, `p.stopSleeping()` resolvem.
- `console.info` existe (`ConsoleJS`: info/warn/error/log/debug).
- `p.profile.name` (já usado na Ordem #004), `p.inventory.slots/getStackInSlot` (#002).

Nenhuma API nova além dessas. O que é geometria ou busca de entidade ficou **em comando**
(caret, `unless entity`, `spreadplayers`), de propósito: é superfície vanilla, testável
no chat.

## 7. Roteiro de teste da diretoria

**Preparação** (survival ou criativo; o Man From The Fog só some para não-criativos, então
para ver a Visita funcionar de verdade use **survival**):

```
/gamemode survival
/marca status                      -> nível 0, "nenhuma"
```

**Nível 1 — Sussurros**
```
/marca 1
```
Espere 1–2 minutos parado. Esperado: a cada 10 s, 8% de chance de um som grave e baixo
vindo de trás ou do lado (caverna, deltas, cliques de sculk); 1,5% de um vulto **longe**
(stalking) ou **atrás** (creeping). `/marca status` mostra a última. No console:
`[Marca] … | sussurro | minecraft:ambient.cave ^ ^ ^-6`. Durma: acorda no nível 0.

**Nível 2 — Vultos**
```
/marca 2
```
Sons mais frequentes (15%) e mais altos, com batida de coração e escuta do Warden. Visões
a 5%, agora incluindo `lurking` (vulto a 70–100 blocos — olhe o horizonte). Desça a y < 40
numa caverna: 3% por checagem de o Morador aparecer a ±12, **uma vez** — com ele por perto
(≤ 100) o script não invoca outro; confira no console `morador | pulada`… não existe: o
Morador simplesmente não é invocado, e o log só registra as invocações efetivas.

**Nível 3 — A Visita**
```
/marca 3
/time set 18000               (Overworld; se estiver numa era, é a hora do Overworld que conta)
```
Sons a 25%, volume cheio, com os `*.mood` sombrios e o olhar do Enderman. Visões a 12%.
E a Visita: 12% por checagem, **só à noite**, invoca `man:manfromthefog` a 20–40 blocos.
Esperado no console: `[Marca] … | visita | man:manfromthefog em ~-31 ~ ~12`. **Não corra
até ele**: a 15 blocos ele some com raio — isso é o mod, não bug. Fique parado e observe:
em ~30 s (600 ticks de `ring_timer`) o mod o recria mais perto; em ~45 s (900) ele vira
`man:managgresive` e caça. Enquanto qualquer das duas formas estiver a ≤ 200, o script não
invoca outro (`visita | pulada: Homem ja presente`).

Durma no nível 3: se um som disparar, você acorda com a mensagem; se uma visão disparar
antes, é `nightmare` — Darkness por 30 s e o vulto ao lado da cama.

**Persistência:** morra e volte — a Marca continua (`/marca status`). Saia e entre — idem.

## 8. O que ficou fora, de propósito

- Nenhum config de mod tocado; `vanish_distance` continua 30 (a cura é posicional, como
  recomendado na #009).
- Sem cooldowns: número que a ordem não deu.
- O Morador mantém ±12 sem assentamento no chão (o Cave Dweller não tem cubo de sumiço, e a
  ordem mandou manter).
- Não testado in-game por mim: tudo que está aqui foi verificado contra jar, registro e
  bytecode, mas o encaixe sensorial só se mede jogando — daí o roteiro acima.
