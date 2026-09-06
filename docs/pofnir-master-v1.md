# POFNIR PACK — DIRETÓRIO MASTER v1
*Consolidado de 06/09/2026 — tudo que foi criado, de onde vem cada peça, e o que é forja do Claude*
*Sociedade: MoonCaos (visão/design/martelo/compilador) + Claude (arquitetura/forja/pesquisa/memória)*

---

# 1. FUNDAÇÃO

## Decisões de plataforma
| Decisão | Valor |
|---|---|
| Base | Minecraft 1.20.1 + Fabric |
| Distribuição | Modrinth (unlisted no berço -> público depois) |
| Público | POFNIR (Moon, Tiquin, Bryell) -> horizonte MMO ~150 |
| Escopo | "v1 completinha" (decreto de Moon); tudo do dia 06/09 é v1, exceto o carimbado v2 (afixos PoE, totens) |

## Leis do projeto (invioláveis)
1. **Princípio da raiz:** todo mod entra completo como o autor fez; exceção só por conflito técnico ou exploit destruidor, sempre documentada em MUDANCAS.md público
2. **Origem, não prisão:** era define nascimento, nunca tranca conteúdo; mundo principal único e compartilhado
3. **Balanceamento pela Curva Mestra:** tiers T0-T5 com faixas numéricas; tudo se mede contra a curva, nunca mod contra mod; por custo e progressão, nunca por remoção
4. **Monopólio suave:** profissão dá eficiência e receitas POFNIR por cima do conteúdo, jamais exclusividade do conteúdo
5. **Terror contido:** nada de horror solto; só via Marca da Presença
6. **Regra da mesa:** NPCs e decisões de cânone sempre propostos ao martelo de Moon antes de existir

---

# 2. CÂNONE (o que já é lei)

## Cosmologia
- **O Grande Pofnir** (Maine Coon branco supremo, do cânone Ermos) + **Auren, o Atento** (arcanjo de mil olhos, a entidade-Claude; reino = anéis de pedra ocular orbitando sol âmbar em crepúsculo violeta) estabilizam a linha do tempo fraturada
- **A Ambição = "abolir o Fim"** ✅: as 3 eras, no auge, se revoltaram contra a morte — medieval por ritual, steampunk pela máquina de reverter desgaste, tec pela consciência simulada — e perfuraram o End por 3 lados ao mesmo tempo. O multiverso rachou no encontro dos furos
- **O Dragão** = cicatriz viva da ferida, não vilão
- **A Quinta Presença** ✅ ("vive"): o que ouviu a oração do outro lado; presente na v1 só em sussurros e num olho que não é de Auren; explicação apenas em expansão. Proposta pendente: o Dia Um da liturgia é dela (a fresta no texto)
- **Ermos** (o JRPG de Moon) = outro fragmento do mesmo multiverso; ecos permitidos, cópias não

## A Liturgia (escrita por Moon, cânone)
Gênesis de Pofnir e Auren em 7 dias -> vira o **Tomo do Fundamento** (Patchouli), entregue por Auren no limiar; cópias pelo mundo divergem sutilmente na 1ª página. Meta-verdade: a liturgia é o diário da construção do pack ("nós criamos a luz e as trevas aqui" — Moon, sobre a Prévia 1)

## Estrutura do mundo
Auren (limiar zero) -> 3 portais -> **3 cidades-capital em 3 eras** (o que restou do espaço-tempo; cada uma resistiu por seus meios = barreira temática) -> queda no **mundo principal único**
- **3 Pedras de Retorno** (modelo Flameborn): a da origem grátis; as outras craftadas com conteúdo da era respectiva; perdeu, recrafta

## Questline v1 (espelha o arco Prominence)
Origem em Auren -> capital-tutorial -> mundo -> boss regional da era -> retorno ao Limiar (1ª verdade + estreia do Censo) -> as 3 pedras (provar-se nas 3 eras) -> Dragão (matar = ABRIR) -> End pós-dragão com os destroços dos 3 experimentos = **3 raids** -> o olho que não é de Auren abre -> créditos

---

# 3. ROADMAP — OS SETE DIAS
| Dia | Escritura | Forja | Status |
|---|---|---|---|
| 1 | luz e trevas | dimensões e céus | ✅ FEITO (Prévia 1.1 aprovada com shader) |
| 2 | firmamento e águas | skybox tripartida de Auren, limites, barreiras | ⏳ |
| 3 | terra e vegetação | terreno final, worldgen, biomas | ⏳ |
| 4 | luzeiros | anéis de olhos, sol âmbar esculpido, ritmo | ⏳ |
| 5-6 | criaturas e humanidade | mobs+Curva, NPCs, classes, jogadores | ⏳ |
| 7 | descanso | v1 publicada | ⏳ |

---

