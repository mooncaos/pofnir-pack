import nbtlib, numpy as np

def parse_state(s):
    if '[' in s:
        name, props = s[:-1].split('[', 1)
        props = tuple(sorted(tuple(kv.split('=')) for kv in props.split(',')))
    else:
        name, props = s, ()
    return (name, props)

def carregar(path):
    t = nbtlib.load(path); root = t.get('Schematic', t)
    W, H, L = int(root['Width']), int(root['Height']), int(root['Length'])
    off = [int(v) for v in root['Offset']]
    pal_map = {int(v): parse_state(k) for k, v in root['Palette'].items()}
    pal = [pal_map[i] for i in range(len(pal_map))]
    raw = np.frombuffer(bytes(np.array(root['BlockData'], dtype=np.int8).astype(np.uint8)), dtype=np.uint8)
    # varint decode
    out = np.empty(W * H * L, dtype=np.uint16); i = 0; n = 0
    while n < W * H * L:
        v = 0; shift = 0
        while True:
            b = int(raw[i]); i += 1
            v |= (b & 0x7F) << shift; shift += 7
            if not b & 0x80: break
        out[n] = v; n += 1
    # índice = (y*L + z)*W + x  -> [y][z][x]
    grid = out.reshape(H, L, W).transpose(2, 0, 1)  # [x][y][z]
    be = root.get('BlockEntities', [])
    return dict(W=W, H=H, L=L, off=off, pal=pal, grid=grid, be=be, root=root)
