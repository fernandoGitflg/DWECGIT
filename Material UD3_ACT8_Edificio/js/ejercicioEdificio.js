var inquilinosImportar = [
  { piso: 3, puerta: 1, nombre: "Gustavo Ramírez", genero: "hombre", miembros: 5 },
  { piso: 2, puerta: 1, nombre: "María Pérez", genero: "mujer", miembros: 1 },
  { piso: 2, puerta: 2, nombre: "Manuel González", genero: "hombre", miembros: 1 },
  { piso: 2, puerta: 3, nombre: "Pepa Fernández", genero: "mujer", miembros: 3 },
  { piso: 1, puerta: 1, nombre: "Asterio Gómez", genero: "hombre", miembros: 2 },
];

var miEdificio = new Edificio("Uría", 2, "33012");

// Crear estructura del edificio
miEdificio.agregaPlantasYPuertas(1, 1); // Planta 1 → 1 puerta
miEdificio.agregaPlantasYPuertas(1, 3); // Planta 2 → 3 puertas
miEdificio.agregaPlantasYPuertas(1, 1); // Planta 3 → 1 puerta

window.addEventListener("load", cargaPagina);

function cargaPagina() {
  cargaInquilinos();
  creaEdificio();
  cargaManejadores();
}

/* ============================================================
   1. CARGA INQUILINOS
   ============================================================ */
function cargaInquilinos() {
  inquilinosImportar.map((inq) => {
    const propietario = {
      nombre: inq.nombre,
      genero: inq.genero,
      miembros: inq.miembros,
    };

    const planta = inq.piso - 1;
    const puerta = inq.puerta - 1;

    miEdificio.agregaPropietario(propietario, planta, puerta);
  });
}

/* ============================================================
   2. CREAR EDIFICIO EN EL DOM
   ============================================================ */
function creaEdificio() {
  const edificioExistente = document.querySelector(".edificio");
  if (edificioExistente) edificioExistente.remove();

  const contenedor = document.createElement("div");
  contenedor.classList.add("edificio");

  const titulo = document.createElement("h1");
  titulo.textContent = `C/ ${miEdificio.getCalle()} nº ${miEdificio.getNumero()}. ${miEdificio.getCodigoPostal()}`;
  contenedor.appendChild(titulo);

  const divPisos = document.createElement("div");
  divPisos.classList.add("pisos");

  const numPlantas = miEdificio.getNumeroPlantas();

  for (let p = 0; p < numPlantas; p++) {
    const divPlanta = document.createElement("div");
    divPlanta.classList.add("planta");

    const numPuertas = miEdificio.getNumeroPuertas(p);

    let claseCol = "col-4";
    if (numPuertas === 2) claseCol = "col-2";
    if (numPuertas === 1) claseCol = "col-1";

    for (let pu = 0; pu < numPuertas; pu++) {
      const propietario = miEdificio.getPropietario(p, pu);

      const divProp = document.createElement("div");
      divProp.classList.add("propietario", claseCol);
      divProp.dataset.planta = p;
      divProp.dataset.puerta = pu;

      if (propietario) {
        const pNombre = document.createElement("p");
        pNombre.textContent = propietario.nombre;
        divProp.appendChild(pNombre);

        const img = document.createElement("img");
        img.src = obtenerImagen(propietario);
        divProp.appendChild(img);

        const divBotones = document.createElement("div");
        divBotones.classList.add("botones");

        const btnMod = document.createElement("button");
        btnMod.classList.add("modificar");
        btnMod.textContent = "Modificar";

        const btnBor = document.createElement("button");
        btnBor.classList.add("borrar");
        btnBor.textContent = "Borrar";

        divBotones.appendChild(btnMod);
        divBotones.appendChild(btnBor);
        divProp.appendChild(divBotones);

      } else {
        const pVacio = document.createElement("p");
        pVacio.textContent = "Vacío";
        divProp.appendChild(pVacio);

        const img = document.createElement("img");
        img.src = "img/vacio.jpg";
        divProp.appendChild(img);

        const divBotones = document.createElement("div");
        divBotones.classList.add("botones");

        const btnAdd = document.createElement("button");
        btnAdd.classList.add("aniadir");
        btnAdd.textContent = "Añadir";

        divBotones.appendChild(btnAdd);
        divProp.appendChild(divBotones);
      }

      divPlanta.appendChild(divProp);
    }

    divPisos.appendChild(divPlanta);
  }

  contenedor.appendChild(divPisos);
  document.body.appendChild(contenedor);
}

/* ============================================================
   3. OBTENER IMAGEN SEGÚN FAMILIA
   ============================================================ */
function obtenerImagen(prop) {
  if (prop.miembros === 1) {
    return prop.genero === "hombre" ? "img/hombre.jpg" : "img/mujer.jpg";
  }
  if (prop.miembros === 2) return "img/pareja.jpg";
  if (prop.miembros === 3) return "img/familia-1.jpg";
  return "img/familia-2.jpg";
}

