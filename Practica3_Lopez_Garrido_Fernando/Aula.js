import { Equipo } from "./Equipo.js";
export class Aula {
    #numero;
    #equipos = [];
    #puestos;
    constructor(numero, filas, columnas) {
        this.#numero = numero;
        for (let i = 0; i < filas; i++) {
            this.#equipos[i] = Array(columnas).fill(null);
        }
        this.#puestos = filas * columnas;
    }
    activaEquipo(equipo, fila, columna) {
        if (fila < this.#equipos.length) {
            if (equipo.personal && columna >= this.#equipos[fila].length) {
                this.#equipos[fila].push(equipo); 
                return true;
            } else if (columna < this.#equipos[fila].length) {
                this.#equipos[fila][columna] = equipo;
                return true;
            }
        }
        return false;
    }
    getPosicion(idEquipo) {
        for (let i = 0; i < this.#equipos.length; i++) {
            for (let j = 0; j < this.#equipos[i].length; j++) {
                let equipo = this.#equipos[i][j];
                if (equipo !== null && equipo.id === idEquipo) {
                    return [i, j];
                }
            }
        }
    }
    getPorcentajeOcupacion() {
        let contador = 0;
        for (let i = 0; i < this.#equipos.length; i++) {
            for (let j = 0; j < this.#equipos[i].length; j++) {
                if (this.#equipos[i][j] !== null) {
                    contador++;
                }
            }
        }
        return (contador / this.#puestos) * 100;
    }
    toString() {
        console.table(this.#equipos);
    }
    get numero() {
        return this.#numero;
    }

    get equipos() {
        return this.#equipos;
    }

    get puestos() {
        return this.#puestos;
    }
}
let a1 = new Aula(4, 5, 6);
let e1 = new Equipo("sdfsdfsd", true, 3);
e1.toString();
a1.activaEquipo(e1, 4, 5);
console.log(a1.getPosicion(e1.id));
console.log(a1.getPorcentajeOcupacion());

