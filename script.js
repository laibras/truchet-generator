let lineColor, bgColor;
let nx, ny, sz;
let n1 = 0, n2 = 0, n3 = 0, n4 = 0; // Adicionados novos parâmetros

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent('pattern'); // Associa o canvas ao elemento com id 'pattern'
    sz = 50;
    nx = width / sz;
    ny = height / sz;
    generatePattern();
}

function draw() {
    background(bgColor);
    stroke(lineColor);
    for (let j = 0; j <= ny; j++) {
        for (let i = 0; i <= nx; i++) {
            let x1 = i * sz;
            let y1 = j * sz;
            let x2 = (i + 1) * sz;
            let y2 = (j + 1) * sz;

            // Equação mais complexa
            if ((j * n1 + i * n2 + n3 * j + n4 * i) % 4 == 1) {
                line(x1, y1, x2, y2);
            } else {
                line(x1, y2, x2, y1);
            }
        }
    }
}

function generatePattern() {
    n1 = int(random(0, 5)); // Agora com 5 possibilidades
    n2 = int(random(0, 5)); // Agora com 5 possibilidades
    n3 = int(random(0, 5)); // Novo parâmetro
    n4 = int(random(0, 5)); // Novo parâmetro
    redraw();
}

function savePattern() {
    saveCanvas('padrao_truchet', 'png');
}

document.getElementById('generatePattern').addEventListener('click', () => {
    lineColor = color(document.getElementById('lineColor').value);
    bgColor = color(document.getElementById('bgColor').value);
    generatePattern();
});

document.getElementById('downloadPattern').addEventListener('click', (event) => {
    event.preventDefault();
    savePattern();
});
