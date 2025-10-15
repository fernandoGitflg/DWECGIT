//Fecha y hora actual
let fechaActual = new Date();
console.log("Fecha actual:", fechaActual);

//Desde milisegundos (desde 1 enero 1970)
let fechaMilis = new Date(1759156720831); // fecha de hoy sacada con date.now
console.log("Fecha desde milisegundos:", fechaMilis);

//Desde cadena de texto
let fechaTexto = new Date("2025-09-29");
console.log("Fecha desde texto:", fechaTexto);

//Desde componentes individuales
let fechaCompuesta = new Date(2025, 8, 29, 16, 30, 0, 0); 
console.log("Fecha compuesta:", fechaCompuesta);

//Devuelve un valor numerico correspondiente a la fecha y hora actual
console.log("Prueba now");
console.log(Date.now());//1759156720831

//Devuelve un valor numerico correspondiente a la fecha y hora actual
console.log("Prueba parse");
console.log(Date.parse("2025-09-29"));//1759156720831

//Devuelve el año de la fecha
console.log("Prueba getFullYear:");
console.log(fechaCompuesta);//Mon Sep 29 2025 16:30:00 GMT+0200 (hora de verano de Europa central)
console.log(fechaCompuesta.getFullYear());//2025

//Devuelve el mes de la fecha
console.log("Prueba getMonth:");
console.log(fechaCompuesta);//Mon Sep 29 2025 16:30:00 GMT+0200 (hora de verano de Europa central)
console.log(fechaCompuesta.getMonth());//8

//Devuelve el dia del mes de la fecha
console.log("Prueba getDate:");
console.log(fechaCompuesta);//Mon Sep 29 2025 16:30:00 GMT+0200 (hora de verano de Europa central)
console.log(fechaCompuesta.getDate());//29

//Devuelve el dia del mes de la fecha
console.log("Prueba getDate:");
console.log(fechaCompuesta);//Mon Sep 29 2025 16:30:00 GMT+0200 (hora de verano de Europa central)
console.log(fechaCompuesta.getDay());//1 (0 domingo)

//Devuelve hora,min,segundos,milisegundos
console.log("Prueba hora,min,segundos,milisegundos:");
console.log(fechaCompuesta);//Mon Sep 29 2025 16:30:00 GMT+0200 (hora de verano de Europa central)
console.log(fechaCompuesta.getHours());//16
console.log(fechaCompuesta.getMinutes());//30
console.log(fechaCompuesta.getSeconds());//0
console.log(fechaCompuesta.getMilliseconds());//0

//Devuelve el valor numerico en ms correspondiente a la fecha
console.log("Prueba getTime:");
console.log(fechaCompuesta);//Mon Sep 29 2025 16:30:00 GMT+0200 (hora de verano de Europa central)
console.log(fechaCompuesta.getTime());//1759156200000

//Modifican la fecha
console.log("Prueba sets:")
console.log("Fecha anterior  :",fechaCompuesta);
fechaCompuesta.setFullYear(2030);
fechaCompuesta.setMonth(0); 
fechaCompuesta.setDate(1);
console.log("Fecha modificada:", fechaCompuesta);