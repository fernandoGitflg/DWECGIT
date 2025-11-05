export class Rio{
    _caudalMedio;
    _poblaciones=[];
    constructor(nombre,cuenca){
        this._nombre=nombre;
        this._cuenca=cuenca;
        console.log(`Nuevo río ${this._nombre}, de la cuenca: ${this._cuenca}`);
    }
    agregarPoblacion(poblacion){
        this._poblaciones.push(poblacion);
        return `El rio ${this.imprimeNombre()} pasa por ${poblacion}` 
    }
    eliminarPoblacion(poblacion){
        this._poblaciones = this._poblaciones.filter(p => p !== poblacion);
        return `El rio ${this.imprimeNombre()} no pasa por ${poblacion}`
    }
    imprimeNombre(){
        return this._nombre;
    }
    imprimeCuenca(){
        return this._cuenca;
    }
    imprimeCaudal(){
        if(this._caudalMedio!==undefined){
            return this._caudalMedio;
        }else{
            return 'No consta';
        }
    }
    imprimePoblaciones(){
        if (this._poblaciones.length > 0){
            return this._poblaciones.join(', ');
        }else{
            return 'No consta';
        }
    }
    imprimeRio(){
        return `Nombre: ${this.imprimeNombre()}, Cuenca: ${this.imprimeCuenca()}, Caudal Medio: ${this.imprimeCaudal()}, Poblaciones: ${this.imprimeCaudal()}`
    }
    modificarCaudalMedio(numero){
        this._caudalMedio=numero;
    }
    /*ordenarCaudal(num){

    }*/
}
