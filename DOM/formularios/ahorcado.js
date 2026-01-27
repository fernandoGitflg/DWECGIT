let div1 = document.getElementById("jugador1");
let div2 = document.getElementById("jugador2");
let formulario = document.querySelector("form");
let palabra;
let intentos;
let letras;
let aciertos;
let letra;
let solucion;
let formularioLetras;
let formularioSolucion;
formulario.addEventListener("submit", function (e) {
    palabra = document.querySelector("input[name='palabra']").value;
    formulario.remove();
    console.log(palabra);
    intentos = document.createElement("p");
    intentos.textContent = "0"
    intentos.id = "intentos";
    letras = document.createElement("p");
    letras.id = "letras";
    aciertos = document.createElement("p");
    aciertos.id = "aciertos";
    let guiones = "";
    for (let i = 0; i < palabra.length; i++) {
        guiones += "_";
    }
    aciertos.textContent = guiones;
    div1.appendChild(intentos);
    div1.appendChild(document.createElement("hr"));
    div1.appendChild(letras);
    div1.appendChild(document.createElement("hr"));
    div1.appendChild(aciertos);
    caja2();
});

function caja2() {
    let lineas = div2.querySelectorAll("hr");
    lineas.forEach(hr => hr.remove());
    let h1 = document.createElement("h1");
    h1.textContent = "Jugador 2";
    let select = document.createElement("select");
    select.id = "selectorLetras";
    for (let i = 65; i <= 90; i++) {
        let letra = String.fromCharCode(i);
        let option = document.createElement("option");
        option.value = letra;
        option.textContent = letra;
        select.appendChild(option);
    }
    formularioLetras = document.createElement("form");
    formularioSolucion = document.createElement("form");
    let enviar = document.createElement("input");
    enviar.type = "submit";
    enviar.value = "Probar letra";
    let labelSol = document.createElement("label");
    labelSol.textContent = "Introduce tu solución";
    let inputSol = document.createElement("input");
    inputSol.type = "text";
    inputSol.id = "solucion";
    let enviarSol = document.createElement("input");
    enviarSol.type = "submit";
    enviarSol.value = "Resolver";
    formularioLetras.appendChild(select);
    formularioLetras.appendChild(enviar);
    formularioLetras.appendChild(document.createElement("br"));
    formularioLetras.appendChild(document.createElement("br"));
    formularioSolucion.appendChild(labelSol);
    formularioSolucion.appendChild(inputSol);
    formularioSolucion.appendChild(document.createElement("br"));
    formularioSolucion.appendChild(enviarSol);
    div2.appendChild(h1);
    div2.appendChild(formularioLetras);
    div2.appendChild(formularioSolucion);
    formularioLetras.addEventListener("submit", function (e) {
        e.preventDefault();
        let letraSeleccionada = document.getElementById("selectorLetras").value;
        let numIntentos = parseInt(intentos.textContent);
        numIntentos++;
        intentos.textContent = numIntentos;
        letras.textContent += letraSeleccionada + " ";
        let estadoActual = aciertos.textContent.split("");
        for (let i = 0; i < palabra.length; i++) {
            if (palabra[i].toUpperCase() === letraSeleccionada) {
                estadoActual[i] = letraSeleccionada;
            }
        }
        if (numIntentos == 5) {
            formularioLetras.querySelector("input[type='submit']").disabled = true;
        }
        aciertos.textContent = estadoActual.join("");
    });
    formularioSolucion.addEventListener("submit", function (e) {
        e.preventDefault();
        let intentoSolucion = document.getElementById("solucion").value.toUpperCase();
        if (intentoSolucion === palabra.toUpperCase()) {
            Swal.fire({
                title: "¡Correcto!",
                text: "Has adivinado la palabra",
                icon: "success"
            });
            formularioLetras.querySelector("input[type='submit']").disabled = true;
            formularioSolucion.querySelector("input[type='submit']").disabled = true;
        } else {
            Swal.fire({
                title: "Incorrecto",
                text: "Esa no es la palabra",
                icon: "error"
            });
            formularioLetras.querySelector("input[type='submit']").disabled = true;
            formularioSolucion.querySelector("input[type='submit']").disabled = true;
        }
    });

}

