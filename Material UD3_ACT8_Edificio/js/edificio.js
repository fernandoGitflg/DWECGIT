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

  // Getters
  getCalle() { return this.#calle; }
  getNumero() { return this.#numero; }
  getCodigoPostal() { return this.#codigoPostal; }
  getNumeroPlantas() { return this.#plantas.length; }
  getNumeroPuertas(planta) { return this.#plantas[planta].length; }

  // Setters
  setCalle(c) { this.#calle = c; }
  setNumero(n) { this.#numero = n; }
  setCodigoPostal(cp) { this.#codigoPostal = cp; }

  agregaPlantasYPuertas(nPlantas, nPuertas) {
    for (let i = 0; i < nPlantas; i++) {
      const puertas = new Array(nPuertas).fill(null);
      this.#plantas.push(puertas);
    }
  }

  agregaPropietario(prop, planta, puerta) {
    this.#plantas[planta][puerta] = prop;
  }

  getPropietario(planta, puerta) {
    return this.#plantas[planta][puerta];
  }

  borrarPropietario(planta, puerta) {
    this.#plantas[planta][puerta] = null;
  }
}
