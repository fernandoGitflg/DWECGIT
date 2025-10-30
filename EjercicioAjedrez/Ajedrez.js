let tablero = [];
for (let i = 0; i < 8; i++) {
    tablero[i] = Array(8);
}

function Figura() {}
Figura.prototype.moverA = function(x, y) {
    this.x = x;
    this.y = y;
};

let tipos = ['K', 'Q', 'T', 'T', 'A', 'A', 'C', 'C', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'];
let figuras = [];

for (let tipo of tipos) {
    let figura = Object.create(Figura.prototype);
    figura.tipo = tipo;
    figura.x = 0;
    figura.y = 0;
    figuras.push(figura);
}

function colocarPieza(figura, tablero) {
    let x, y;
    while (true) {
        x = Math.floor(Math.random() * 7.99);
        y = Math.floor(Math.random() * 7.99);
        if (tablero[x][y] === undefined) {
            figura.moverA(x, y);
            tablero[x][y] = figura.tipo;
            break;
        }
    }
}

for (let figura of figuras) {
    colocarPieza(figura, tablero);
}
console.table(tablero);
