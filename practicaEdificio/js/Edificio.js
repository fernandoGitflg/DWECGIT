class Edificio {
  #calle;
  #numero;
  #codigoPostal;
  #plantas;

  constructor(calle, numero, codigoPostal) {
    this.#calle = calle;
    this.#numero = numero;
    this.#codigoPostal = codigoPostal;
    this.#plantas = [];
  }

  getCalle() {
    return this.#calle;
  }

  getNumero() {
    return this.#numero;
  }

  getCodigoPostal() {
    return this.#codigoPostal;
  }

  getNumeroPlantas() {
    return this.#plantas.length;
  }

  getNumeroPuertas(planta) {
    let indice = planta - 1;

    if (this.#plantas[indice]) {
      return this.#plantas[indice].length;
    } else {
      return 0;
    }
  }

  getPropietario(planta, puerta) {
    let indicePlanta = planta - 1;
    let indicePuerta = puerta - 1;

    if (this.#plantas[indicePlanta]) {
      return this.#plantas[indicePlanta][indicePuerta];
    } else {
      return undefined;
    }
  }

  setCalle(calle) {
    this.#calle = calle;
  }

  setNumero(numero) {
    this.#numero = numero;
  }

  setCodigoPostal(cp) {
    this.#codigoPostal = cp;
  }

  agregaPlantasYPuertas(nPlantas, nPuertas) {
    for (let i = 0; i < nPlantas; i++) {
      let nuevaPlanta = [];

      for (let j = 0; j < nPuertas; j++) {
        nuevaPlanta.push(null);
      }

      this.#plantas.push(nuevaPlanta);
    }
  }

  agregaPropietario(prop, planta, puerta) {
    let indicePlanta = planta - 1;
    let indicePuerta = puerta - 1;

    if (!this.#plantas[indicePlanta]) {
      return;
    }

    this.#plantas[indicePlanta][indicePuerta] = prop;
  }
}
