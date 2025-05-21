// Referenciando o Canvas
var canvas = document.getElementById('meu_canvas');


// Obtendo o contexto gráfico
var context = canvas.getContext('2d');

// Desenhar um retângulo
// fillRect(x, y, largura, altura):
// context.fillRect(50, 50, 100, 100);

//Desenhando contorno
context.strokeRect(2000, 50, 100, 100);

//Propriedades
// fillStyle : Cor de preenchimento
//strokeStyle : Cor da linha
// lineWidth : espessura da linha (pixels)

// // Preenchimento vermelho
// context.fillStyle = 'red';
// context.fillRect(50, 50, 100, 100);


// // Contorno azul, com espessura de 3px
// context.lineWidth = 3;
// context.strokeStyle = 'blue';
// context.strokeRect(50, 50, 100, 100);


//Tabuleiro de Xadrez
// Preenchimento 1° coluna
context.fillStyle = 'brown';
context.fillRect(50, 50, 100, 100);
context.fillStyle = 'brown';
context.fillRect(50, 250, 100, 100);
context.fillStyle = 'brown';
context.fillRect(50, 450, 100, 100);
context.fillStyle = 'brown';
context.fillRect(50, 650, 100, 100);

// Preenchimento 2° coluna
context.fillStyle = 'brown';
context.fillRect(150, 150, 100, 100);
context.fillStyle = 'brown';
context.fillRect(150, 350, 100, 100);
context.fillStyle = 'brown';
context.fillRect(150, 550, 100, 100);
context.fillStyle = 'brown';
context.fillRect(150, 750, 100, 100);

// Preenchimento 3° coluna
context.fillStyle = 'brown';
context.fillRect(250, 50, 100, 100);
context.fillStyle = 'brown';
context.fillRect(250, 250, 100, 100);
context.fillStyle = 'brown';
context.fillRect(250, 450, 100, 100);
context.fillStyle = 'brown';
context.fillRect(250, 650, 100, 100);

//Preenchimento 4° coluna
context.fillStyle = 'brown';
context.fillRect(350, 150, 100, 100);
context.fillStyle = 'brown';
context.fillRect(350, 350, 100, 100);
context.fillStyle = 'brown';
context.fillRect(350, 550, 100, 100);
context.fillStyle = 'brown';
context.fillRect(350, 750, 100, 100);

//Preenchimento 5° coluna
context.fillStyle = 'brown';
context.fillRect(450, 50, 100, 100);
context.fillStyle = 'brown';
context.fillRect(450, 250, 100, 100);
context.fillStyle = 'brown';
context.fillRect(450, 450, 100, 100);
context.fillStyle = 'brown';
context.fillRect(450, 650, 100, 100);

//Preenchimento 6° coluna
context.fillStyle = 'brown';
context.fillRect(550, 150, 100, 100);
context.fillStyle = 'brown';
context.fillRect(550, 350, 100, 100);
context.fillStyle = 'brown';
context.fillRect(550, 550, 100, 100);
context.fillStyle = 'brown';
context.fillRect(550, 750, 100, 100);

//Preenchimento 7° coluna
context.fillStyle = 'brown';
context.fillRect(650, 50, 100, 100);
context.fillStyle = 'brown';
context.fillRect(650, 250, 100, 100);
context.fillStyle = 'brown';
context.fillRect(650, 450, 100, 100);
context.fillStyle = 'brown';
context.fillRect(650, 650, 100, 100);

//Preenchimento 8° coluna
context.fillStyle = 'brown';
context.fillRect(750, 150, 100, 100);
context.fillStyle = 'brown';
context.fillRect(750, 350, 100, 100);
context.fillStyle = 'brown';
context.fillRect(750, 550, 100, 100);
context.fillStyle = 'brown';
context.fillRect(750, 750, 100, 100);

// Contorno, com espessura de 3px
context.lineWidth = 3;
context.strokeStyle = 'brown';
context.strokeRect(50, 50, 800, 800);
//contorno por fora
context.lineWidth = 5;
context.strokeStyle = 'brown';
context.strokeRect(25, 25, 850, 850);

// adicionando uma imagem - peças pretas
const peao = new Image();
const torre = new Image();
const cavalo = new Image();
const bispo = new Image();
const rainha = new Image();
const rei = new Image();

peao.src = 'img/Peão.png';
peao.onload = () => {
    context.drawImage(peao, 50, 150, 100, 100)
    context.drawImage(peao, 150, 150, 100, 100)
    context.drawImage(peao, 250, 150, 100, 100)
    context.drawImage(peao, 350, 150, 100, 100)
    context.drawImage(peao, 450, 150, 100, 100)
    context.drawImage(peao, 550, 150, 100, 100)
    context.drawImage(peao, 650, 150, 100, 100)
    context.drawImage(peao, 750, 150, 100, 100)
}

torre.src = 'img/Torre.png';
torre.onload = () => {
    context.drawImage(torre, 64, 40, 70, 120)
    context.drawImage(torre, 764, 40, 70, 120)
}

cavalo.src = 'img/Cavalo.png';
cavalo.onload = () => {
    context.drawImage(cavalo, 150, 30, 95, 120)
    context.drawImage(cavalo, 650, 30, 95, 120)
}

bispo.src = 'img/Bispo.png';
bispo.onload = () => {
    context.drawImage(bispo, 238, 26, 125, 120)
    context.drawImage(bispo, 538, 26, 125, 120)
}

rainha.src = 'img/Rainha.png';
rainha.onload = () => {
    context.drawImage(rainha, 338, 10, 125, 135)
}

rei.src = 'img/Rei.png';
rei.onload = () => {
    context.drawImage(rei, 438, -25, 125, 185)
}



// Peças brancas
const peaoB = new Image();
const torreB = new Image();
const cavaloB = new Image();
const bispoB = new Image();
const rainhaB = new Image();
const reiB = new Image();

peaoB.src = 'img/PeãoB.png';
peaoB.onload = () => {
    context.drawImage(peaoB, 55, 620, 100, 100)
    context.drawImage(peaoB, 155, 620, 100, 100)
    context.drawImage(peaoB, 255, 620, 100, 100)
    context.drawImage(peaoB, 355, 620, 100, 100)
    context.drawImage(peaoB, 455, 620, 100, 100)
    context.drawImage(peaoB, 555, 620, 100, 100)
    context.drawImage(peaoB, 655, 620, 100, 100)
    context.drawImage(peaoB, 755, 620, 100, 100)
}

torreB.src = 'img/TorreB.png';
torreB.onload = () => {
    context.drawImage(torreB, 54, 735, 90, 120)
    context.drawImage(torreB, 754, 735, 90, 120)
}

cavaloB.src = 'img/CavaloB.png';
cavaloB.onload = () => {
    context.drawImage(cavaloB, 138, 738, 115, 110)
    context.drawImage(cavaloB, 638, 738, 115, 110)
}

bispoB.src = 'img/BispoB.png';
bispoB.onload = () => {
    context.drawImage(bispoB, 238, 726, 125, 120)
    context.drawImage(bispoB, 538, 726, 125, 120)
}

rainhaB.src = 'img/RainhaB.png';
rainhaB.onload = () => {
    context.drawImage(rainhaB, 429, 705, 143, 143)
}

reiB.src = 'img/ReiB.png';
reiB.onload = () => {
    context.drawImage(reiB, 320, 685, 174, 165)
}