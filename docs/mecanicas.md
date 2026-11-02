# Mecânicas e jogabilidade (v0.3)

Este documento prevalece sobre o `design.md` onde divergirem. Os números são ponto de partida e serão calibrados por simulação. Onde há uma meta de tempo, a simulação ajusta os custos até o tempo real bater com a meta.

## Princípios

1. **Poucas Lumbras, valiosas.** Conseguir uma nova é difícil e vai ficando mais difícil.
2. **Dá para jogar 2 vezes por dia e progredir.** Quem acompanha ganha mais, mas ninguém é punido por ficar fora.
3. **Tudo pode ficar no automático.** O bônus de presença é um extra, e não uma obrigação.
4. **Sorte em vez de escolha.** Nada de escolher o inicial: o jogo sorteia.
5. **Jogadores diferentes entre si:** cada Lumbra e cada cidade saem com variações próprias.

## Nomes

- **Lumbra:** o bichinho (de lume, luz, e sombra).
- **Poeira:** a moeda comum. As Lumbras produzem sozinhas. Serve para terra, construções, Ecos e estudos.
- **Fragmentos:** peças de evolução e fusão. Vêm de repetidas e de expedições.
- **Vela:** deixa de ser moeda e passa a ser **o próprio ritual**. Você acende uma Vela no Altar, e ela queima por um tempo.
- **Eco:** o clone temporário de uma Lumbra.

Resultado: só 2 moedas (Poeira e Fragmentos), em vez de 4.

## 1. Como as Lumbras chegam: o Ritual da Vela

- **A primeira Lumbra** sai em **2 minutos** e é **sorteada** entre as 3 iniciais (Sol, Lua e Sombra). Sem escolha.
- **Cada Vela seguinte queima por mais tempo**, até o teto de 7 dias:

| Vela | Tempo de queima |
|---|---|
| 1ª | 2 min |
| 2ª | 1 dia |
| 3ª | 2 dias |
| 4ª | 3 dias |
| 5ª | 4 dias |
| 6ª | 5 dias |
| 7ª | 6 dias |
| 8ª em diante | 7 dias |

- **Quem joga bastante acelera:** cada missão acompanhada encurta a Vela que está queimando (até -75%). Assim a 2ª Lumbra sai em cerca de 6 horas para quem joga bastante e em 1 dia no automático. No final, 1 por semana no automático e uns 2 a 3 dias para quem acompanha muito.
- **Resultado do ritual:** uma espécie **nova** ou **Fragmentos** de uma que você já tem. Os 5 primeiros rituais sempre dão espécies novas. Depois, a chance de novidade cai conforme o álbum enche.
- **Garantias** (contador que não zera): Raro ou melhor a cada 8 rituais, Épico a cada 25 e Lendário a cada 60.
- **Cada espécie existe uma vez só.** Repetidas viram Fragmentos.
- **O pool abre aos poucos:** uma espécie só pode vir depois que você tem o bioma dela.
- Meta de conteúdo: 12 espécies no lançamento e uns 40 no primeiro ano.

## 2. Variação de cada Lumbra (sorteada ao nascer)

Cada espécie tem uma **faixa de cor própria**. Sol vai do dourado ao laranja, Lua do azul claro ao índigo e Sombra do cinza escuro ao preto. Dentro dela, o tom é sorteado.

- **Manchas:** de 0 a 4, com formato, posição e cor sorteados, numa paleta de acentos fora da faixa da espécie. Uma Sombra pode ter manchas azul-esverdeadas.
- **Cintilante (raridade acima do comum):** as manchas **brilham**. Chance proposta: 4%.
- **Mística (a mais rara):** o corpo **inteiro brilha**. Chance proposta: 0,5%.
- **Isto substitui o antigo "Brilhante"** (1%).
- Nem toda espécie tem chifres. A forma vem da arte da espécie, e a variação é só de **cor e mancha**.
- **Como fazer:** as manchas são desenhadas por código, recortadas pelo contorno da imagem. Isso dá variedade quase infinita sem arte nova para cada variação.

## 3. Eco (o clone)

Cada Lumbra pode criar **Ecos**: cópias translúcidas que fazem o mesmo ofício. Com um Eco, a mesma Lumbra pode trabalhar e ir em expedição ao mesmo tempo. O Eco não é coleção e não evolui.

| Duração | Custo (relativo) | Força | Para quem |
|---|---|---|---|
| **12 h** | 1× | 60% | Quem visita 2 vezes por dia. Barato e eficiente, mas precisa renovar. |
| **24 h** | 2× | 50% | Equilíbrio, renova 1 vez por dia. |
| **72 h** | 5× | 40% | Para o fim de semana ou para sumir uns dias. Caro e mais fraco, mas não exige atenção. |

- Quanto mais longo, **mais caro por hora e mais fraco**. Quem acompanha ganha eficiência, e quem não pode acompanhar paga pela comodidade.
- **Quantos Ecos ao mesmo tempo:** 1 por Lumbra, 2 com 3 Estrelas e 3 com 5 Estrelas.
- Custa só **Poeira**.

## 4. Evolução e fusão (cada uma fica mais demorada)

O tempo cresce com o número de evoluções ou fusões que você já fez.

