export class Festival {
    #nombre;
    #provincia;
    #fecha;
    #profesores=new Map();
    #parejas=[];
    constructor(nombre, provincia, fecha) {
        this.#nombre = nombre;
        this.#provincia = provincia;
        this.#fecha=fecha;
    }
    get nombre(){
        return this.#fecha;
    }
    set nombre(nombre){
        this.#nombre=nombre;
    }
    get provincia(){
        return this.#provincia;
    }
    set provincia(provincia){
        this.#provincia=provincia;
    }
    get fecha(){
        return this.#fecha;
    }
    set fecha(fecha){
        this.#fecha=fecha;
    }
    get profesores(){
        return this.#profesores;
    }
    set profesores(profesores){
        this.#profesores=this.#profesores.set(profesores);
    }
    get parejas(){
        return this.#parejas;
    }
    set parejas(parejas){
        this.#parejas=this.#parejas.push(parejas);
    }
    controlProfesores=(parejaProfesor,nivel)=>{
        if(this.#profesores.has(parejaProfesor)){
        console.log('Nivel ya asignado a otra pareja');
        }else{
            this.#profesores.set(nivel,parejaProfesor)
        } 
    }
}