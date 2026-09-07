"""Bancada do ward v1.1: limpar o ward antigo (glifos/Solda + patamares) e traçar o novo colado no chão real."""
import numpy as np, math, collections
from scipy import ndimage
from voxel import Voxel

WARD_MED = {'enchanted:ritual_chalk', 'enchanted:golden_chalk', 'minecraft:candle'}
WARD_VAP = {'minecraft:waxed_weathered_cut_copper_slab', 'minecraft:waxed_cut_copper_slab',
            'minecraft:waxed_exposed_cut_copper_slab', 'minecraft:waxed_cut_copper', 'minecraft:lightning_rod'}
PAD = {'minecraft:grass_block', 'minecraft:dirt', 'minecraft:stone', 'minecraft:coarse_dirt',
       'minecraft:andesite', 'minecraft:cobbled_deepslate'}
NAO_CHAO = ('slab', 'stairs', 'wall', 'fence', 'leaves', 'glass', 'trapdoor', 'door', 'carpet', 'bed', 'log', 'shelf')

def ids(v, nomes):
    return np.array([i for i, p in enumerate(v.pal) if p[0] in nomes], dtype=np.uint16)

def mask_of(v, nomes):
    return np.isin(v.grid, ids(v, nomes))

def limpar(v, ward_names, r_min=70):
    """Remove blocos do ward antigo (r>r_min) e as colunas de patamar por baixo (até achar ar)."""
    ar = v.idx[('minecraft:air', ())]
    wm = mask_of(v, ward_names)
    pads = ids(v, PAD)
    removidos = collections.Counter()
    pts = np.argwhere(wm)
    for x, y, z in pts:
        X, Z = x + v.X0, z + v.Z0
        if math.hypot(X, Z) < r_min: continue
        removidos['ward'] += 1
        v.grid[x, y, z] = ar
        yy = y - 1
        while yy >= 0 and v.grid[x, yy, z] in pads:
            v.grid[x, yy, z] = ar; removidos['patamar'] += 1; yy -= 1
    return removidos

def limpar_soltos(v, r_min=70, y_min=76):
    """Depois da limpeza de colunas: apaga componentes sólidos soltos na faixa r>r_min (restos de plataforma)."""
    ar = v.idx[('minecraft:air', ())]
    solid = v.grid != ar
    lab, n = ndimage.label(solid)
    sizes = ndimage.sum(solid, lab, range(1, n + 1))
    maior = int(np.argmax(sizes)) + 1
    removidos = collections.Counter()
    pads = set(ids(v, PAD).tolist())
    for l in range(1, n + 1):
        if l == maior: continue
        pts = np.argwhere(lab == l)
        X, Z = pts[0][0] + v.X0, pts[0][2] + v.Z0
        if math.hypot(X, Z) < r_min or pts[0][1] + v.y0 < y_min: continue
        # só apaga se for feito de blocos de patamar (não mexe em decoração solta legítima)
        if all(int(v.grid[x, y, z]) in pads for x, y, z in pts):
            for x, y, z in pts: v.grid[x, y, z] = ar
            removidos[len(pts)] += 1
    return removidos

def footprint(v, espessura_min=3):
    """Máscara XZ das colunas que têm pelo menos N blocos sólidos (o corpo real da ilha)."""
    ar = v.idx[('minecraft:air', ())]
    solid = (v.grid != ar)
    return solid.sum(axis=1) >= espessura_min   # [x][z]

def contorno(v, inset):
    fp = footprint(v)
    dist = ndimage.distance_transform_edt(fp)
    anel = (dist >= inset) & (dist < inset + 1.0)
    # afinar: manter só o mais externo em cada direção não é trivial; ordenar por ângulo e deduplicar por passo angular
    pts = np.argwhere(anel)
    out = []
    for x, z in pts:
        X, Z = x + v.X0, z + v.Z0
        out.append((math.atan2(Z, X), X, Z))
    out.sort()
    return out, dist

