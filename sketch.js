let temperatura;
let temperaturaMaxima = 30; // Temperatura limite para o Game Over
let taxaAumentoTemperatura = 0.05; // Quão rápido a temperatura aumenta
let arvoresPlantadas = 0;
let reducaoTemperaturaPorArvore = 1.5; // Quanto cada árvore reduz a temperatura
let jogoAtivo = true;

function setup() {
  createCanvas(800, 600);
  resetGame();
}

function draw() {
  background(135, 206, 235); // Céu azul

  if (jogoAtivo) {
    // Aumenta a temperatura gradualmente
    temperatura += taxaAumentoTemperatura;

    // Garante que a temperatura não seja negativa
    temperatura = max(0, temperatura);

    // Desenha as árvores plantadas (apenas representativo)
    for (let i = 0; i < arvoresPlantadas; i++) {
      fill(34, 139, 34); // Verde para as árvores
      noStroke();
      ellipse(random(width), random(height), 30, 40); // Círculos aleatórios para representar árvores
    }

    // Exibe a temperatura
    fill(0);
    textSize(24);
    text('Temperatura: ' + nf(temperatura, 0, 1) + '°C', 20, 30);
    text('Árvores Plantadas: ' + arvoresPlantadas, 20, 60);

    // Verifica a condição de Game Over
    if (temperatura >= temperaturaMaxima) {
      jogoAtivo = false;
    }
  } else {
    // Tela de Game Over
    fill(255, 0, 0); // Vermelho
    textSize(60);
    textAlign(CENTER, CENTER);
    text('VOCÊ MORREU!', width / 2, height / 2 - 40);
    textSize(24);
    text('A temperatura atingiu o limite.', width / 2, height / 2);
    text('Clique para tentar novamente.', width / 2, height / 2 + 40);
  }
}

function mousePressed() {
  if (jogoAtivo) {
    // Planta uma árvore ao clicar
    arvoresPlantadas++;
    // Reduz a temperatura
    temperatura -= reducaoTemperaturaPorArvore;
  } else {
    // Reinicia o jogo se estiver na tela de Game Over
    resetGame();
  }
}

function resetGame() {
  temperatura = 15; // Temperatura inicial
  arvoresPlantadas = 0;
  jogoAtivo = true;
}