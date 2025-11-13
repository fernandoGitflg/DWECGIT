

export class DptoInformatica {
    #aulas = new Map();

    constructor() {}

    addAula(aula, grupo) {
        const numero = aula.numero;
        if (this.#aulas.has(numero)) {
            return false;
        }
        this.#aulas.set(numero, { aula, grupo });
        return true;
    }

    getUbicacion(idEquipo) {
        for (let [numero, { aula }] of this.#aulas.entries()) {
            let posicion = aula.getPosicion(idEquipo);
            if (posicion !== null) {
                let [fila, columna] = posicion;
                return `Aula número: ${numero}, Fila: ${fila}, Columna: ${columna}`;
            }
        }
        return "Equipo desconocido";
    }

    getNEquipos() {
        let total = 0;
        for (let { aula } of this.#aulas.values()) {
            let equipos = aula.equipos;
            for (let i = 0; i < equipos.length; i++) {
                for (let j = 0; j < equipos[i].length; j++) {
                    if (equipos[i][j] !== null) {
                        total++;
                    }
                }
            }
        }
        return total;
    }
}
