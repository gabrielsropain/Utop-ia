// Selección de elementos del DOM
let popupojo = document.getElementById("boton-img-izquierda-arriba");
let ventanaojo = document.getElementsByClassName("ventana-ojo");
let botoncerrarojo = document.getElementById("boton-cerrar-ojo");
let popupcalavera = document.getElementById("boton-img-izquierda-medio");
let ventanacalavera = document.getElementsByClassName("ventana-calavera");
let popupcerebro = document.getElementById("boton-img-izquierda-abajo")
let ventanacerebro = document.getElementsByClassName("ventana-cerebro");
let botoncerrarcalavera = document.getElementById("boton-cerrar-calavera");
let botoncerrarcerebro = document.getElementById("boton-cerrar-cerebro");

// Función para abrir el pop-up
popupojo.onclick = function() {
  console.log("Click para abrir pop up");
  ventanaojo[0].style.display = "block"; // Mostrar la ventana emergente
};

// Función para cerrar el pop-up
botoncerrarojo.onclick = function() {
  console.log("Se cerró el pop up");
  ventanaojo[0].style.display = "none"; // Ocultar la ventana emergente
};

popupcalavera.onclick = function() {
  console.log("Click para abrir pop up");
  ventanacalavera[0].style.display = "block"; // Mostrar la ventana emergente
};

botoncerrarcalavera.onclick = function() {
  console.log("Se cerró el pop up");
  ventanacalavera[0].style.display = "none"; // Ocultar la ventana emergente
};

popupcerebro.onclick = function() {
  console.log("Click para abrir pop up");
  ventanacerebro[0].style.display = "block"; // Mostrar la ventana emergente
};

botoncerrarcerebro.onclick = function() {
  console.log("Se cerró el pop up");
  ventanacerebro[0].style.display = "none"; // Ocultar la ventana emergente
};




// Código para la funcionalidad del juego
const chapters = [
  "Capítulo 1: Las afueras.",
  "Capítulo 2: Las maquinas",
  "Capítulo 3: Los perdidos",
  "Capítulo 4: La misión",
  "Capítulo 5: utop-IA"
];

let currentChapter = 0;
let selectedCharacter = null;

// Mostrar la selección de personajes y ocultar el prólogo
document.querySelectorAll('.character').forEach(character => {
  character.addEventListener('click', (event) => {
    selectedCharacter = event.currentTarget.dataset.character;
    document.getElementById('character-selection').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    showChapter();
  });
});

// Función para mostrar los capítulos
document.getElementById('next-chapter').addEventListener('click', () => {
  currentChapter++;
  if (currentChapter < chapters.length) {
    showChapter();
  } else {
    document.getElementById('chapter-content').innerHTML = "<p>¡Has completado el juego!</p>";
    document.getElementById('next-chapter').style.display = 'none';
  }
});

function showChapter() {
  document.getElementById('chapter-title').innerText = `Capítulo ${currentChapter + 1}`;
  document.getElementById('chapter-content').innerText = chapters[currentChapter];
}
