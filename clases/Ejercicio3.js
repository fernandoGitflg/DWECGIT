class Vehiculo{
    constructor(pasajeros){
        this._pasajeros=pasajeros;
    }
    set pasajeros(valor){
        this._pasajeros=valor;//_ para evitar bucle infinito
    }
    get pasajeros(){
        return this._pasajeros;
    }
}
class Turismo extends Vehiculo{
    constructor(pasajeros,color){
        super(pasajeros)
        this._color=color;
    }
    set color(valor){
        this._color=valor;//_ para evitar bucle infinito
    }
    get color(){
        return this._color;
    }
}
class Camion extends Vehiculo{
    constructor(pasajeros,tara){
        super(pasajeros)
        this._tara=tara;
    }
    set tara(valor){
        this._tara=valor;//_ para evitar bucle infinito
    }
    get tara(){
        return this._tara;
    }
}

function capturaReloj(){
    const ahora = new Date();
    return ahora.getHours()+':'+ahora.getMinutes()+':'+ahora.getSeconds();
}
let ale1= Math.floor((Math.random()*3.99)+1);//entre 1 y 4
const ale2= Math.floor(Math.random()*9999);//tara
const ale3= Math.floor((Math.random()*6.99)+1);//pasajeros
function generarColor() {//color
    const ale4 = Math.floor(Math.random() * 2.99);
    let color;
    switch (ale4) {
        case 0:
            color = 'azul';
            break;
        case 1:
            color = 'rojo';
            break;
        case 2:
            color = 'verde';
            break;
    }
    return color;
}
let vehiculos=[];
function generarVehiculos(){
    for(let i=1;i<=ale1;i++){
        let turismo=new Turismo(ale3,generarColor());
        vehiculos.push(turismo);
    }
    ale1=Math.floor((Math.random()*3.99)+1);//entre 1 y 4 de nuevo
    for(let i=1;i<=ale1;i++){
        let camion=new Camion(ale3,ale2);
        vehiculos.push(camion);
    }
}
generarVehiculos();
console.log('hola');