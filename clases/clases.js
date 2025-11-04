class Persona{
    constructor(nombre){
        this._nombre=nombre;
    }
    static comparar(personaA,personaB){
        return personaA._nombre.localeCompare(personaB._nombre);
        //Devuelve -1 si las letras de la primera cadena van antes que la segunda
        //Devuelve 0 si las cadenas son iguales 
        //Devuelve 1 si las letras de la primera cadena van despues que la segunda

    }
    static crearPersona(nombre){
        return new this(nombre)
    }
    set nombre(valor){
        this._nombre=valor;//_ para evitar bucle infinito
    }
    get nombre(){
        return this._nombre;
    }
}
const a =[new Persona('Pepe'), new Persona('Paco'),new Persona('Quique')];
console.log(Persona.comparar(a[0],a[1]));
a.sort(Persona.comparar);//Ordena el array
console.log(a.map(e=>e.nombre).join(','));
console.log(Persona.comparar(a[0],a[1]));
const persona= Persona.crearPersona('Luis');
console.log(persona.nombre);
const p= new Persona('Juan');
console.log(p.nombre);
p.nombre='Raul';
console.log(p.nombre);

//establece un tiempo en este caso un segundo y ejecuta una instruccion
setTimeout(()=>console.log('hola'),1000);
//establece un intervalo cada 3 segundos sin fin
setInterval(function(){
    console.log(Math.random()*10);
},3000);
//establece un intervalo cada 3 segundos con un final cuando se haya ejecutado 6 veces
let contador=0;
const id= setInterval(function(){
    console.log(Math.random()*10);
    if(contador++ ===5){
        clearInterval(id)
    }
},3000);