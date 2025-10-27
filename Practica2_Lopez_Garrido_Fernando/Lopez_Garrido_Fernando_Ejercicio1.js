const libro1 = {
    nombre: "Lagartijas",
    color: "Azul",
    autor: "A.J.Perez",
    nPaginas: 110,
    editorial: "Editex",
    forrado: false,
    urlCover: "https.lagartija.es",
    comprar: function () {
        console.log(`Libro de aventuras del autor ${this.autor} comprado`)
    },
    toString: function () {
        console.log(this.nombre + "-" + this.autor + "(" + this.nPaginas + ")**" + this.forrado);
    }
};
const libro2 = {
    nombre: "Quijote",
    color: "Blanco",
    autor: "Cervantes",
    nPaginas: 210,
    editorial: "MDC",
    forrado: true,
    urlCover: "https.donquijote.es",
    comprar: function () {
        console.log(`Libro de aventuras del autor ${this.autor} comprado`)
    },
    toString: function () {
        console.log(this.nombre + "-" + this.autor + "(" + this.nPaginas + ")**" + this.forrado);
    }
};
const libro3 = {
    nombre: "Lazarillo",
    color: "Azul",
    autor: "Anonimo",
    nPaginas: 350,
    editorial: "Anonimo",
    forrado: false,
    urlCover: "https.lazarillodetormes.com",
    comprar: function () {
        console.log(`Libro de aventuras del autor ${this.autor} comprado`)
    },
    toString: function () {
        console.log(this.nombre + "-" + this.autor + "(" + this.nPaginas + ")**" + this.forrado);
    }
};
const libro4 = {
    nombre: "El bola",
    color: "Rosa",
    autor: "A.J.Perez",
    nPaginas: 190,
    editorial: "Editex",
    forrado: true,
    urlCover: "https.elbola.es",
    comprar: function () {
        console.log(`Libro de aventuras del autor ${this.autor} comprado`)
    },
    toString: function () {
        console.log(this.nombre + "-" + this.autor + "(" + this.nPaginas + ")**" + this.forrado);
    }
};
let biblioteca = [libro1, libro2, libro3];

biblioteca.toString();

for (libro of biblioteca) {
    console.log(libro.editorial);
}
let CheckPages = (libro) => {
    return libro.nPaginas > 150;
}
/*let CheckLibro = (biblioteca, libro) => {
    for (libro of biblioteca) {
        if(biblioteca.findIndex((libro.nombre)=>{}){
            return true;
        }else{
            false
        }
    }
}*/
console.log(CheckPages(libro1));
console.log(CheckPages(libro4));

//console.log(CheckLibro(biblioteca,libro1));

let añadirLibro = (...libros) => {
    biblioteca.push(...libros);
};
añadirLibro(libro1,libro2,libro3,libro4);
biblioteca.toString();
let LibrosLargos= biblioteca.filter((libro)=>CheckPages(libro));
console.log("-----")
LibrosLargos.toString();
let checkAutor = (autor, biblioteca) => {
    for (libro of biblioteca) {
        libro.autor = autor;
    }
}
/*checkAutor("Anonimo",biblioteca);*/

let forrarLibro = (biblioteca) => {
    for (libro of biblioteca) {
        libro.forrado = true;
    }
}
forrarLibro(biblioteca);
biblioteca.toString();

let prestarLibro = (biblioteca, titulo) => {
    for (libro of biblioteca) {
        if (libro.nombre === titulo) {
            biblioteca.pop[libro];
        };
    }
}
console.log("----");
prestarLibro(biblioteca, "Lazarillo");
biblioteca.toString();