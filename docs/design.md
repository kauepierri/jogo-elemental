# Documento de design (v0.1)

Nome provisório: **Athanor**. A decidir.

## 1. Ideia em uma frase

Um idle de colecionar bichinhos elementais. Eles trabalham sozinhos enquanto você faz outras coisas, e você usa o que eles trazem para construir uma cidade bonita, com a sorte do gacha e os seus caminhos escolhidos fazendo cada jogador terminar com uma cidade diferente.

## 2. Referências

- **Forager:** estrutura. Começa num terreno pequeno, compra terra aos poucos, junta recursos, segue uma lista de metas e tem árvore de habilidades.
- **Chumbi Valley:** bichinhos fofos, desenho com contorno grosso, textura e luz suave.
- **Cult of the Lamb:** só as cores e a iluminação.
- **Diferença para o Forager:** o jogador não coleta. Os bichinhos fazem tudo sozinhos, e o jogador decide quem vai fazer o quê.

## 3. O ciclo do jogo

1. Você invoca bichinhos no **Ritual** (gacha).
2. Os bichinhos coletam recursos e estudam sozinhos, inclusive com você fora.
3. A cidade mostra sempre o **próximo marco** (ex.: "Ponte: 40 Madeira, 12 Pedra, 1 Cristal").
4. Os recursos viram terra nova, construções e decoração.
5. Os bichinhos evoluem e se fundem, e a cidade fica mais bonita.

O gargalo é o tempo e a sorte. O jogo calcula o progresso pelo horário real, então funciona com a aba escondida ou fechada. Ao voltar, mostra o que aconteceu enquanto o jogador estava fora.

## 4. Os bichinhos

Fantasia que todo mundo conhece, com nomes e desenhos próprios, sem copiar personagens de ninguém. Silhuetas variadas (não só gotas).

| Elemento | Bichinhos da primeira versão | Recurso que produz |
|---|---|---|
| Fogo | Dragãozinho, Fênix, Salamandra | Brasa |
| Água | Sereia-peixe, Hipocampo, Kraken filhote | Orvalho |
| Terra | Golem, Árvore-viva, Gnomo | Raiz |
| Ar | Grifo, Pégaso, Coruja mensageira | Saber |

### Raridades

Comum, Raro, Épico, Lendário e Arcano. O Lendário tem brilho holográfico e libera um marco gigante (Castelo, Árvore do Mundo). Os **22 Arcanos** do Tarô são bichinhos míticos, com chance de 0,1% no Ritual e sem garantia. Parte deles só sai de fusões com receita escondida.

### Evolução

Três formas, estilo Pokémon: filhote, jovem e adulto. Para evoluir precisa de Saber suficiente e de uma oferenda. A evolução é **ramificada**: o mesmo bichinho evolui diferente conforme o uso. Exemplo com o Dragão: se mina vira Dragão de Rocha, se forja vira Dragão de Fogo, se explora vira Dragão Celeste.

### Fusão (Conjunção)

Junta dois bichinhos de elementos diferentes no Laboratório e espera horas. Os dois somem e nasce um híbrido, sorteado entre alguns candidatos. Há 6 combinações de elementos. Algumas receitas ficam escondidas, e os jogadores descobrem e compartilham.

## 5. Sorte em três camadas

1. **Gacha:** qual bichinho vem.
2. **Traços:** cada bichinho nasce com características sorteadas (Minerador, Sortudo, Sábio...). Existe o **Brilhante** (1%), com visual diferente.
3. **Expedições e visitas:** materiais raros sorteados, e visitantes especiais (Mercador, Cometa).

Os terrenos também são sorteados: cada terra comprada revela um bioma aleatório (floresta, deserto, neve, pântano, vulcão) e às vezes um terreno raro com depósito especial. Dois jogadores nunca têm o mesmo mapa.

## 6. A cidade

- Grade que cresce comprando terra, com preço crescente.
- Construção livre: arrastar, soltar, girar, mover e apagar casas, torres, árvores, rios, pontes, caminhos, cercas e lanternas.
- Cada bichinho tem um **habitat**. Ganhar um dragão libera o conjunto "Montanha do Dragão". Quanto mais raro o bichinho, mais exclusivo o conjunto.
- Os bichinhos aparecem andando e voando pela cidade e trabalham nela.
- Nota de **Beleza**: sobe com decoração e conjuntos combinados e dá bônus de produção. Dá para tirar uma foto da cidade.

## 7. Caminhos que diferenciam os jogadores

- **Vocação da cidade:** em certos marcos o jogador escolhe uma entre Mineração, Floresta Encantada, Porto ou Torre dos Magos. Cada uma libera construções, recursos e visuais diferentes e não dá para fazer todas.
- **Evolução ramificada** dos bichinhos (seção 4).
- **Fusão** com receitas e híbridos exclusivos.

Sem decisões, um jogo que joga sozinho enjoa rápido. Os caminhos são o que segura o jogador.

## 8. Árvore do Saber (ramo oculto, opcional)

O jogo funciona inteiro sem ela. Quem tiver interesse estuda temas reais de ocultismo. Os bichinhos estudam na Biblioteca, cada nó leva tempo e traz um texto curto e real, e o efeito só abre depois de estudar.

| Ramo | O que muda no jogo |
|---|---|
| Tarô | Libera os 22 Arcanos e uma "tiragem" diária que aumenta a chance de raros |
| Hermetismo e alquimia | Novas formas de evolução (Nigredo, Albedo, Rubedo), fusões raras e o Laboratório |
| Sociedades secretas | Novo estilo de arquitetura (colunas, símbolos, lojas) e bichinhos guardiões |
| Elementos | Linhas de bichinhos por elemento e a paleta da cidade (Fogo com lanternas de brasa, Água com canais) |
| Astrologia | Bônus por fase da lua e eventos em datas especiais |

O caminho escolhido muda tanto os bichinhos quanto o visual das construções.

## 9. Direção visual

Meio-termo entre Forager e Chumbi Valley:

- Grade vista de cima e formas simples e legíveis, como no Forager.
- Desenho 2D com contorno grosso, textura e luz suave, como no Chumbi Valley.
- Cores saturadas, sombras azul-arroxeadas e brilhos quentes nos detalhes, como no Cult of the Lamb.
- Cada elemento tem partículas próprias: faíscas (Fogo), bolhas (Água), folhas e poeira (Terra), vento e plumas (Ar).
- Um estilo só para cidade e cartas. As cartas raras têm mais detalhe e brilho holográfico.

Sem flashes piscando rápido.

## 10. Primeira versão jogável

Um arquivo HTML, sem arte final (peças simples coloridas):

- Mapa em grade com terreno sorteado e compra de terra.
- 12 bichinhos, Ritual com raridades e traços.
- Coleta automática com progresso pelo horário real.
- Lista de metas (próximo marco).
- Um caminho de evolução e a fusão.
- Construção livre básica.

Depois: prompts prontos para gerar as artes, Árvore do Saber e mais bichinhos (o gênero pede 40 ou mais para não enjoar).

## 11. Em aberto

- Nome do jogo.
- Chances exatas do Ritual e economia (testar com simulação, como foi feito no protótipo de xadrez).
- Onde publicar: site próprio, depois app Android.
- Monetização, se houver.
