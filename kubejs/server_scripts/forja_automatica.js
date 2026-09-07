// POFNIR — Forja Automática (Ordem #018, piloto)
// "O fim do paste": obras registradas aqui são assadas sozinhas, uma vez por mundo,
// no primeiro carregamento do servidor — sem region files, sem WorldEdit, sem mod novo.
//
// Mecanismo (versão POFNIR do LoadCapitalCitiesMixin do Prominence, sem tocar em arquivo):
//   1. ServerEvents.loaded: para cada obra sem flag neste mundo, `forceload add` na área.
//   2. ServerEvents.tick: passados ESPERA ticks (chunks já carregados), roda
//      `execute in <dim> positioned x y z run function <funcao>`, remove o forceload
//      e grava a flag em server.persistentData.
//   3. `/forja status` lista as obras; `/forja reforjar <id>` apaga a flag e re-assa.
//
// Regras: a flag é por mundo (persistentData do servidor). Mundo novo → assa na primeira
// abertura. Mundo antigo que nunca rodou o script → assa também na primeira abertura com
// o pack atualizado (a função sobrescreve o que estiver na área: escolha coordenadas
// virgens). Nada aqui toca nas capitais: só o que estiver em OBRAS.

const OBRAS = [
  {
    id: 'teste_forja_marco',
    dim: 'pofnir:teste_forja',
    x: 0, y: 64, z: 0,
    funcao: 'pofnir:teste_forja_marco',
    raio: 16            // blocos ao redor do ponto que recebem forceload (área da obra)
  }
];

const ESPERA = 100;     // ticks entre o forceload e a função (5 s: chunks de vazio carregam em bem menos)
const FLAG = 'pofnir_forja';

let pendentes = [];     // { obra, alvo: tick em que a função roda }

function chave(o) { return FLAG + ':' + o.id; }
function feita(s, o) { return s.persistentData.getBoolean(chave(o)); }

function forceload(s, o, ligar) {
  const r = o.raio;
  return s.runCommandSilent(`execute in ${o.dim} run forceload ${ligar ? 'add' : 'remove'} ${o.x - r} ${o.z - r} ${o.x + r} ${o.z + r}`);
}

function agendar(s, o) {
  const r = forceload(s, o, true);
  pendentes.push({ obra: o, alvo: s.tickCount + ESPERA });
  console.info(`[Forja] ${o.id}: forceload em ${o.dim} (${r}); função em ${ESPERA} ticks`);
}

function assar(s, o) {
  const r = s.runCommandSilent(`execute in ${o.dim} positioned ${o.x} ${o.y} ${o.z} run function ${o.funcao}`);
  forceload(s, o, false);
  if (r > 0) {
    s.persistentData.putBoolean(chave(o), true);
    console.info(`[Forja] ${o.id}: assada em ${o.dim} @ ${o.x} ${o.y} ${o.z} (função devolveu ${r})`);
  } else {
    console.error(`[Forja] ${o.id}: função ${o.funcao} devolveu ${r}; flag não gravada, tenta de novo no próximo carregamento`);
  }
}

ServerEvents.loaded(event => {
  const s = event.server;
  OBRAS.forEach(o => {
    if (feita(s, o)) { console.info(`[Forja] ${o.id}: já assada neste mundo`); return; }
    agendar(s, o);
  });
});

ServerEvents.tick(event => {
  if (pendentes.length === 0) return;
  const s = event.server;
  const agora = s.tickCount;
  const restantes = [];
  pendentes.forEach(p => { if (agora < p.alvo) { restantes.push(p); } else { assar(s, p.obra); } });
  pendentes = restantes;
});

ServerEvents.commandRegistry(event => {
  const { commands: C, arguments: A } = event;
  event.register(C.literal('forja')
    .requires(src => src.hasPermission(2))
    .then(C.literal('status').executes(ctx => {
      const s = ctx.source.server;
      ctx.source.player.tell(Component.literal('§d[Forja] §7obras registradas: §f' + OBRAS.length + ' §7| pendentes: §f' + pendentes.length));
      OBRAS.forEach(o => ctx.source.player.tell(Component.literal('§7- §f' + o.id + ' §8' + o.dim + ' @ ' + o.x + ' ' + o.y + ' ' + o.z + (feita(s, o) ? ' §aassada' : ' §cpendente'))));
      return 1;
    }))
    .then(C.literal('reforjar').then(C.argument('id', A.STRING.create(event)).executes(ctx => {
      const s = ctx.source.server;
      const id = A.STRING.getResult(ctx, 'id');
      const o = OBRAS.find(x => x.id === id);
      if (!o) { ctx.source.player.tell(Component.literal('§c[Forja] obra desconhecida: ' + id)); return 0; }
      s.persistentData.remove(chave(o));
      agendar(s, o);
      ctx.source.player.tell(Component.literal('§d[Forja] §7' + id + ' re-agendada: forceload feito, função em ' + ESPERA + ' ticks'));
      return 1;
    })))
  );
});