def caminho_ordenado(v, inset):
    """Anel de 1 bloco de largura seguindo a distância `inset` da borda real, ordenado ao longo do percurso."""
    fp = footprint(v)
    dist = ndimage.distance_transform_edt(fp)
    anel = (dist >= inset) & (dist < inset + 1.0)
    # esqueleto: percorrer por vizinhança (8-conexo) a partir do ponto de menor ângulo
    pts = set(map(tuple, np.argwhere(anel)))
    if not pts: return []
    start = min(pts, key=lambda p: (abs(p[1] + v.Z0), -(p[0] + v.X0)))  # ponto a leste (ângulo 0)
    caminho = [start]; usado = {start}; atual = start
    viz = [(1,0),(0,1),(-1,0),(0,-1),(1,1),(1,-1),(-1,1),(-1,-1)]
    while True:
        cand = [(atual[0]+dx, atual[1]+dz) for dx, dz in viz]
        cand = [c for c in cand if c in pts and c not in usado]
        if not cand:
            # pular para o ponto não usado mais próximo (buracos pequenos)
            resto = [p for p in pts if p not in usado]
            if not resto: break
            prox = min(resto, key=lambda p: (p[0]-atual[0])**2 + (p[1]-atual[1])**2)
            if (prox[0]-atual[0])**2 + (prox[1]-atual[1])**2 > 9: break
            cand = [prox]
        # preferir manter o sentido anti-horário: escolher o candidato com maior avanço angular
        ang0 = math.atan2(atual[1] + v.Z0, atual[0] + v.X0)
        def avanco(c):
            a = math.atan2(c[1] + v.Z0, c[0] + v.X0) - ang0
            return (a + math.pi) % (2*math.pi) - math.pi
        cand.sort(key=lambda c: (-avanco(c), (c[0]-atual[0])**2 + (c[1]-atual[1])**2))
        atual = cand[0]; caminho.append(atual); usado.add(atual)
    return [(x + v.X0, z + v.Z0) for x, z in caminho]

def topo_chao(v, X, Z):
    """Y do bloco de topo cheio (chão em que dá para assentar) e nome; ignora plantas/relva."""
    ar = v.idx[('minecraft:air', ())]
    col = v.grid[X - v.X0, :, Z - v.Z0]
    ys = np.nonzero(col != ar)[0]
    if not len(ys): return None, None
    y = int(ys.max())
    nome = v.pal[col[y]][0]
    plantas = ('grass', 'fern', 'dandelion', 'poppy', 'flower', 'tulip', 'orchid', 'allium', 'daisy', 'bush', 'sapling', 'lily', 'cornflower', 'azalea')
    if nome.endswith(tuple(p for p in plantas)) and nome != 'minecraft:grass_block':
        y2 = y - 1
        if y2 >= 0 and col[y2] != ar: return y + v.y0, ('planta', v.pal[col[y2]][0])
    return y + v.y0, nome

# ---------------- v1.1: traçado no chão real ----------------
CHAO_OK_SUFIX = ('grass_block', 'dirt', 'dirt_path', 'coarse_dirt', 'rooted_dirt', 'packed_mud', 'mud', 'moss_block',
                 'stone', 'andesite', 'calcite', 'tuff', 'cobblestone', 'gravel', 'sand', 'clay', 'podzol', 'mycelium',
                 'mud_bricks', 'deepslate', 'granite', 'diorite', 'terracotta', 'concrete', 'bricks', 'planks', 'copper')

def footprint_chao(v, y_lo, y_hi, espessura_min=3):
    """Colunas com >= N sólidos na faixa de Y do tabuleiro da ilha (ignora dirigíveis e torres acima)."""
    ar = v.idx[('minecraft:air', ())]
    band = v.grid[:, y_lo - v.y0:y_hi - v.y0, :] != ar
    return band.sum(axis=1) >= espessura_min

def chao_assentavel(v, X, Z, y_lo, y_hi):
    """Topo cheio da coluna dentro da faixa: retorna (Y do chão, nome) ou None."""
    ar = v.idx[('minecraft:air', ())]
    col = v.grid[X - v.X0, :, Z - v.Z0]
    for y in range(y_hi - v.y0, y_lo - v.y0, -1):
        if col[y] == ar: continue
        nome = v.pal[col[y]][0]
        # planta/relva por cima: pode ser substituída pelo glifo se o de baixo for chão
        if nome.split(':')[1] in ('grass', 'tall_grass', 'fern', 'large_fern', 'dandelion', 'poppy', 'azure_bluet', 'oxeye_daisy', 'cornflower', 'allium', 'blue_orchid', 'red_tulip', 'orange_tulip', 'white_tulip', 'pink_tulip', 'lily_of_the_valley', 'sweet_berry_bush', 'moss_carpet', 'snow'):
            continue
        base = nome.split(':')[1]
        if base.endswith(CHAO_OK_SUFIX) and not any(k in base for k in ('slab', 'stairs', 'wall', 'fence')):
            # céu: 2 blocos livres acima (o de cima pode ser planta)
            return y + v.y0, nome
        return None
    return None

