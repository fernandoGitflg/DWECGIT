import {Rio} from './Rio.js';

let rioA= new Rio("Duero","Cuenca Atlántica");
let rioB= new Rio("Ebro","Cuenca Mediterránea");

// document.write(
//     `${rioA.imprimeNombre()}<br>`,
//     `${rioA.imprimeCuenca()}<br>`,
//     `${rioA.imprimeCaudal()}<br>`,
//     `${rioA.imprimePoblaciones()}<br>`,
//     `${rioA.agregarPoblaciones('Zamora')}<br>`,
//     `${rioA.eliminarPoblacion('Zamora')}<br>`,
//     `${rioA.imprimePoblaciones()}<br>`,
//     `${rioB.agregarPoblacion('Miranda de Ebro')}<br>`,
//     `${rioB.agregarPoblacion('Tortosa')}<br>`,
//     `${rioB.agregarPoblacion('Valladolid')}<br>`,  
//     `${rioB.imprimePoblaciones()}<br>`,
// );
console.log(rioA.imprimeNombre())
console.log(rioA.imprimeCuenca())
console.log(rioA.imprimeCaudal())
console.log(rioA.imprimePoblaciones())
console.log(rioA.imprimePoblaciones('Zamora'));
console.log(rioA.imprimePoblaciones())
console.log(rioA.eliminarPoblacion('Zamora'));
console.log(rioA.imprimePoblaciones());
console.log(rioA.imprimeRio());
rioB.modificarCaudalMedio(50);
console.log(rioB.imprimeCaudal());
console.log(rioB.agregarPoblacion('Miranda de Ebro'));
console.log(rioB.agregarPoblacion('Tortosa'));
console.log(rioB.agregarPoblacion('Valladolid'));
console.log(rioB.imprimePoblaciones());




