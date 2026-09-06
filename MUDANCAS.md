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