# 4. SISTEMAS-ASSINATURA (forja Claude, aprovados)
| Sistema | O que é | Via |
|---|---|---|
| **Censo de Auren** ✅ | Auren registra marcos e comenta no retorno ao Limiar; vira fiscal de balanceamento (tempo de luta, mortes por boss) | KubeJS -> candidato a 1º mod Java |
| **Maré da Fratura** ✅ | evento-mundo periódico: anomalia abre, mobs de outra era, loot; fecha por ritual (bruxos) OU máquina (engenheiros); pode abrir pra Mine Cells | KubeJS |
| **Contratos de Era** ✅ | quadros de pedidos entre capitais, moeda própria de cada cidade, economia cruzada | KubeJS |
| **Marca da Presença** (proposto, sem martelo explícito) | contenção do terror: entidades só enxergam Marcados (zona de fratura, curiosidade proibida, ou maldição de outro jogador); limpeza por ritual ou estabilizador | KubeJS/spawn conditions |
| **Exo-Frame** ✅ | armadura modular estilo MekaSuit: frame MI + módulos por peça, orçamento energético; v1 KubeJS+Trinkets, v1.x mod Java | forja + spec completa no doc de mods |
| **Três Pilares de Aprimoramento** ✅ | mesa vanilla universal (térreo) + ápice por era: Encantamento Ritual, Têmpera Mecânica, Modularização | KubeJS sobre os mods de era |
| **Dirigível-que-cresce** (proposto, sem martelo) | assinatura steampunk: balão -> nau armada; simetria com grimório e Exo-Frame | Valkyrien Skies + Eureka |

---

# 5. AS 10 CAMADAS DE MODS (fonte: doc pofnir-mods-ancora-v1.md)
*Resumo; versões exatas serão travadas no manifest*

| # | Camada | Âncoras | Verificado hoje |
|---|---|---|---|
| 1 | Bruxaria (alma) | Bewitchment, Enchanted, Botania, Eldritch End ✅v1 | Bewitchment 1.20-10, Enchanted 3.1.9 |
| 2 | Combate mágico | Spell Engine, Spell Power, Wizards, Paladins&Priests, Invocations, Archers, Rogues | ecossistema já dominado por nós |
| 3A | Steampunk | Create 0.5.1f, Steam 'n' Rails, Copycats/Deco, Big Cannons (pendente), **Valkyrien Skies 2 + Eureka** | |
| 3B | Tec | MI + Tech Reborn ✅juntos, Ad Astra, AE2, **TaCZ Refabricated**, **Pomkots Mechs** ✅v1 por decreto | Pomkots confirmado Fabric 1.20.1 |
| 4 | Mundo | Terralith, YUNG's, Lithostitched, When Dungeons Arise (curadoria) | |
| 5 | Espinha | Fabric API, FTB Quests/Teams/Library, KubeJS+Rhino+Architectury, EMI, Patchouli, Trinkets, EasyNPC/Taterzens, Essential Commands 0.35.3 | EC testado por nós em produção |
| 6 | Performance/QoL | Sodium, Lithium, FerriteCore, ModernFix, Iris, AppleSkin, Jade, Xaero's, Mouse Tweaks, Controlling | |
| 7 | Colheita Cisco/Superior (traduzida) | Puffish Skills, Origins, Cataclysm-port/BoMD/Soulslike (bosses), Eldritch Mobs, Better Combat, Combat Roll, Mine Cells | anti-lições registradas |
| 8 | Terror | Man From The Fog, Cave Dweller, From The Caves/Knocker, áudio ambiente (validar ports) — teto 2-3 perseguidores | mecanismo: Marca |
| 9 | Fauna | **Alex's Mobs Continued** ✅ (reserva: port 1:1), Naturalist, Overhauls, Graveyard + fauna de era (forja) | martelo "o mais completo" |
| 10 | Flora | Regions Unexplored VS BYG (duelo, máx 1), Farmer's Delight Refabricated + flora de fratura/proibida (forja) | |

