const img = document.getElementById("photo");
const btnBN = document.getElementById("bn");
const btnBlur = document.getElementById("blur");
const btnZoomRotate = document.getElementById("zoomRotate");

btnBN.addEventListener("click", () => {
  img.classList.toggle("bn");
});

btnBlur.addEventListener("click", () => {
  img.classList.toggle("blur");
});

btnZoomRotate.addEventListener("click", () => {
  img.classList.toggle("zoomRotate");
});
