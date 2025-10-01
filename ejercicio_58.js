
//Escribir texto al reves a nivel de palabras y letras
let cadena="Esto es un texto para hacer ejercicios con cadenas. Se realizarán transformaciones sobre el mismo. Se emplearán métodos del objeto String";
console.log(cadena);
console.log(cadena.split(" "));
let arrayCadena=cadena.split(" ");
let mayuscula=true;
let sinEspaciosBlancos = [];
arrayCadena.forEach(function(elemento,i) {
    if (arrayCadena[i].trim() !== "") {
        sinEspaciosBlancos.push(arrayCadena[i]);
    }
});
sinEspaciosBlancos.forEach(function (elemento,i){
    let palabra =sinEspaciosBlancos[i];
    if (mayuscula) {
        sinEspaciosBlancos[i] = palabra.toUpperCase();
    } else {
        sinEspaciosBlancos[i] = palabra.toLowerCase();
    }
    mayuscula = !mayuscula;
});
console.log("Texto alternado");
console.log(sinEspaciosBlancos);



