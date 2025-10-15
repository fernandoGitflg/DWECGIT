let tabla1 = [[1, 2], [1, 3], [1, 1]];

console.log("Recorrer tabla con forEach:");
tabla1.forEach(function (fila, i) {
    fila.forEach(function (columna,j) {
        console.log("VALOR INDICE:"+i+" VALOR j:"+j+" tabla:"+tabla1[i][j]);
    });
});