//"configuracion ESmodules 2611"

import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search);
const id= parseInt(params.get('id'));

const mipersonaje = comic.personajes.find(p => p.id === id);
console.log("el personaje escontrado es :", mipersonaje);


const personajes= document.querySelector('.container');

console.log (mipersonaje.nombre);


personajes.innerHTML= `
      <div class="ficha-personaje">
      <div class="ficha-contenido">

    
      <div class="ficha-datos">
      <h2 class="titulo-personaje">${mipersonaje.nombre}</h2>

      <div class="bloque-datos">
        <h3>Nombre real:</h3>
        <p>${mipersonaje.nombre}</p>
      </div>

      <div class="bloque-datos">
        <h3>Ocupación:</h3>
        <p>${mipersonaje.descripcion}</p>
      </div>

      <div class="bloque-datos">
        <h3>rol:</h3>
        <p>${mipersonaje.descripcion}</p>
      </div>

     
    </div>

    <div class="ficha-imagen">
      <img src="${mipersonaje.imagen}" alt="${mipersonaje.nombre}">
    </div>
  `;  
