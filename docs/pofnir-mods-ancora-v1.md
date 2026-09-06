# POFNIR Pack — Lista Âncora v1 (1.20.1 Fabric)

Legenda: ✅ = versão verificada por mim hoje | 🔎 = âncora certa, versão exata a travar na montagem do manifest

## Camada 1 — Bruxaria (a alma)
| Mod | Versão | Papel | Nota |
|---|---|---|---|
| Bewitchment | ✅ 1.20-10 | Vampirismo, licantropia, demônios, pactos | Deps: Trinkets, Patchouli, Pehkui |
| Enchanted | ✅ 3.1.9 | Bruxaria clássica Witchery: poppets, rituais, familiares, transposição | A versão que caçamos juntos |
| Botania | 🔎 | Magia botânica, flores funcionais, Gaia | Ponte natural bruxaria-tech |
| Eldritch End | 🔎 | Horror cósmico ligado ao End | Casa com a Ambição/Quinta Presença |

## Camada 2 — Combate mágico (o seu ofício)
| Mod | Versão | Papel | Nota |
|---|---|---|---|
| Spell Engine + Spell Power | 🔎 | Motor de magias e atributos | Base de tudo |
| Wizards (RPG Series) | 🔎 | Robes, cajados, grimórios das 3 escolas | Os sets que você conhece |
| Paladins & Priests | 🔎 | Escola Holy: cura e escudos | Fecha o battlemage |
| Invocations | 🔎 | Sistema Gon/Heo/Rah | O seu Astral, na raiz, sem rename |
| Archers + Rogues (RPG Series) | 🔎 | Arco e adaga com identidade | Contratos de classe |

## Camada 3A — Steampunk (a era do vapor)
| Mod | Versão | Papel | Nota |
|---|---|---|---|
| Create (Fabric port) | 🔎 0.5.1f | Engrenagens, trens, fábricas cinéticas | O coração da era |
| Create: Steam 'n' Rails | 🔎 | Trens expandidos, locomotivas | Ferrovia entre pontos do mundo |
| Create: Copycats+ / Deco | 🔎 | Blocos decorativos Create | Estética da capital steampunk |
| Create Big Cannons | 🔎 | Canhões e artilharia | DECIDIR: entra na v1? (pvp/siege futuro no MMO) |
| Valkyrien Skies 2 + Eureka! Ships | 🔎 | DIRIGÍVEIS DE FÍSICA REAL: construa o casco bloco a bloco e ele voa (leme, hélices, hangar) | Colheita do SteamPunk [LPS]; build Fabric 1.20.1 existe; combina com Create e Big Cannons (frota aérea armada) |

### A "coisa que cresce" da era steampunk — CANDIDATA FORTE
Colhida do LPS: o **dirigível pessoal que cresce**. Fecha a simetria das eras melhor que o trem: grimório que cresce (medieval), Exo-Frame que cresce (tec), **dirigível que cresce** (steampunk) — começa um balão de um lugar, termina uma nau voadora com canhões, hangar e linha Create embarcada. Trem vira infraestrutura pública (ferrovia entre capitais via Steam 'n' Rails), dirigível vira o veículo-identidade do jogador. AGUARDANDO MARTELO DE MOON.

## Camada 3B — Tec (a era moderna/futurista)
| Mod | Versão | Papel | Nota |
|---|---|---|---|
| Modern Industrialization | 🔎 | Industrialização pesada, multiblocos | O coração da era |
| Ad Astra | 🔎 | Foguetes, planetas, oxigênio | Endgame tec + gancho de céu |
| Tech Reborn | 🔎 | Alternativa/complemento MI | DECIDIR: MI+TR juntos ou só MI (risco de redundância) |
| Applied Energistics 2 | 🔎 | Armazenamento digital, autocraft | O "biomédico" guarda tudo em rede |
| Energized Power ou similar | 🔎 | Ponte de energia entre mods | A validar necessidade |

