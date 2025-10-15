let cadena = "Esto es un texto para hacer ejercicios con cadenas.  Se realizarán transformaciones sobre el mismo. Se emplearán métodos del objeto String";
let tildes = ["á", "é", "í", "ó", "ú"];
if (cadena.indexOf(tildes[0]) != -1) {
    cadena = cadena.replace(/á/g, "a");
}
if (cadena.indexOf(tildes[1]) != -1) {
    cadena = cadena.replace(/é/g, "e");
}
if (cadena.indexOf(tildes[2]) != -1) {
    cadena = cadena.replace(/í/g, "i");
}
if (cadena.indexOf(tildes[3]) != -1) {
    cadena = cadena.replace(/ó/g, "o");
}
if (cadena.indexOf(tildes[4]) != -1) {
    cadena = cadena.replace(/ú/g, "u");
}
console.log(cadena);