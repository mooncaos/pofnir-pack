# ORDEM #004 — Três Pilares de Aprimoramento v0

**Status:** entregue · **Escopo:** 3 selos, 3 receitas era-nativas, 1 caminho de aplicação

---

## 1. Arquivos criados

| Arquivo | Papel |
|---|---|
| `kubejs/startup_scripts/pofnir_selos.js` | os 4 itens (3 selos + a peça intermediária do Create) |
| `kubejs/server_scripts/pilares_receitas.js` | tags de equipamento, 3 receitas de fabricação, 3 receitas de aplicação |
| `kubejs/server_scripts/pilares_aplicacao.js` | efeito dos selos enquanto o equipamento está equipado |
| `kubejs/client_scripts/pilares_tooltip.js` | leitura da marca no tooltip (cosmético) |

## 2. Itens

| ID | Nome | Textura (placeholder) |
|---|---|---|
| `pofnir:selo_do_rito` | Selo do Rito | `minecraft:item/amethyst_shard` |
| `pofnir:selo_temperado` | Selo Temperado | `minecraft:item/netherite_scrap` |
| `pofnir:chip_modular` | Chip Modular | `minecraft:item/prismarine_shard` |
| `pofnir:selo_temperado_incompleto` | Selo Temperado Incompleto | `minecraft:item/raw_iron` |

Usei texturas vanilla como placeholder em vez de deixar textura faltando — assim
nenhum item aparece como quadriculado roxo enquanto a arte não vem.

## 3. Receitas de fabricação (IDs reais)

### `pofnir:selo_do_rito_caldeirao` — tipo `enchanted:witch_cauldron`

```
bewitchment:silver_ingot + enchanted:attuned_stone
+ enchanted:tear_of_the_goddess + enchanted:whiff_of_magic
power: 750  ->  pofnir:selo_do_rito
```

**Correção de premissa da ordem.** A ordem mandava usar "uma RECEITA DE ALTAR do
Enchanted (61 receitas de altar existentes como referência de formato)". Fui ler:
os 61 arquivos em `data/enchanted/enchanted/altar/` **não são receitas** — são
configuração de altar (`blocks/`, `tags/`, `upgrades/`: quais blocos dão quanta
carga). Não existe tipo de receita `enchanted:altar`. O meu próprio censo da
Ordem #003 descrevia isso errado no INDEX; corrigi a linha na mesma passada.

Os sistemas de crafting mágico reais do Enchanted, esses sim em `data/enchanted/recipes/`
e portanto extensíveis, são: `enchanted:witch_cauldron` (10), `enchanted:kettle` (10),
`enchanted:distilling` (8), `enchanted:wheel` (30) e `enchanted:byproduct` (9).

Escolhi **`witch_cauldron`** porque é o caldeirão que consome carga de altar — é o
sistema *do altar* na prática, que era o espírito da ordem. O campo `power: 750` é a
mesma carga que o mod exige nas receitas de destilação de tier médio, então o rito
só acontece com altar montado por perto.

### `pofnir:selo_temperado_montagem` — tipo `create:sequenced_assembly`

```
base: create:iron_sheet · loops: 3 · intermediario: pofnir:selo_temperado_incompleto
  1. create:deploying  + create:andesite_alloy
  2. create:pressing
  3. create:deploying  + create:brass_sheet
-> pofnir:selo_temperado (100) · create:andesite_alloy (4, refugo)
```

Montagem sequenciada em vez de pressing simples porque têmpera *é* trabalho repetido
sobre o metal — três voltas de bater e prensar. Custo médio: chapa de ferro, liga de
andesito e chapa de latão, tudo Create de início/meio de linha.

### `pofnir:chip_modular_assembler` — tipo `modern_industrialization:assembler`

```
1x modern_industrialization:electronic_circuit
2x modern_industrialization:silicon_plate
4x modern_industrialization:steel_plate
duration 300 · eu 16  ->  pofnir:chip_modular
```

Tier médio de verdade: a escada de circuitos do MI é analog (LV) → **electronic (MV)**
→ digital (HV) → processing unit → quantum. Parei no electronic.

## 4. Caminho de aplicação — e por que este

**Escolhido:** receita sem forma na bancada comum, com resultado calculado
(`modifyResult` do KubeJS), gravando uma marca NBT no equipamento. O efeito é mantido
por um sincronizador que lê a marca.

| Receita | Entrada |
|---|---|
| `pofnir:aplicar_selo_do_rito` | selo + `#pofnir:aprimoravel_arma` |
| `pofnir:aplicar_selo_temperado` | selo + `#pofnir:aprimoravel_armadura` |
| `pofnir:aplicar_chip_modular` | chip + `#pofnir:aprimoravel_arma` |