| O quê | Primeira vez | Vai aumentando até |
|---|---|---|
| **Primeira evolução** (Filhote para Desperto) | 1 semana | 3 semanas |
| **Segunda evolução** (Desperto para Ascendido) | 1 mês | 3 meses |
| **Fusão** (2 espécies geram um híbrido) | 2 meses | 4 meses |

- Cada evolução exige Estrelas, Fragmentos e Poeira, e a simulação calibra as quantidades para o tempo bater com a tabela.
- Na segunda evolução há **2 caminhos**, e o jogador escolhe.
- A **fusão** exige 2 Lumbras já evoluídas e um ingrediente raro. As duas **não somem**, e nasce uma espécie híbrida com receita escondida.

## 5. Ciclos de missão

| Ciclo | Prazo | O que é | Recompensa |
|---|---|---|---|
| **Pedido** | surge um a cada 2 min (até 3 na fila) | Um visitante pede algo pequeno. As Lumbras cumprem sozinhas. | Pouca Poeira |
| **Expedição curta** | 30 min | Você manda 1 a 2 Lumbras. Elas saem do trabalho enquanto estão fora. | Poeira, 1 Fragmento |
| **Expedição longa** | 4 h | Manda 3 Lumbras. | Poeira, 3 Fragmentos |
| **Dia** | reinicia à meia-noite de Brasília | 3 tarefas simples | Baú com Fragmentos e enfeites |

## 6. Automático e bônus de presença

- **Piloto Automático:** as expedições recomeçam sozinhas, e os pedidos são cumpridos e guardados.
- **Celeiro:** guarda até 12 horas de recompensas (24 h depois de melhorado).
- **Acompanhar rende:**
  - Pedido: tocar no balão em até 10 s dá o dobro.
  - Expedição: recolher na hora dá +50% e você escolhe 1 entre 3 prêmios.
  - **Encurta a Vela que está queimando.**
  - Barra de Presença semanal, que vira baú com enfeites raros.
  - Sequência diária: até +25% de produção.
- Nada básico depende de presença.

## 7. Cidade com variação

- Terras com biomas sorteados.
- Construções úteis: **Altar** (ritual), **Celeiro**, **Laboratório** (fusão) e **Torre do Vigia** (Piloto Automático e vagas de expedição).
- Enfeites livres, só estéticos, que dão uma nota de **Beleza** com bônus pequeno.
- Construções e enfeites têm **variantes de forma e de pintura** (o jogador escolhe a cor). As peças raras vêm da sorte nas expedições.

## 8. Duelos (futuro, parte jogável)

Combate não entra na primeira versão. Quando entrar, será **jogável, em turnos, sem automático**, e precisa fugir do modelo de Pokémon. Ideia a pesquisar e testar:

- **Duelo da Vela:** cada jogador tem uma Vela acesa, e a vida é a chama.
- O céu passa por fases (Dia, Noite, Eclipse) que reforçam certos elementos (o triângulo Sol vence Sombra, Sombra vence Lua, Lua vence Sol).
- Cada jogador coloca uma Lumbra e **Ecos como isca, viradas para baixo**. O adversário não sabe qual é a verdadeira. O blefe é o centro do duelo.
- Partidas curtas.

## 9. Árvore do Saber (futuro)

Precisa de mais utilidade antes de entrar. Ideias para depois: liberar Ecos de 72 h e outras durações, automatizar mais coisas e liberar estilos de cidade. Fica fora da primeira versão.

## Ordem de construção

1. **v0.2 de mecânicas:** aplicar isto no protótipo atual (interface simples) e simular um mês e um ano com 3 tipos de jogador (automático, 2 visitas por dia e quem acompanha tudo).
2. **v0.3 em 2D**, com Lumbras andando.

## Referências e fontes

| Mecânica | Quem faz parecido |
|---|---|
| Prazos de 2 min, 30 min, 4 h e 1 dia | Hay Day: trigo 2 min, milho 5, cana 30 min, pimenta 4 h, café 1 dia. https://www.supercheats.com/hay-day/walkthrough/list-of-resources |
| Celeiro de 12 h | AFK Arena: o baú enche até 12 h e é recolhido na mão. https://gamerempire.net/afk-arena-guide-tips-tricks-strategy/ |
| Missões com equipe e hora marcada | AFK Arena, Quadro de Recompensas. https://www.gamedeveloper.com/design/flexible-time-session-design-in-afk-arena |
| Pedido de 2 min com bônus se tocar | Cookie Clicker, cookies dourados. https://en.wikipedia.org/wiki/Cookie_Clicker |
| Visitas curtas e álbum | Neko Atsume. https://www.idropnews.com/games/chill-mobile-games-holiday-season/253486/6/ |
| Repetidas viram evolução | Clash Royale. https://mobilefreetoplay.com/?p=8199 |
| Pool que abre aos poucos | DragonVale e Clash Royale. https://mobilefreetoplay.com/?p=8266 |
| Teto offline e 2 visitas por dia | https://mergeciv.io/idle-progression |
| Concorrente próximo para estudar | Lumi Master (criaturas que trabalham e recolhem recursos). https://www.pocketgamer.com/lumi-master/pre-registration-android-ios/ |
