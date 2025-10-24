const items = document.querySelectorAll(".item");
const contador = document.getElementById("contador");
let puntos = 0;

    items.forEach(item => {
      item.addEventListener("click", () => {
        puntos += 10;
        contador.textContent = puntos;
        item.style.animation = "salto 0.5s ease forwards";

        // Hace desaparecer el objeto y reaparecer
        setTimeout(() => item.style.opacity = "0", 300);
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.animation = "none";
        }, 1500);
      });
    });