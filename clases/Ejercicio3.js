class Vehiculo {
    constructor(pasajeros) {
        this._pasajeros = pasajeros;
    }
    set pasajeros(valor) {
        this._pasajeros = valor;
    }
    get pasajeros() {
        return this._pasajeros;
    }
}

class Turismo extends Vehiculo {
    constructor(pasajeros, color) {
        super(pasajeros);
        this._color = color;
    }
    set color(valor) {
        this._color = valor;
    }
    get color() {
        return this._color;
    }
}

class Camion extends Vehiculo {
    constructor(pasajeros, tara) {
        super(pasajeros);
        this._tara = tara;
    }
    set tara(valor) {
        this._tara = valor;
    }
    get tara() {
        return this._tara;
    }
}

function capturaReloj() {
    const ahora = new Date();
    return ahora.getHours() + ':' + ahora.getMinutes() + ':' + ahora.getSeconds();
}

function generarColor() {
    const ale4 = Math.floor(Math.random() * 3);
    let color;
    switch (ale4) {
        case 0:
            color = 'azul';
            break;
        case 1:
            color = 'rojo';
            break;
        case 2:
            color = 'verde';
            break;
    }
    return color;
}

let vehiculos = [];

function generarVehiculos() {
    let ale1 = Math.floor(Math.random() * 4) + 1;
    for (let i = 0; i < ale1; i++) {
        const pasajeros = Math.floor(Math.random() * 7) + 1;
        let turismo = new Turismo(pasajeros, generarColor());
        vehiculos.push(turismo);
    }

    ale1 = Math.floor(Math.random() * 4) + 1;
    for (let i = 0; i < ale1; i++) {
        const pasajeros = Math.floor(Math.random() * 7) + 1;
        const tara = Math.floor(Math.random() * 10000);
        let camion = new Camion(pasajeros, tara);
        vehiculos.push(camion);
    }
}

function mostrarVehiculos() {
    let contador = 0;
    const id = setInterval(function () {
        const inicio = vehiculos.length;
        generarVehiculos();
        const nuevos = vehiculos.slice(inicio);
        const hora = capturaReloj();

        nuevos.forEach(v => {
            if (v instanceof Turismo) {
                document.write(
                    "Hora: " + hora +
                    " - Tipo: Turismo" +
                    " - Pasajeros: " + v.pasajeros +
                    " - Color: " + v.color + "<br>"
                );
            } else if (v instanceof Camion) {
                document.write(
                    "Hora: " + hora +
                    " - Tipo: Camión" +
                    " - Pasajeros: " + v.pasajeros +
                    " - Tara: " + v.tara + "<br>"
                );
            }
        });

        if (++contador === 10) {
            clearInterval(id);
        }
    }, 2000);
}

mostrarVehiculos();
