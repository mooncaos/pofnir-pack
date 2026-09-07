// POFNIR — Chegada nas eras (via régia v1.1, bug 1: "nascer na rocha")
// Pontos canônicos de chegada, medidos no arquivo das capitais (topo real + 1):
//   Highgarden (era medieval): caminho de terra no centro da cidade, céu aberto
//   Vapor (era steampunk):     praça de andesito, a 23 blocos ao norte do centro
// Uso: /chegar medieval | /chegar steampunk   (perm 2, ferramenta de teste da guilda)
// A era TEC entra aqui quando a capital existir.

const CHEGADA = {
  medieval:  { dim: 'pofnir:era_medieval',  x: 0.5, y: 103, z: 0.5,   nome: 'Highgarden' },
  steampunk: { dim: 'pofnir:era_steampunk', x: 2.5, y: 77,  z: -22.5, nome: 'Vapor' },
};

ServerEvents.commandRegistry(event => {
  const { commands: C } = event;
  let cmd = C.literal('chegar').requires(src => src.hasPermission(2));
  Object.keys(CHEGADA).forEach(era => {
    cmd = cmd.then(C.literal(era).executes(ctx => {
      const p = ctx.source.player;
      const c = CHEGADA[era];
      p.server.runCommandSilent(`execute in ${c.dim} run tp ${p.username} ${c.x} ${c.y} ${c.z}`);
      p.tell(Component.literal('§d[POFNIR] §7Chegada em §f' + c.nome + ' §8(' + c.dim + ' @ ' + c.x + ' ' + c.y + ' ' + c.z + ')'));
      return 1;
    }));
  });
  event.register(cmd);
});
