let siglos=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI"];
let funcionAño = año =>{
     return "Es el siglo "+siglos[Math.ceil(año/100)-1];
}
console.log(funcionAño(Math.floor(Math.random() * 2023.99)));


let contadorDias=(fechaCumple)=>{
    console.log("Te quedan "+Math.ceil((Date.parse(fechaCumple)-Date.now())/(1000*3600*24))+" dias para tu cumpleaños");
} 
contadorDias("2026-01-28");
