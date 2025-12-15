// Mostrar una pantalla principal (login / app)
function mostrarPantallaPrincipal(idPantalla) {
    const pantallas = document.querySelectorAll('.pantalla');
    pantallas.forEach(p => p.classList.add('oculto'));

    const pantallaSeleccionada = document.getElementById(idPantalla);
    if (pantallaSeleccionada) {
        pantallaSeleccionada.classList.remove('oculto');
    }
}

// Mostrar subpantalla dentro de la app (empresas, alumnos, etc.)
function mostrarSubpantalla(idSubpantalla) {
    const subpantallas = document.querySelectorAll('.subpantalla');
    subpantallas.forEach(s => s.classList.remove('visible'));

    const subpantallaSeleccionada = document.getElementById('pantalla-' + idSubpantalla);
    if (subpantallaSeleccionada) {
        subpantallaSeleccionada.classList.add('visible');
    }
}

// MANEJO DEL LOGIN (simulado)
const formLogin = document.getElementById('form-login');
const loginError = document.getElementById('login-error');
const usuarioLogueadoSpan = document.getElementById('usuario-logueado');

formLogin.addEventListener('submit', function (e) {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value.trim();
    const password = document.getElementById('password').value.trim();

    // Login muy simple: si ambos campos tienen algo, entra.
    if (usuario !== '' && password !== '') {
        loginError.classList.add('oculto');
        usuarioLogueadoSpan.textContent = usuario;

        // Ir a la app
        mostrarPantallaPrincipal('pantalla-app');

        // Mostrar por defecto la lista de empresas
        mostrarSubpantalla('empresas-lista');
    } else {
        loginError.classList.remove('oculto');
    }
});

// Cerrar sesión
const btnLogout = document.getElementById('btn-logout');
btnLogout.addEventListener('click', function () {
    // Limpiar campos
    document.getElementById('usuario').value = '';
    document.getElementById('password').value = '';

    mostrarPantallaPrincipal('pantalla-login');
});

// MENÚ PRINCIPAL: cambiar entre subpantallas
const botonesMenu = document.querySelectorAll('.menu-btn');
botonesMenu.forEach(boton => {
    boton.addEventListener('click', function () {
        const pantalla = this.getAttribute('data-pantalla');
        mostrarSubpantalla(pantalla);
    });
});

// LISTA DE EMPRESAS → abrir formulario de empresa
const btnNuevaEmpresa = document.getElementById('btn-nueva-empresa');
const botonesVerEmpresa = document.querySelectorAll('.btn-ver-empresa');
const tituloEmpresaForm = document.getElementById('titulo-empresa-form');
const mensajeEmpresaGuardada = document.getElementById('mensaje-empresa-guardada');

// Nueva empresa
btnNuevaEmpresa.addEventListener('click', function () {
    tituloEmpresaForm.textContent = 'Nueva empresa';
    limpiarFormularioEmpresa();
    mensajeEmpresaGuardada.classList.add('oculto');
    mostrarSubpantalla('empresa-form');
});

// Ver / editar empresa (ejemplo muy simple, sin datos reales)
botonesVerEmpresa.forEach(boton => {
    boton.addEventListener('click', function () {
        const idEmpresa = this.getAttribute('data-id');

        tituloEmpresaForm.textContent = 'Editar empresa ' + idEmpresa;

        // Aquí podrías cargar datos reales con JS más avanzado.
        // De momento, simplemente rellenamos unos campos de ejemplo:
        document.getElementById('empresa-nombre').value = 'Empresa Ejemplo ' + idEmpresa;
        document.getElementById('empresa-estado').value = 'contactada';
        document.getElementById('empresa-localidad').value = 'Valladolid';

        mensajeEmpresaGuardada.classList.add('oculto');
        mostrarSubpantalla('empresa-form');
    });
});

// Volver a la lista de empresas
const btnVolverEmpresas = document.getElementById('btn-volver-empresas');
btnVolverEmpresas.addEventListener('click', function () {
    mostrarSubpantalla('empresas-lista');
});

// Guardar empresa (simulado)
const formEmpresa = document.getElementById('form-empresa');
formEmpresa.addEventListener('submit', function (e) {
    e.preventDefault();
    mensajeEmpresaGuardada.classList.remove('oculto');
    // Aquí podrías hacer algo más, como guardar en localStorage, etc.
});

// Limpiar formulario empresa
function limpiarFormularioEmpresa() {
    formEmpresa.reset();
}

// FORM ALUMNOS (simulado)
const formAlumnos = document.getElementById('form-alumnos');
const mensajeAlumnosGuardado = document.getElementById('mensaje-alumnos-guardado');

formAlumnos.addEventListener('submit', function (e) {
    e.preventDefault();
    mensajeAlumnosGuardado.classList.remove('oculto');
});