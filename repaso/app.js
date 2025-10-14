const img = document.getElementById("photo");
const btnBN = document.getElementById("bn");
const btnBlur = document.getElementById("blur");
const btnZoom = document.getElementById("zoom");
const btnRotate = document.getElementById("rotate");

btnBN.addEventListener("click", () => {
  img.classList.toggle("bn");
});

btnBlur.addEventListener("click", () => {
  img.classList.toggle("blur");
});

btnZoom.addEventListener("click", () => {
  img.classList.toggle("zoom");
});

btnRotate.addEventListener("click", () => {
  img.classList.toggle("rotate");
});
