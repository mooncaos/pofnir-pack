// ============================================================
// POFNIR — Marca da Presença v1: o crescendo (Ordem #010)
// O terror não é do mundo. É de quem transgrediu.
//
// Níveis: 0 limpo | 1 Sussurros | 2 Vultos (o Morador pode vir) | 3 A Visita.
// Morte mantém a Marca. Sono cura só o nível 1. Números são lei da diretoria.
//
// IDs verificados (Ordem #010): sons no sounds.json vanilla 1.20.1 (1471 eventos),
// funções do From The Fog no jar 1.9.2, entidades no jar do Man From The Fog 1.1.1.
// Todo comando roda "as <jogador> at @s": nada aqui toca quem não é Marcado.
// ============================================================
const ID_HOMEM_NEVOA = 'man:manfromthefog';   // espreita; o timer do mod o converte em man:managgresive
const ID_HOMEM_CACA = 'man:managgresive';
const ID_MORADOR = 'cave_dweller:cave_dweller';

const NBT = 'pofnir_marca';
const NBT_ULTIMA = 'pofnir_marca_ultima';       // texto da última manifestação
const NBT_ULTIMA_T = 'pofnir_marca_ultima_t';   // tick do servidor em que ocorreu

// ---- Paletas de som (crescendo). vol/pitch por nível são lei; IDs verificados.
const SONS_N1 = ['minecraft:ambient.cave', 'minecraft:ambient.basalt_deltas.mood', 'minecraft:block.sculk_sensor.clicking'];
const SONS_N2 = SONS_N1.concat(['minecraft:entity.warden.heartbeat', 'minecraft:entity.warden.listening', 'minecraft:entity.warden.nearby_close', 'minecraft:ambient.soul_sand_valley.mood']);
const SONS_N3 = SONS_N2.concat(['minecraft:ambient.nether_wastes.mood', 'minecraft:ambient.warped_forest.mood', 'minecraft:entity.warden.nearby_closest', 'minecraft:entity.warden.agitated', 'minecraft:entity.elder_guardian.curse', 'minecraft:entity.enderman.stare']);
const SOM = {
  1: { paleta: SONS_N1, chance: 0.08, vol: 0.5, pitch: [0.6, 0.8] },
  2: { paleta: SONS_N2, chance: 0.15, vol: 0.8, pitch: [0.7, 0.9] },
  3: { paleta: SONS_N3, chance: 0.25, vol: 1.0, pitch: [0.6, 1.0] }
};
// Onde o som nasce, em coordenadas de olhar (^x ^y ^z): atrás, ou ao lado.
const POS_SOM = ['^ ^ ^-6', '^6 ^ ^', '^-6 ^ ^', '^4 ^ ^-4', '^-4 ^ ^-4'];

// ---- Visões (From The Fog). Funções relativas a @s: direcionáveis por jogador.
const VISAO = {
  1: { chance: 0.015, tipos: ['stalking', 'creeping'] },
  2: { chance: 0.05,  tipos: ['stalking', 'creeping', 'lurking'] },
  3: { chance: 0.12,  tipos: ['stalking', 'creeping', 'lurking'] }  // + nightmare, só na cama
};

// ---- A Visita (nível 3): 12% por checagem, à noite do Overworld (13000–23000).
const VISITA_CHANCE = 0.12;
const MORADOR_CHANCE = 0.03;   // v0, mantido

function nivel(p) { return p.persistentData.getInt(NBT); }
function setNivel(p, n) {
  n = Math.max(0, Math.min(3, n));
  p.persistentData.putInt(NBT, n);
  if (n > 0) p.tell(Component.literal('§8Algo agora sabe o seu nome. §7[Marca ' + n + ']'));
  else p.tell(Component.literal('§7A Presença desviou o olhar. Por ora.'));
}
function escolhe(lista) { return lista[Math.floor(Math.random() * lista.length)]; }
function nomeDe(p) { return p.profile.name; }
function registra(s, p, tipo, detalhe) {
  p.persistentData.putString(NBT_ULTIMA, tipo + (detalhe ? ' ' + detalhe : ''));
  p.persistentData.putLong(NBT_ULTIMA_T, s.tickCount);
  console.info('[Marca] ' + nomeDe(p) + ' | nivel ' + nivel(p) + ' | ' + tipo + (detalhe ? ' | ' + detalhe : '')
    + ' | pos ' + Math.floor(p.x) + ' ' + Math.floor(p.y) + ' ' + Math.floor(p.z) + ' | dim ' + p.level.dimension);
}

