var inquilinosImportar = [
  { piso: 4, puerta: 1, nombre: "Gustavo Ramírez", genero: "hombre", miembros: 5 },
  { piso: 3, puerta: 1, nombre: "María Pérez", genero: "mujer", miembros: 1 },
  { piso: 2, puerta: 1, nombre: "Manuel González", genero: "hombre", miembros: 1 },
  { piso: 2, puerta: 2, nombre: "Pepa Fernández", genero: "mujer", miembros: 3 },
  { piso: 1, puerta: 1, nombre: "Asterio Gómez", genero: "hombre", miembros: 2 },
  { piso: 1, puerta: 2, nombre: "Eleuterio Gómez", genero: "hombre", miembros: 6 },
];

let miEdificio = new Edificio("Uría", 2, "33012");

let formulario
let btnAdd
let btnMod
let btnCerrar;
let inputNombre
let inputApellidos
let inputUF
let inputGeneroH
let inputGeneroM;
let inputPlanta 
let inputPuerta;

window.addEventListener("load", cargaPagina);

function cargaPagina() {
  formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", function(e) { e.preventDefault(); })
  
  btnAdd = document.getElementById("formulario-aniadir");
  btnMod = document.getElementById("formulario-modificar");
  btnCerrar = document.getElementById("formulario-borrar");

  inputNombre = document.getElementById("nombre");
  inputApellidos = document.getElementById("apellidos");
  inputUF = document.getElementById("unidad-familiar");
  inputGeneroH = document.getElementById("genero-hombre");
  inputGeneroM = document.getElementById("genero-mujer");
  inputPlanta = document.getElementById("planta");
  inputPuerta = document.getElementById("puerta");

  miEdificio.agregaPlantasYPuertas(1, 2); 
  miEdificio.agregaPlantasYPuertas(1, 2); 
  miEdificio.agregaPlantasYPuertas(1, 1); 
  miEdificio.agregaPlantasYPuertas(1, 1); 

  cargaInquilinos();
  creaEdificio();
  cargaManejadores();
}

function cargaInquilinos() {
  inquilinosImportar.map((inq) => {
    let propietario = {
      nombre: inq.nombre,
      genero: inq.genero,
      miembros: inq.miembros,
    };
    miEdificio.agregaPropietario(propietario, inq.piso, inq.puerta);
  });
}

function creaEdificio() {
  let contenedor = document.querySelector(".edificio");
  if (!contenedor) {
    contenedor = document.createElement("div");
    contenedor.classList.add("edificio");
    document.body.appendChild(contenedor);
  }

  contenedor.innerHTML = "";

  let h1 = document.createElement("h1");
  h1.textContent = `C/ ${miEdificio.getCalle()} nº ${miEdificio.getNumero()}. ${miEdificio.getCodigoPostal()}`;
  contenedor.appendChild(h1);

  let divPisos = document.createElement("div");
  divPisos.classList.add("pisos");
  contenedor.appendChild(divPisos);

  for (let planta = miEdificio.getNumeroPlantas(); planta >= 1; planta--) {
    let divPlanta = document.createElement("div");
    divPlanta.classList.add("planta");

    let numPuertas = miEdificio.getNumeroPuertas(planta);
    let colClass =
      numPuertas === 1 ? "col-4" :
      numPuertas === 2 ? "col-2" : "col-1";

    for (let puerta = 1; puerta <= numPuertas; puerta++) {
      let propietario = miEdificio.getPropietario(planta, puerta);
      let divProp = document.createElement("div");
      divProp.classList.add("propietario", colClass);

      if (propietario) {
        let p = document.createElement("p");
        p.textContent = propietario.nombre;
        divProp.appendChild(p);

        let img = document.createElement("img");
        img.src = obtenerImagen(propietario);
        divProp.appendChild(img);

        let divBot = document.createElement("div");
        divBot.classList.add("botones");

        let btnM = document.createElement("button");
        btnM.classList.add("modificar");
        btnM.textContent = "Modificar";
        btnM.dataset.planta = planta;
        btnM.dataset.puerta = puerta;

        let btnB = document.createElement("button");
        btnB.classList.add("borrar");
        btnB.textContent = "Borrar";
        btnB.dataset.planta = planta;
        btnB.dataset.puerta = puerta;

        divBot.appendChild(btnM);
        divBot.appendChild(btnB);
        divProp.appendChild(divBot);
      } else {
        let p = document.createElement("p");
        p.textContent = "Vacío";
        divProp.appendChild(p);

        let img = document.createElement("img");
        img.src = "img/vacio.jpg";
        divProp.appendChild(img);

        let divBot = document.createElement("div");
        divBot.classList.add("botones");

        let btnA = document.createElement("button");
        btnA.classList.add("aniadir");
        btnA.textContent = "Añadir";
        btnA.dataset.planta = planta;
        btnA.dataset.puerta = puerta;

        divBot.appendChild(btnA);
        divProp.appendChild(divBot);
      }

      divPlanta.appendChild(divProp);
    }

    divPisos.appendChild(divPlanta);
  }
}

