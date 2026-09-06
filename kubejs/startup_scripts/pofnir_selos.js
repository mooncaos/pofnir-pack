// ============================================================
// POFNIR — Três Pilares de Aprimoramento v0 (Ordem #004)
// Os três selos. Cada um nasce no sistema nativo da sua era.
// Texturas são placeholders vanilla; a arte vem depois.
// ============================================================
StartupEvents.registry('item', event => {

  // --- Pilar 1: Encantamento Ritual (medieval / bruxaria)
  event.create('pofnir:selo_do_rito')
    .displayName('Selo do Rito')
    .texture('minecraft:item/amethyst_shard')
    .rarity('uncommon')
    .maxStackSize(16)
    .tooltip('§5Pilar Medieval §8— Encantamento Ritual')
    .tooltip('§7Junte com uma arma ou ferramenta na bancada')
    .tooltip('§8+5% de Spell Power arcano enquanto empunhada')

  // --- Pilar 2: Têmpera Mecânica (steampunk / Create)
  event.create('pofnir:selo_temperado')
    .displayName('Selo Temperado')
    .texture('minecraft:item/netherite_scrap')
    .rarity('uncommon')
    .maxStackSize(16)
    .tooltip('§6Pilar Steampunk §8— Têmpera Mecânica')
    .tooltip('§7Junte com uma peça de armadura na bancada')
    .tooltip('§8+1 de tenacidade de armadura enquanto vestida')

  // Peça intermediária da montagem sequenciada do Create
  event.create('pofnir:selo_temperado_incompleto')
    .displayName('Selo Temperado Incompleto')
    .texture('minecraft:item/raw_iron')
    .unstackable()
    .tooltip('§8Peça intermediária da Montagem Sequenciada')

  // --- Pilar 3: Modularização (tec / Modern Industrialization)
  event.create('pofnir:chip_modular')
    .displayName('Chip Modular')
    .texture('minecraft:item/prismarine_shard')
    .rarity('uncommon')
    .maxStackSize(16)
    .tooltip('§bPilar Tec §8— Modularização')
    .tooltip('§7Junte com uma arma ou ferramenta na bancada')
    .tooltip('§8+8% de velocidade de ataque enquanto empunhada')
})
