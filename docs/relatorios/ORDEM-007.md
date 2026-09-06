# ORDEM #007 — Capital Medieval Piloto, "a que rezou"

**Status:** v0 entregue, crua e inteira · **Função:** `pofnir:construir_capital_medieval` (4.667 comandos, arquivo único) · **Estruturas:** 12 `.nbt` em 9 gavetas · **Créditos:** `docs/CREDITOS.md`

---

## 1. Comando de teste completo

```
/execute in pofnir:era_medieval run tp @s 0 1 0
/function pofnir:construir_capital_medieval
```

Pré-condições: os dois datapacks (`pofnir_dimensoes` e `pofnir_estruturas`) carregados no
mundo (`/datapack list` mostra os dois; se acabou de copiar, `/reload`). O chão da era
fica em y=0 (grass), então os pés em y=1 — a função trata `~` como pés e `~-1` como
chão. Rode **parado, no chão, olhando para qualquer lado**: tudo é relativo à posição,
nada é relativo à rotação.

A função roda em uma chamada. Ao terminar, imprime duas linhas no chat com o resumo do
layout. Se algum `place template` falhar, o erro aparece no chat com o nome do template.

## 2. Estruturas escolhidas, órgão a órgão

A regra que usei: **a forma tem que caber na função sem explicação.** Onde o catálogo
já acertava, segui; onde a função pedia outra forma, troquei e digo por quê.

| Órgão (gaveta) | Arquivo | Origem | Tamanho | Por quê |
|---|---|---|---|---|
| `praca_da_pedra` | `altar_da_pedra.nbt` | Graveyard `altar_01` | 16x10x16 | é literalmente um altar; vira o pedestal da Pedra de Retorno no centro da praça |
| `salao_da_origem` | `salao_da_origem.nbt` | YUNG `rooms/mess` | 13x8x19 | refeitório: mesas, bancos, o lugar onde se senta e se explica o mundo a quem acabou de chegar |
| `casa_dos_oficios` | `casa_dos_oficios.nbt` | YUNG `starts/junction_lg` | 31x24x31 | como o catálogo previa — o maior hub do YUNG, com alas para cada mestre |
| `quadro_contratos` | `quadro_de_contratos.nbt` | YUNG `rooms/library_md` | 17x8x25 | estantes = arquivo de contratos; sala de registro, não de leitura |
| `mercado` | `rua_do_mercado.nbt` | Graveyard `walled_street_01` | 32x21x32 | uma rua murada com construções laterais — é a única peça dos dois mods com forma de rua comercial |
| `mercado` | `torre_da_bruxa.nbt` | Graveyard `haunted_house_01` | 33x29x29 | como o catálogo previa; a loja Bewitchment/Enchanted é função de mercado, por isso a gaveta |
| `pilar_aprimoramento` | `templo_do_fundamento.nbt` | YUNG `rooms/grand_library` | 35x24x43 | como o catálogo previa; o maior prédio da cidade, no ponto de honra |
| `pilar_aprimoramento` | `claustro_ritual.nbt` | Graveyard `start_room` | 27x20x27 | como o catálogo previa — e **pousado afundado sob o templo**, porque o cânone diz "claustro sob o templo" |
| `portal_limiar` | `portal_do_limiar.nbt` | YUNG `portal_room` | 25x14x19 | como o catálogo previa; lava trocada por obsidiana chorosa na função (roxo, partícula, sem risco) |
| `barreira` | `marco_lanterna_esq/dir.nbt` | YUNG `statues/statue_lantern_l/r` | 2x5x3 | "velas/luzes nos marcos": estátuas com lanterna, uma em cada um dos 8 pontos do ward |
| `marco_fratura` | `capela_partida.nbt` | Graveyard `branch_lost_grave` | 16x24x16 | **troquei** o `room_04` do catálogo (cripta rasa, 29x15x29) por uma torre-túmulo alta: uma capela se lê de longe pela silhueta, e o corte ao meio precisa de altura para aparecer |

O Templo do Fundamento e a Torre da Bruxa não são um dos 9 órgãos, mas o caderno os
lista como prédios obrigatórios da era. Filei o templo junto com o Pilar (são um
complexo: o claustro fica sob ele) e a torre junto com o Mercado (é loja).

## 3. Mapa textual — o que fica onde

Coordenadas relativas ao ponto onde a função roda (`~`). Norte = −z.

```
                         (0,-96) N — marco do ward
                              |
             torre da bruxa   |   TEMPLO DO FUNDAMENTO
             (30..62,-60..-32)|   (-17..17, -62..-20)
             fora da muralha, |   [claustro afundado sob ele,
             dentro do ward   |    y -21..-2, escada a leste]
                              |
   capela partida   ______ muralha r=68 ______        casa dos ofícios
   (-60..-44, 8..24)|        portão N           |     (24..54, -15..15)
        O ----------|--- salão --- PRAÇA --- casa ----|---------- L
   (-96,0)          | (-40..-28)  r=15    (24..54)     |         (96,0)
                    |            [altar]              |
                    | portal do limiar     quadro de  |
                    | (-52..-28, 30..48)   contratos  |
                    |         MERCADO      (20..36,   |
                    |     (-16..15, 20..51) 24..48)   |
                    |______  portão S  _______________|
                              |
                         (0,96) S — marco do ward
```

**As camadas, de fora para dentro:**

1. **O ward, r=96** — traço contínuo de calcita com raiz de osso um bloco abaixo; runa de
   terracota vitrificada amarela a cada 15°, com vela tripla acesa; nos 8 pontos
   cardeais, pedestal de deepslate polido com a estátua-lanterna, quatro velas quádruplas
   nos cantos e uma soul lantern no alto.