function obtenerImagen(prop) {
  if (prop.miembros === 1) {
    return prop.genero === "hombre" ? "img/hombre.jpg" : "img/mujer.jpg";
  }
  if (prop.miembros === 2) return "img/pareja.jpg";
  if (prop.miembros === 3) return "img/familia-1.jpg";
  return "img/familia-2.jpg";
}

function cargaManejadores() {
  document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("borrar")) borrarPropietario(e);
    if (e.target.classList.contains("aniadir")) abrirFormularioAñadir(e);
    if (e.target.classList.contains("modificar")) abrirFormularioModificar(e);
  });

  btnCerrar.addEventListener("click", function (e) {
    e.preventDefault();
    formulario.style.display = "none";
  });

  btnAdd.addEventListener("click", function (e) {
    e.preventDefault();
    guardarNuevoPropietario();
  });

  btnMod.addEventListener("click", function (e) {
    e.preventDefault();
    modificarPropietario();
  });
}

function borrarPropietario(e) {
  let planta = parseInt(e.target.dataset.planta);
  let puerta = parseInt(e.target.dataset.puerta);
  miEdificio.agregaPropietario(null, planta, puerta);
  creaEdificio();
}

function abrirFormularioAñadir(e) {
  let planta = e.target.dataset.planta;
  let puerta = e.target.dataset.puerta;

  formulario.style.display = "block";
  btnAdd.disabled = false;
  btnMod.disabled = true;

  inputPlanta.value = planta;
  inputPuerta.value = puerta;
  inputNombre.value = "";
  inputApellidos.value = "";
  inputUF.value = "none";
}

function abrirFormularioModificar(e) {
  let planta = e.target.dataset.planta;
  let puerta = e.target.dataset.puerta;
  let prop = miEdificio.getPropietario(planta, puerta);

  formulario.style.display = "block";
  btnAdd.disabled = true;
  btnMod.disabled = false;

  inputPlanta.value = planta;
  inputPuerta.value = puerta;

  let partes = prop.nombre.split(" ");
  inputNombre.value = partes[0];
  inputApellidos.value = partes.slice(1).join(" ");

  inputUF.value =
    prop.miembros === 1 ? "soltero" :
    prop.miembros === 2 ? "pareja" :
    prop.miembros === 3 ? "familia-1" : "familia-mas";

  if (prop.genero === "hombre") inputGeneroH.checked = true;
  else inputGeneroM.checked = true;
}

function guardarNuevoPropietario() {
  if (inputNombre.value === "" || inputApellidos.value === "" || inputUF.value === "none") {
    alert("Rellena todos los campos obligatorios");
    return;
  }

  let planta = parseInt(inputPlanta.value);
  let puerta = parseInt(inputPuerta.value);

  let miembros =
    inputUF.value === "soltero" ? 1 :
    inputUF.value === "pareja" ? 2 :
    inputUF.value === "familia-1" ? 3 : 4;

  let propietario = {
    nombre: inputNombre.value + " " + inputApellidos.value,
    genero: inputGeneroH.checked ? "hombre" : "mujer",
    miembros: miembros,
  };

  miEdificio.agregaPropietario(propietario, planta, puerta);
  formulario.style.display = "none";
  creaEdificio();
}

function modificarPropietario() {
  guardarNuevoPropietario();
}
