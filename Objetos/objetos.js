let empleado = {
    nombre: "Ana",
    edad: 20,
    "Trabajadora temporal": true,//Por ir con espacios en blanco el atributo usa ""
    domicilio: {
        calle: "Mayor,2",
        poblacion: "Valladolid",
    }
}
empleado.sexo = "Masculino";
console.log(empleado.sexo);
console.log(empleado.nombre);
empleado["Trabajadora temporal"] = false;
console.log(empleado["Trabajadora temporal"]);
console.log(empleado.domicilio.calle);
delete empleado.edad;
console.log(empleado.edad);
console.log(empleado.calle);

/*const propiedad = 'edad';
const valor = 20;
const propiedad2= 'trabajador';
const persona ={nombre: 'Pepe',[Propiedad1]:valor,[propiedad2]:true}
console.log(persona);
const propiedades =['nombre','edad','trabajador'];
const valores =['mariano',45,false];
let empledado3={};
for (const key in propiedades){
    empleado3[propiedades[key]] = valores[key];
}
console.log(empleado3);

*/
const cliente = { nombre: "Pepe", saldo: 1000, credito: true };
for (const key in cliente) {
    console.log(`Propiedad: ${key} Valor: ${cliente[key]}`);
}
console.log("nombre" in cliente);
console.log("apellido" in cliente);
const copia1 = { ...cliente };
console.log(copia1);
const copia2 = { apellido: "García", ...cliente };
console.log(copia2);
const copia3 = Object.assign(cliente);
console.log(copia3);
let copia4 = {};
Object.assign(copia4, cliente);
console.log(copia4);
cliente.nombre = "Juan";
console.log(cliente);
console.log(copia1);
console.log(copia3);
console.log(copia4);
console.log(copia1 + copia2);

const person = { name: "Paco", age: 30 };
const student = { course: "A" };
console.log(Object.getPrototypeOf(person) === Object.getPrototypeOf(student));
console.log(student.name);
Object.setPrototypeOf(student, person);
console.log('For in');
for (const k in student) {//Hijo y padre
    console.log(`${k}: ${student[k]}`);
}
console.log('Forof');//Hijo
for (const k of Object.keys(student)) {
    console.log(`${k}: ${student[k]}`);
}
console.log('ForEach');//Hijo
Object.entries(student).forEach(element => {
    console.log(`${element[0]}:${element[1]}`);
});

console.log(student.name);
student.name = 'Pepe';
console.log(student.name);
console.log(person.name);

const person1 = { name: `Person`, age: 23 };
const student1 = Object.create(person1);
student1.course = "A";
const customer = Object.create(person1);
customer.sales = 1230;
console.log(person1);
console.log(student1);
for (const k of Object.keys(student1)) {
    console.log(`${k}: ${student1[k]}`);
}
console.log(customer);

const person2 = { name: `Pepe`, age: 23 };
const data = { height: 160 };
const student3 = Object.assign({}, person2, data);
console.log(person2);
console.log(student3);
for (const k of Object.keys(student1)) {
    console.log(`${k}: ${student1[k]}`);
}

let u1 = {
    nombre: "Pepe",
    ver() {
        console.log(this.nombre);
    },
};
u1.ver();
const persona5 = {
    visualizar() {
        console.log(this);
    }
};

const estudiante7 = Object.create(persona5);
estudiante7.nombre = 'Pedro';
estudiante7.visualizar();

function Pintor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}
function Pintor() {
    
}
const pintor = new Pintor('Pepe',40);
//const pintor2 = new Pintor();
console.log(pintor);
console.log(pintor2);

function Persona(nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
};
Persona.prototype.visualizarr=function(){
    console.log(this.nombre);
}
const persona6= new Persona('Juan',40);
persona5.visualizarr();
console.log(persona6);

