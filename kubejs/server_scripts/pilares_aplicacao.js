// ============================================================
// POFNIR — Três Pilares v0: o efeito dos selos (Ordem #004)
// A marca fica gravada no equipamento (NBT). Este script lê a
// marca e mantém o modificador de atributo no jogador enquanto
// a peça estiver equipada.
//
// Por que não gravar AttributeModifiers direto no item: no 1.20.1,
// assim que um item ganha a tag AttributeModifiers, ela SUBSTITUI
// os modificadores padrão do item. Uma espada passaria a não ter
// dano, um peitoral a não ter armadura. Ver ORDEM-004.md.
// ============================================================

const PILARES = [
  {
    id: 'rito',
    nbt: 'pofnir_selo_rito',
    onde: 'mao',
    attr: 'spell_power:arcane',
    uuid: '9f1e0c31-4a2b-4d7e-8f10-a1b2c3d40001',
    nome: 'pofnir_selo_rito',
    operacao: 'multiply',
    valor: 0.05
  },
  {
    id: 'modular',
    nbt: 'pofnir_selo_modular',
    onde: 'mao',
    attr: 'minecraft:generic.attack_speed',
    uuid: '9f1e0c31-4a2b-4d7e-8f10-a1b2c3d40003',
    nome: 'pofnir_chip_modular',
    operacao: 'multiply',
    valor: 0.08
  },
  {
    id: 'tempera',
    nbt: 'pofnir_selo_tempera',
    onde: 'armadura',
    attr: 'minecraft:generic.armor_toughness',
    uuid: '9f1e0c31-4a2b-4d7e-8f10-a1b2c3d40002',
    nome: 'pofnir_selo_temperado',
    operacao: 'add',
    valor: 1
  }
];

const CACHE = 'pofnir_pilares_estado';

function temSelo(stack, chave) {
  if (!stack || stack.empty) return false;
  const t = stack.nbt;
  return t ? t.getBoolean(chave) : false;
}

function removeMod(nivel, nome, p) {
  nivel.runCommandSilent(`attribute ${nome} ${p.attr} modifier remove ${p.uuid}`);
}

function aplicaMod(nivel, nome, p, valor) {
  nivel.runCommandSilent(
    `attribute ${nome} ${p.attr} modifier add ${p.uuid} ${p.nome} ${valor} ${p.operacao}`
  );
}

// --- Sincroniza 1x por segundo, e só emite comando quando o estado MUDA
ServerEvents.tick(event => {
  const s = event.server;
  if (s.tickCount % 20 !== 0) return;

  s.players.forEach(jogador => {
    const mao = jogador.mainHandItem;

    // conta as peças marcadas
    const contagem = { rito: 0, modular: 0, tempera: 0 };
    if (temSelo(mao, 'pofnir_selo_rito')) contagem.rito = 1;
    if (temSelo(mao, 'pofnir_selo_modular')) contagem.modular = 1;
    jogador.armorSlots.forEach(peca => {
      if (temSelo(peca, 'pofnir_selo_tempera')) contagem.tempera++;
    });

    const estado = `${contagem.rito}|${contagem.modular}|${contagem.tempera}`;
    if (jogador.persistentData.getString(CACHE) === estado) return;
    jogador.persistentData.putString(CACHE, estado);

    const nivel = jogador.level;
    const nome = jogador.profile.name;
    PILARES.forEach(p => {
      removeMod(nivel, nome, p);
      const n = contagem[p.id];
      if (n > 0) aplicaMod(nivel, nome, p, p.valor * n);
    });
  });
});

// --- Ao entrar: invalida o cache para ressincronizar em 1 segundo
PlayerEvents.loggedIn(event => {
  event.player.persistentData.putString(CACHE, 'ressincronizar');
});

// --- Ao sair: limpa os modificadores para não ficarem presos no playerdata
PlayerEvents.loggedOut(event => {
  const jogador = event.player;
  const nivel = jogador.level;
  const nome = jogador.profile.name;
  PILARES.forEach(p => removeMod(nivel, nome, p));
  jogador.persistentData.putString(CACHE, 'ressincronizar');
});
