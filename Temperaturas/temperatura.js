class Ciudad {
  #nombre;
  #temperaturas;

  constructor(nombre) {
    this.#nombre = nombre;
    this.#temperaturas = [];
    this.rellenarTemperaturas();
  }

  generarTemperatura() {
    return Math.floor(Math.random() * (40 - (-20) + 1)) - 20;
  }

  rellenarTemperaturas() {
    for (let i = 0; i < 30; i++) {
      this.#temperaturas.push(this.generarTemperatura());
    }
  }

  modificarTemperatura(dia, nuevaTemp) {
    if (dia >= 1 && dia <= 30) {
      this.#temperaturas[dia - 1] = nuevaTemp;
    }
  }

  calcularMedia() {
    let suma = 0;
    for (let i = 0; i < this.#temperaturas.length; i++) {
      suma += this.#temperaturas[i];
    }
    return Math.round(((suma / this.#temperaturas.length) * 100) / 100);
  }

  get nombre() {
    return this.#nombre;
  }

  get temperaturas() {
    return this.#temperaturas;
  }
}

class Estacion {
  #ciudades;

  constructor() {
    this.#ciudades = [];
  }

  agregarCiudad(nombre) {
    this.#ciudades.push(new Ciudad(nombre));
  }

  eliminarCiudad(nombre) {
    this.#ciudades = this.#ciudades.filter(c => c.nombre !== nombre);
  }

  modificarTemperatura(nombreCiudad, dia, nuevaTemp) {
    const ciudad = this.#ciudades.find(c => c.nombre === nombreCiudad);
    if (ciudad) {
      ciudad.modificarTemperatura(dia, nuevaTemp);
    }
  }

  toHTML() {
    let html = "<table border='1'><tr><th></th>";
    for (let i = 1; i <= 30; i++) {
      html += `<th>${i}</th>`;
    }
    html += "<th>Media</th></tr>";

    for (let ciudad of this.#ciudades) {
      html += `<tr><td>${ciudad.nombre}</td>`;
      for (let temperatura of ciudad.temperaturas) {
        html += `<td>${temperatura}</td>`;
      }
      html += `<td>${ciudad.calcularMedia()}</td></tr>`;
    }

    html += `</table>`;
    return html;
  }
}

const estacion1 = new Estacion();
estacion1.agregarCiudad("Oviedo");
estacion1.agregarCiudad("Santander");
estacion1.modificarTemperatura("Oviedo", 2, 25);
document.write(estacion1.toHTML());
