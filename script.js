let lineColor, bgColor;
let nx, ny, sz;
let patternType = 1; // Padrão 1 (linhas) por padrão
let n1 = 0, n2 = 0, n3 = 0, n4 = 0;

function setup() {
    let patternCanvas = createCanvas(800, 800);
    patternCanvas.parent('pattern');
    sz = 50;
    nx = width / sz;
    ny = height / sz;
    noLoop(); // Desenha apenas quando solicitado
    generatePattern(); // Gera o padrão inicial
}

function draw() {
    background(bgColor);
    stroke(lineColor);

    if (patternType === 1) {
        drawLinesPattern();
    } else if (patternType === 2) {
        drawTrianglesPattern(); // Implementar o padrão 2 futuramente
    }
}

function drawLinesPattern() {
    for (let j = 0; j <= ny; j++) {
        for (let i = 0; i <= nx; i++) {
            let x1 = i * sz;
            let y1 = j * sz;
            let x2 = (i + 1) * sz;
            let y2 = (j + 1) * sz;

            if ((j * n1 + i * n2 + n3 * j + n4 * i) % 4 == 1) {
                line(x1, y1, x2, y2);
            } else {
                line(x1, y2, x2, y1);
            }
        }
    }
}

function drawTrianglesPattern() {
    noLoop(); // Desenha apenas uma vez para simplificar o exemplo
    for (let j = 0; j <= ny; j++) {
        for (let i = 0; i <= nx; i++) {
            let x1 = i * sz;
            let y1 = j * sz;
            let x2 = (i + 1) * sz;
            let y2 = (j + 1) * sz;

            // Desenha dois triângulos em cada célula
            triangle(x1, y1, x2, y1, x1, y2);
            triangle(x2, y1, x2, y2, x1, y2);
        }
    }
}

function generatePattern() {
    lineColor = color(document.getElementById('lineColor').value);
    bgColor = color(document.getElementById('bgColor').value);
    patternType = int(document.getElementById('patternType').value);

    // Definir novos valores para n1, n2, n3 e n4 de forma aleatória
    n1 = int(random(0, 4));
    n2 = int(random(0, 4));
    n3 = int(random(0, 4));
    n4 = int(random(0, 4));

    redraw(); // Solicita a função draw para desenhar o padrão
}

function savePattern() {
    saveCanvas('padrao_truchet', 'png');
}

document.getElementById('generatePattern').addEventListener('click', generatePattern);
document.getElementById('downloadPattern').addEventListener('click', (event) => {
    event.preventDefault();
    savePattern();
});
