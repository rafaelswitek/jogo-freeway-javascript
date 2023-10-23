// Códigos do ator

let xAtor = 85
let yAtor = 366
let colidiu = false
let pontos = 0

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeMover()) {
      yAtor += 3
    }
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colidiu = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colidiu) {
      voltaAtorPosicaoInicial()
      removePonto()
      somColisao.play()
    }
  }
}

function voltaAtorPosicaoInicial() {
  yAtor = 366
}

function incluiPontos() {
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 240, 60))
  text(pontos, width / 5, 27)
}

function marcaPonto() {
  if (yAtor < 15) {
    pontos += 1
    voltaAtorPosicaoInicial()
    somPonto.play()
  }
}

function removePonto() {
  if (pontos > 0) {
    pontos -= 1
  }
}

function podeMover() {
  return yAtor < 366
}