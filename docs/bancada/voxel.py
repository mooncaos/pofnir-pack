"""Carrega uma era inteira num array 3D de índices de paleta (rápido) e permite editar e regravar."""
import numpy as np, collections, io, zlib
import nbtlib
from nbtlib import Compound, List, String, Int, Byte, Long, LongArray
from mundo import Mundo, ler_regiao, escrever_regiao, REPO
from pathlib import Path

AIR = ('minecraft:air', ())

def _pal_key(p):
    props = tuple(sorted((k, str(v)) for k, v in p.get('Properties', {}).items()))
    return (str(p['Name']), props)

class Voxel:
    def __init__(self, era, y0=-64, y1=320):
        self.era = era
        self.m = Mundo(era)
        self.y0, self.y1 = y0, y1
        cxs = [c[0] for c in self.m.chunks]; czs = [c[1] for c in self.m.chunks]
        self.cx0, self.cx1 = min(cxs), max(cxs) + 1
        self.cz0, self.cz1 = min(czs), max(czs) + 1
        self.X0, self.Z0 = self.cx0 * 16, self.cz0 * 16
        nx, nz, ny = (self.cx1 - self.cx0) * 16, (self.cz1 - self.cz0) * 16, y1 - y0
        self.pal = [AIR]; self.idx = {AIR: 0}
        self.grid = np.zeros((nx, ny, nz), dtype=np.uint16)  # [x][y][z]
        for (cx, cz), ch in self.m.chunks.items():
            for sec in ch['sections']:
                bs = sec.get('block_states')
                if bs is None: continue
                sy = int(sec['Y'])
                pal = [self._id(_pal_key(p)) for p in bs['palette']]
                dados = bs.get('data')
                block = np.empty(4096, dtype=np.uint16)
                if dados is None or len(pal) == 1:
                    block[:] = pal[0]
                else:
                    bits = max(4, (len(pal) - 1).bit_length()); per = 64 // bits
                    arr = np.array(dados, dtype=np.int64).astype(np.uint64)
                    vals = []
                    mask = np.uint64((1 << bits) - 1)
                    for k in range(per):
                        vals.append((arr >> np.uint64(k * bits)) & mask)
                    v = np.stack(vals, axis=1).reshape(-1)[:4096]
                    block[:] = np.array(pal, dtype=np.uint16)[v.astype(np.int64)]
                # índice i = y*256 + z*16 + x
                cube = block.reshape(16, 16, 16)  # [y][z][x]
                gx, gz, gy = (cx - self.cx0) * 16, (cz - self.cz0) * 16, sy * 16 - y0
                self.grid[gx:gx+16, gy:gy+16, gz:gz+16] = cube.transpose(2, 0, 1)
        self.solid_cache = None

    def _id(self, key):
        if key not in self.idx:
            self.idx[key] = len(self.pal); self.pal.append(key)
        return self.idx[key]

    def get(self, x, y, z):
        return self.pal[self.grid[x - self.X0, y - self.y0, z - self.Z0]]

    def set(self, x, y, z, name, props=None):
        key = (name, tuple(sorted((k, str(v)) for k, v in (props or {}).items())))
        self.grid[x - self.X0, y - self.y0, z - self.Z0] = self._id(key)

    def names(self):
        return np.array([p[0] for p in self.pal])

    def solid_mask(self):
        n = self.names()
        return (n != 'minecraft:air')[self.grid]

    def top(self, x, z, mask=None):
        col = (mask if mask is not None else self.solid_mask())[x - self.X0, :, z - self.Z0]
        ys = np.nonzero(col)[0]
        return int(ys.max()) + self.y0 if len(ys) else None

    # -------- gravação --------
    def salvar(self, destino=None):
        destino = Path(destino) if destino else self.m.base
        destino.mkdir(parents=True, exist_ok=True)
        names = self.names()
        por_regiao = collections.defaultdict(dict)
        for (cx, cz), ch in self.m.chunks.items():
            gx, gz = (cx - self.cx0) * 16, (cz - self.cz0) * 16
            secs = List[Compound]()
            for sy in range(self.y0 // 16, self.y1 // 16):
                gy = sy * 16 - self.y0
                cube = self.grid[gx:gx+16, gy:gy+16, gz:gz+16].transpose(1, 2, 0).reshape(-1)  # [y][z][x]
                uniq, inv = np.unique(cube, return_inverse=True)
                if len(uniq) == 1 and self.pal[uniq[0]] == AIR:
                    continue
                palette = List[Compound]()
                for u in uniq:
                    name, props = self.pal[u]
                    c = Compound({'Name': String(name)})
                    if props: c['Properties'] = Compound({k: String(v) for k, v in props})
                    palette.append(c)
                bs = Compound({'palette': palette})
                if len(uniq) > 1:
                    bits = max(4, (len(uniq) - 1).bit_length()); per = 64 // bits
                    nlong = -(-4096 // per)
                    inv = inv.astype(np.uint64)
                    padded = np.zeros(nlong * per, dtype=np.uint64); padded[:4096] = inv
                    padded = padded.reshape(nlong, per)
                    longs = np.zeros(nlong, dtype=np.uint64)
                    for k in range(per):
                        longs |= padded[:, k] << np.uint64(k * bits)
                    bs['data'] = LongArray(longs.astype(np.int64))
                sec = Compound({'Y': Byte(sy), 'block_states': bs,
                                'biomes': Compound({'palette': List[String]([String(f'pofnir:{self.era}')])})})
                secs.append(sec)
            # heightmaps
            solid = (names != 'minecraft:air')[self.grid[gx:gx+16, :, gz:gz+16]]  # [x][y][z]
            hm = np.zeros(256, dtype=np.int64)
            for z in range(16):
                for x in range(16):
                    ys = np.nonzero(solid[x, :, z])[0]
                    hm[z * 16 + x] = (int(ys.max()) + 1 + self.y0 - self.y0) if len(ys) else 0  # relativo a min_y
            hmtag = _pack_heightmap(hm)
            be = ch['block_entities']
            novo = Compound({
                'DataVersion': Int(3465), 'xPos': Int(cx), 'zPos': Int(cz), 'yPos': Int(self.y0 // 16),
                'Status': String('minecraft:full'), 'LastUpdate': Long(0), 'sections': secs,
                'Heightmaps': Compound({'MOTION_BLOCKING': hmtag, 'WORLD_SURFACE': LongArray(np.array(hmtag))}),
                'block_entities': be, 'isLightOn': Byte(0)})
            por_regiao[(cx >> 5, cz >> 5)][(cx, cz)] = nbtlib.File(novo)
        for (rx, rz), chunks in por_regiao.items():
            escrever_regiao(destino / f'r.{rx}.{rz}.mca', chunks)
        return sorted(por_regiao)

def _pack_heightmap(vals, bits=9):
    per = 64 // bits
    nlong = -(-256 // per)
    longs = np.zeros(nlong, dtype=np.uint64)
    for i, v in enumerate(vals):
        longs[i // per] |= np.uint64(int(v)) << np.uint64((i % per) * bits)
    return LongArray(longs.astype(np.int64))
