let score = 0;
    const scoreText = document.querySelector("#score");

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