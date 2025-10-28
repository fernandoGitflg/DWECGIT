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
let CheckLibro = (biblioteca, libro) => {
    return biblioteca.includes(libro);
}
console.log(CheckPages(libro1));
console.log(CheckPages(libro4));

console.log("Biblioteca");
console.log(CheckLibro(biblioteca,libro1));

let añadirLibro = (...libros) => {
    biblioteca.push(...libros);
};
/*añadirLibro(libro1,libro2,libro3,libro4);*/
biblioteca.toString();

const LibrosLargos = biblioteca.filter(CheckPages);
console.log("Libros con más de 150 páginas:");
LibrosLargos.forEach(libro => libro.toString());

const checkAutor = (autor, biblioteca) => {
    return biblioteca.find(libro => libro.autor === autor);
}

console.log("Tolkien");
console.log(
    checkAutor("Tolkien", biblioteca)
        ? `Sí hay libros de Tolkien: ${checkAutor("Tolkien", biblioteca).toString()}`
        : "No hay libros de Tolkien"
);

let forrarLibro = (biblioteca) => {
    for (libro of biblioteca) {
        libro.forrado = true;
    }
}
console.log("----");
forrarLibro(biblioteca);
biblioteca.toString();

let prestarLibro = (biblioteca, titulo) => {
    biblioteca.splice(
        biblioteca.findIndex(libro => libro.nombre === titulo),1);
}
console.log("----");
prestarLibro(biblioteca, "Lazarillo");
biblioteca.toString();

console.log("Devolver");
let devolverLibro = (biblioteca, libro) => {
    biblioteca.push(libro);
    console.log("Libro " + libro.nombre + " devuelto a la biblioteca.");
};
devolverLibro(biblioteca,libro3);
biblioteca.toString();