### Combate da era tec (garimpo de 06/09)
| Mod | Versão | Papel | Nota |
|---|---|---|---|
| TaCZ: Refabricated | 🔎 | Armas de fogo completas: recuo, attachments, animações | Port Fabric não-oficial do TACZ; VALIDAR estabilidade na prévia; gun packs em JSON = arsenal custom da era sem Java |
| MI Quantum Suit | (já vem no MI) | O exoesqueleto endgame do Exo-Soldado | |
| Ad Astra Jet Suit | (já vem no Ad Astra) | Exo de voo | |
| Pomkots Mechs | 🔎 V1 POR DECRETO | MECHS PILOTÁVEIS (veículos) + mechs mobs e BOSSES; GeckoLib, visual feito pra shader BSL | Achado que revoga o "não existe"; deps: GeckoLib, Architectury, Cloth Config, Leawind's Third Person; VALIDAR estabilidade e balanceamento na prévia (mod novo); mechs-boss = candidatos naturais a chefes das ruínas tec e Marés da Fratura |
| EXO-FRAME (inspiração: MekaSuit do Mekanism) | ⚒️ FORJA AUTORAL | Ver spec completa na seção abaixo | Decisão selada por Moon: peça central do endgame tec |

### Spec — Exo-Frame, a armadura que cresce (estilo MekaSuit)
- **Frame:** 4 peças craftadas no ápice do Modern Industrialization; nascem "burras" (proteção alta, nada mais)
- **Módulos por peça (instaláveis/removíveis, cada um um item craftado):**
  - Capacete: visão noturna, HUD de alvo, respiração
  - Peito: escudo cinético, jato, gerador
  - Pernas: velocidade, salto amplificado, ímã de itens
  - Botas: queda nula, escalada, hover
- **Progressão dos módulos:** básicos no MI -> avançados no AE2 -> supremos com material planetário (Ad Astra)
- **Energia:** o frame bebe da rede MI; sem carga vira armadura comum; módulo ligado consome (orçamento energético = o charme Mekanism)
- **Entrega em escada:** v1 = KubeJS + Trinkets (módulos como trinkets, efeitos por script, funcional); v1.x = mod Java com HUD própria (Moon compila); visual custom desde o dia um
- **Simetria das eras:** medieval = o livro que cresce (grimório) | tec = a armadura que cresce (Exo-Frame) | steampunk = "o trem que cresce"? (aguardando martelo de Moon)
| Mobs atiradores (zumbis armados) | 🔎 | Investigar compat TaCZ Refabricated + mobs; senão, forja via KubeJS equipando mobs nas zonas tec | Tema perfeito pras ruínas da era tec e Marés da Fratura |

## Camada 4 — Mundo
| Mod | Versão | Papel | Nota |
|---|---|---|---|
| Terralith | 🔎 | Overworld bonito sem sair do vanilla+ | Não toca nossas dimensões custom |
| YUNG's (Better Dungeons/Mineshafts/Strongholds) | 🔎 | Estruturas dignas | |
| Lithostitched | 🔎 | Compatibilidade de worldgen | O Prominence usa |
| When Dungeons Arise | 🔎 | Megaestruturas | Curadoria: escolher quais |

## Camada 5 — Espinha de sistema
| Mod | Versão | Papel | Nota |
|---|---|---|---|
| Fabric API + Fabric Language Kotlin | 🔎 | Base | |
| FTB Quests + FTB Teams + FTB Library | 🔎 | Questline dos Sete Dias | |
| KubeJS + Rhino + Architectury | 🔎 | Nossa forja de conteúdo | Censo, Contratos, Pedras |
| EMI | 🔎 | Navegador de receitas | O que você já domina |
| Patchouli | 🔎 | Tomo do Fundamento (nosso livro!) | Já vem como dep do Bewitchment |
| Trinkets | 🔎 | Slots de acessório | |
| EasyNPC ou Taterzens | 🔎 | NPCs das capitais | Eu valido qual na Prévia 2 |
| Essential Commands | ✅ 0.35.3 | /tpa, /home, /back | Testado por nós no servidor atual |

## Camada 6 — Performance e QoL
| Mod | Versão | Papel | Nota |
|---|---|---|---|
| Sodium + Lithium + FerriteCore + ModernFix | 🔎 | O quarteto de performance Fabric | |
| Iris | 🔎 | Shaders (aprovado ontem no teste) | Client |
| AppleSkin, Jade, Xaero's Map + Minimap | 🔎 | QoL padrão-ouro | |
| Mouse Tweaks, Controlling, Searchables | 🔎 | QoL de inventário | |

## Camada 7 — Colheita Cisco/Superior (conceitos traduzidos pra Fabric)
Os dois packs são Forge; nada entra por cópia, tudo por equivalente Fabric ou por forja nossa.

