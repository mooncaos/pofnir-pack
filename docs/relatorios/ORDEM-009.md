# ORDEM #009 — Autópsia do raio: por que `man:manfromthefog` morre ao ser invocado

**Status:** diagnóstico entregue · **Nada alterado** (por ordem) · **Método:** bytecode do
`TheManFromTheFog-1.1.1+fabric.mc.1.20.1.jar`, mesmo parser da Ordem #002, agora
imprimindo desvios condicionais (`if*`, `goto`, `dcmpl`) para ler a lógica, não só as
constantes.

---

## Resposta curta

O Homem **não morre por horário, bioma nem dimensão**. Ele morre pela **mecânica de
espreita do próprio mod**: a cada tick, `ManfromthefogOnEntityTickUpdate2Procedure` procura
o jogador mais próximo dentro de um cubo de **±15 blocos** (`vanish_distance` = 30, usado
como lado total da caixa) e, se esse jogador **não estiver em criativo**, executa
`discard()` — com som `man:vanish` e um `LightningBolt` se `litghtnings` for `true`. Um
`/summon` aos pés do jogador nasce a distância zero, dentro do cubo, e é executado no
primeiro tick. O raio é o efeito visual da despedida, não a causa.

O teste "meia-noite travada" não muda nada porque **essa procedure não olha o relógio**.

---

## (1) A condição exata da despedida por raio

**Classe:** `net.mcreator.man.procedures.ManfromthefogOnEntityTickUpdate2Procedure.execute`
(tick da entidade `man:manfromthefog`).

Lógica reconstruída do bytecode (offsets do método):

```
120-148  lê vanish_distance (3x) e monta caixa = AABB.ofSize(posição do Homem, vd, vd, vd)
         -> method_30048 = ofSize: vd é o LADO total; meia-largura = vd/2 = 15
         lista = jogadores dentro da caixa
170      se a lista está vazia -> pula tudo (goto 415)
198-212  ordena por distância, pega o mais próximo
218-221  checkGamemode(jogador): se TRUE -> pula tudo (goto 415)
226-237  se está no servidor (não é lado cliente) -> entity.discard()
244-333  toca som "man:vanish"
338-350  MapVariables.ring_timer = <valor> ; syncData
355-363  lê litghtnings; se false -> fim
384-411  cria LightningBolt (EntityType.create) e addFreshEntity  <- o raio
```

**`checkGamemode`** (classe interna `$1`): no servidor, compara
`ServerPlayer.gameMode.getGameModeForPlayer()` com `GameType.field_9220`. Pelo mapeamento
intermediary do 1.20.1, `field_9220` é **CREATIVE**. Ou seja: o único jogador que **não**
faz o Homem sumir é o em criativo; survival, aventura e espectador disparam. É por isso
que "mesmo em survival" — survival é exatamente o caso que dispara. (Conferível em jogo em
um minuto: em criativo, o `/summon` aos pés deve sobreviver.)

**O que NÃO está na condição:** horário (`isDay` só aparece na rotina de spawn natural,
abaixo), bioma, dimensão, nenhuma chave de config além de `vanish_distance` e
`litghtnings`, nenhuma tag de NBT.

### Onde estão dia, bioma e dimensão — e por que não importam aqui

`ManfromthefogOnEntityTickUpdateProcedure` (sem o "2"), apesar do nome, **não é tick da
entidade: é a rotina de spawn natural**, chamada pelo `TimerglobalProcedure` quando o
timer global vence. Ela: exige jogador num raio de 200; exige dimensão em
`#minecraft:is_overworld` (salvo `all_dimensions`); recusa spawn de dia (salvo
`spawn_at_day`); invoca o Homem e o afasta com `spreadplayers` — **35 a 40 blocos** se o
bioma está na lista (`forest`, `birch_forest`, `dark_forest`, `flower_forest`,
`old_growth_birch_forest`, `plains`), **35 a 99** caso contrário. O bioma só regula a
distância do spawn, nunca a sobrevivência.

Duas consequências para nós: `pofnir:era_medieval` **não está** em `#minecraft:is_overworld`
(a tag vanilla só lista `minecraft:overworld` e nenhum datapack nosso a toca), então o spawn
natural do Homem já é impossível na era por dois motivos independentes — o timer em 1e9
ticks da Ordem #002 e a dimensão. E o `fixed_time: 1000` da era, que eu tinha como suspeito,
é irrelevante para o `/summon`.

### O ciclo de vida completo (para desenhar em cima)

`TimerglobalProcedure`, por tick do jogador, mantém em **MapVariables do mundo**
(`man_mapvars`, não na entidade):

