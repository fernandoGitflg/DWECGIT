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

let sedes = ["", "Ayuntamiento", "Polideportivo", "Instituto", "Mercado", "Colegio"];
let partido = ["PV", "OV", "VpSI", "UPV"];
let tabla = [[], []];

let generarVotos = () => {
  return Math.floor(Math.random() * 5.99) + 5;
};

tabla[0] = partido;
for (let i = 0; i < partido.length; i++) {
  let votosPorSede = [];
  for (let j = 0; j < sedes.length; j++) {
    votosPorSede.push(generarVotos());
  }
  tabla[1].push(votosPorSede);
}

console.log("Tabla de votos:");
console.log(" ", sedes.slice(1).join(" | "));

for (let i = 0; i < partido.length; i++) {
  let fila = tabla[1][i].slice(1).join(" | ");
  console.log(partido[i] + fila);
}
let totales = [];
for (let i = 0; i < partido.length; i++) {
  let suma = 0;
  for (let j = 0; j < sedes.length; j++) {
    suma += tabla[1][i][j];
  }
  totales.push(suma);
}
let indicesOrdenados = totales
  .map((votos, index) => index)
  .sort((a, b) => totales[b] - totales[a]);

console.log("Recuento de votos por partido (ordenado):");
for (let i = 0; i < indicesOrdenados.length; i++) {
  let idx = indicesOrdenados[i];
  console.log(partido[idx] + ": " + totales[idx] + " votos");
}
