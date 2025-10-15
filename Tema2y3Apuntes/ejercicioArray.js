let array=[4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,11]
let arrayLeidos=[];
while (array.length > 0) {
    let elemento = array.pop();
    if (!arrayLeidos.includes(elemento)) { 
        arrayLeidos.push(elemento);
    }
}

function compararNumeros(num1, num2){
        return num1-num2;
}

console.log(arrayLeidos.sort(compararNumeros));//(9) [0, 1, 2, 3, 4, 5, 7, 8, 11]
