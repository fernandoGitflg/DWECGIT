export class Bailarin{
    #nombre;
    #apellidos;
    #nivel;
    constructor(nombre,apellidos,nivel){
        this.#nombre=nombre;
        this.#apellidos=apellidos;
        this.#nivel=nivel;
    }
    get nombre(){
        return this.#nombre;
    }
    get apellidos(){
        return this.#apellidos;
    }
    get nivel(){
        return this.#nivel;
    }
}