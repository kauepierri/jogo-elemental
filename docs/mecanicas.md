# Mecânicas e jogabilidade (v0.2, base antes do 2D)

Este documento corrige o protótipo atual e define a mecânica antes de construir o mundo 2D. Os números são ponto de partida e serão ajustados por simulação.

## Problemas do protótipo atual

1. Os bichinhos vêm rápido demais, e a coleção cresce sem limite.
2. O jogo exige abrir toda hora para continuar.
3. Não há missões, nem prazos diferentes, nem recompensa por acompanhar.

## Princípios

1. **Poucos bichinhos, valiosos.** Quantidade não é o objetivo.
2. **Dá para jogar 2 vezes por dia e progredir.** Quem quer acompanhar de perto ganha mais, mas ninguém é punido por ficar fora.
3. **Tudo pode ficar no automático.** Acompanhar rende um bônus, e o que é escasso (Velas, Fragmentos) não fica preso a estar presente.
4. **Cada decisão importa:** quem trabalha, quem vai em expedição, o que evoluir.

## Nome

- Os bichinhos se chamam **Essências**.
- A moeda comum, que hoje também se chama Essência, passa a se chamar **Poeira**.
- **Velas:** moeda do ritual (gacha). Só em missões.
- **Fragmentos:** vêm de repetidas e de missões. Sobem a Estrela e a evolução de cada espécie.

## Coleção sem explosão

- **Cada espécie existe uma vez só.** Invocar uma espécie que você já tem gera **Fragmentos** dela, e não outro bichinho.
- Os Fragmentos sobem a **Estrela** (1 a 5) e liberam a evolução. Mais Estrelas, mais produção e mais bichinhos visíveis trabalhando.
- **Brilhante** (1% em cada invocação) é uma versão alternativa da espécie, que entra como página própria do álbum.
- Meta de conteúdo: 12 espécies no lançamento e uns 40 no primeiro ano, com 3 a 4 novas por mês.
- **O pool do ritual abre aos poucos:** uma espécie só pode vir depois que você tem o bioma dela.
- **Garantias:** Raro ou melhor a cada 10 invocações, Épico a cada 50 e Lendário a cada 200. O contador não zera ao sair.

Resultado: ninguém acumula milhares de bichinhos, mas apertar o botão continua dando sensação de progresso, porque as repetidas têm utilidade.

## Os quatro ciclos de missão

| Ciclo | Prazo | O que é | Recompensa |
|---|---|---|---|
| **Pedido** | surge um a cada 2 min (até 3 na fila) | Um visitante pede algo pequeno, como "colete 20 cristais". Os bichinhos cumprem sozinhos. | Pouca Poeira e 1 ponto de Presença |
| **Expedição curta** | 30 min | Você manda 1 a 2 Essências. Elas saem do trabalho enquanto estão fora. | Poeira, 1 Fragmento |
| **Expedição longa** | 4 h | Manda 3 Essências. | Poeira, 3 Fragmentos, **1 Vela** |
| **Dia** | reinicia à meia-noite de Brasília | 3 tarefas simples (cumprir 5 pedidos, 1 curta, 1 longa). | Baú com 2 Velas e Fragmentos |

Quem manda Essências em expedição perde a produção delas por um tempo. Essa escolha é a estratégia: com poucos bichinhos, você decide quanto trabalhar e quanto explorar.

## Automático e bônus de presença

- **Piloto Automático** (liberado depois da primeira expedição longa): as expedições recomeçam sozinhas com a última equipe, e os pedidos são cumpridos e guardados.
- **Celeiro:** guarda até **12 horas** de recompensas. Depois disso a produção para. Assim, 2 visitas por dia aproveitam tudo. Pode ser melhorado para 24 horas.
- **Presença (bônus de acompanhar):**
  - Pedido: tocar no balão em até 10 s dá recompensa dobrada.
  - Expedição: recolher na hora dá +50% de Poeira e Fragmentos, e você escolhe 1 entre 3 prêmios (no automático, o jogo escolhe o padrão).
  - Cada ação acompanhada enche a **barra de Presença**, que vira um baú semanal com Velas e itens de cosmético.
  - **Sequência diária:** dias seguidos com pelo menos 3 ações acompanhadas dão +5% de produção por dia, até +25%.
- As Velas e os Fragmentos da missão base **não dependem de presença**. O bônus é um extra, e não uma obrigação.

## Referências que sustentam isso

| Mecânica nossa | Quem faz parecido |
|---|---|
| Prazos de 2 min, 30 min, 4 h e 1 dia | Hay Day: trigo 2 min, milho 5, cana 30 min, pimenta 4 h, café 1 dia. O jogador decide entre rápido e barato ou lento e valioso. |
| Celeiro de 12 h e invocação por missões | AFK Arena: o baú enche até 12 h e é recolhido na mão, há invocação grátis por dia e mais uma ao completar as missões do dia. |
| Missões com equipe e hora marcada | AFK Arena: as missões do Quadro de Recompensas mandam heróis e só pagam quando o relógio zera, com prazo de até 12 h. |
| Pedido de 2 min com bônus se tocar | Cookie Clicker: os cookies dourados aparecem aleatoriamente e somem em segundos (13 s), com bônus para quem toca. |
| Visitas curtas, álbum e raros | Neko Atsume: dá para visitar um par de vezes por dia, em 30 segundos. Mais de 40 gatos, com raros que pedem itens específicos. |
| Repetidas viram evolução | Clash Royale: uma carta desbloqueia, e as repetidas sobem o nível. Isso sustenta o gacha com pouco conteúdo. |
| Pool que abre aos poucos | DragonVale e Clash Royale abrem novas possibilidades ao liberar elementos ou arenas. |
| Mínimo passivo e máximo ativo | Padrão de idle: o offline chega perto do ativo, mas não o iguala. Um teto de 12 h com 2 visitas por dia captura 24 h. |

## O que muda no mundo 2D (depois)

- Os **pedidos** aparecem como balões sobre um visitante ou sobre a Essência.
- As **expedições** saem por um portal no mapa e voltam carregando o que acharam.
- O **Celeiro** é uma construção que enche visivelmente.
- O **Altar** é onde acontece o ritual.

## Ordem de construção

1. **v0.2 de mecânicas:** aplicar tudo isto no protótipo atual (interface simples), para testar o ritmo sem gastar com animação.
2. Simular um mês de jogo com 3 tipos de jogador: automático, 2 visitas por dia e quem acompanha tudo.
3. Só depois, **v0.3 em 2D** com bichinhos andando.

## Fontes

- Hay Day, tempos de colheita: https://www.supercheats.com/hay-day/walkthrough/list-of-resources
- AFK Arena, baú e missões: https://www.gamedeveloper.com/design/flexible-time-session-design-in-afk-arena e https://gamerempire.net/afk-arena-guide-tips-tricks-strategy/
- AFK Arena, invocação diária: https://www.bluestacks.com/blog/game-guides/afk-arena/afka-daily-todo-list-en.html
- Cookie Clicker, cookie dourado: https://en.wikipedia.org/wiki/Cookie_Clicker
- Neko Atsume: https://www.idropnews.com/games/chill-mobile-games-holiday-season/253486/6/
- Design de gacha, repetidas e pool: https://mobilefreetoplay.com/?p=8266 e https://mobilefreetoplay.com/?p=8199
- Idle, teto offline e visitas por dia: https://mergeciv.io/idle-progression e https://rowatcher.com/news/the-afk-revolution-how-idle-mechanics-conquered-roblox
