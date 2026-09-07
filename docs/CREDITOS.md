# Créditos de estruturas de terceiros

Este pack reutiliza estruturas (`.nbt`) de mods de código aberto como base das
capitais. Cada arquivo abaixo foi copiado do jar distribuído do mod (o mesmo conteúdo
de `src/main/resources` do repositório citado), renomeado para a função que cumpre na
cidade, e será modificado pela guilda. As licenças permitem cópia, modificação e
redistribuição com atribuição — e é isso que esta página faz.

Regra da casa: **nenhuma estrutura entra no repo sem estar listada aqui.**

---

## YUNG's Better Strongholds

- **Autores:** YUNGNICKYOUNG, Acarii
- **Licença:** GNU Lesser General Public License v3.0 (LGPL-3.0) — confirmada no
  `LICENSE` do repositório e no `fabric.mod.json` do jar
- **Fonte:** https://github.com/yungnickyoung/YUNGs-Better-Strongholds
- **Versão usada:** `YungsBetterStrongholds-1.20-Fabric-4.0.3.jar` (Modrinth `kidLKymU`)
- **Caminho original no jar:** `data/betterstrongholds/structures/`

| Arquivo original | Cópia no pack (`data/pofnir/structures/capital_medieval/`) | Papel |
|---|---|---|
| `rooms/grand_library.nbt` | `pilar_aprimoramento/templo_do_fundamento.nbt` | Templo do Fundamento |
| `starts/junction_lg.nbt` | `casa_dos_oficios/casa_dos_oficios.nbt` | Casa dos Ofícios |
| `rooms/mess.nbt` | `salao_da_origem/salao_da_origem.nbt` | Salão da Origem |
| `rooms/library_md.nbt` | `quadro_contratos/quadro_de_contratos.nbt` | Quadro de Contratos |
| `portal_rooms/portal_room.nbt` | `portal_limiar/portal_do_limiar.nbt` | Portal do Limiar (lava trocada por obsidiana chorosa na função) |
| `statues/statue_lantern_l.nbt` | `barreira/marco_lanterna_esq.nbt` | marcos do ward (8 pontos) |
| `statues/statue_lantern_r.nbt` | `barreira/marco_lanterna_dir.nbt` | marcos do ward (8 pontos) |

## The Graveyard

- **Autor:** Finallion
- **Licença:** GNU General Public License v3.0 (GPL-3.0) — confirmada no `LICENSE` do
  repositório. **Atenção:** o `fabric.mod.json` do jar declara `CC0-1.0`, o que
  contradiz o repositório. Esta página segue o `LICENSE` do repositório, que é o
  documento vinculante, e trata as estruturas como GPL-3.0.
- **Fonte:** https://github.com/finallion/The_Graveyard_-FABRIC-
- **Versão usada:** jar `the-graveyard-fabric` do manifesto (mod `graveyard` 3.0)
- **Caminho original no jar:** `data/graveyard/structures/`

| Arquivo original | Cópia no pack (`data/pofnir/structures/capital_medieval/`) | Papel |
|---|---|---|
| `altar/altar_01.nbt` | `praca_da_pedra/altar_da_pedra.nbt` | altar da Pedra de Retorno |
| `crypt/start_pool/start_room.nbt` | `pilar_aprimoramento/claustro_ritual.nbt` | Claustro do Pilar Ritual (afundado sob o templo) |
| `large_graveyard/feature_pool/walled_street_01.nbt` | `mercado/rua_do_mercado.nbt` | rua do Mercado |
| `haunted_house/start_pool/haunted_house_01.nbt` | `mercado/torre_da_bruxa.nbt` | Torre da Bruxa (loja Bewitchment/Enchanted) |
| `large_graveyard/branch_pool/branch_lost_grave.nbt` | `marco_fratura/capela_partida.nbt` | Marco da Fratura (a capela partida) |

### Sobre a GPL-3.0 e estruturas

A GPL cobre a obra como um todo. Ao redistribuir estas estruturas modificadas dentro do
pack, o pack mantém esta atribuição, aponta para a fonte e não impõe restrição adicional
sobre elas. Se a diretoria vier a redistribuir as estruturas modificadas separadamente
(por exemplo, como datapack avulso), esse datapack deve carregar esta mesma atribuição
e a licença GPL-3.0.

## Highgarden (schematic WorldEdit)

- **Obra:** build de **Maester Renar**, adquirida pela diretoria (compra licenciada).
- **Licença:** licença de compra do autor, em posse da diretoria.
- **O que está no pack:** `config/worldedit/schematics/highgarden.schem` — conversão de
  paleta feita pela diretoria (1.21.10 → 1.20.1 por parentesco de blocos; Sponge v2,
  DataVersion 3465, 181 × 123 × 215, 780 entradas de paleta, todas `minecraft:`). Carrega
  com `//schem load highgarden`. O ward que a abraça (giz, selos e prateleiras) é
  `pofnir:ward_highgarden`.
- **Crédito, nos termos da ordem:** Highgarden — build de Maester Renar (compra licenciada);
  conversão de paleta pela diretoria.
- **Histórico:** substitui a conversão do mapa de Cash Banks (Planet Minecraft, 2016) que
  esteve no pack entre os commits `1ed6c11` e este, sem autorização expressa do autor;
  aquela obra segue como referência de estudo em `docs/referencias/highgarden-anatomia.md`.

---

## O que NÃO foi usado

- **Create** (schematics de ponder): código MIT, mas assets são *All Rights Reserved*.
  Nenhum `.nbt` do Create foi ou será copiado (ver `GARIMPO-CATALOGO-v1.md`).
