const filas = 8; 
const columnas = 8; 
const tabla = document.createElement("table"); 
tabla.style.border = "1"; 
for (let i = 0; i < filas; i++) { 
    const tr = document.createElement("tr"); 
    for (let j = 0; j < columnas; j++) { 
        const td = document.createElement("td"); 
        td.textContent = `${i},${j}`; 
        tr.appendChild(td); 
    } 
    tabla.appendChild(tr); 
}
document.getElementById("contenedor-tabla").appendChild(tabla);