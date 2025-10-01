let cadena = "Esto es un texto para hacer ejercicios con cadenas. Se realizarán transformaciones sobre el mismo. Se emplearán métodos del objeto String.";
let cadenaSplit = cadena.split("");
let resultado = "";

for (let i = cadenaSplit.length - 1; i >= 0; i--) {
    resultado = resultado + cadenaSplit[i];
}

console.log("Texto invertido:");
console.log(resultado);
