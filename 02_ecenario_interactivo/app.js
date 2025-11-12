// ==============================
// 🎮 JUEGO 1: MARIO
// ==============================
let score = 0;
const scoreText = document.querySelector("#score-mario");

const moneda = document.querySelector(".moneda");
const seta = document.querySelector(".seta");
const caja = document.querySelector(".caja");
const muni = document.querySelector(".muni");
const sonidoMoneda = document.querySelector("audio");

moneda.addEventListener("click", () => {
  score += 10;
  scoreText.textContent = score;
  moneda.style.display = "none";
  sonidoMoneda.play();
});

seta.addEventListener("click", () => {
  score += 15;
  scoreText.textContent = score;
  seta.style.display = "none";
  sonidoMoneda.play();
});

caja.addEventListener("click", () => {
  score += 20;
  scoreText.textContent = score;
  caja.style.display = "none";
  sonidoMoneda.play();  
});

muni.addEventListener("click", () => {
  score += 20;
  scoreText.textContent = score;
  muni.style.display = "none";
  sonidoMoneda.play();
});

// ==============================
// ⚽ JUEGO 2: FÚTBOL
// ==============================
let score2 = 0;
const scoreText2 = document.querySelector("#score-futbol");
const balon = document.querySelector(".balon");
const cabezones = document.querySelectorAll(".saltarcabezones");
const sonidoBalon = document.querySelectorAll("audio")[1];

balon.addEventListener("click", () => {
  score2 += 10;
  scoreText2.textContent = score2;
  balon.style.display = "none";
  sonidoBalon.play(); 
});

cabezones.forEach((cabezon) => {
  cabezon.addEventListener("click", () => {
    score2 += 5;
    scoreText2.textContent = score2;
    cabezon.style.display = "none";
    sonidoBalon.play();
  });
});

// ==============================
// 🥊 JUEGO 3: PELEA
// ==============================
let score3 = 0;
const scoreText3 = document.querySelector("#score-pelea");
const enemigo = document.querySelector(".enemigo");
const poderes = document.querySelectorAll(".poder");
const sonidoKo = document.querySelectorAll("audio")[2];
const sonidoPoderes = document.querySelectorAll("audio")[3];

enemigo.addEventListener("click", () => {
  score3 += 20;
  scoreText3.textContent = score3;
  enemigo.style.display = "none";
  sonidoKo.play();
});

poderes.forEach((poder) => {
  poder.addEventListener("click", () => {
    score3 += 10;
    scoreText3.textContent = score3;
    poder.style.display = "none";
    sonidoPoderes.play();
  });
});

// ==============================
// 🔁 NAVEGACIÓN ENTRE ESCENAS
// ==============================
const escenas = document.querySelectorAll(".escena");
const btnSiguiente = document.querySelector(".siguiente");
const btnAnterior = document.querySelector(".anterior");
const miniaturas = document.querySelectorAll(".miniaturas img");

let escenaActual = 0;

// Mostrar una escena por índice
function mostrarEscena(index) {
  escenas.forEach((escena, i) => {
    escena.style.display = i === index ? "block" : "none";
  });
  escenaActual = index;
}

// Mostrar la primera escena al cargar
mostrarEscena(0);

// Botón siguiente
btnSiguiente.addEventListener("click", () => {
  if (escenaActual < escenas.length - 1) {
    mostrarEscena(escenaActual + 1);
  }
});

// Botón anterior
btnAnterior.addEventListener("click", () => {
  if (escenaActual > 0) {
    mostrarEscena(escenaActual - 1);
  }
});

// Miniaturas (saltan directo a la escena)
miniaturas.forEach((mini, index) => {
  mini.addEventListener("click", () => {
    mostrarEscena(index);
  });
});

  