2. **A muralha, r=68** — 3 blocos de tijolo de deepslate com ameias alternadas, alguns
   rachados; 4 portões de 7 blocos em N/S/L/O com pilares de 6 e lanterna no topo. É
   símbolo: tem uma brecha a nordeste para a viela da bruxa, e a bruxa mora fora dela.
3. **A praça, r=15** — pedra de tijolo com rachaduras e musgo, borda de deepslate polido,
   8 bancos-lanterna; no centro o altar do Graveyard e, sobre ele, um pedestal de
   deepslate com lodestone e vela — o lugar da Pedra de Retorno (sistema futuro).
4. **As ruas** — 15 trechos, largura 3, cascalho no eixo e pedregulho/musgo nas bordas,
   cada trecho com barriga própria (nada é reto); lanterna em poste de carvalho escuro a
   cada ~9 blocos. Ligam praça → cada lote → cada portão, mais três vielas cruzando.
5. **Os prédios** — pousados nos lotes acima. Jigsaw blocks das estruturas apagados.

## 4. O marco da fratura — como a capela foi partida

`branch_lost_grave` (16x24x16) pousada em (−60,−1,8). A metade **oeste** (x −60..−53)
petrifica; a leste fica viva. O método é **só mcfunction**, sem editar NBT:

- 60 comandos `fill ... replace` sobre o volume da metade oeste, trocando cada família
  de bloco pelo equivalente morto: madeiras → tufo; escadas → escadas de andesito;
  lajes → lajes de andesito; cercas, correntes e grades → muro de andesito; pedras
  claras → tufo; deepslate → concreto cinza-claro; solo → pó de concreto cinza; folhas,
  vinhas, cogumelos, velas, lanternas, tochas → ar; vidros → vidro cinza.
- **A fenda:** rachadura irregular de ar na costura x=−53/−52, do chão ao topo, com
  entulho de lajes dos dois lados.
- **O eco:** uma única vela apagada no centro exato da fenda. E, em volta do marco, um
  anel de tufo a r=13 — o giz local que falhou aqui.

A lista de blocos é generosa porque eu não vejo o interior do `.nbt` daqui; o que a
capela não tiver, o `replace` simplesmente ignora. Escadas e lajes perdem a orientação
ao petrificar (o `fill replace` aplica um estado fixo) — para "congelado no instante da
quebra" isso é aceitável, mas a guilda vai querer retocar a silhueta.

## 5. Decisões que tomei sozinho (urbanismo fino era meu)

- **Claustro afundado, não ao lado.** O cânone diz "sob o templo". Coloquei o
  `start_room` em y −21..−2 sob o footprint do templo e abri um poço 3x3 com escada de
  mão a leste do templo (x 19..21, z −42..−40), com alçapão em cima e duas lanternas
  penduradas. O templo (y −1..22) senta sobre o teto do claustro.
- **A bruxa mora fora da muralha, dentro do ward.** Canto mais distante da torre a 86 do
  centro: 18 blocos além da muralha, 10 aquém do giz. Lê-se como "tolerada pelo rito,
  não pela cidade".
- **Muralha baixa mesmo: 3 blocos.** O caderno é explícito — a defesa é o giz.
- **Portal a sudoeste, longe do templo.** A saída para Auren não deve competir visualmente
  com o ponto de honra.
- **Lava do portal → obsidiana chorosa.** O catálogo pedia "reprocessar". Roxo, partículas,
  e ninguém pega fogo ao chegar.

## 6. Pendências para a guilda

**Do pouso (retoque):**
- Nenhum prédio foi **rotacionado**. Os `.nbt` vêm com a orientação de origem; algumas
  portas vão ficar de costas para a rua. `place template ... <pos> <rotation>` resolve
  — é escolher `clockwise_90` etc. lote a lote olhando no jogo.
- As estruturas do YUNG têm **portais de corredor abertos** nas laterais (eram peças de
  stronghold). Viram entradas; as que sobrarem, fechar.
- O `walled_street_01` do mercado tem **túmulos dentro** — é rua de cemitério. Lotes das
  4–6 lojas ainda são decisão de vocês.
- O `portal_room` traz **molduras de portal do End** — placeholder do Portal do Limiar
  até o sistema existir.
- **Blocos de mod dentro dos `.nbt` do Graveyard** (lápides, urnas, velas do mod). A
  regra "só vanilla" vale para o que eu escrevi na função, e cumpri; os `.nbt` trazem o
  que trazem. O mod está no manifesto, então carrega.

**Do cânone (fora do escopo desta v0, mas o caderno lista):**
- Estábulo e canil, taverna, arena de treino, jardim ritual público — não têm gaveta nem
  função ainda.
- Aurora arroxeada no céu — é trabalho de skybox (Nuit), não de função.
- Estandartes de lã roxa/vinho, líquen e hera — decoração da guilda.

**Do método:**
- Não testei no jogo. A função é determinística e só usa comandos vanilla, mas o
  encaixe visual dos `.nbt` (rotação, portas, o que a capela tem dentro) só se vê
  rodando. O comando de teste está na seção 1.

## 7. Correções feitas de passagem

- **Licença do Graveyard:** o `fabric.mod.json` do jar declara `CC0-1.0`; o `LICENSE`
  do repositório é **GPL-3.0**. O catálogo estava certo. Os créditos seguem o repositório
  e registram a discrepância.
- **`tuff_slab` não existe no 1.20.1** (chegou no 1.21). Meu gerador o emitia; trocado
  por laje de andesito antes de gerar.
