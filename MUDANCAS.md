# MUDANCAS — exceções ao Princípio da Raiz

A CLAUDE.md proíbe remover, capar ou fazer downgrade de mod. A única exceção é
conflito técnico ou crash comprovado — e toda exceção fica registrada aqui, com a
prova, o alcance e a condição de reversão.

---

## 2026-09-06 — AzureLib: downgrade 3.1.12 → 2.0.41 (pin)

**Sintoma.** Crash no boot: `NoClassDefFoundError: mod/azure/azurelib/animatable/GeoEntity`,
lançado por `elocindev.eldritch_end.registry.BlockRegistry` (Eldritch End 0.3.4).

**Prova.** A AzureLib 3.x reorganizou os pacotes: 16 das 19 classes que o Eldritch End
referencia não existem no jar 3.1.12. O Eldritch End 0.3.4 (25/05/2025) foi compilado
contra o layout 2.x e não há versão mais nova dele para 1.20.1 — upgrade impossível.
A AzureLib 2.0.41 (última 2.x para 1.20.1 Fabric) contém as 19 classes, verificado uma a uma.

**Alcance.** Varredura do `fabric.mod.json` dos 132 jars instalados: o **único** mod que
depende de `azurelib` é o Eldritch End. Archers, Paladins, Rogues e Wizards dependem de
`azurelibarmor`, mod separado que não depende da AzureLib. Nenhum mod declara `breaks`
contra ela. Colateral zero.

**O que foi feito.** `packwiz remove azurelib` → `mr add --project-id 7zlUOZvb --version-id tSxZJ20e`
(AzureLib 2.0.41) → `packwiz pin azurelib`. Ordem da diretoria, relatório da sessão de 06/09/2026.

**Reversão.** Quando o autor do Eldritch End migrar para AzureLib 3.x (ou lançar versão
compatível para 1.20.1): `packwiz unpin azurelib` e `packwiz update azurelib`.

## 2026-09-06 — Leawind's Third Person: downgrade 3.0.3-beta → 2.2.0 (pin) + remoção da Perspective API

**Sintoma.** Crash em jogo: `NoSuchMethodError: 'org.joml.Quaternionf org.joml.Quaternionf.mul(float)'`,
em `FeedForwardCorrectionRotationTransitionAlgorithm.alignTargetRotationSign` da
`perspective_api-1.5.0-beta`, chamado pelo mixin de câmera da própria api
(`class_4184…$perspective_api$beforeMoveCamera`) — dispara independentemente do Leawind.

**Causa-raiz.** `Quaternionf.mul(float)` **existe** no JOML 1.10.5 que o 1.20.1 distribui
(tabela de métodos lida do `joml-1.10.5.jar` local). Não existe no JOML **1.10.4** que o
**Valkyrien Skies 2.4.11 embute sem relocar** (132 classes `org/joml/` no jar; `pom.properties`
= 1.10.4). No classloader único do Fabric a cópia do VS é a que carrega — o crash prova, por
contradição, que o `Quaternionf` em execução não é o 1.10.5. Todas as builds do VS para 1.20.1
(2.4.5 … 2.4.11) embutem o 1.10.4: não há upgrade que resolva. O VS fica (pilar do steampunk).

**Por que remover a api e não trocar de versão.** Todas as 20 builds da Perspective API para
1.20.1 carregam o descritor `(F)Lorg/joml/Quaternionf;` (1.4.0+ na classe do crash; todas no
`GameRendererMixin`), e a chamada nasce de mixin próprio da api — não dá para provar nenhuma
versão livre dela. Único consumidor da api: Leawind 3.x.

**O par.** Leawind **2.2.0** é o último `release` da linha estável 1.20.1, não depende da api,
não referencia `Quaternionf.mul(float)` (0 ocorrências) e todas as suas 38 chamadas a JOML
existem no 1.10.4 do VS (as 16 classes que citam JOML foram lidas uma a uma). Satisfaz o
`depends "leawind_third_person": ">=2.1.0"` do Pomkot's Mechs — o que também descarta remover
o Leawind.

**O que foi feito.** `packwiz remove perspective-api` → `packwiz remove leawind-third-person` →
`mr add --project-id S3D3QF0M --version-id KWdKGh98` (2.2.0) → `packwiz pin leawind-third-person`.

**Reversão.** Quando o Valkyrien Skies para 1.20.1 embutir JOML ≥ 1.10.5 (ou relocar o pacote):
`packwiz unpin leawind-third-person`, `packwiz update leawind-third-person`,
`packwiz mr add perspective-api`.

## 2026-09-06 — Era medieval: gerador flat sem camadas (vazio absoluto)

**Não é exceção ao Princípio da Raiz** (nenhum mod tocado); registrado aqui por ordem da
diretoria (ORDEM-015), porque muda o mundo que todo jogador recebe.

**O que mudou.** `config/paxi/datapacks/pofnir_dimensoes/data/pofnir/dimension/era_medieval.json`:
o gerador continua `minecraft:flat` com o bioma `pofnir:era_medieval`, `lakes: false`,
`features: false` e `structure_overrides: []` (estruturas já desligadas), mas as cinco
camadas (bedrock 1, deepslate 20, stone 40, dirt 3, grass 1 = chão a y 65) viraram
`"layers": []`. Chunks **novos** da era não geram bloco nenhum; abaixo de `min_y` (−64)
o vazio mata, como em qualquer dimensão.

**Cânone.** A era medieval é um mundo partido; o que sobrou flutua. A Highgarden do
Fundamento (`pofnir:capital_v1`) é erguida no vazio, em região virgem, como ilha inteira.

**Alcance.** Só chunks ainda não gerados. Chunks já explorados (v0, testes das etapas)
permanecem como estão — a capital definitiva vai longe deles (comando de teste na
ORDEM-015 usa 100000, 100000).

**Reversão.** Restaurar o bloco `layers` anterior (está no histórico: commit anterior a
"Highgarden definitiva: vazio na era + capital_v1"). Chunks gerados no vazio continuarão
vazios depois da reversão — regeneração de chunk não é retroativa.
