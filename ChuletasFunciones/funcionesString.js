let string1 = "Hola buenos dias, que tal";
let string2 = "Yo bien";
let string3 = "Mi nombre es Jose"
let string4 = "DEPORTE";
let string5 = "4";
let string6 = "Que tal, que buen dia hace hoy a que si";
let string7 = "   Que calor hace hoy   ";

//Devuelve la longitud del string
console.log("Prueba length:");
console.log(string1);//Hola buenos dias, que tal
console.log(string1.length);//25

//Concatena dos strings
console.log("Prueba concat:");
console.log(string1);//Hola buenos dias, que tal
console.log(string1.concat(string2));//Hola buenos dias, que talYo bien

//Devuelve el caracter de la posicion indicada
console.log("Prueba charAt:");
console.log(string1);//Hola buenos dias, que tal
console.log(string1.charAt(2));//l

//Devuelve el codigo UNICODE de la posicion indicada
console.log("Prueba charCodeAt:");
console.log(string1);//Hola buenos dias, que tal
console.log(string1.charCodeAt(2));//108

//Devuelve la posicion de la subcadena
console.log("Prueba indexOf:");
console.log(string1);//Hola buenos dias, que tal
console.log(string1.indexOf("b"));//5

//Devuelve la ultima posicion de la subcadena
console.log("Prueba lastIndexOf:");
console.log(string6);//Que tal, que buen dia hace hoy a que si
console.log(string6.lastIndexOf("que"));//33

//Devuelve la subcadena desde la posicion i a la posicion f
console.log("Prueba substr:");
console.log(string6);//Que tal, que buen dia hace hoy a que si
console.log(string6.substring(23,32));//ace hoy a

//Convierte la cadena a minusculas
console.log("Prueba toLowerCase:");
console.log(string4);//DEPORTE
console.log(string4.toLowerCase());//deporte

//Convierte la cadena a mayusculas
console.log("Prueba toUpperCase:");
console.log(string2);//Yo bien
console.log(string2.toUpperCase());//YO BIEN

//Divide una cadena en diferentes partes separadas por el caracter indicado y las devuelve en un array
console.log("Prueba split:");
console.log(string3);//Mi nombre es Jose
console.log(string3.split("e"));//(4) ['Mi nombr', ' ', 's Jos', '']

//Determina si un string termina con otro string
console.log("Prueba endsWith:");
console.log(string1);//Hola buenos dias, que tal
console.log(string4);//DEPORTE
console.log(string1.endsWith(string4));//false
console.log(string1.endsWith("tal"));//true

//Determina si un string empieza con otro string
console.log("Prueba startsWith:");
console.log(string1);//Hola buenos dias, que tal
console.log(string4);//DEPORTE
console.log(string1.startsWith(string4));//false
console.log(string1.startsWith("Hola"));//true

//Determina si un string contiene otro string
console.log("Prueba includes:");
//COMPROBACION CAMBIO DE CUENTA GIT
console.log(string1);//Hola buenos dias, que tal
console.log(string4);//DEPORTE
console.log(string1.includes(string4));//false
console.log(string1.includes("dias"));//true

//Devuelve un array con las ocurrencias
console.log("Prueba match:");
console.log(string1);//Hola buenos dias, que tal
console.log(string1.match());//(1) ['', index: 0, input: 'Hola buenos dias, que tal', groups: undefined]
console.log(string6.match(/que/g));//(1) ['buenos', index: 5, input: 'Hola buenos dias, que tal', groups: undefined]
console.log(string1.match("adios"));//null

//Repite un dtring un numero de veces
console.log("Prueba repeat:");
console.log(string5);//4
console.log(string5.repeat(4));

//Reemplaza un string con otro
console.log("Prueba replace:");
console.log(string6);//Que tal, que buen dia hace hoy a que si
console.log(string6.replace(/q/g, "ayer"));//Que tal, ayer buen dia hace hoy a ayer si

//Elimina los espacios en blanco
console.log("Prueba trim:");
console.log(string7);//   Que calor hace hoy
console.log(string7.trim());//Que calor hace hoy

//Elimina los espacios en blanco
console.log("Prueba padStart:");
console.log(string1);//   Que calor hace hoy
console.log(string1.padStart(5,"-"));

