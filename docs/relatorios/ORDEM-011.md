# ORDEM #011 — Calibração do Observador + o Rito da Sombra

**Status:** entregue · **Parte A:** datapack `pofnir_calibracao` (novo, via Paxi) ·
**Parte B:** `kubejs/server_scripts/marca_presenca.js` (dois blocos) · **Configs de mod:**
intocados

---

## Parte A — o observador nasce raro em todo mundo

### A sequência de scoreboard e a fonte

`data/watching/functions/config/sighting_chance/3_rare.mcfunction` do From The Fog 1.9.2
tem duas linhas:

```
scoreboard players set sightingChanceConfig ftf.configOptions 3
execute unless entity @s[tag=defautlingConfig] run function fromthefog:admin/config
```

A primeira é a calibração. A segunda **abre o menu clicável** no chat de quem executou —
foi omitida, como a ordem mandou. `calibrar.mcfunction` roda só a primeira, duas vezes:
uma imediata e uma agendada (abaixo).

Valor 3 = `3_rare`. Os predicados que ele aciona, lidos na Ordem #002: chance por sorteio
de **0.0008 de dia / 0.001 de noite**, contra 0.008 / 0.01 do padrão `2_uncommon` —
exatamente 10%.

### Por que `schedule … 2t`, e não só o `set`

O `load` do FTF é `watching:main/reload`. Ele **cria** `ftf.configOptions` e aplica o
default `2_uncommon` **só se o score não existe**
(`execute unless score sightingChanceConfig ftf.configOptions matches 0.. run …`). A
ordem em que os datapacks executam o `load` não é minha. Se o meu rodasse antes, o `set`
falharia (objetivo inexistente) e o default 2 venceria em seguida.

Funções agendadas rodam **depois de todos os `load` daquele tick**. Então
`calibrar.mcfunction` faz o `set` imediato (vale quando o FTF já carregou) **e** agenda
`pofnir_calibracao:aplicar` para 2 ticks — que refaz o `set` com o objetivo garantidamente
criado e o default já aplicado. O FTF só sorteia avistamento a partir de 1 s
(`schedule watching:main/20tick 1s`), então a calibração chega antes do primeiro sorteio,
seja qual for a ordem dos datapacks.

### Prova de idempotência

- `scoreboard players set` é idempotente por definição: aplicar 3 sobre 3 não muda nada.
- Varri quem **escreve** `sightingChanceConfig` no datapack do FTF: as três funções
  `sighting_chance/*`, `autoconfig/enable` e `autoconfig/disable`, o `reload` (migração de
  objetivo antigo + default-se-ausente) e `auto_config_day_passed` (só com `autoConfig = 1`).
  Nenhuma delas **reage** a uma escrita — não há listener de scoreboard no datapack.
  Setar o score não dispara função nenhuma.
- A função de calibração toca **um único score**. `ftf.configOptions` tem ~35 opções
  (`ghostDoorConfig`, `stalkingConfig`, `jumpscare`…); nenhuma é lida nem escrita. Lei 1
  cumprida: o resto do mod fica no padrão do autor.
- Único caminho que poderia sobrescrever a calibração **dentro** de uma sessão:
  `autoConfig = 1`, que reescreve a frequência nos dias 1, 4 e 10 do mundo. Ele nasce
  **desligado** — `default_config` termina chamando `autoconfig/disable`. Se um admin o
  ligar pelo menu, é decisão dele; e no load seguinte a calibração volta.

### Arquivos

```
config/paxi/datapacks/pofnir_calibracao/
├── pack.mcmeta                                  pack_format 15 · "POFNIR - Calibracao de mundo"
├── data/minecraft/tags/functions/load.json      -> pofnir_calibracao:calibrar
└── data/pofnir_calibracao/functions/
    ├── calibrar.mcfunction                      set + schedule aplicar 2t
    └── aplicar.mcfunction                       set
```

Injetado em todo mundo pelo Paxi, como as dimensões e as estruturas.

---

## Parte B — o Rito da Sombra

### Detecção

`PlayerEvents.tick` (todo tick, servidor): a pose é **agachado** (`isCrouching`) **e parado**
(posição idêntica à do tick anterior, tolerância 0.001) **e olhando para baixo**
(`getXRot() > 60`; pitch positivo é para baixo) **e não dormindo**. 60 ticks contínuos
revelam; qualquer quebra zera a contagem. Cooldown de 600 ticks (30 s) por jogador,
gravado em `persistentData` (sobrevive a relog). Contagem e última posição ficam em
memória do script — não há razão para escrever NBT a cada tick.

