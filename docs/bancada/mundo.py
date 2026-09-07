"""Leitor/escritor de region files (Anvil 1.20.1) da bancada POFNIR."""
import zlib, io, collections, math
import nbtlib
from nbtlib import Compound, List, String, Int, Byte, Long, LongArray
from pathlib import Path

REPO = Path('/home/claude/pofnir-pack')

def ler_regiao(mca):
    data = Path(mca).read_bytes()
    out = {}
    for i in range(1024):
        off = int.from_bytes(data[i*4:i*4+3], 'big') * 4096
        if off == 0: continue
        ln = int.from_bytes(data[off:off+4], 'big')
        comp = data[off+4]
        raw = data[off+5:off+4+ln]
        if comp == 2: raw = zlib.decompress(raw)
        elif comp == 1:
            import gzip; raw = gzip.decompress(raw)
        tag = nbtlib.File.parse(io.BytesIO(raw))
        out[(int(tag['xPos']), int(tag['zPos']))] = tag
    return out

def escrever_regiao(mca, chunks):
    """chunks: dict (cx,cz)->tag. Grava arquivo .mca novo."""
    header = bytearray(8192)
    body = bytearray()
    sector = 2
    for (cx, cz), tag in chunks.items():
        buf = io.BytesIO(); tag.write(buf, byteorder='big'); raw = buf.getvalue()
        comp = zlib.compress(raw)
        payload = len(comp) + 1
        blob = payload.to_bytes(4, 'big') + b'\x02' + comp
        pad = (-len(blob)) % 4096
        blob += b'\0' * pad
        n = len(blob) // 4096
        idx = (cx & 31) + (cz & 31) * 32
        header[idx*4:idx*4+3] = sector.to_bytes(3, 'big'); header[idx*4+3] = n
        body += blob; sector += n
    Path(mca).write_bytes(bytes(header) + bytes(body))

class Mundo:
    def __init__(self, era):
        self.base = REPO / 'config/pofnir/dimensions' / era / 'region'
        self.regioes = {}
        for mca in sorted(self.base.glob('*.mca')):
            rx, rz = map(int, mca.stem.split('.')[1:3])
            self.regioes[(rx, rz)] = ler_regiao(mca)
        self.chunks = {}
        for r in self.regioes.values(): self.chunks.update(r)
        self._cache = {}

    def _secao(self, x, y, z):
        cx, cz, sy = x >> 4, z >> 4, y >> 4
        key = (cx, cz, sy)
        if key in self._cache: return self._cache[key]
        ch = self.chunks.get((cx, cz))
        res = None
        if ch is not None:
            for sec in ch['sections']:
                if int(sec['Y']) == sy:
                    bs = sec.get('block_states')
                    if bs is None: break
                    pal = [ (str(p['Name']), {k: str(v) for k, v in p.get('Properties', {}).items()}) for p in bs['palette']]
                    dados = bs.get('data')
                    res = (pal, dados)
                    break
        self._cache[key] = res
        return res

    def bloco(self, x, y, z):
        s = self._secao(x, y, z)
        if s is None: return ('minecraft:air', {})
        pal, dados = s
        if dados is None or len(pal) == 1: return pal[0]
        bits = max(4, (len(pal) - 1).bit_length())
        per = 64 // bits
        i = (y & 15) * 256 + (z & 15) * 16 + (x & 15)
        w = int(dados[i // per]) & 0xFFFFFFFFFFFFFFFF
        v = (w >> ((i % per) * bits)) & ((1 << bits) - 1)
        return pal[v]

    def topo(self, x, z, ymax=320, ymin=-64):
        for y in range(ymax, ymin - 1, -1):
            b = self.bloco(x, y, z)[0]
            if b != 'minecraft:air': return y, b
        return None, None

    def entidades_bloco(self):
        for ch in self.chunks.values():
            for be in ch.get('block_entities', []):
                yield ch, be

    def paleta_global(self):
        c = collections.Counter()
        for ch in self.chunks.values():
            for sec in ch['sections']:
                bs = sec.get('block_states')
                if bs is None: continue
                for p in bs['palette']: c[str(p['Name'])] += 1
        return c
