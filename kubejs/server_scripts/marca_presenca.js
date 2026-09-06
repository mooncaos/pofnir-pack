// ============================================================
// POFNIR — Marca da Presença v0
// O terror não é do mundo. É de quem transgrediu.
// ============================================================
// IDs confirmados por extração dos jars (Ordem #002, Parte B):
//   man 1.1.1  -> assets/man/lang/en_us.json: "entity.man.manfromthefog"
//                 (existe também man:managgresive, a forma agressiva)
//   cave_dweller 1.3.0 -> "entity.cave_dweller.cave_dweller"
const ID_HOMEM_NEVOA = 'man:manfromthefog';
const ID_MORADOR = 'cave_dweller:cave_dweller';
// From The Fog NÃO registra entidade. O Herobrine é uma montagem de minecraft:armor_stand
// com tags (herobrine / herobrineEntity). Não há ID invocável por summon.
// Invocação só por função de datapack do próprio mod:
//   /function fromthefog:admin/sightings/stalking | creeping | lurking | nightmare
const ID_VULTO = null;

const NBT = 'pofnir_marca';
function nivel(p){ return p.persistentData.getInt(NBT); }
function setNivel(p,n){
  n = Math.max(0, Math.min(3, n));
  p.persistentData.putInt(NBT, n);
  if (n>0) p.tell(Component.literal('§8Algo agora sabe o seu nome. §7[Marca ' + n + ']'));
  else p.tell(Component.literal('§7A Presença desviou o olhar. Por ora.'));
}

// ---- GATILHOS v0 ----
// 1) A Fresta: interagir/quebrar sculk shrieker ou sculk = transgressão
BlockEvents.broken(event => {
  const id = event.block.id;
  if (id === 'minecraft:sculk_shrieker' || id === 'minecraft:sculk') {
    const p = event.player;
    if (p && !p.creative && nivel(p) < 1) setNivel(p, 1);
  }
});
// 2) Curiosidade proibida: carregar item do Eldritch End sobe pra 1 (checagem lenta)
// 3) Profundezas: abaixo de y=-30 durante a noite, chance pequena de subir pra 1
ServerEvents.tick(event => {
  const s = event.server;
  if (s.tickCount % 200 !== 0) return; // a cada 10s
  s.players.forEach(p => {
    const n = nivel(p);
    // gatilho 2
    if (n < 1) {
      let temEldritch = false;
      // KubeJS 6 (2001.6.5): player.inventory é InventoryKJS (getSlots/getStackInSlot).
      // Não existe .allItems nesta versão — ver relatório da Ordem #002.
      const inv = p.inventory;
      for (let i = 0; i < inv.slots; i++) {
        const st = inv.getStackInSlot(i);
        if (!st.empty && String(st.id).startsWith('eldritch_end:')) temEldritch = true;
      }
      if (temEldritch) setNivel(p, 1);
    }
    // gatilho 3
    if (n < 1 && p.y < -30 && !s.overworld().isDay() && Math.random() < 0.02) setNivel(p, 1);
    // ---- MANIFESTAÇÕES ----
    if (n >= 1 && Math.random() < 0.10 * n) {
      // vulto: som distante + (se ID confirmado) spawn do observador longe
      p.playNotifySound('minecraft:ambient.cave', 'ambient', 0.6, 0.5);
    }
    if (n >= 2 && p.y < 40 && Math.random() < 0.03) {
      // caverna: o Morador pode vir
      const pos = p.blockPosition().offset(12 - Math.floor(Math.random()*24), 0, 12 - Math.floor(Math.random()*24));
      p.level.runCommandSilent(`summon ${ID_MORADOR} ${pos.x} ${pos.y} ${pos.z}`);
    }
    if (n >= 3 && !s.overworld().isDay() && Math.random() < 0.05) {
      const pos = p.blockPosition().offset(20 - Math.floor(Math.random()*40), 0, 20 - Math.floor(Math.random()*40));
      p.level.runCommandSilent(`summon ${ID_HOMEM_NEVOA} ${pos.x} ${pos.y} ${pos.z}`);
    }
  });
});
// ---- DECAIMENTO: dormir cura só o nível 1 ----
PlayerEvents.tick(event => {
  const p = event.player;
  if (p.sleeping && nivel(p) === 1) {
    if (!p.persistentData.getBoolean('pofnir_dormindo')) {
      p.persistentData.putBoolean('pofnir_dormindo', true);
      setNivel(p, 0);
    }
  } else if (!p.sleeping) p.persistentData.putBoolean('pofnir_dormindo', false);
});
// ---- MORTE: a Marca sobrevive ----
PlayerEvents.respawned(event => {
  const p = event.player;
  if (nivel(p) > 0) p.tell(Component.literal('§8Você voltou. Ela também. §7A Marca é sua, não do corpo.'));
});
// ---- ADMIN v0 (limpeza por medicamento/ritual virá em ordem futura) ----
ServerEvents.commandRegistry(event => {
  const { commands: C, arguments: A } = event;
  event.register(C.literal('marca')
    .requires(s => s.hasPermission(2))
    .then(C.argument('nivel', A.INTEGER.create(event))
      .executes(ctx => { setNivel(ctx.source.player, A.INTEGER.getResult(ctx,'nivel')); return 1; })));
});
