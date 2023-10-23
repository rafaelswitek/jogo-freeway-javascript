# Freeway com JavaScript

Projeto realizado durante o curso da Alura [Lógica de programação: laços e listas com JavaScript](https://cursos.alura.com.br/course/javascript-listas-lacos)

| :placard: Vitrine.Dev |                                                     |
| --------------------- | --------------------------------------------------- |
| :sparkles: Nome       | **Freeway**                                         |
| :label: Tecnologias   | JavaScript, P5                                      |
| :rocket: URL          | <https://editor.p5js.org/rafaelswitek/full/Rl8IFzuD2> |

## Detalhes do projeto

### Instalação e Configuração

* Para rodar localmente é necessario instalar um servidor http.
* Exemplo em python: `python3 -m http.server`

### Conceitos estudados e aplicados nos cursos

* Variáveis: O uso de variáveis como xAtor, yAtor, colidiu, pontos, xCarros, yCarros, velocidadeCarros, comprimentoCarro, alturaCarro e outras para armazenar dados relevantes para o funcionamento do jogo.
* Funções: As funções são usadas para organizar o código em blocos de funcionalidades relacionadas, como mostraAtor, movimentaAtor, verificaColisao, voltaAtorPosicaoInicial, incluiPontos, marcaPonto, removePonto, podeMover, mostraCarro, movimentaCarro, voltaPosicaoInicial e carroPassouDaTela.
* Condicionais: A instrução if é usada para verificar condições, como a detecção de teclas pressionadas (UP_ARROW e DOWN_ARROW) para mover o ator. Também é usada em funções como marcaPonto para verificar se o ator atingiu a parte superior da tela.
* Loops: Um loop for é usado para iterar sobre os elementos de imagemCarros e para realizar várias operações em carros, como atualizar suas posições.
* Colisão: O código verifica colisões entre o ator e os carros usando a função collideRectCircle. A detecção de colisões é uma parte importante dos jogos.
* Manipulação de arrays: Arrays, como xCarros, yCarros e velocidadeCarros, são usados para armazenar múltiplas instâncias de carros e seus atributos.
* Renderização gráfica: O código usa funções para desenhar elementos gráficos na tela, como image para exibir o ator e os carros, text para exibir os pontos e outras funções relacionadas à renderização de elementos.
* Eventos de entrada: O código responde a eventos de entrada do jogador, como pressionar as teclas UP_ARROW e DOWN_ARROW para controlar o ator.
* Lógica de jogo: O código implementa a lógica do jogo, incluindo a pontuação, detecção de colisão, movimento do ator e dos carros, bem como o reinício do jogo quando uma colisão ocorre.
