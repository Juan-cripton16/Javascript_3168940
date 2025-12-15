//"configuracion ESmodules 2611"

import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search);
const id= parseInt(params.get('id'));

if (!id) {
  window.location.href = 'index.html';
}

const micapitulo = comic.capitulos.find(c => c.id === id);
console.log("el capitulo encontrado es :", micapitulo);

const capitulos= document.querySelector('.container');

console.log (micapitulo.nombre);

capitulos.innerHTML= `
      <a href="index.html" class="btn-inicio">⬅ Volver al inicio</a>
      <div class="detalle">
        <h3 class="nombre">${micapitulo.nombre}</h3>
        <h3 class="nombre">${micapitulo.genero}</h3>
        <h3 class="nombre">${micapitulo.years}</h3>
        <h3 class="nombre">${micapitulo.autores}</h3>
        <h4></h4>
        


       <video  class="video" width="600" height="400" autoplay muted >
       <source src="video.mp4" type="video/mp4">
       <source src="video.mp4" type="video/webm">
       </video>
       <p class="descripcion">
       ${micapitulo.descripcion}
       </p>
     </div>
  `;   