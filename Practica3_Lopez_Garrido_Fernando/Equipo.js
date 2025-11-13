export class Equipo {
    #id;
    #fecha;
    #descripcion;
    #personal;
    constructor(descripcion, personal, dias) {
        this.#descripcion = descripcion;
        this.#personal = personal;
        this.#id = this.#definirTipo(this.#personal) + "-" + 
        this.#descripcion.substring((this.#descripcion.length - 3), this.#descripcion.length)
        .toUpperCase()+this.#calcularFecha(dias);
    }
    #definirTipo(personal) {
        if (personal) {
            return "P"
        } else {
            return "S"
        }
    }
    #calcularFecha(dias) {
        const FECHAINICIO = new Date("2025-9-1");
        const FECHAFIN=new Date("2026-6-30");
        if (dias >= 0) {
            let fechaf=new Date(Date.parse(FECHAINICIO) + dias* 24 * 60 * 60 * 1000);
            this.#fecha=fechaf.getDay()+"-"+fechaf.getMonth()+"-"+fechaf.getFullYear();
            return this.#fecha;
        } else {
            this.#fecha=FECHAFIN.getDay()+"-"+FECHAFIN.getMonth()+"-"+FECHAFIN.getFullYear();
            return this.#fecha;
        }
    }
    get id(){
        return this.#id;
    }
    toString() {
        console.log(this.#id);
    }
}

