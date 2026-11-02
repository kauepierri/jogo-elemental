# Jogo Elemental (nome provisório: Athanor)

Jogo idle de navegador e celular. Você coleciona bichinhos elementais num gacha, evolui e funde eles, e eles trabalham sozinhos para você construir uma cidade bonita e livre num terreno que cresce.

Tudo o que já foi decidido está em [docs/design.md](docs/design.md). Os três iniciais (Sol, Lua e Sombra) e o estilo de arte aprovado estão em [docs/iniciais.md](docs/iniciais.md). Esse segundo documento é mais recente e prevalece onde os dois divergem. A lista de jogos para pesquisar está em [docs/inspiracoes.md](docs/inspiracoes.md). As mecânicas revisadas (nome Essências, coleção sem explosão, 4 ciclos de missão, automático com bônus de presença) estão em [docs/mecanicas.md](docs/mecanicas.md), que prevalece sobre o `design.md` onde divergirem.

## Estado

- Fase atual: documento de design.
- Próximo passo: primeira versão jogável em um arquivo HTML, sem arte final.
- O protótipo antigo de Xadrez Elemental foi descartado.

## Protótipo jogável

Pasta [prototipo/](prototipo/): `engine.js` (regras e números, todos em `CFG`), `template.html` (tela), `build.js` (junta os dois em `index.html`) e `sim.js` (simula jogadores para conferir o ritmo). Para gerar de novo: `node prototipo/build.js`. Para simular: `node prototipo/sim.js`.
