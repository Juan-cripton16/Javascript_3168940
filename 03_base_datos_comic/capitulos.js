//"configuracion ESmodules 2611"

import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search);
const id= parseInt(params.get('id'));

const micapitulo = comic.capitulos.find(c => c.id === id);
console.log("el capitulo encontrados es :", micapitulo);

const capitulos= document.querySelector('.capitulos-container');

console.log (capitulos);

capitulos.innerHTML= `
        <h3 class="${micapitulo.nombre}">El Nacimiento de un Eco Musical</h3>
        <h3 class="nombre">genero:ciencia ficcion</h3>
        <h3 class="nombre">año:2025</h3>
        <h3 class="nombre">autor: juan jose</h3>
        <h4></h4>
        


      <video  class="video" width="600" height="400" autoplay muted >
       <source src="video.mp4" type="video/mp4">
       <source src="video.mp4" type="video/webm">
      </video>
      <p class="${micapitulo.descripcion}">
          El capítulo describe los inicios musicales de Rodolfo Aicardi (Marco Tulio Aicardi Rivera)
          en su natal Galeras, Sucre, su traslado a Medellín a los 15 años, y su ascenso hasta convertirse
          en un ícono de la música bailable colombiana con grupos como Los Hispanos y su orquesta La Típica RA7.
      </p> 
  
    
`;  