| Conceito colhido | Origem | Equivalente Fabric 1.20.1 | Nota de balanceamento |
|---|---|---|---|
| Árvore de habilidades profunda | Cisco/Superior | Puffish Skills 🔎 | Árvores POR ERA desenhadas por nós contra a Curva Mestra |
| Origens/classes com identidade | Cisco (origins) / Superior (13 classes) | Origins (Fabric nativo) 🔎 | Vira o mecanismo das 3 origens de era + subclasses |
| Bosses de peso | Cisco (Cataclysm) | L_Ender's Cataclysm port Fabric 🔎 + Bosses of Mass Destruction 🔎 + Soulslike Weaponry 🔎 | Candidatos a bosses regionais das eras |
| Mobs campeões estilo Diablo | Superior (28 modifiers) | Eldritch Mobs 🔎 | Config nossa: chance e força presos à Curva, NUNCA scaling infinito |
| Esquiva/combate animado | Cisco/Superior | Better Combat 🔎 + Combat Roll 🔎 | |
| Dungeon-dimensão fechada | Superior (Mine Cells) | Mine Cells (Fabric nativo) 🔎 | Ótima pra Maré da Fratura: anomalias podem abrir pra lá |
| Afixos de equipamento estilo PoE | Superior | SEM equivalente Fabric maduro — forja nossa via KubeJS/NBT em escopo reduzido, ou fica pra v2 | O sistema que QUEBROU o balanceamento deles; se entrar, entra domado |
| Totens/pets de build | Superior | Fica pra v2 | Complexidade sem retorno na v1 |

### Anti-lições (o que os dois ensinam a NÃO fazer)
- Superior: escalada de poder correu solta e o autor refez a progressão inteira depois — a Curva Mestra existe pra nunca passarmos por isso
- Cisco: changelogs cheios de "disabled origin X", "disabled spell Y" — o capamento silencioso que o princípio da raiz proíbe; nossa via é custo e progressão, com MUDANCAS.md público

## Camada 8 — Terror (colheita: Psychological Horror, DREAD Reborn, FEAR 0F DEATH)
Lição unânime dos três: terror bom é RACIONADO. "No dweller slop" (Psychological Horror); DREAD remove todos os hostis vanilla e aposta em atmosfera; FEAR limita vidas. Terror solto 24h vira ruído; contido, vira lenda do servidor.

### O MECANISMO DE CONTENÇÃO — "A Marca da Presença" (forja nossa, KubeJS)
O terror do pack NUNCA é aleatório global. Ele só se manifesta para quem está **Marcado**, e a Marca se ganha por escolha ou consequência:
1. **Zonas de Fratura:** dentro de anomalias da Maré e ruínas profundas das eras — entrou, o terror pode te ver; saiu, para
2. **Curiosidade proibida:** ler os tomos errados, mexer no conteúdo Eldritch End, encarar o olho que não é de Auren — cada transgressão sobe um nível da Marca (sussurros -> vultos -> visita)
3. **Maldição:** bruxos podem MARCAR outro jogador via ritual (voodoo social do terror)
4. **Limpeza:** ritual de purificação (bruxaria) ou estabilizador de campo (tech) removem a Marca — as duas eras vendendo o remédio, economia do medo
- Regra técnica: entidades de terror só spawnam pra jogador Marcado ou dentro de bounds de anomalia (controle total via KubeJS/spawn conditions); fora disso, o mundo é seguro e o contraste é o que assusta

### Mods candidatos (validar port/estabilidade Fabric 1.20.1 um a um)
| Mod | Papel | Nota |
|---|---|---|
| The Man From The Fog | o perseguidor icônico da névoa | port Fabric a validar |
| Cave Dweller (Reimagined) | o terror das cavernas | UM dweller só, raro — lição do Psychological Horror |
| From The Caves / The Knocker | sons, batidas, paranoia sonora | terror que não mata: só avisa |
| Voices in the Dark / ambient horror | camada de áudio | atmosfera > jumpscare |
| Eldritch End (já martelado) | o terror "oficial" do lore | a Quinta Presença tem fauna |
- Anti-lição: NUNCA empilhar 15 dwellers; teto de 2-3 entidades de perseguição no pack inteiro, cada uma amarrada à Marca

## Camada 9 — Fauna (os três andares)
Regra anti-zoológico: bicho só entra com propósito (drop que alimenta profissão, comportamento que ensina a Curva, ou lore de era). Teto de peso no servidor sempre em vista.