### Por que não a smithing table

No 1.20.1 os dois tipos de receita da bancada de forja (`minecraft:smithing_transform`
e `minecraft:smithing_trim`) produzem um item de saída **fixo**. Não existe forma de
dizer "qualquer arma entra, a mesma arma sai melhorada". Uma receita dessas destruiria
os encantamentos e o dano do equipamento do jogador. KubeJS não pode registrar
serializadores de receita novos, então não há como contornar. Caminho descartado.

### Por que não gravar `AttributeModifiers` direto no item

Era o caminho mais literal ("atributo gravado no item") e eu o abandonei por um motivo
concreto: no 1.20.1, `ItemStack.getAttributeModifiers(slot)` devolve os modificadores
da NBT **em vez dos padrões do item** assim que a tag `AttributeModifiers` existe. Ou
seja, gravar só o meu modificador faria a espada perder todo o dano e o peitoral perder
toda a armadura. Para não quebrar, eu teria que ler os padrões do item e reescrevê-los
junto — e eu **não consigo testar isso no jogo**. O modo de falha é péssimo: um bug
apaga permanentemente os atributos do equipamento do jogador, e a NBT já foi escrita.

O caminho escolhido tem o modo de falha oposto: se algo der errado, o bônus não aplica
e o equipamento continua intacto. Se a diretoria preferir a gravação nativa mesmo assim,
é ordem nova — e recomendo testar antes num mundo descartável.

### Como funciona

1. `modifyResult` copia o equipamento que entrou e grava uma chave booleana na NBT:
   `pofnir_selo_rito`, `pofnir_selo_tempera` ou `pofnir_selo_modular`. A marca sobrevive
   a uso, reparo, encantamento e morte — é NBT do item.
2. `pilares_aplicacao.js` roda 1x por segundo, lê a mão principal e as 4 peças de
   armadura, monta uma string de estado e **só emite comando quando o estado muda**.
3. O efeito entra via `/attribute <jogador> <atributo> modifier add <uuid> <nome> <valor>
   <operacao>`, rodado pelo nível (permissão de servidor), com UUID fixo por pilar.

Usei o comando vanilla `/attribute` em vez da API de atributos do KubeJS porque o
comando é superfície estável do próprio Minecraft — não depende de nome de método
remapeado que eu não tenho como verificar rodando.

| Pilar | Atributo | Valor | Operação |
|---|---|---|---|
| Rito | `spell_power:arcane` | 0.05 | `multiply` (multiply_total) |
| Temperado | `minecraft:generic.armor_toughness` | 1 por peça marcada | `add` |
| Modular | `minecraft:generic.attack_speed` | 0.08 | `multiply` (multiply_total) |

### Um selo de cada pilar por equipamento

Se a peça já tem a chave daquele pilar, `modifyResult` devolve item vazio. O slot de
resultado fica vazio, o jogador não consegue retirar nada e **nada é consumido** — não
existe o caso "gastei o selo à toa". Como são três chaves separadas, o mesmo
equipamento pode receber um selo de cada pilar, que era o cânone.

### Higiene dos modificadores

`/attribute modifier add` grava no playerdata. Por isso: ao entrar o cache de estado é
invalidado (ressincroniza em 1s) e ao sair os três modificadores são removidos. Assim
nada fica preso no jogador se o script mudar ou sair do pack.

### Que equipamento aceita selo

As tags `pofnir:aprimoravel_arma` e `pofnir:aprimoravel_armadura` são o ponto de
extensão. Hoje:

- **arma/ferramenta**: `#minecraft:swords`, `#minecraft:axes`, `#minecraft:pickaxes`,
  `#minecraft:shovels`, `#minecraft:hoes`, `minecraft:trident`, `minecraft:bow`,
  `minecraft:crossbow`, `#wizards:staves`, `#wizards:wands`
- **armadura**: `#minecraft:trimmable_armor` (cobre todo conjunto vanilla e os mods que
  respeitam a tag)

Só referenciei tags que confirmei existirem — vanilla 1.20.1 e as duas do Wizards que o
censo mapeou. Para habilitar arma de outro mod, é acrescentar na tag.

## 5. Bloqueios e ressalvas

