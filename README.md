# Naruto New Legends — Visão geral do site

Descrição rápida:

Este é um site estático de apresentação do RPG "Naruto New Legends". Contém informação sobre sistemas de jogo, criação de personagens, clãs e bijūs. A página principal é `index.html` e o estilo principal está em `css/estilos.css`.

Como abrir (localmente):

- Abra `index.html` no navegador (arraste o arquivo para o navegador ou use "Abrir arquivo").
- Para forçar recarga completa use Ctrl+F5 (Windows).

Estrutura importante do projeto:

- `index.html` — conteúdo e marcação.
- `css/estilos.css` — estilos do site.
- `js/script.js` — funções para alternar abas e copiar a ficha.
- `img/` — imagens do site (bijūs, símbolos, capa, fundo).

Alterações recentes realizadas:

- Corrigido um erro de sintaxe em `css/estilos.css` que poderia interromper o carregamento do CSS.
- Otimizei a imagem `img/bijus/Kokuo.png` e adicionei `img/bijus/Kokuo.optimized.jpg` e `Kokuo.optimized.png`.
- Atualizei `index.html` para usar `img/bijus/Kokuo.optimized.jpg` (melhor compatibilidade e tamanho menor).
- Removi regras CSS confirmadas como não utilizadas para limpar `css/estilos.css` (mantive um comentário de histórico no arquivo).

Verificações feitas:

- A imagem original `Kokuo.png` tem 512×512 px e canal ARGB (possível transparência). A versão `.jpg` foi gerada para evitar problemas de fundo transparente.

Recomendações / próximos passos:

- Teste a página localmente e verifique se todas as imagens aparecem.
- Se quiser reduzir ainda mais o tamanho, posso substituir outras imagens por versões otimizadas ou gerar versões WebP.
- Se preferir, posso sobrescrever `Kokuo.png` com a versão otimizada — confirme se deseja substituir o arquivo original.

Contato e manutenção:

Se precisar que eu continue limpando CSS, otimize mais imagens ou prepare o site para deploy (GitHub Pages/servidor), diga qual tarefa prefere que eu execute a seguir.

---
Arquivo atualizado automaticamente pelo assistente durante a verificação e limpeza do projeto.
