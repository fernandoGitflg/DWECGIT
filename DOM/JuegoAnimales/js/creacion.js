window.addEventListener('load',iniciarPagina);
let efectos = [
	"rota", 
	"grande", 
	"pequenio", 
	"baja", 
	"def"
];
let animales =
[
	"cerdo",
	"zorro",
	"burro",
	"leon"
];
function iniciarPagina(){
	let divAnimales = document.createElement("DIV");
	divAnimales.setAttribute("id", "animales");
	document.body.appendChild(divAnimales);
	animales.forEach(animal => {
		let divAnimal = document.createElement("DIV");
		divAnimal.setAttribute("id", `${animal}`);
		divAnimal.setAttribute("class", "animal");
		divAnimal.setAttribute("style", `background-image: url("images/${animal}.png")`);
		divAnimal.addEventListener("click", efectoMovimiento)
		divAnimales.appendChild(divAnimal);
	});
	let audio = document.createElement("audio");
	audio.setAttribute("id", "audio");
	audio.setAttribute("preload", "auto");
	let source = document.createElement("source");
	audio.setAttribute("id", "source");
	audio.setAttribute("type", "audio/wav");
	audio.appendChild(source);
	divAnimales.appendChild(audio);
}
function reproducirSonido(animal) {
	let audio = document.querySelector("source");
	audio.setAttribute("src", `sounds/${animal}.wav`)
	audio.load();
	audio.play();
}
function efectoMovimiento(event) {
	let divAnimal = document.getElementById(event.target.id);
	divAnimal.className = "animal";
	let efecto = efectos[Math.floor(Math.random() * efectos.length)];
	divAnimal.classList.add(efecto);
	reproducirSonido(divAnimal.id);
}