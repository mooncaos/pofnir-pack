import sys, zlib, struct, io, collections
import nbtlib
from pathlib import Path

def chunks(mca):
    data = Path(mca).read_bytes()
    for i in range(1024):
        off = int.from_bytes(data[i*4:i*4+3], 'big') * 4096
        cnt = data[i*4+3]
        if off == 0: continue
        ln = int.from_bytes(data[off:off+4], 'big')
        comp = data[off+4]
        raw = data[off+5:off+4+ln]
        if comp == 2: raw = zlib.decompress(raw)
        elif comp == 1:
            import gzip; raw = gzip.decompress(raw)
        tag = nbtlib.File.parse(io.BytesIO(raw))
        yield tag

era = sys.argv[1]
base = Path(f'/home/claude/pofnir-pack/config/pofnir/dimensions/{era}/region')
be_types = collections.Counter()
be_examples = {}
ymin, ymax = 999, -999
xs, zs = [], []
heights = {}  # (x,z) -> top non-air y  (only for sample of chunks)
keys = collections.Counter()
for mca in sorted(base.glob('*.mca')):
    for tag in chunks(mca):
        cx, cz = int(tag['xPos']), int(tag['zPos'])
        xs.append(cx); zs.append(cz)
        keys.update(tag.keys())
        for be in tag.get('block_entities', []):
            t = str(be['id']); be_types[t] += 1
            if t not in be_examples: be_examples[t] = be
        for sec in tag['sections']:
            bs = sec.get('block_states')
            if not bs: continue
            pal = [str(p['Name']) for p in bs['palette']]
            if len(pal) == 1 and pal[0] == 'minecraft:air': continue
            y = int(sec['Y'])
            ymin = min(ymin, y*16); ymax = max(ymax, y*16+15)
print('chunk x', min(xs), max(xs), 'z', min(zs), max(zs), 'n', len(xs))
print('section y range', ymin, ymax)
print('chunk keys', keys)
print('block entities', be_types.most_common())
for t, ex in be_examples.items():
    print('---', t); print(nbtlib.serialize_tag(ex)[:600])
