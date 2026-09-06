// ============================================================
// POFNIR — Três Pilares v0: fabricação e aplicação (Ordem #004)
// Cada selo nasce no sistema NATIVO da sua era. A aplicação é
// uma receita sem forma (bancada comum) com resultado dinâmico.
// ============================================================

// --- NBT gravada no equipamento (uma chave por pilar: nunca empilha)
const NBT_RITO = 'pofnir_selo_rito';
const NBT_TEMPERA = 'pofnir_selo_tempera';
const NBT_MODULAR = 'pofnir_selo_modular';

const TAG_ARMA = 'pofnir:aprimoravel_arma';
const TAG_ARMADURA = 'pofnir:aprimoravel_armadura';

// ------------------------------------------------------------
// O que aceita selo. Estas tags são o ponto de extensão: para
// habilitar mais equipamento, acrescente aqui.
// ------------------------------------------------------------
ServerEvents.tags('item', event => {
  // Armas e ferramentas — tags que existem de fato no 1.20.1
  event.add(TAG_ARMA, '#minecraft:swords');
  event.add(TAG_ARMA, '#minecraft:axes');
  event.add(TAG_ARMA, '#minecraft:pickaxes');
  event.add(TAG_ARMA, '#minecraft:shovels');
  event.add(TAG_ARMA, '#minecraft:hoes');
  event.add(TAG_ARMA, 'minecraft:trident');
  event.add(TAG_ARMA, 'minecraft:bow');
  event.add(TAG_ARMA, 'minecraft:crossbow');
  // Focos mágicos do pack (confirmados no censo de wizards)
  event.add(TAG_ARMA, '#wizards:staves');
  event.add(TAG_ARMA, '#wizards:wands');

  // Armadura — trimmable_armor é a tag vanilla que cobre todo conjunto
  event.add(TAG_ARMADURA, '#minecraft:trimmable_armor');
});

// ------------------------------------------------------------
// FABRICAÇÃO — cada selo no sistema da sua era
// ------------------------------------------------------------
ServerEvents.recipes(event => {

  // --- Pilar 1: caldeirão da bruxa do Enchanted, com carga de altar.
  // Formato lido de data/enchanted/recipes/witch_cauldron/.
  // power 750 = mesma carga de altar que o mod usa nas receitas médias.
  event.custom({
    type: 'enchanted:witch_cauldron',
    cookingColor: [64, 40, 96],
    finalColor: [156, 120, 200],
    ingredients: [
      { item: 'bewitchment:silver_ingot' },
      { item: 'enchanted:attuned_stone' },
      { item: 'enchanted:tear_of_the_goddess' },
      { item: 'enchanted:whiff_of_magic' }
    ],
    power: 750,
    result: { item: 'pofnir:selo_do_rito' }
  }).id('pofnir:selo_do_rito_caldeirao');

  // --- Pilar 2: Montagem Sequenciada do Create.
  // Formato lido de data/create/recipes/sequenced_assembly/.
  // Três voltas de deploying + pressing: a têmpera é o trabalho repetido.
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'create:iron_sheet' },
    loops: 3,
    transitionalItem: { item: 'pofnir:selo_temperado_incompleto' },
    results: [
      { chance: 100.0, item: 'pofnir:selo_temperado' },
      { chance: 4.0, item: 'create:andesite_alloy' }
    ],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'pofnir:selo_temperado_incompleto' },
          { item: 'create:andesite_alloy' }
        ],
        results: [{ item: 'pofnir:selo_temperado_incompleto' }]
      },
      {
        type: 'create:pressing',
        ingredients: [{ item: 'pofnir:selo_temperado_incompleto' }],
        results: [{ item: 'pofnir:selo_temperado_incompleto' }]
      },
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'pofnir:selo_temperado_incompleto' },
          { item: 'create:brass_sheet' }
        ],
        results: [{ item: 'pofnir:selo_temperado_incompleto' }]
      }
    ]
  }).id('pofnir:selo_temperado_montagem');

  // --- Pilar 3: Assembler do Modern Industrialization.
  // Formato lido de data/modern_industrialization/recipes/assembler_generated/.
  // Circuito eletrônico = tier médio (LV analog < MV electronic < HV digital).
  event.custom({
    type: 'modern_industrialization:assembler',
    duration: 300,
    eu: 16,
    item_inputs: [
      { amount: 1, item: 'modern_industrialization:electronic_circuit' },
      { amount: 2, item: 'modern_industrialization:silicon_plate' },
      { amount: 4, item: 'modern_industrialization:steel_plate' }
    ],
    item_outputs: [
      { amount: 1, item: 'pofnir:chip_modular' }
    ]
  }).id('pofnir:chip_modular_assembler');

  // ------------------------------------------------------------
  // APLICAÇÃO — bancada comum, resultado calculado do que entrou.
  // O item de saída declarado é só a vitrine do EMI/JEI; quem manda
  // é o modifyResult.
  // ------------------------------------------------------------
  function grava(grid, tag, chave) {
    const achados = grid.findAll(tag);
    if (achados.length === 0) return Item.empty;
    const eq = achados[0].copy();
    eq.count = 1;
    const nbt = eq.getOrCreateTag();
    // Um equipamento só aceita UM selo de cada pilar.
    if (nbt.getBoolean(chave)) return Item.empty;
    nbt.putBoolean(chave, true);
    return eq;
  }

  event.shapeless(
    Item.of('minecraft:iron_sword', '{display:{Name:\'{"text":"Sua arma + Selo do Rito","italic":false,"color":"light_purple"}\'}}'),
    ['pofnir:selo_do_rito', '#' + TAG_ARMA]
  ).modifyResult((grid, result) => grava(grid, '#' + TAG_ARMA, NBT_RITO))
   .id('pofnir:aplicar_selo_do_rito');

  event.shapeless(
    Item.of('minecraft:iron_chestplate', '{display:{Name:\'{"text":"Sua armadura + Selo Temperado","italic":false,"color":"gold"}\'}}'),
    ['pofnir:selo_temperado', '#' + TAG_ARMADURA]
  ).modifyResult((grid, result) => grava(grid, '#' + TAG_ARMADURA, NBT_TEMPERA))
   .id('pofnir:aplicar_selo_temperado');

  event.shapeless(
    Item.of('minecraft:iron_pickaxe', '{display:{Name:\'{"text":"Sua arma + Chip Modular","italic":false,"color":"aqua"}\'}}'),
    ['pofnir:chip_modular', '#' + TAG_ARMA]
  ).modifyResult((grid, result) => grava(grid, '#' + TAG_ARMA, NBT_MODULAR))
   .id('pofnir:aplicar_chip_modular');
});