/* ============================================================
   4. MANEJADORES DE EVENTOS
   ============================================================ */
function cargaManejadores() {
  document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("borrar")) borrarPropietario(e);
    if (e.target.classList.contains("aniadir")) abrirFormularioAñadir(e);
    if (e.target.classList.contains("modificar")) abrirFormularioModificar(e);
  });

  document.getElementById("formulario-borrar").addEventListener("click", function (e) {
    e.preventDefault();
    cerrarFormulario();
  });

  document.getElementById("formulario-aniadir").addEventListener("click", guardarNuevoPropietario);
  document.getElementById("formulario-modificar").addEventListener("click", guardarModificacion);
}

/* ============================================================
   5. BORRAR PROPIETARIO
   ============================================================ */
function borrarPropietario(e) {
  const divProp = e.target.closest(".propietario");
  const planta = parseInt(divProp.dataset.planta);
  const puerta = parseInt(divProp.dataset.puerta);

  miEdificio.borrarPropietario(planta, puerta);
  creaEdificio();
}

/* ============================================================
   6. FORMULARIO AÑADIR
   ============================================================ */
function abrirFormularioAñadir(e) {
  const divProp = e.target.closest(".propietario");

  document.getElementById("planta").value = parseInt(divProp.dataset.planta) + 1;
  document.getElementById("puerta").value = parseInt(divProp.dataset.puerta) + 1;

  document.getElementById("formulario-aniadir").disabled = false;
  document.getElementById("formulario-modificar").disabled = true;

  document.getElementById("formulario").style.display = "block";
}

function guardarNuevoPropietario(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const apellidos = document.getElementById("apellidos").value.trim();
  const unidad = document.getElementById("unidad-familiar").value;
  const genero = document.querySelector("input[name='genero']:checked").value;

  if (!nombre || !apellidos || unidad === "none") return;

  const miembros = convertirUnidadFamiliar(unidad);

  const propietario = {
    nombre: `${nombre} ${apellidos}`,
    genero,
    miembros,
  };

  const planta = parseInt(document.getElementById("planta").value) - 1;
  const puerta = parseInt(document.getElementById("puerta").value) - 1;

  miEdificio.agregaPropietario(propietario, planta, puerta);

  cerrarFormulario();
  creaEdificio();
}

/* ============================================================
   7. FORMULARIO MODIFICAR
   ============================================================ */
function abrirFormularioModificar(e) {
  const divProp = e.target.closest(".propietario");
  const planta = parseInt(divProp.dataset.planta);
  const puerta = parseInt(divProp.dataset.puerta);

  const prop = miEdificio.getPropietario(planta, puerta);

  const [nombre, ...apellidos] = prop.nombre.split(" ");

  document.getElementById("nombre").value = nombre;
  document.getElementById("apellidos").value = apellidos.join(" ");

  document.getElementById("unidad-familiar").value = convertirMiembrosUnidad(prop.miembros);
  document.querySelector(`input[value="${prop.genero}"]`).checked = true;

  document.getElementById("planta").value = planta + 1;
  document.getElementById("puerta").value = puerta + 1;

  document.getElementById("formulario-aniadir").disabled = true;
  document.getElementById("formulario-modificar").disabled = false;

  document.getElementById("formulario").style.display = "block";
}

function guardarModificacion(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const apellidos = document.getElementById("apellidos").value.trim();
  const unidad = document.getElementById("unidad-familiar").value;
  const genero = document.querySelector("input[name='genero']:checked").value;

  const miembros = convertirUnidadFamiliar(unidad);

  const propietario = {
    nombre: `${nombre} ${apellidos}`,
    genero,
    miembros,
  };

  const planta = parseInt(document.getElementById("planta").value) - 1;
  const puerta = parseInt(document.getElementById("puerta").value) - 1;

  miEdificio.agregaPropietario(propietario, planta, puerta);

  cerrarFormulario();
  creaEdificio();
}

/* ============================================================
   8. UTILIDADES
   ============================================================ */
function cerrarFormulario() {
  document.getElementById("formulario").style.display = "none";
  document.getElementById("nombre").value = "";
  document.getElementById("apellidos").value = "";
  document.getElementById("unidad-familiar").value = "none";
}

function convertirUnidadFamiliar(valor) {
  switch (valor) {
    case "soltero": return 1;
    case "pareja": return 2;
    case "familia-1": return 3;
    case "familia-2": return 4;
    case "familia-mas": return 5;
  }
}

function convertirMiembrosUnidad(miembros) {
  if (miembros === 1) return "soltero";
  if (miembros === 2) return "pareja";
  if (miembros === 3) return "familia-1";
  if (miembros === 4) return "familia-2";
  return "familia-mas";
}
