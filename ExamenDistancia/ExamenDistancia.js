
let castillaYLeon = ['Valladolid', 'Burgos', 'León', 'Palencia'];
let valencia = ['Valencia', 'Alicante'];
let andalucia = ['Sevilla', 'Cordoba', 'Almeria'];

let filtradas = (provincias) => {
    return provincias.filter(provincia => provincia.includes("V") || provincia.includes("C"))
        .join(' ')
        .toUpperCase();
};

document.write('Castilla y leon: ' + castillaYLeon.join(' ')+'<br>',
    'Valencia: ' + valencia.join(' ')+'<br>',
    'Andalucia: ' + andalucia.join(' ')+'<br>',
    'Que empiecen por V o C<br>',
    'Castilla y leon: '+filtradas(castillaYLeon)+'<br>',
    'Valencia: '+filtradas(valencia)+'<br>',
    'Andalucia: ' + filtradas(andalucia)
);