// ---- Sussurros: som posicionado atrás/ao lado, via caret (sem geometria em JS)
function sussurro(s, p, n) {
  const cfg = SOM[n];
  if (Math.random() >= cfg.chance) return;
  const som = escolhe(cfg.paleta);
  const pitch = (cfg.pitch[0] + Math.random() * (cfg.pitch[1] - cfg.pitch[0])).toFixed(2);
  const onde = escolhe(POS_SOM);
  const nome = nomeDe(p);
  p.level.runCommandSilent(`execute as ${nome} at @s positioned ${onde} run playsound ${som} ambient ${nome} ~ ~ ~ ${cfg.vol} ${pitch}`);
  // Nível 3 não deixa dormir: acorda quem estiver na cama.
  if (n >= 3 && p.sleeping) {
    p.stopSleeping();
    p.tell(Component.literal('§8Você acordou. Não foi por vontade sua.'));
  }
  registra(s, p, 'sussurro', som + ' ' + onde);
}

// ---- Visões: o Herobrine do From The Fog, cabeado ao Marcado.
// Cada função já mata o vulto anterior (anti-empilhamento nativo do mod). Guarda extra:
// não invoca se já há vulto a até 128 do jogador. nightmare exige o jogador NA CAMA.
function visao(s, p, n) {
  const cfg = VISAO[n];
  if (Math.random() >= cfg.chance) return;
  let tipo = escolhe(cfg.tipos);
  if (n >= 3 && p.sleeping) tipo = 'nightmare';
  const nome = nomeDe(p);
  const r = p.level.runCommandSilent(`execute as ${nome} at @s unless entity @e[type=minecraft:armor_stand,tag=herobrineEntity,distance=..128] run function watching:events/sightings/${tipo}`);
  if (r > 0) registra(s, p, 'visao', tipo);
  else console.info('[Marca] ' + nome + ' | visao ' + tipo + ' | pulada: vulto ja presente a <=128');
}

// ---- A Visita: man:manfromthefog a 20–40 blocos, fora do cubo de sumiço (±15) do mod.
// Deslocamento eixo-maior: o eixo dominante recebe 20..40 (|dx|>=18 OU |dz|>=18 garantido,
// com 2 de margem para o assentamento no chão), o outro fica limitado para a distância
// total não passar de 40. Anti-empilhamento no próprio execute: se já há Homem (qualquer
// forma) a até 200, o ciclo do mod está em andamento — não interfere.
function offsetVisita() {
  const maior = 20 + Math.floor(Math.random() * 21);                  // 20..40
  const maxMenor = Math.floor(Math.sqrt(40 * 40 - maior * maior));    // mantém |v| <= 40
  const menor = Math.floor(Math.random() * (maxMenor + 1));
  const sa = Math.random() < 0.5 ? -1 : 1, sb = Math.random() < 0.5 ? -1 : 1;
  return Math.random() < 0.5 ? { dx: sa * maior, dz: sb * menor } : { dx: sa * menor, dz: sb * maior };
}
function visita(s, p) {
  if (Math.random() >= VISITA_CHANCE) return;
  const nome = nomeDe(p);
  const o = offsetVisita();
  const guarda = `unless entity @e[type=${ID_HOMEM_NEVOA},distance=..200] unless entity @e[type=${ID_HOMEM_CACA},distance=..200]`;
  const r = p.level.runCommandSilent(`execute as ${nome} at @s ${guarda} positioned ~${o.dx} ~ ~${o.dz} run summon ${ID_HOMEM_NEVOA}`);
  if (r > 0) {
    // assenta no chão num raio de 3 (spreadplayers respeita altura e evita líquido)
    p.level.runCommandSilent(`execute as ${nome} at @s run execute as @e[type=${ID_HOMEM_NEVOA},distance=..45,sort=nearest,limit=1] at @s run spreadplayers ~ ~ 0 3 false @s`);
    registra(s, p, 'visita', `${ID_HOMEM_NEVOA} em ~${o.dx} ~ ~${o.dz}`);
  } else {
    console.info('[Marca] ' + nome + ' | visita | pulada: Homem ja presente a <=200 (ciclo do mod em andamento)');
  }
}

