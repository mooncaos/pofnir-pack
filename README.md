# POFNIR Pack — repositório oficial (packwiz)
*Fonte da verdade do modpack. MoonCaos & Claude.*

## Como publicar este repositório (uma vez só)
1. Crie um repositório no GitHub chamado `pofnir-pack` (público — o Pages exige, e o pack não tem segredo; jars NÃO ficam aqui)
2. Suba todo o conteúdo desta pasta (`git init` -> `git add .` -> `git commit` -> `git push`)
3. Em **Settings -> Pages**: Source = branch `main`, pasta `/ (root)`. Salve. Sua URL nasce: `https://SEUUSUARIO.github.io/pofnir-pack/pack.toml`

## Como travar os mods (uma vez, no seu PC)
1. Baixe `packwiz.exe` em github.com/packwiz/packwiz/releases e deixe nesta pasta
2. Rode `adicionar-mods.bat` — ele adiciona todos os mods âncora resolvendo versão 1.20.1 Fabric e gravando hashes
3. Rode `packwiz refresh`, depois commit + push. Está no ar.

## Como cada jogador instala (uma vez)
1. Instância 1.20.1 Fabric no launcher (Prism/MultiMC/Modrinth App)
2. Baixe `packwiz-installer-bootstrap.jar` (github.com/packwiz/packwiz-installer-bootstrap/releases) para a pasta da instância
3. Na instância, configure um comando pré-inicialização (Pre-launch):
   `java -jar packwiz-installer-bootstrap.jar https://SEUUSUARIO.github.io/pofnir-pack/pack.toml`
4. Pronto para sempre: TODA abertura do jogo sincroniza o pack sozinha antes de iniciar

## Fluxo de atualização (o "patch")
1. Claude entrega a pasta atualizada -> Moon substitui e faz commit+push (ou manda o Claude do Chrome)
2. Moon atualiza o servidor (pasta exportada com `packwiz serve`/cópia de mods+config) e reinicia
3. O clã só abre o Minecraft — o bootstrap baixa o patch sozinho
4. Para versão marcada: `git tag v0.2.0 && git push --tags` -> o GitHub Actions gera o `.mrpack` da release automaticamente (é o arquivo que sobe no Modrinth unlisted na fase vitrine)

## Estrutura
- `pack.toml` / `index.toml` — manifesto packwiz
- `mods/` — um `.pw.toml` por mod (gerados pelo script; jars nunca ficam aqui)
- `kubejs/`, `config/`, `datapacks/` — a forja POFNIR (nosso conteúdo)
- `adicionar-mods.bat` — instalador da lista âncora
- `.github/workflows/release.yml` — mrpack automático por tag

## Avisos
- Slugs do script foram nomeados pelos padrões do Modrinth; se algum falhar no seu PC, o packwiz sugere o nome certo (`packwiz mr add <busca>`)
- Trio de risco (TaCZ Refabricated, Valkyrien, Pomkots): se algum quebrar na prévia, remover é `packwiz remove <slug>`
