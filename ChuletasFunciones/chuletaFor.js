let numeros=[21,23,32];

console.log("Prueba for in:");
for(numero in numeros){
    console.log(numero);//0 1 2 en lineas separadas
}

console.log("Prueba for of:");
for(numero of numeros){
    console.log(numero);//21 23 32 en lineas separadas
}
