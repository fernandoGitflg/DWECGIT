let array=[4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1]
let arrayLeidos=[];

for(numero in array)

function compararNumeros(num1, num2){
    if(arrayLeidos.indexOf(num1)==-1 || arrayLeidos.indexOf(num2)==-1){
        arrayLeidos.push(num1,num2);
        return num1-num2;
    }
}

console.log(array.sort(compararNumeros));
console.log(arrayLeidos.sort());
