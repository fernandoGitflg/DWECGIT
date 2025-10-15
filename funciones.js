function suma(foo){
    foo(1,2);
}
suma(function (a,b){
    console.log(a+b);
})

console.log(adios("Juan"));
function adios(nombre){
    return `Adios ${nombre}`;
}

//console.log(hello("Juan"));
let hello = function (nombre){
    return `Hola ${nombre}`;
}

function f1(nombre="Fernando",edad=21){
    console.log(nombre+" "+edad);

}
f1();
f1("Juan",31,"Mañana es miercoles");
f1(undefined,31,"Mañana es miercoles");
f1("Juan");

function f2(nombre,edad){
    console.log(`${arguments[0]}-${arguments[1]}`);
}
f2();
f2("Juan",31);
f2(undefined,31,"Mañana es miercoles");
f2("Juan");

function multiplicacion(...numeros){
    let resultado=1;
    for(const a of numeros){
        resultado *= a;
    }
    return resultado;
}
console.log(multiplicacion(2,2,2));
console.log(multiplicacion());
console.log(multiplicacion(2,4,5,6));
console.log(multiplicacion(1,1,1,1,1,1,1,1,10));

let values=[1,2,3];
let morevalues=[4,5];
console.log(values);
values.push(0,...morevalues);
console.log(values);

function suma(a, b, c){
    return a+b+c;
}
let array1 = [1,2,3];
console.log(suma(...array1));
let array2=[1,2,3,4];
console.log(suma(...array2));

let array3=[1,2,3,4];
function add(...nums){
    let rest=0;
    for(const a of nums){
        rest +=a;
    }
    return rest;
}
console.log(add(...array3));
let saludo1= function(){
    return "Hola";
}
let saludo2 = () => "Hola";
console.log(saludo1());
console.log(saludo2());
let saludo3 = function (nombre){
    return "Hola "+nombre;
}
let saludo4 = (nombre)=>"Hola "+nombre;
console.log(saludo3("Juan"));
console.log(saludo4("Juan"));

let saludo5 = function(a,b){
    return "La suma es "+(a+b);
}
let saludo6 = (a,b)=>{
    "La suma es "+(a+b);
}
console.log(saludo5(1,2));
console.log(saludo6(1,2));

