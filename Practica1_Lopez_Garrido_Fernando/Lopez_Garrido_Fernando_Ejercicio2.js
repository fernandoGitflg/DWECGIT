let texto = "En un lugar de la mancha";
let f4 = frase =>{
    return frase.split(" ")
    .toString()
    .replace(/,/g, "")
    .toLowerCase();
}
console.log("Funcionf4:");
console.log(f4(texto));

let f5 = frase =>{
    return (frase.split(" ")
    .map((palabra,i,arr) =>arr[i].length)
    .reduce((ac,n,i,arr)=>ac+n));//Falta dividir por el array length despues de sumarlo todo
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