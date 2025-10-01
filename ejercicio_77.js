
let dia=16;
let mes=7;
let anyo=2025;
let cumples= new Date(anyo,mes-1,dia-1);
let semana=["domingo","lunes","martes","miercoles","jueves","viernes","sabado"]
for(let i=0;i<=5;i++){
cumples.setFullYear(anyo+i);
console.log("Tu año: "+cumples.getFullYear()+ "Tu dia: "+semana[cumples.getDay()])
}