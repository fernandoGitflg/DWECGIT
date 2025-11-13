array = [];
for (let i = 0; i < 5; i++) {
    array[i] = Array(4).fill(null);
}
array[3][2] = "Hola";
let recorrer = (array, string) => {
    array.forEach(fila => {
        console.log( fila+" "+fila.indexOf("Hola"));
    });
}

console.table(array)
console.log('------');
console.log(recorrer(array));
console.log('');


