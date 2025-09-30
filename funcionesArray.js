let array1= [3,4,5,6,7,8,9,0,"hdghfdgh",76];
let array2=[77,88,99,45,67,"Hola","Adios",7.7];
let array3=["Tercer array"];
let array4= [3,45,4,5,3,3,6,3];

console.log("Prueba lengt:");
//Devuelve el numero de elemento del array 
console.log(array1.length);//10
//Cambio para el git
console.log("Prueba concat:");
//Concatena varios arrays, el parametro debe de ser los arrays que queramos concatenar
console.log(array1.concat(array2,array3));//(19) [3, 4, 5, 6, 7, 8, 9, 0, 'hdghfdgh', 76, 77, 88, 99, 45, 67, 'Hola', 'Adios', 7.7, 'Tercer array']

console.log("Prueba join:");
//Une los elementos de un array y los almacena en un string
console.log(array1.join());//3,4,5,6,7,8,9,0,hdghfdgh,76
//fdg
console.log("Prueba git:");
console.log("Prueba pop:");
//Elimina el ultimo elemento de un array
array1.pop();//76
console.log(array1);//(9) [3, 4, 5, 6, 7, 8, 9, 0, 'hdghfdgh']
sdfsdfsfsdfsdf
console.log("Prueba push:");
//Añade un elemento al final del array
console.log(array2.push("Hola:"));
console.log(array2);//(9) [77, 88, 99, 45, 67, 'Hola', 'Adios', 7.7, 'Hola']

console.log("Prueba shift:");
//Devuelve el primer elemento del array
console.log(array2.shift());//9

console.log("Prueba unshift:");
//Añade un elemento al principio de un array 
console.log(array2.unshift(3.4));
console.log(array2);//3.4,88,99,45,67,Hola,Adios,7.7,Hola

console.log("Prueba reverse:");
//Invierte el orden de los elementos
console.log(array1.reverse());//(9) ['hdghfdgh', 0, 9, 8, 7, 6, 5, 4, 3]

console.log("Prueba sort:");
//Ordena el array en ascendente
let array5=[20,1,2,10];
console.log(array1);
console.log(array1.sort());//(9) [0, 3, 4, 5, 6, 7, 8, 9, 'hdghfdgh']
console.log("Ejemplo de solo numeros de varias cifras:");
console.log(array5);//
//Crear funcion comparadora de enteros
function compararNumeros(num1, num2){
    return num1-num2;
}
console.log(array5.sort(compararNumeros));//(4) [1, 2, 10, 20]
function ordenarAlumnos(a,b){
    let pelirrojo=1;
    let moreno=2;
    let rubio=3;
    if(a=="Pelirrojo"){
        a=pelirrojo;
    }else if(a=="Rubio"){
        a=rubio;
    }else{
        a=moreno;      
    }
    if(b=="Pelirrojo"){
        b=pelirrojo
    }else if(b=="Rubio"){
        b=rubio;
    }else{
        b=moreno;      
    }
    //Compara a y b
    if(a>b){
        return 1;
    }else{
        return -1;
    }
}
console.log("Orden alumnos")
arrayAlumnos=["Rubio","Moreno","Pelirrojo","Rubio","Moreno","Moreno","Pelirrojo","Pelirrojo"];
console.log(arrayAlumnos);//(8) ['Rubio', 'Moreno', 'Pelirrojo', 'Rubio', 'Moreno', 'Moreno', 'Pelirrojo', 'Pelirrojo']
console.log(arrayAlumnos.sort(ordenarAlumnos));//(8) ['Pelirrojo', 'Pelirrojo', 'Pelirrojo', 'Moreno', 'Moreno', 'Moreno', 'Rubio', 'Rubio']

console.log("Prueba IndexOf:");
//Muestra la posicion del elemento en el array o -1 si no lo encuentra
console.log(array2.indexOf(88));//1
console.log(array2.indexOf("Juan"));//-1
//ghfghfgh
console.log("Prueba lastIndexOf:");
//Devuelve la ultima posicion en la que se encuentra un elemento
console.log(array4);//(8) [3, 45, 4, 5, 3, 3, 6, 3]
console.log(array4.lastIndexOf(3));//7

console.log("Prueba Slice:");
//Devuelve una parte de un array, el primer atributo es el inicio y el segundo es el fin
console.log(array1);//(9) [0, 3, 4, 5, 6, 7, 8, 9, 'hdghfdgh']
console.log(array1.slice(7));//(2) [9, 'hdghfdgh']
console.log(array1.slice(3,7));//(4) [5, 6, 7, 8]

console.log("Prueba Splice:");
console.log(array1);
console.log(array1.slice());
