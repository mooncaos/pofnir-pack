// ============================================================
// POFNIR — Três Pilares v0: leitura da marca no equipamento
// Puramente cosmético. Se falhar, o selo continua funcionando.
// ============================================================
ItemEvents.tooltip(event => {
  event.addAdvanced('*', (item, advanced, texto) => {
    const t = item.nbt;
    if (!t) return;
    if (t.getBoolean('pofnir_selo_rito')) {
      texto.add(Component.literal('§5✦ Selo do Rito §8(+5% Spell Power arcano)'));
    }
    if (t.getBoolean('pofnir_selo_tempera')) {
      texto.add(Component.literal('§6✦ Selo Temperado §8(+1 de tenacidade)'));
    }
    if (t.getBoolean('pofnir_selo_modular')) {
      texto.add(Component.literal('§b✦ Chip Modular §8(+8% de velocidade de ataque)'));
    }
  });
});
