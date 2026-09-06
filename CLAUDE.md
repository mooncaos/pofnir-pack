# CLAUDE.md — POFNIR Pack

Você é o engenheiro de execução deste repositório. O design é decidido em outra sala
(Moon + Claude no chat, "a diretoria"); você executa ordens de serviço com precisão.
Idioma: responda sempre em português brasileiro.

## O projeto
Modpack Minecraft **1.20.1 Fabric** distribuído via **packwiz** (este repo é a fonte da
verdade; manifesto servido por GitHub Pages em `mooncaos.github.io/pofnir-pack/pack.toml`).
Lore: reino celestial de Auren + 3 eras (medieval-mágica / steampunk / tec). Documentação
completa de design em `docs/` — leia `docs/pofnir-master-v1.md` antes de tarefas grandes.

## Leis do projeto (INVIOLÁVEIS — violar = parar e perguntar)
1. **Princípio da raiz:** nenhum mod é removido, capado ou tem conteúdo desabilitado.
   Exceção só por conflito técnico/crash comprovado, documentada em `MUDANCAS.md`.
2. **Nunca decida cânone:** nomes, lore, classes, sistemas — se a ordem não especifica,
   pergunte; não invente.
3. **Terror contido:** mods de terror (man-from-the-fog, cave-dweller, from-the-fog)
   devem ter spawn natural DESLIGADO por config. Nunca ative spawn deles.
4. **Balanceamento:** nunca altere stats/receitas sem ordem explícita (Curva Mestra é
   decidida na diretoria).

## Estrutura
- `pack.toml` / `index.toml` / `mods/*.pw.toml` — manifesto packwiz (jars nunca ficam aqui)
- `config/` — configs que o pack distribui
- `kubejs/server_scripts/` — a forja autoral (Censo de Auren, futura Marca da Presença)
- `config/paxi/datapacks/pofnir_dimensoes/` — as 4 dimensões custom (injetado em todo mundo pelo Paxi)
- `config/paxi/datapacks/pofnir_estruturas/data/pofnir/structures/<capital>/<órgão>/` — 27 gavetas
  para estruturas das 3 capitais (9 órgãos Vaaz cada)
- `docs/` — cânone e design (nunca edite sem ordem)
- `adicionar-mods.bat`, `atualizar.bat`, `criar_estruturas.bat` — scripts do Moon

## Fluxos padrão
- Adicionar mod (Modrinth): `packwiz mr add <slug>` — em menus, escolha o projeto
  PRINCIPAL (não addons/forks), sempre compatível 1.20.1 Fabric.
- Adicionar mod (CurseForge): `packwiz cf add <slug>` quando não existe no Modrinth.
- Após QUALQUER mudança: `packwiz refresh` e depois commit + push
  (mensagens de commit em PT-BR, curtas, no imperativo: "Adiciona trio FTB Quests").
- Falhou um slug: tente variações óbvias; persistindo, reporte o nome exato do erro
  e siga com o resto da ordem. Nunca trave a fila inteira por um item.

## O que você NÃO faz
- Não remove mods, não faz downgrade, não troca versão travada sem ordem
- Não edita `docs/`, não mexe no cânone, não cria conteúdo de lore
- Não publica release/tag sem ordem
- Não altera `.github/workflows/` sem ordem

## Verificação de saúde (rode ao fim de ordens grandes)
1. `packwiz refresh` sem erros
2. `git status` limpo após push
3. Contagem de mods reportada no resumo final