**1. Não existe Spell Power geral.** A ordem previa a possibilidade e mandou usar
arcano como v0 — foi o que fiz. Confirmando pelo bytecode: `SpellSchools` registra
**6 escolas** (arcane, fire, frost, healing, lightning, soul) com namespace
`spell_power`. As outras 11 chaves de atributo que aparecem no lang (air, water, earth,
blood, nature, shadow, holy, unholy…) são entradas preparadas para escolas que outros
mods podem acrescentar. Existe `spell_power:resistance.generic` (resistência) e um tipo
de dano `spell_power:generic`, mas **não existe atributo de poder mágico agnóstico**.
O selo usa `spell_power:arcane`.

**2. O bônus do Selo do Rito só vale na mão.** Modificador de atributo de equipamento
só conta no slot em que a peça está. Marcar uma espada e empunhar um cajado não soma —
o selo tem que estar no foco que o jogador realmente usa para conjurar. É consequência
da mecânica, não escolha minha; registro porque afeta como a diretoria vai desenhar a
curva.

**3. Nada disto foi testado no jogo.** Não tenho como rodar o cliente aqui. Os formatos
de receita foram lidos dos jars reais e as APIs do KubeJS conferidas no jar
(`modifyResult`, `ModifyRecipeCraftingGrid.findAll`, `ItemBuilder`, `Item.empty`,
`runCommandSilent`), mas a validação é a da seção 6.

**4. Risco conhecido no MI.** As receitas do MI são JSON comum em `data/.../recipes/`,
então `event.custom()` deve carregá-las. Se o MI recusar receita vinda de KubeJS, o
fallback no mesmo espírito é `modern_industrialization:packer` ou `forge_hammer` —
me deem a ordem que eu troco.

## 6. Passo a passo de teste in-game

**Preparação**

```
/gamemode creative
/give @s pofnir:selo_do_rito
/give @s pofnir:selo_temperado
/give @s pofnir:chip_modular
```

Se qualquer um desses falhar, os itens não registraram — olhar o log do KubeJS.

**Teste A — aplicação e não-empilhamento**

1. Bancada comum: `pofnir:chip_modular` + uma picareta de ferro. Deve sair a picareta
   com a linha azul `Chip Modular` no tooltip.
2. Confira o atributo: `/attribute @s minecraft:generic.attack_speed value get`
   segurando a picareta marcada, e depois segurando uma picareta comum. A marcada deve
   dar 8% a mais. **Espere até 1 segundo** entre trocar de item e medir.
3. Ponha a picareta já marcada + outro chip na bancada: o slot de resultado tem que
   ficar **vazio** e nenhum item pode ser consumido.
4. Ponha a mesma picareta marcada + `pofnir:selo_do_rito`: tem que funcionar (pilares
   diferentes convivem no mesmo item).

**Teste B — armadura**

1. Bancada: `pofnir:selo_temperado` + peitoral de ferro.
2. Vista. `/attribute @s minecraft:generic.armor_toughness value get` → peitoral de
   ferro comum dá 0; com selo, 1.
3. Marque também as calças e vista as duas: deve dar 2.
4. Tire tudo: deve voltar a 0 em até 1 segundo.

**Teste C — spell power**

1. Bancada: `pofnir:selo_do_rito` + um cajado do Wizards.
2. Segurando o cajado marcado: `/attribute @s spell_power:arcane value get`, e compare
   com o mesmo cajado sem selo. Diferença esperada: +5%.

**Teste D — as três receitas nativas** (é o que mais pode falhar)

1. **Caldeirão:** monte um altar do Enchanted com carga >= 750, ponha o caldeirão sobre
   fogo com água e jogue os 4 ingredientes. Se o EMI mostrar a receita mas o caldeirão
   não reagir, o problema é a carga de altar — suba o altar.
2. **Create:** monte uma linha de montagem sequenciada com depot, dois deployers e uma
   prensa; alimente com `create:iron_sheet`. 3 voltas.
3. **MI:** Assembler ligado com pelo menos 16 EU/t.
4. Em qualquer caso, confira antes no EMI/JEI se a receita **aparece**. Se não aparecer,
   é rejeição de carregamento — mande o log que eu ajusto.

**Teste E — persistência**

1. Com equipamento marcado vestido/na mão, saia e volte ao mundo. O bônus tem que
   voltar em até 1 segundo.
2. Morra com o equipamento marcado e pegue de volta: a marca continua no item.

## 7. O que não foi feito (fora do escopo desta v0)

- Não há como **remover** um selo de um equipamento. Se a diretoria quiser reversão,
  é ordem nova.
- Nenhuma receita ou conteúdo de mod existente foi tocado. Só entrou coisa nova.
- Arte dos selos: placeholders vanilla.
