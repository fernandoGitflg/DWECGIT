import { Festival } from "./Festival.js";
import { Bailarin } from "./Bailarin.js";
import { Pareja } from "./Pareja.js";
import { Profesor } from "./Profesor.js";

let festivales = new Map();
let pista = [];

function controlFecha(mapa, festival) {
    if (mapa.has(festival.fecha)) {
        let fechaNueva = new Date(Date.parse(festival.fecha) + (7 * 24 * 60 * 60 * 1000));
        festival.fecha = fechaNueva.getFullYear() + "-" + (fechaNueva.getMonth() + 1) + "-" + fechaNueva.getDate();
        mapa.set(festival.fecha, festival);
    } else {
        mapa.set(festival.fecha, festival)
    }
}

let colocarPareja=(x,y,pareja)=>{
    if(pista[x][y]==""){
        pista[x][y]=pareja.nombrePareja;
        pareja.xInicial=x;
        pareja.yInicial=y;
    }else{
        console.log("Posicion ocupada");
    }
}

for (let i = 0; i < 8; i++) {
    pista[i] = Array(8).fill("");
}

//Pruebas y definicion de objetos
let f1 = new Festival("La tomatera", "Valladolid", "2025-11-21");
let f2 = new Festival("El remolque", "Soria", "2025-11-21");
let f3 = new Festival("La locura", "Palencia", "2025-11-28");
controlFecha(festivales, f1);
controlFecha(festivales, f2);
controlFecha(festivales, f3);
console.log(festivales);
let b1 = new Bailarin("JUAN", "Gomez Lopez", "Intermedio");
let b2 = new Bailarin("ALEJANDRA", "Gomez Lopez", "Intermedio");
let b3 = new Bailarin("ROCIO", "Gomez Lopez", "Inicial");
let b4 = new Bailarin("MANUEL", "Sanchez Lopez", "Inicial");
let b5 = new Bailarin("JAVIER", "Gomez Lopez", "Inicial");
let b6 = new Bailarin("CLARA", "Sanchez Lopez", "Inicial");
let b7 = new Bailarin("ANDRES", "Gomez Lopez", "Inicial");
let b8 = new Bailarin("MARTIN", "Sanchez Lopez", "Inicial");
let prof1 = new Profesor(b3.nombre, b3.apellidos, b3.nivel);
let prof2 = new Profesor(b4.nombre, b4.apellidos, b4.nivel);
let prof3 = new Profesor(b8.nombre, b8.apellidos, b8.nivel);
let prof4 = new Profesor(b5.nombre, b5.apellidos, b5.nivel);
let prof5 = new Profesor(b6.nombre, b6.apellidos, b6.nivel);
let prof6 = new Profesor(b7.nombre, b7.apellidos, b7.nivel);
let par1 = new Pareja(b1.nombre, b2.nombre, "Intermedio");
let par2 = new Pareja(prof1.nombre, prof2.nombre, "Inicial");
let par3 = new Pareja(prof3.nombre, prof4.nombre, "Inicial");
let par4 = new Pareja(prof5.nombre, prof6.nombre, "Intermedio");
f1.controlProfesores(par2.nombrePareja, par2.nivel);
f1.controlProfesores(par3.nombrePareja, par3.nivel);//No hace el set al haber ya una pareja con nivel inicial
f1.controlProfesores(par4.nombrePareja, par4.nivel);
colocarPareja(1,1,par1);
colocarPareja(1,1,par2);//No agrega al estar ocupada
colocarPareja(1,2,par3);
colocarPareja(5,6,par4);
console.table(pista);

