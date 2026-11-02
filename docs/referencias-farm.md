# Referências de trabalho automático e visível

Pesquisado em 01/11/2026. Pergunta: como os jogos mostram bichinhos ou trabalhadores fazendo a coleta sozinhos?

## O que cada jogo faz

| Jogo | Como funciona | O que aproveitar |
|---|---|---|
| **Stardew Valley (Junimo Hut)** | Os Junimos moram numa cabana e colhem sozinhos as plantações maduras dentro de um raio (17×17 casas). A colheita fica guardada na cabana, e o jogador pega quando quiser. | Área de trabalho limitada, depósito que enche e o jogador coleta. Os bichinhos aparecem de manhã, trabalham e voltam. |
| **Cult of the Lamb** | O jogador fala com o seguidor, escolhe "Trabalhar" e define a tarefa: minerar, cortar madeira, cuidar da horta, rezar. Prédios como a Estação do Fazendeiro e o Silo de Sementes automatizam o resto. | Atribuir tarefa em dois toques. Mas há reclamações de "sem tarefas disponíveis" sem explicação: sempre mostrar por que um bichinho está parado. |
| **Pikmin** | Pequenas criaturas carregam objetos até a base, em grupo, e a chegada delas definiu a direção do jogo para os criadores. Elas escolhem sozinhas a tarefa mais próxima. | O visual de várias criaturinhas carregando algo juntas já vende o jogo. Carregar até um ponto de entrega é o gesto principal. |
| **Palworld** | Cada espécie tem aptidões de trabalho (minerar, plantar, transportar...). Bichinhos transportadores levam os itens das estações para baús. Precisam de cama e comida, e fome ou estresse reduz a produção. | Especialização por espécie, transporte visível até um depósito e necessidades simples que afetam o ritmo. |
| **Forager** | No começo tudo é manual. Depois entram droids, hastes de mineração e estruturas que automatizam. Comprar terra com moedas é o centro da expansão, e o custo das estruturas sobe a cada uma. | A progressão do manual para o automático e a compra de terra. Já usamos. |
| **RimWorld** | Cada colonista tem prioridades de trabalho que o jogador ajusta. Carregar e guardar itens é a base de tudo. Se as tarefas surgem mais rápido do que são feitas, o jogador sofre com microgerenciamento. | Prioridade padrão boa e automática, com ajuste opcional. Evitar que o jogador precise microgerenciar. |

## O padrão que se repete

1. **Pontos de recurso no mundo** (árvores, pedras, plantas) que renascem.
2. **Trabalhador com um ciclo curto:** parado, escolhe tarefa, anda até o recurso, trabalha, carrega, entrega no depósito, repete.
3. **Área de trabalho limitada** (raio da cabana, terreno).
4. **Especialização** por espécie ou traço.
5. **Depósito** onde o resultado se acumula, com a produção contando mesmo com o jogador fora.
6. **Feedback claro:** mostrar o que cada um está fazendo e por que está parado.
7. **Decisões importantes** para o jogador, e não microgerenciamento.

## O que isso significa para o nosso jogo

- **Mundo 2D visto de cima:** cada terra comprada é um pedaço do mapa com pontos de recurso do bioma.
- **Cada espécie coleta o recurso do seu bioma:** Sol coleta cristais solares no Campo Dourado, Lua coleta lírios lunares no Lago Lunar, Sombra coleta cogumelos sombrios no Bosque Sombrio.
- **Entrega no Altar:** o bichinho anda até o Altar, e a essência sobe quando ele chega.
- **O motor atual continua sendo o cérebro.** A taxa de produção por segundo vira a duração do ciclo de trabalho, para o visual e o número ficarem iguais. O progresso fora do jogo continua sendo calculado pela taxa.
- **Mostrar o estado** de cada bichinho ao tocar nele: coletando, carregando, parado (e por quê).
- **Animação por código** (balançar, pular, espelhar a imagem), já que a arte é uma imagem só por bichinho.

## Fontes

- Stardew Valley Wiki, Junimo Hut: https://stardewvalleywiki.com/Junimo_Hut
- Pikmin Wiki, Carry: https://pikminwiki.com/Carry
- Palworld Wiki, Work Suitability: https://palworld.wiki.gg/wiki/Work_Suitability
- Cult of the Lamb, guia de seguidores: https://progameguides.com/cult-of-the-lamb/cult-of-the-lamb-followers-guide-customize-followers-and-traits-explained/
- Forager, análise de automação: https://www.shapes.inc/fandom/forager/deep-dive
- RimWorld Wiki, Work: https://rimworldwiki.com/wiki/Work
