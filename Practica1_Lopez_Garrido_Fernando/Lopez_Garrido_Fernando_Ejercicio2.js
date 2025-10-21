let texto = "En un lugar de la mancha";
let f4 = frase => {
    return frase
        .split(" ")
        .map((palabra, i) =>
            i === 0
                ? palabra.toLowerCase()
                : palabra[0].toUpperCase() + palabra.slice(1).toLowerCase()
        )
        .toString()
        .replace(/,/g, "");
};
console.log("Funcionf4:");
console.log(f4(texto));

let f5 = frase =>{
    let totalLetras= frase.split(" ")
    .map((palabra,i,arr) =>arr[i].length)
    .reduce((ac,n,i,arr)=>ac+n);
    let totalPalabras= frase.split(" ").length

    return totalLetras/totalPalabras;
}
console.log("Funcionf5:");
console.log(f5(texto));

let f6 = frase =>{
    return frase.split(" ")
    .filter(palabra => (palabra.includes("a")))
    .map((palabra,i,arr) =>arr[i].length);
}
console.log("Funcionf6:");
console.log(f6(texto));