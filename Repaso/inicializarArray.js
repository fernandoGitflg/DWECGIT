/*let array1=[];
for(let i=0;i<50;i++){
    array1.push(0);
}
console.log(array1);

let array2 = new Array(50);
for (let i = 0; i < array2.length; i++) {
    array2[i] = 0;
}
console.log(array2);

let array3 = new Array(50).fill(0);
console.log(array3);

let diasLaborales=["Lunes","Martes","Miercoles","Jueves","Viernes"];

diasLaborales.pop();
console.log(diasLaborales);
delete diasLaborales[2];
console.log(diasLaborales);
diasLaborales.splice(0,2);
console.log(diasLaborales);*/

let sedes = ["Ayuntamiento", "Polideportivo", "Instituto", "Mercado", "Colegio"];
let partidos = ["PV", "OV", "VPSI", "UPV"];

let generarVotos = () => Math.floor(Math.random() * 5.99) + 5;

let tabla = [];

tabla.push(["", ...sedes]);

for (let partido of partidos) {
  let fila = [partido];
  for (let i = 0; i < sedes.length; i++) {
    fila.push(generarVotos());
  }
  tabla.push(fila);
}
console.log("Tabla de votos:");
for (let fila of tabla) {
  console.log(fila.join(" | "));
}

let totales = [];
for (let i = 1; i < tabla.length; i++) {
  let suma = 0;
  for (let j = 1; j < tabla[i].length; j++) {
    suma += tabla[i][j];
  }
  totales.push(suma);
}
console.log("\nTotal de votos por partido:");
for (let i = 0; i < partidos.length; i++) {
  console.log(partidos[i] + ": " + totales[i] + " votos");
}
console.log("\nTotal de votos por sede:");
for (let j = 1; j < tabla[0].length; j++) {
  let suma = 0;
  for (let i = 1; i < tabla.length; i++) {
    suma += tabla[i][j];
  }
  console.log(tabla[0][j] + ": " + suma + " votos");
}

let votosOrdenados = totales
  .map((votos, index) => index)
  .sort((a, b) => totales[b] - totales[a]);

console.log("\nRecuento de votos por partido (ordenado):");
for (let i = 0; i < votosOrdenados.length; i++) {
  let idx = votosOrdenados[i];
  console.log(partidos[idx] + ": " + totales[idx] + " votos");
}
