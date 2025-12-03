export class Pareja{
    #nombrePareja;
    #nivel;
    #xInicial;
    #yInicial;
    #orientacionInicial;
    constructor(bailarin1,bailarin2,nivel){
        this.#nombrePareja=this.#generarNombre(bailarin1,bailarin2);
        this.#nivel=nivel;
    }
    #generarNombre(nombre1,nombre2){
        let nombre="";
        for(let i=0;i<nombre1.length;i++){
            if(i%2==true){
                nombre=nombre+nombre1.substring(i,i+1);
            }
        }
        for(let i=0;i<nombre2.length;i++){
            if(i%2==true){
                nombre=nombre+nombre2.substring(i,i+1);
            }
        }
        return nombre;
    }
    get nombrePareja(){
        return this.#nombrePareja;
    }
    get nivel(){
        return this.#nivel;
    }
    get orientacionInicial(){
        return this.#orientacionInicial;
    }
    set orientacionInicial(orientacionInicial){
         this.#orientacionInicial=orientacionInicial;
    }
    get xInicial(){
        return this.#xInicial;
    }
    set xInicial(xInicial){
         this.#xInicial=xInicial;
    }
    get yInicial(){
        return this.#yInicial;
    }
    set yInicial(yInicial){
         this.#yInicial=yInicial;
    }
}