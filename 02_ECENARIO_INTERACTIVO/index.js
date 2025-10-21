const moneda=document.querySelectorAll(".moneda")
const tablero=document.querySelectorAll("#puntaje")
let counter= 0

moneda.forEach(Item=> {
    Item.style.filter = "grayscale(1)"

    Item.addEventListener("click",() =>{
       Item.style.filter = "grayscale(1)"
       Item.classList.add("saltarmoneda")
    })

});