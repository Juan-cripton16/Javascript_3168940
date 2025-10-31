let score = 0;
    const scoreText = document.querySelector("#score-mario");

    const moneda = document.querySelector(".moneda");
    const seta = document.querySelector(".seta");
    const caja = document.querySelector(".caja");
    const muni = document.querySelector(".muni");
    moneda.addEventListener("click", () => {
      score += 10;
      scoreText.textContent = score;
      moneda.style.display="none"
    });

    seta.addEventListener("click", () => {
      score += 15;
      scoreText.textContent = score;
      seta.style.display="none"
    });

    caja.addEventListener("click", () => {
      score += 20;
      scoreText.textContent = score;
      caja.style.display="none"
    });

    muni.addEventListener("click", () => {
      score += 20;
      scoreText.textContent = score;
      muni.style.display="none"
    });

  

// Juego 2: Caza de objetos 
let score2 = 0;
const scoreText2 = document.querySelector("#score-futbol");
const balon = document.querySelector(".balon");
    

    balon.addEventListener("click", () => {
      score += 10;
      scoreText.textContent = score;
      balon.style.display="none"
    });




// Juego 3: Contador de puntos
let score3 = 0; 
const scoreText3 = document.querySelector("#score-pelea");
const enemigo = document.querySelector(".enemigo");
    enemigo.addEventListener("click", () => {
      score += 10;
      scoreText.textContent = score;
      enemigo.style.display="none"
    });
const poder = document.querySelector(".poder");
    poder.addEventListener("click", () => {
      score += 10;
      scoreText.textContent = score;
      poder.style.display="none"
    }








);
const items = document.querySelectorAll(".item");
const contador = document.querySelectorAll("contador");
let puntos = 0;
items.forEach((item) => {
  item.addEventListener("click", () => {
    puntos++;
    contador.textContent = puntos;
    item.style.display = "none";
  });
});   

// Navegación entre escenas
const escenas = document.querySelectorAll(".escena");
const btnSiguiente = document.querySelector(".siguiente");
const btnAnterior = document.querySelector(".anterior");
const miniaturas = document.querySelectorAll(".miniatura");

let escenaActual = 0;

function mostrarEscena(index) {
  escenas.forEach((escena, i) => {
    escena.style.display = i === index ? "block" : "none";
  });
}

btnSiguiente.addEventListener("click", () => {
  if (escenaActual < escenas.length - 1) {
    escenaActual++;
    mostrarEscena(escenaActual);
  }
});

btnAnterior.addEventListener("click", () => {
  if (escenaActual > 0) {
    escenaActual--;
    mostrarEscena(escenaActual);
  }
});

// Mostrar la primera escena al cargar la página
mostrarEscena(escenaActual);

index = 0;

miniaturas.forEach((miniatura, index) => {
  miniatura.addEventListener("click", () => {
    escenaActual = index;
    mostrarEscena(escenaActual);
  });
});





  