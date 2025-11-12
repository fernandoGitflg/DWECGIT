let a=3;
let b=6;
[a,b,c]=[b,a,a];
console.log(a);
console.log(b);
console.log(c);

const persona={
    nombre: "Sarah",
    lugar:{
        pais:'Nigeria',
        cuidad:'Lagos'
    },
    amigas:['Annie','Becky']
};

const{nombre,lugar,amigas}=persona;
const{pais,ciudad}=lugar;
console.log(pais);
console.log(amigas[0]);