def tracar(v, inset, y_lo, y_hi, espessura_min=3):
    """Anel a `inset` blocos da borda real do tabuleiro, um bloco por passo, assentado coluna a coluna.
    Devolve lista de (X, Y_chao, Z, nome_do_chao) ordenada ao longo do anel; células sem chão assentável
    tentam recuar até 3 blocos para dentro; se não houver, ficam de fora (buraco registrado)."""
    fp = footprint_chao(v, y_lo, y_hi, espessura_min)
    dist = ndimage.distance_transform_edt(fp)
    anel = (dist >= inset) & (dist < inset + 1.0)
    pts = set(map(tuple, np.argwhere(anel)))
    start = min(pts, key=lambda p: (abs(p[1] + v.Z0), -(p[0] + v.X0)))
    caminho = [start]; usado = {start}; atual = start
    viz = [(1,0),(0,1),(-1,0),(0,-1),(1,1),(1,-1),(-1,1),(-1,-1)]
    while True:
        cand = [(atual[0]+dx, atual[1]+dz) for dx, dz in viz]
        cand = [c for c in cand if c in pts and c not in usado]
        if not cand:
            resto = [p for p in pts if p not in usado]
            if not resto: break
            prox = min(resto, key=lambda p: (p[0]-atual[0])**2 + (p[1]-atual[1])**2)
            if (prox[0]-atual[0])**2 + (prox[1]-atual[1])**2 > 16: break
            cand = [prox]
        ang0 = math.atan2(atual[1] + v.Z0, atual[0] + v.X0)
        def avanco(c):
            a = math.atan2(c[1] + v.Z0, c[0] + v.X0) - ang0
            return (a + math.pi) % (2*math.pi) - math.pi
        cand.sort(key=lambda c: (-avanco(c), (c[0]-atual[0])**2 + (c[1]-atual[1])**2))
        atual = cand[0]; caminho.append(atual); usado.add(atual)
    # gradiente da distância aponta para dentro
    gx, gz = np.gradient(dist)
    saida = []; buracos = []
    ocupado = set()
    y_prev = None
    for x, z in caminho:
        X, Z = x + v.X0, z + v.Z0
        cands = []
        for k in [0,1,2,3,4,5,6,7,8,-1,-2,-3]:
            nx, nz = X, Z
            if k:
                n = math.hypot(gx[x, z], gz[x, z]) or 1
                nx, nz = round(X + k * gx[x, z] / n), round(Z + k * gz[x, z] / n)
            if (nx, nz) in ocupado: continue
            r = chao_assentavel(v, nx, nz, y_lo, y_hi)
            if r: cands.append((abs(k), (nx, r[0], nz, r[1])))
        if cands:
            if y_prev is None:
                ok = min(cands)[1]
            else:
                # o mais suave: menor degrau em relação ao anterior; empate -> mais perto da linha do anel
                ok = min(cands, key=lambda c: (abs(c[1][1] - y_prev), c[0]))[1]
            saida.append(ok); ocupado.add((ok[0], ok[2])); y_prev = ok[1]
        else:
            buracos.append((X, Z))
    return saida, buracos, dist

def selos_8(anel):
    """Índices dos 8 pontos do anel mais próximos das 8 direções (E, SE, S, SW, W, NW, N, NE)."""
    idx = []
    for k in range(8):
        alvo = k * math.pi / 4
        def d(i):
            X, _, Z, _ = anel[i]
            a = math.atan2(Z, X)
            return abs((a - alvo + math.pi) % (2*math.pi) - math.pi)
        idx.append(min(range(len(anel)), key=d))
    return idx