// ---- O Morador (nível 2, caverna): sem cubo de sumiço; anti-empilhamento a 100.
function morador(s, p) {
  if (!(p.y < 40 && Math.random() < MORADOR_CHANCE)) return;
  const nome = nomeDe(p);
  const dx = 12 - Math.floor(Math.random() * 24), dz = 12 - Math.floor(Math.random() * 24);
  const r = p.level.runCommandSilent(`execute as ${nome} at @s unless entity @e[type=${ID_MORADOR},distance=..100] positioned ~${dx} ~ ~${dz} run summon ${ID_MORADOR}`);
  if (r > 0) registra(s, p, 'morador', `~${dx} ~ ~${dz}`);
}

// ---- GATILHOS (v0, inalterados) ----
BlockEvents.broken(event => {
  const id = event.block.id;
  if (id === 'minecraft:sculk_shrieker' || id === 'minecraft:sculk') {
    const p = event.player;
    if (p && !p.creative && nivel(p) < 1) setNivel(p, 1);
  }
});

ServerEvents.tick(event => {
  const s = event.server;
  if (s.tickCount % 200 !== 0) return; // a cada 10s
  const horaOverworld = s.overworld().dayTime % 24000;
  const noite = horaOverworld >= 13000 && horaOverworld <= 23000;

  s.players.forEach(p => {
    let n = nivel(p);
    // gatilho 2: curiosidade proibida (item do Eldritch End no inventário)
    if (n < 1) {
      const inv = p.inventory;
      for (let i = 0; i < inv.slots; i++) {
        const st = inv.getStackInSlot(i);
        if (!st.empty && String(st.id).startsWith('eldritch_end:')) { setNivel(p, 1); n = 1; break; }
      }
    }
    // gatilho 3: profundezas à noite
    if (n < 1 && p.y < -30 && !s.overworld().isDay() && Math.random() < 0.02) { setNivel(p, 1); n = 1; }
    if (n < 1) return;

    // ---- O CRESCENDO ----
    sussurro(s, p, n);
    visao(s, p, n);
    if (n >= 2) morador(s, p);
    if (n >= 3 && noite) visita(s, p);
  });
});

// ---- O RITO DA SOMBRA (Ordem #011): saber que está marcado exige um gesto ----
// Agachado + parado + olhando para baixo (pitch > 60°) por 60 ticks contínuos.
// Interromper a pose zera a contagem. Cooldown de 30 s por jogador. Sem HUD, sem dica.
const RITO_TICKS = 60;
const RITO_COOLDOWN = 600;
const NBT_RITO_T = 'pofnir_rito_t';
const ritoContagem = {};   // nome -> ticks na pose
const ritoUltimaPos = {};  // nome -> {x,y,z} do tick anterior

const RITO_SOM = {
  1: { som: 'minecraft:ambient.cave',             vol: 0.5, pitch: 0.6, onde: '^ ^ ^-6' },  // grave, longe
  2: { som: 'minecraft:entity.warden.heartbeat',  vol: 0.8, pitch: 0.8, onde: '^ ^ ^-3' },  // mais perto, mais alto
  3: { som: 'minecraft:entity.warden.nearby_closest', vol: 1.0, pitch: 0.7, onde: '^ ^ ^-1' } // opressivo, colado
};

function revelaSombra(s, p) {
  const n = nivel(p);
  const nome = nomeDe(p);
  if (n === 0) {
    p.tell(Component.literal('§7Apenas a sua sombra.'));
  } else if (n === 1) {
    p.tell(Component.literal('§8Ela se move quando você não olha. §7[Marca 1]'));
  } else if (n === 2) {
    p.tell(Component.literal('§8Ela está mais perto do que deveria. §7[Marca 2]'));
  } else {
    p.level.runCommandSilent(`title ${nome} times 10 70 20`);
    p.level.runCommandSilent(`title ${nome} subtitle {"text":"[Marca 3]","color":"dark_gray"}`);
    p.level.runCommandSilent(`title ${nome} title {"text":"Ela olha de volta.","color":"dark_gray"}`);
    // segunda camada do som opressivo: a maldição, do outro lado
    p.level.runCommandSilent(`execute as ${nome} at @s positioned ^ ^ ^2 run playsound minecraft:entity.elder_guardian.curse ambient ${nome} ~ ~ ~ 1.0 0.7`);
  }
  if (n > 0) {
    const c = RITO_SOM[n];
    p.level.runCommandSilent(`execute as ${nome} at @s positioned ${c.onde} run playsound ${c.som} ambient ${nome} ~ ~ ~ ${c.vol} ${c.pitch}`);
  }
  registra(s, p, 'rito da sombra', 'nivel ' + n);
}