Nomes Mojmap conferidos no `mm.jsmappings` do Rhino: `isCrouching` (3 ocorrências),
`getXRot` (8), `isSleeping` (2).

### Revelação e de-para dos sons

Mesma paleta do crescendo da #010, todos verificados no `sounds.json` vanilla:

| nível | texto | som | vol | pitch | posição |
|---|---|---|---|---|---|
| 0 | `§7Apenas a sua sombra.` | — | | | |
| 1 | `§8Ela se move quando você não olha. §7[Marca 1]` | `ambient.cave` | 0.5 | 0.6 | 6 atrás |
| 2 | `§8Ela está mais perto do que deveria. §7[Marca 2]` | `entity.warden.heartbeat` | 0.8 | 0.8 | 3 atrás |
| 3 | `/title` "Ela olha de volta." (cinza escuro) + subtítulo `[Marca 3]` | `entity.warden.nearby_closest` **e** `entity.elder_guardian.curse` | 1.0 | 0.7 | 1 atrás + 2 à frente |

A progressão da posição é deliberada: a sombra "se aproxima" a cada nível — 6, 3, 1 —
e no nível 3 há um segundo som **à frente** do jogador, porque ela olha de volta. O título
usa `times 10 70 20` (fade-in, 3,5 s, fade-out); subtítulo é enviado antes do título, como
o comando exige.

Sem bossbar, sem HUD, sem dica: nada no chat ensina o gesto. O nível 0 responde
"Apenas a sua sombra." para que o gesto seja *descobrível* sem ser *explicado*.

### A cama que explica

O bloco de decaimento da v0 foi reescrito: ao **primeiro tick dormindo**, nível 1 cura
(como antes) e nível 2+ recebe `§8Você tenta descansar. Algo não deixa. §7[Marca N]`. Uma
vez por sono (o flag `pofnir_dormindo` só rearma ao levantar). A cama continua não curando
2+ — agora diz o porquê.

---

## Roteiro de teste

### Calibração, num mundo novo

1. Crie um mundo novo (o Paxi injeta os três datapacks). Entre.
2. `/scoreboard players get sightingChanceConfig ftf.configOptions` → deve responder **3**.
   Se responder 2, a calibração não pegou; se erro "objetivo não existe", o FTF não
   carregou.
3. `/reload` e repita o passo 2: continua 3 (idempotência sob reload).
4. Prova de que só isso foi tocado: `/scoreboard players list ftf.configOptions` → todas as
   outras opções nos valores de fábrica (`ghostDoorConfig 1`, `stalkingConfig 1`, etc.).
5. Contraprova: `/function watching:config/sighting_chance/2_uncommon` (vai abrir o menu do
   FTF no chat — é o comando do próprio mod), saia e reabra o mundo → volta a 3.

### O Rito, em cada nível

Em survival ou criativo, parado num lugar plano:

```
/marca 0        agache, olhe para o chão (pitch > 60°), fique 3 s imóvel
                -> "Apenas a sua sombra."
/marca 1        repita  -> "Ela se move quando você não olha." + som grave de caverna atrás
/marca 2        repita  -> "Ela está mais perto do que deveria." + batida de coração a 3 blocos
/marca 3        repita  -> título escuro "Ela olha de volta." + subtítulo + dois sons, colados
```

Entre uma revelação e outra há 30 s de cooldown: repetir antes disso não faz nada (nem
mensagem). Mexer o mouse não quebra a pose; **andar** ou **levantar** zera a contagem —
teste isso também. Cada revelação aparece no console:
`[Marca] <jogador> | nivel N | rito da sombra | nivel N | pos …`.

### A cama

`/marca 2`, deite: `"Você tenta descansar. Algo não deixa. [Marca 2]"` e o nível continua 2.
`/marca 1`, deite: nível vai a 0, sem mensagem nova (comportamento da v0).

---

## O que não foi tocado

Nenhum config de mod; nenhuma outra opção do FTF; nenhuma dica automática no chat (a
difusão do segredo é conteúdo — Tomo e NPCs — fora desta ordem). Não testado in-game por
mim; o roteiro acima é a validação.
