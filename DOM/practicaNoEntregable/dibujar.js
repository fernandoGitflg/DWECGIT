let colorSeleccionado;
let pincel=false;
let filas=30;
let columnas=30;

function inciarTablero(){
    let tabla=document.createElement("table");
    tabla.classList.add("tablerodibujo");
    for(let i=0;i<filas;i++){
        let fila = document.createElement("tr");
        for (let j = 0; j < columnas; j++) {
            let celda = document.createElement("td");
            celda.style.border = "1px solid #000";
            celda.addEventListener("click", ()=>{
                celda.className=colorSeleccionado;
                pincel = !pincel;
                actualizarEstadoPincel();
            })
            celda.addEventListener("mouseover", () =>{
                if(pincel===true){
                    celda.className=colorSeleccionado;
                }
            })
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    (document.getElementById("zonadibujo")).append(tabla);
}
function actualizarEstadoPincel(){
    let mensaje = document.getElementById("pincel");
    mensaje.textContent = pincel ? "PINCEL ACTIVADO" : "PINCEL DESACTIVADO";
}
function prepararPaleta(){
    let paleta = document.getElementById("paleta");
    let colores = paleta.querySelectorAll("td");
    colores.forEach(color => {
        color.addEventListener("click", () => {
            colores.forEach(c => c.classList.remove("seleccionado"));
            color.classList.add("seleccionado");
            colorSeleccionado = color.classList[0];
        });
    });
}

window.onload = () => {
    inciarTablero();
    prepararPaleta();
}