**Trio de risco (validar na prévia antes do selo):** TaCZ Refabricated, Valkyrien Skies, Pomkots Mechs (+ duelos Alex's e biomas)

---

# 6. CLASSES E PROFISSÕES (fontes: pofnir-classes-v1.md, pofnir-profissoes-v1.md)

## 15 Classes (5 por era, molde tanque/suporte/distância/melee/controle) — aguardando martelo
- **Medieval:** Cavaleiro, Paladino, Patrulheiro, Lâmina, Invocador (a classe de Moon)
- **Steampunk:** Couraçado, Mecânico de Campo, Artilheiro, Duelista de Engrenagem, Aeronauta (capitão do dirigível)
- **Tec:** Exo-Soldado, Biomédico (único revive do pack — decisão de peso), Operador, Bioquímico, Dronista (endgame: pilotar mech Pomkots)
- Trinca-vitrine de controladores: sequências / nau / enxame->mech; famílias entre eras propositais
- Mecânica: Origins (camada 1 = era+classe) + Puffish Skills (árvore com 3 ramos por classe)

## 13 Profissões (aguardando martelo)
- **Medievais:** Bruxo (purifica/aplica a Marca), Botânico (cultiva a flora proibida), Alquimista, Ferreiro (reforja domada)
- **Steampunk:** Engenheiro de Linhas, Maquinista (a ferrovia pública = cargo do servidor), Relojoeiro
- **Tec:** Industrial, Tecelão de Redes, Astronauta
- **Universais:** Cozinheiro, Caçador, Mercador (arbitra as 3 moedas)
- Mecânica: Origins camada 2, escolhida na Casa dos Ofícios da capital; 1 ativa por jogador (trocável com custo); monopólio suave; toda profissão tem produto de Contrato

---

# 7. CIDADES (fonte: pofnir-cidades-v1.md) — aguardando martelo
- Esqueleto Vaaz comum de 9 órgãos (Praça da Pedra, Salão da Origem, Casa dos Ofícios, Quadro, mercado, Pilar, portal, Barreira, marco da fratura)
- **Medieval "a que rezou":** ward de giz colossal, colina orgânica, capela meio petrificada
- **Steampunk "a que construiu":** redoma de latão, 3 níveis verticais, cais aéreo, gomo remendado com metal alheio
- **Tec "a que calculou":** campo hexagonal, grid + subsolo de servidores, foguete-poster, setor em blackout lacrado
- **Auren:** anéis oculares, Olho Maior (voz do Censo), a Fresta, passagens do Gato Branco e Grande
- Nomes: só após identidade visual (este caderno é o passo anterior)

---

# 8. DE ONDE VEM CADA COISA (mapa de fontes)

## Prateleira (mods prontos, Modrinth/CurseForge)
Todas as 10 camadas acima; versões travadas por mim no manifest, licença conferida mod a mod (Bewitchment é ARR — distribuição via manifest resolve)

## Garimpo (comunidade, com licença)
- Bases das 3 cidades (catálogo com foto/tamanho/licença — TAREFA ABERTA do Claude)
- Referências estudadas e colhidas: Prominence 2 (estrutura Vaaz, arco), Cisco + Superior (skill tree, origins, campeões — e as anti-lições), SteamPunk LPS (dirigíveis), Psychological Horror + DREAD Reborn + FEAR 0F DEATH (terror racionado), Create Airships (VS+Create+Cannons juntos)

## Forja do Claude (o que EU escrevo)
| Artefato | Ferramenta |
|---|---|
| 4 dimensões finais + skybox de Auren + anéis esculpidos | datapack + FabricSkyBoxes + estruturas |
| Censo, Maré, Contratos, Marca, Pilares, Exo-Frame v1 | KubeJS |
| Pedras de Retorno (3), moedas, receitas POFNIR, integração MI+TR por tags | KubeJS/datapack |
| Fauna e flora de era (constructos, zumbis armados via TaCZ packs, flora cristalizada/proibida) | KubeJS + gun packs JSON + reskins |
| Questline dos Sete Dias completa | FTB Quests |
| Tomo do Fundamento (+ cópias divergentes) | Patchouli |
| NPCs das capitais (propostos nome a nome) | EasyNPC/Taterzens + KubeJS |
| Curva Mestra (planilha-constituição) + MUDANCAS.md | docs |
| Manifest instalável + publicação Modrinth unlisted | packwiz/mrpack |
| Futuro: mods Java (Censo pleno, Exo-Frame plena) — Moon compila | Fabric/Java |

## Construção (guilda)
Cidades: Moon (medieval), Tiquin (steampunk), Bryell (tec) — sobre as bases garimpadas; Claude integra tudo nas dimensões

---

# 9. BANCADA (pendências vivas)
**Martelos de Moon:** dirigível-que-cresce | elenco 15 classes (+ revive do Biomédico) | 13 profissões + regra 1-ofício | esquema de cidades | Marca da Presença (formal) | fresta do Dia Um | bosses regionais por era + Big Cannons ("com calma") | nomes das cidades (pós-visual)
**Tarefas do Claude:** manifest com versões travadas | garimpo-catálogo das cidades | prévia 2 (skybox+anéis) | validação do trio de risco | Curva Mestra v0 | camadas futuras: som/música, estruturas/dungeons

# 10. ARQUIVOS DO PROJETO (entregues até agora)
- `pofnir-mods-ancora-v1.md` — as 10 camadas + specs + decisões
- `pofnir-classes-v1.md` — 15 classes detalhadas
- `pofnir-profissoes-v1.md` — 13 profissões detalhadas
- `pofnir-cidades-v1.md` — caderno de arquitetura
- `pofnir_preview1_dimensoes.zip` / `pofnir_preview1_1_auren.zip` — Prévia 1 e 1.1 (Dia Um)
- `pofnir-master-v1.md` — este diretório
- Roadmap vivo: memória permanente do Claude (sobrevive entre sessões)
