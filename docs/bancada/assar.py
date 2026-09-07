"""Assa a via régia v1.1: limpa o ward antigo, remove entulho, traça e assenta o ward novo coluna a coluna.
Saída: /home/claude/bancada/saida/<era>/region/*.mca (não toca no repo)."""
import pickle, collections, math, sys, json
import numpy as np
from voxel import Voxel
from ward import *

PARAM = {
    'era_medieval':  dict(ward=WARD_MED, inset=4, ylo=70, yhi=100),
    'era_steampunk': dict(ward=WARD_VAP, inset=4, ylo=70, yhi=88),
}
PLANTAS = ('grass', 'tall_grass', 'fern', 'large_fern', 'dandelion', 'poppy', 'azure_bluet', 'oxeye_daisy', 'cornflower', 'allium', 'blue_orchid', 'red_tulip', 'orange_tulip', 'white_tulip', 'pink_tulip', 'lily_of_the_valley', 'sweet_berry_bush', 'moss_carpet', 'snow')

def limpar_planta(v, X, Y, Z):
    ar = v.idx[('minecraft:air', ())]
    b = v.get(X, Y, Z)[0].split(':')[1]
    if b in PLANTAS: v.set(X, Y, Z, 'minecraft:air')
    # relva alta ocupa 2 blocos
    b2 = v.get(X, Y + 1, Z)[0].split(':')[1]
    if b2 in PLANTAS: v.set(X, Y + 1, Z, 'minecraft:air')

def livre(v, X, Y, Z):
    b = v.get(X, Y, Z)[0]
    return b == 'minecraft:air' or b.split(':')[1] in PLANTAS

def assar(era, gravar=True):
    p = PARAM[era]
    v = Voxel(era)
    rel = {'era': era}
    rel['limpeza'] = dict(limpar(v, p['ward']))
    rel['soltos'] = dict(limpar_soltos(v))
    if era == 'era_medieval':
        # entulho: placa de lã preta flutuando ao norte (z<=-100), fora da ilha
        n = 0
        for x, y, z in np.argwhere(mask_of(v, {'minecraft:black_wool'})):
            if z + v.Z0 <= -100:
                v.grid[x, y, z] = v.idx[('minecraft:air', ())]; n += 1
        rel['entulho_la_preta'] = n
    anel, buracos, dist = tracar(v, p['inset'], p['ylo'], p['yhi'])
    rel['anel'] = len(anel); rel['buracos'] = [(int(a), int(b)) for a, b in buracos]
    selos = set(selos_8(anel))
    colocados = collections.Counter()
    ocupado = set()
    def por(X, Y, Z, nome, props=None):
        if (X, Z) in ocupado: return False
        if not livre(v, X, Y, Z): return False
        limpar_planta(v, X, Y, Z)
        v.set(X, Y, Z, nome, props); ocupado.add((X, Z)); colocados[nome] += 1; return True
    for i, (X, Yc, Z, chao) in enumerate(anel):
        if i in selos:
            # selo 3x3 no chão real de cada coluna
            for dx in (-1, 0, 1):
                for dz in (-1, 0, 1):
                    r = chao_assentavel(v, X + dx, Z + dz, p['ylo'], p['yhi'])
                    if not r: continue
                    if dx == 0 and dz == 0:
                        if era == 'era_medieval': por(X, r[0] + 1, Z, 'minecraft:candle', {'candles': '1', 'lit': 'true', 'waterlogged': 'false'})
                        else:
                            por(X, r[0] + 1, Z, 'minecraft:waxed_cut_copper')
                            if livre(v, X, r[0] + 2, Z): v.set(X, r[0] + 2, Z, 'minecraft:lightning_rod', {'facing': 'up', 'powered': 'false', 'waterlogged': 'false'}); colocados['minecraft:lightning_rod'] += 1
                    else:
                        if era == 'era_medieval': por(X + dx, r[0] + 1, Z + dz, 'enchanted:golden_chalk', {'glyph': str(((dx + 1) * 3 + (dz + 1)) % 4)})
                        else: por(X + dx, r[0] + 1, Z + dz, 'minecraft:waxed_cut_copper')
            continue
        if era == 'era_medieval':
            por(X, Yc + 1, Z, 'enchanted:ritual_chalk', {'glyph': str(i % 4)})
        else:
            if i % 8 == 4:
                if por(X, Yc + 1, Z, 'minecraft:waxed_cut_copper') and livre(v, X, Yc + 2, Z):
                    v.set(X, Yc + 2, Z, 'minecraft:lightning_rod', {'facing': 'up', 'powered': 'false', 'waterlogged': 'false'}); colocados['minecraft:lightning_rod'] += 1
            else:
                slab = ['minecraft:waxed_cut_copper_slab', 'minecraft:waxed_exposed_cut_copper_slab', 'minecraft:waxed_weathered_cut_copper_slab'][i % 3]
                por(X, Yc + 1, Z, slab, {'type': 'bottom', 'waterlogged': 'false'})
    rel['colocados'] = dict(colocados)
    rel['selos'] = [(int(anel[i][0]), int(anel[i][1]) + 1, int(anel[i][2])) for i in sorted(selos)]
    ys = [a[1] for a in anel]; rel['y_min'], rel['y_max'] = int(min(ys)), int(max(ys))
    if gravar:
        v.salvar(f'/home/claude/bancada/saida/{era}/region')
    pickle.dump((v.grid, v.pal, anel), open(f'/home/claude/bancada/{era}_assado.pkl', 'wb'))
    return rel, v, anel

if __name__ == '__main__':
    for era in sys.argv[1:] or PARAM:
        rel, v, anel = assar(era)
        print(json.dumps(rel, ensure_ascii=False, indent=1))
