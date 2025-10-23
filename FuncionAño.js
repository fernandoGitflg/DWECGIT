let siglos=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI"];
let funcionAño = año =>{
     return "Es el siglo "+siglos[Math.ceil(año/100)-1];
}

for(let i=0;i<=100;i++){
console.log(funcionAño(Math.floor(Math.random() * 2023.99)));
}

let contadorDias=(fechaCumple)=>{
    console.log("Te quedan "+
    (Math.floor((Date.parse(fechaCumple)-Date.now())/(1000*3600*24))
    +" dias para tu cumpleaños y "+
    Math.round(((Date.parse(fechaCumple)-Date.now()))/(1000*3600*24)/(1000 * 60 * 60))
    +" horas"));
} 
contadorDias("2026-01-28");
