let array1 = [1, 2, 3, "a", "b", "c"];
let array2 = [2, 3, 4, 5];

//Permite iterar por cada uno de los elementos de un array
console.log("Prueba foreach:");
console.log(array1);//[1,2,3,"a","b","c"]
array1.forEach(elemento => console.log(elemento));//1 2 3 a b c

//Devuelve un nuevo array resultado de transformar el array inicial
console.log("Prueba map:");
console.log(array1);//[1,2,3,"a","b","c"]
console.log(array1.map((elemento, indice) => (elemento + 1) + "Indice" + indice));//[2, 3, 4, 'a1', 'b1', 'c1']

//Devuelve un valor resultado de una operacion sobre los elementos del array
//Usar valor inicial en los siguientes casos:
//El array puede estar vacío
//Quieres controlar el tipo del acumulador
//Estás construyendo estructuras como objetos o arrays
//Necesitas un punto de partida personalizado
console.log("Prueba reduce:");
const c = [10, 20, 30];
console.log(c.reduce(ac => ac));//10 pinta el primer valor del array ya que no se define el valor del acumulador y coge el primer elemento del array
console.log(c.reduce((ac, n) => ac + n));//60 se inicia el ac con 10 ya que no le indicamos su valor inicial y va sumando los elementos del array y actualizando el acumulador
console.log(c.reduce((ac, n, i) => ac + n + i));//63 igual que el de antes pero esta vez suma tambien los indices del array, como hay posicion 1 y 2 suma 1+2 adicional
console.log(c.reduce((ac, n, i, a) => ac + n + i + a[2]));//123 igual que el anterior pero suma tambien el valor de la posicion 2 del araray que es 30
console.log(c.reduce((ac, n) => ac + n, 100));//170 se inicia el ac en 100 asique el primer numero a sumar es la posicion 0 del array que es 10 y luego como los otros


//Igual que reduce pero de derecha a izqdas
console.log("Prueba reduceRight:");
console.log(array1);//[1,2,3,"a","b","c"]
console.log(array1.reduceRight((ac, n, i, a) => ac + n + i + a[1], 1));//1c52b42a32322212102

//Obtiene un nuevo array filtrando el array inicial
console.log("Prueba filter:");
console.log(array1);//[1,2,3,"a","b","c"]
console.log(array1.filter(elemento => elemento > 1));//[2, 3]

//Devuelve true si todos los elementos del array cumplen una condicion
console.log("Prueba every:");
console.log(array1);//[1,2,3,"a","b","c"]
console.log(array2);//[2,3,4,5]
console.log(array1.every(elemento => elemento > 1));//false
console.log(array2.every(elemento => elemento > 1));//true

//Devuelve true si alguno de los elementos cumple una condicion
console.log("Prueba some:");
console.log(array1);//[1,2,3,"a","b","c"]
console.log(array2);//[2,3,4,5]
console.log(array1.some(elemento => elemento > 1));//true
console.log(array2.some(elemento => elemento < 1));//false

//Devuelve la posicion del un valor buscado en un array o undefined en caso contrario
console.log("Prueba find:");
console.log(array1);//[1,2,3,"a","b","c"]
console.log(array1.find(elemento => elemento == 0));//undefined
console.log(array1.find(elemento => elemento > 1));//2

//Devuelve un valor buscado en un array o -1 si no lo encuentra
console.log("Prueba findIndex:");
console.log(array1);//[1,2,3,"a","b","c"]
console.log(array1.findIndex(elemento => elemento = 0));//-1
console.log(array1.findIndex(elemento => elemento = 1));//0

let frase = "no luce la luna sin traérmela en sueños"
let res1 = frase.split(" ")
    .filter(l => l.startsWith("l"))
    .map(l => l.toUpperCase());
console.log(res1);//['LUCE', 'LA', 'LUNA']

let res2 = frase.split(" ")
    .filter((l) => l.length < 3)
    .map(p => p.length)
    .reduce((ac, l) => ac + l);
console.log(res2);//6

//Funcion f1 que devuelva array con los numeros multiplicados por 3 filtrando los resultados divisibles por 4
let a = [1, 2, 3, 4];
let f1 = a => {
    console.log(a.map(p => p * 3)
        .filter(p => (p % 4) != 0))
};
f1(a);
//Una funcion f2 q visualice en la consola los elementosq no sean divisibles por 2
let f2 = a => a.filter(p => (p % 2) != 0).forEach(n => console.log(n));
f2(a);
//Una funcion f3 q devuelva la suma de todos los elementos q estén en posición par
let f3 = a => {
    return (a.filter((p, i) => (i % 2) == 0)
        .reduce((ac, n) => ac + n));
};
console.log(f3(a));

let p1 = Math.floor(Math.random() * 2.99) + 1;
let p2 = Math.floor(Math.random() * 2.99) + 1;
console.log(p1);
console.log(p2);
let comparar = p => {
    if (p == 1) {
        p = "Piedra";
    } else if (a == 2) {
        p = "Papel";
    } else {
        p = "Tijera";
    }
}
let victoria = (p1, p2) => {
    if (p1 === "Piedra" && p2 === "Tijera") {
        console.log("p1 es el ganador");
    } else if (p1 === "Tijera" && p2 === "Papel") {
        console.log("p1 es el ganador");
    } else if (p1 === "Papel" && p2 === "Piedra") {
        console.log("p1 es el ganador");
    } else if (p1 === p2) {
        console.log("Hay empate");
    } else {
        console.log("p2 es el ganador");
    }
}
comparar(p1);
comparar(p2);
victoria(p1, p2);

let arr = [1, 2, 3];
console.log("Antes");
console.log(arr);
let fn = a => {
    a.pop();
    console.log(a);
};
fn(arr);
console.log("Despues")
console.log(arr);


//Invocar un unico metodo llamado calcular para realizar las 4 opreaciones aritmeitcas basicas
let calcular = (op, ...numeros)=>{
    let resultado = 0;
    switch (op) {
        case "+":
            resultado = numeros.reduce((ac, n) => ac+n);
            break;
        case "-":
            resultado = numeros.reduce((ac, n) => ac-n);
            break;
        case "*":
            resultado = numeros.reduce((ac, n) => ac*n);
            break;
        case "/":
            resultado = numeros.reduce((ac, n) => ac/n);
            break;
    }
    return resultado;
}
console.log(calcular("+",1,2,3,4));
console.log(calcular("-",1,2,3,4));
console.log(calcular("*",1,2,3,4));
console.log(calcular("/",1,2,3,4));

