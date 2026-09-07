# Bancada da diretoria — region files das capitais

Pipeline Python que lê e grava os `.mca` de `config/pofnir/dimensions/<era>/region/` (Anvil 1.20.1,
DataVersion 3465). Nasceu na Ordem #021 (via régia v1.1). Rode fora do jogo, a partir desta pasta,
com o repo clonado em `/home/claude/pofnir-pack` (ajuste `REPO` em `mundo.py`).

    pip install nbtlib numpy scipy matplotlib
    python3 inspecionar.py era_medieval      # censo: chunks, seções, almas
    python3 assar.py                         # limpa ward antigo, traça e assenta o novo -> saida/<era>/region

Arquivos: `mundo.py` (leitor/escritor .mca, ida e volta byte-idêntica), `voxel.py` (era em array 3D,
gravação com paleta/heightmaps), `schem.py` (Sponge v2), `ward.py` (limpeza, contorno, assentamento),
`assar.py` (a ordem), `inspecionar.py`.

Lições fixadas: ward assenta coluna a coluna no topo real, nunca em patamar; contorno segue a borda
da ilha (círculo não veste ilha redonda de raio variável nem ilha quadrada); alma de cama vanilla é só
id/x/y/z/keepPacked.
