//"configuracion ESmodules 2611"

import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search);
const id= parseInt(params.get('id'));

const mipersonaje = comic.personajes.find(c => c.id === id);
console.log("el personaje escontrado es :", mipersonaje);


const personajes= document.querySelector('.container-personaje');

console.log (mipersonaje.nombre);

personajes.innerHTML= `
      div class="ficha-personaje">
     <div class="ficha-contenido">

    
      <div class="ficha-datos">
      <h2 class="titulo-personaje">${mipersonaje.nombre}</h2>

      <div class="bloque-datos">
        <h3>Nombre real:</h3>
        <p>Rodolfo Aicardi</p>
      </div>

      <div class="bloque-datos">
        <h3>Ocupación:</h3>
        <p>Cantante – Protagonista de la historia</p>
      </div>

      <div class="bloque-datos">
        <h3>rol:</h3>
        <p>Talento musical que inspira generaciones.</p>
      </div>

     
    </div>
  `;  