PlayerEvents.tick(event => {
  const p = event.player;
  const nome = nomeDe(p);
  const ant = ritoUltimaPos[nome];
  const parado = ant && Math.abs(p.x - ant.x) < 0.001 && Math.abs(p.y - ant.y) < 0.001 && Math.abs(p.z - ant.z) < 0.001;
  ritoUltimaPos[nome] = { x: p.x, y: p.y, z: p.z };
  const pose = p.crouching && parado && p.xRot > 60 && !p.sleeping;
  if (!pose) { ritoContagem[nome] = 0; return; }
  ritoContagem[nome] = (ritoContagem[nome] || 0) + 1;
  if (ritoContagem[nome] < RITO_TICKS) return;
  ritoContagem[nome] = 0;
  const s = event.server;
  const ultimo = p.persistentData.getLong(NBT_RITO_T);
  if (ultimo > 0 && s.tickCount - ultimo < RITO_COOLDOWN) return;
  p.persistentData.putLong(NBT_RITO_T, s.tickCount);
  revelaSombra(s, p);
});

// ---- DECAIMENTO: dormir cura só o nível 1; no 2+ a cama diz o porquê ----
PlayerEvents.tick(event => {
  const p = event.player;
  if (p.sleeping) {
    if (!p.persistentData.getBoolean('pofnir_dormindo')) {
      p.persistentData.putBoolean('pofnir_dormindo', true);
      const n = nivel(p);
      if (n === 1) setNivel(p, 0);
      else if (n >= 2) p.tell(Component.literal('§8Você tenta descansar. Algo não deixa. §7[Marca ' + n + ']'));
    }
  } else p.persistentData.putBoolean('pofnir_dormindo', false);
});

// ---- MORTE: a Marca sobrevive ----
PlayerEvents.respawned(event => {
  const p = event.player;
  if (nivel(p) > 0) p.tell(Component.literal('§8Você voltou. Ela também. §7A Marca é sua, não do corpo.'));
});

// ---- ADMIN: /marca <nivel> e /marca status (perm 2) ----
ServerEvents.commandRegistry(event => {
  const { commands: C, arguments: A } = event;
  event.register(C.literal('marca')
    .requires(src => src.hasPermission(2))
    .then(C.literal('status').executes(ctx => {
      const p = ctx.source.player;
      const s = ctx.source.server;
      const n = nivel(p);
      const ultima = p.persistentData.getString(NBT_ULTIMA);
      const t = p.persistentData.getLong(NBT_ULTIMA_T);
      const hora = s.overworld().dayTime % 24000;
      const proxima = 200 - (s.tickCount % 200);
      p.tell(Component.literal('§d[Marca] §7nível §f' + n + (n === 0 ? ' §8(limpo)' : n === 1 ? ' §8(Sussurros)' : n === 2 ? ' §8(Vultos)' : ' §8(A Visita)')));
      p.tell(Component.literal('§7última manifestação: §f' + (ultima ? ultima + ' §8há ' + Math.floor((s.tickCount - t) / 20) + 's' : 'nenhuma')));
      p.tell(Component.literal('§7próxima checagem em §f' + Math.ceil(proxima / 20) + 's §7| hora Overworld §f' + hora + (hora >= 13000 && hora <= 23000 ? ' §8(noite: Visita possível)' : ' §8(dia)')));
      p.tell(Component.literal('§7cooldowns: §8nenhum — v1 usa só chance por checagem de 10s'));
      return 1;
    }))
    .then(C.argument('nivel', A.INTEGER.create(event))
      .executes(ctx => { setNivel(ctx.source.player, A.INTEGER.getResult(ctx, 'nivel')); return 1; })));
});