| variável | papel |
|---|---|
| `timer_global` / `reset` | contagem até o próximo spawn natural; `reset` sorteado entre `min_spawn_rate` e `max_spawn_rate` |
| `ring_timer` | sobe 1 por tick enquanto **qualquer** `man:manfromthefog` estiver a até 200 do jogador |
| `stage1_spawn_rate` (600) | quando `ring_timer` **é igual** a isso: descarta o Homem atual e invoca outro **mais perto** (spread 35–40) |
| `stage2_spawn_rate` (900) | quando `ring_timer` é igual a isso: descarta o Homem e invoca **`man:managgresive`** na posição dele, com `setTarget` — a caçada |

O `man:managgresive`, ao nascer (`ManaggresiveOnInitialEntitySpawnProcedure`), sorteia o
prazo da caçada entre `min_chase_duration` e `max_chase_duration` e dá o raio de entrada
se `litghtnings`; seu tick (`ManaggresiveOnEntityTickUpdateProcedure`) descarta com raio
ao vencer o prazo.

---

## (2) O `/summon` direto é viável? Sim — e sem NBT

**Não existe estado por entidade.** Zero usos de `persistentData` em todas as 20
procedures; toda a fase (`ring_timer`, `timer_global`, etc.) é variável de mundo. Logo
**nenhum NBT no `/summon` muda o comportamento** — não há "tag de fase" a fornecer.

O que o summon precisa é **posição**: nascer **fora do cubo de ±15 blocos** de todo
jogador não-criativo. A partir daí a integração é automática — o `TimerglobalProcedure`
não distingue origem: qualquer `man:manfromthefog` a até 200 do jogador faz `ring_timer`
subir, e as fases 1 e 2 acontecem normalmente (o mod descarta e recria o boneco por conta
própria, então até o "chegar mais perto" funciona).

Summon correto, do ponto de vista de um admin em pé:

```
/execute positioned ~30 ~ ~30 run summon man:manfromthefog
```
ou, para a caçada direta (A Visita), sem esperar 900 ticks de `ring_timer`:
```
/execute positioned ~30 ~ ~30 run summon man:managgresive
```

Regra: deslocamento de **pelo menos 16** em `x` **ou** em `z` (a caixa é cúbica, a
distância que conta é a maior das componentes). 30 dá folga para o Homem andar um pouco
antes de o jogador se aproximar — e aproximar-se é exatamente como o jogador o "expulsa",
que é o desenho do mod.

### O bug que isso expõe no nosso próprio script

`kubejs/server_scripts/marca_presenca.js`, linha 67 (Ordem #002), invoca o Homem com
`offset(20 - floor(random*40), 0, 20 - floor(random*40))` — deslocamento inteiro em
**[−20, 19]** por eixo. A chance de **ambos** os eixos caírem em [−15, 15] é ~60%: seis em
cada dez manifestações de nível 3 nascem dentro do cubo e são executadas no primeiro tick,
com raio. O jogador vê o relâmpago e nada mais. **Não alterei** (ordem). A correção é
trocar o intervalo para algo como 18–40 blocos, ou usar `man:managgresive` para o nível 3,
que é literalmente "o Homem caça à noite". Fica para a diretoria.

O Morador (linha 63, ±12) não tem essa mecânica — o Cave Dweller não some por proximidade.

---

## (3) Existe chave no `config/man/man.json` que resolva sem violar a jaula?

**Sim, uma — mas é decisão de design, não de infraestrutura:** `vanish_distance`. Ela
regula só o cubo de sumiço; a jaula (spawn natural) é `min_spawn_rate`/`max_spawn_rate` +
o portão `is_overworld`, que não tocam nisso. Reduzir `vanish_distance` (hoje 30 → cubo
±15) encolhe o cubo; em tese `2` faria o sumiço só a contato. Mas isso **muda a mecânica
de espreita**: o Homem deixa de "fugir quando você chega perto", que é a alma do mod. E
não há valor seguro que desligue o sumiço por completo — com `0` a caixa degenera e o
comportamento do `getEntitiesOfClass` numa caixa nula não é garantido.

**Não existe chave que desligue a despedida.** `litghtnings: false` tira só o relâmpago; o
`discard` continua.

**Recomendação (só para registro — é da diretoria):** não mexer no config. Resolver na
**posição do summon**, que é onde o problema realmente está — no script da Marca e em
qualquer invocação manual. Custo zero, jaula intacta, mecânica do mod preservada.

---

## Resumo em três linhas

1. **Quem mata:** `ManfromthefogOnEntityTickUpdate2Procedure` — jogador não-criativo dentro
   de ±15 blocos (`vanish_distance`/2) → `discard` + raio. Sem relógio, sem bioma.
2. **Summon:** viável, sem NBT; nascer a ≥16 blocos em x ou z. `man:managgresive` para a
   caçada direta.
3. **Config:** `vanish_distance` existe e não fere a jaula, mas troca a mecânica; a cura
   certa é posicional. O script da Marca (Ordem #002) precisa dessa correção — ~60% das
   manifestações de nível 3 morrem ao nascer.
