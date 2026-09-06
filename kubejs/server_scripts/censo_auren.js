// ============================================================
// POFNIR PACK — Censo de Auren v0 (esqueleto)
// Dispara registro de marco quando o jogador cruza a Barreira
// de qualquer capital. server_scripts/censo_auren.js
// ============================================================

// --- Bounds das Barreiras (preencher com coords reais no pouso das cidades)
// Formato: dimensão, centro e raio da barreira (círculo no plano XZ)
const BARREIRAS = [
  { id: 'medieval',  dim: 'pofnir:era_medieval',  cx: 0, cz: 0, raio: 96 },
  { id: 'steampunk', dim: 'pofnir:era_steampunk', cx: 0, cz: 0, raio: 96 },
  { id: 'tec',       dim: 'pofnir:era_tec',       cx: 0, cz: 0, raio: 96 }
];

const TICK_INTERVALO = 20; // checa 1x por segundo
const NBT_CENSO = 'pofnir_censo'; // persistentData do jogador

function dentroDaBarreira(player, b) {
  if (player.level.dimension.toString() !== b.dim) return false;
  const dx = player.x - b.cx, dz = player.z - b.cz;
  return (dx * dx + dz * dz) <= (b.raio * b.raio);
}

function registrarMarco(player, chave, texto) {
  let censo = player.persistentData.getCompound(NBT_CENSO);
  if (censo.getBoolean(chave)) return; // marco único: Auren não esquece, mas não repete
  censo.putBoolean(chave, true);
  censo.putLong(chave + '_quando', Date.now());
  player.persistentData.put(NBT_CENSO, censo);
  // A voz de Auren (actionbar por ora; no Limiar vira diálogo do Olho Maior)
  player.tell(Component.literal('§d[Auren]§7 ' + texto));
  // TODO: emitir advancement custom pofnir:censo/<chave>
  // TODO: alimentar métricas de balanceamento (tempo de luta, mortes) — Curva Mestra
}

// --- O olho que observa as fronteiras
ServerEvents.tick(event => {
  if (event.server.tickCount % TICK_INTERVALO !== 0) return;
  event.server.players.forEach(player => {
    BARREIRAS.forEach(b => {
      const chaveDentro = 'dentro_' + b.id;
      const estava = player.persistentData.getBoolean(chaveDentro);
      const esta = dentroDaBarreira(player, b);
      if (esta && !estava) {
        // CRUZOU PRA DENTRO
        registrarMarco(player, 'primeira_visita_' + b.id,
          'Vi quando cruzaste o limiar da cidade que ' + nomePoetico(b.id) + '.');
      }
      if (esta !== estava) player.persistentData.putBoolean(chaveDentro, esta);
    });
  });
});

function nomePoetico(id) {
  if (id === 'medieval') return 'rezou';
  if (id === 'steampunk') return 'construiu';
  return 'calculou';
}

// --- Marcos futuros deste esqueleto (plugar aqui):
// EntityEvents.death -> primeiro boss regional por era
// PlayerEvents.advancement -> primeira maldição, primeira máquina, primeiro voo
// Retorno ao Limiar (pofnir:auren) -> Auren RECITA os marcos registrados