### Andar 1+2 — Âncora: Alex's Mobs (89 mobs, nenhum puramente estético)
| Candidato | Nota |
|---|---|
| Alex's Mobs Continued | ✅ MARTELADO por Moon (critério: o mais completo) — Citadel embutido, manutenção ativa multi-loader, cobre 1.20.1+ |
| Alex's Mobs (Fabric) port 1:1 | RESERVA técnica: assume se o Continued falhar na prévia com GeckoLib/Pomkots |
- Drops do Alex's alimentam profissões via receitas nossas (presas/essências -> bruxaria e alquimia)

### Andar 1 — Fauna ambiente (complementos)
| Mod | Papel |
|---|---|
| Naturalist 🔎 | ursos, cobras, pássaros — mundo vivo |
| Creeper Overhaul + Enderman Overhaul 🔎 | variedade regional dos vanilla sem mudar gameplay |

### Andar 2 — Hostil comum (o recheio entre o zumbi e o boss)
| Mod | Papel |
|---|---|
| The Graveyard 🔎 | mortos-vivos de peso |
| Eldritch Mobs (já na camada 7) | transforma existentes em campeões — preso à Curva |
| Curadoria fina pendente | validar o que mais existe de qualidade no Fabric |

### Andar 3 — Fauna de era (assinatura, forja nossa)
| Era | Criatura | Via |
|---|---|---|
| Medieval | feras míticas rondando ruínas | curadoria + KubeJS |
| Steampunk | constructos de relojoaria enferrujados | forja: mob base reskinado + comportamento custom |
| Tec | zumbis ARMADOS (TaCZ) + mechs corrompidos (Pomkots) como miniboss | previsão de Moon confirmada como viável |
- A fauna de era conta a história da fratura sem falar

## Camada 10 — Flora (os três andares)
Já coberto pelas camadas existentes: Botania (flora funcional/mana), Enchanted (3 árvores + herbário de bruxa via Mutandis), Bewitchment (herbário sombrio + 4 madeiras), Terralith (paisagem só com blocos vanilla).

### Andar 1 — Flora ambiente com identidade
| Candidato | Nota |
|---|---|
| Regions Unexplored 🔎 | DUELO NA PRÉVIA contra o BYG — |
| Oh The Biomes We've Gone (BYG) 🔎 | REGRA DURA: no máximo UM mod de bioma grande por cima do Terralith (empilhar worldgen = sopa visual + briga de geração; Lithostitched ajuda, moderação decide) |

### Andar 2 — Flora de mesa e lavoura
| Mod | Papel |
|---|---|
| Farmer's Delight Refabricated 🔎 | culinária, hortas — comida vira cultura de servidor; alimenta profissões |

### Andar 3 — Flora de era e de fratura (forja nossa)
| Onde | Criação |
|---|---|
| Zonas steampunk/tec | vegetação CRISTALIZADA: grama-engrenagem, flor de vidro — o Jardim Partido do limiar ecoando no mundo |
| Onde a Quinta Presença tocou | FLORA PROIBIDA: plantas do End que só brotam ali, colhíveis só por Marcados, ingrediente supremo de bruxaria |
- Flora conta a fratura como a fauna conta

## Os Três Pilares de Aprimoramento ✅ MARTELADO por Moon
Mesa de encantamento vanilla = térreo UNIVERSAL (todos usam, teto honesto). Acima dela, cada era tem seu sistema superior, aplicável ao equipamento de QUALQUER jogador:
1. **Encantamento Ritual (medieval):** círculo de bruxaria que ultrapassa o teto vanilla, funde encantos, abençoa
2. **Têmpera Mecânica (steampunk):** reforja física — durabilidade, velocidade, rerola atributos secundários dentro da Curva
3. **Modularização (tec):** chips/soquetes energizados em arma e armadura, na linha da Exo-Frame
- Resultado: a arma perfeita do endgame passou pelas 3 eras; interdependência por desejo, nunca por proibição (compatível com origem-não-prisão e monopólio suave)
- Implementação: KubeJS + os sistemas dos mods de cada era como base

## Decisões — status
1. ✅ MARTELADO: MI + Tech Reborn entram juntos (a redundância vira variedade; unificação de recursos via tags/KubeJS na têmpera)
2. ✅ MARTELADO: Eldritch End entra na v1 (o horror do End presente desde o início — serve a Quinta Presença)
3. ⏳ EM ABERTO com calma: quais bosses (Cataclysm/BoMD/Soulslike) ancoram cada era — decidir junto com o desenho das questlines regionais
4. 🔧 COMIGO: conferência de licenças mod a mod na montagem do manifest
5. ⏳ EM ABERTO: Create Big Cannons na v1 ou só na fase MMO — decidir junto com a 3
