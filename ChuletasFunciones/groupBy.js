const miMapa= new Map([
    [1,"juan"],
    [2,"pepe"],
    [3,"sofia"],
    [4,"juan"],
    [5,"pepe"]
]);
miMapa.gro
function ordenarAlumnos(a,b){
    let pepe=1;
    let juan=2;
    let sofia=3;
    if(a=="pepe"){
        a=pepe;
    }else if(a=="juan"){
        a=sofia;
    }else{
        a=juan;      
    }
    if(b=="pepe"){
        b=pepe
    }else if(b=="sofia"){
        b=sofia;
    }else{
        b=juan;      
    }
    //Compara a y b
    if(a>b){
        return 1;
    }else{
        return -1;
    }
}
// Create a Set
const letras = new Set();

const a = "a";
const b = "b";
const c = "c";
const d = "d";

letras.add(a);
letras.add(b);
letras.add(c);
letras.add("c");
console.log(letras);
letras.delete("a");
console.log(letras);
letras.delete(b);
console.log(letras);
letras.add(a);
letras.add(b);
console.log(letras.has(d));
console.log(letras.has(a));
console.log(letras.values());
letras.clear();
console.log(letras);