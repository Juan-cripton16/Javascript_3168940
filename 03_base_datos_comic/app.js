import { comic } from './bd.js';

const personajes = document.querySelector('.container-personaje');
const capitulos = document.querySelector('.container-capitulos');


comic.personajes.forEach(char => {
       const div = document.createElement('div');
       div.classList.add('personaje');
       div.classList.add('descripcion-personaje');
       div.innerHTML = `
        <div class="imagen">
        <img src="${char.imagen}" alt="Rodolfo Aicardi">
        </div>
        <h3>${char.nombre}</h3>
        <p>${char.descripcion}</p>
        <a href="./personajes.html?id=${char.id}"<button class="vercapitulo">ver personajes</button></a
       `;
       personajes.appendChild(div);
});          


comic.capitulos.forEach(cap => {
       const div = document.createElement('div');
       div.classList.add('capitulos');
       div.innerHTML = `
        
        <div class="capitulo">
        <div class="imagen">
          <img src="${cap.portada}" alt="">
        </div>
        <div class="detalles-capitulo">
        <h3>${cap.nombre}</h3>
        <p>${cap.descripcion}</p>
        <p class="personajes"><strong>Personajes:</strong> ${cap.personaje}</p>
        <a href="./capitulos.html?id=${cap.id}"><button class="vercapitulo">ver capitulo</button></a
        </div>
        
       `;
       capitulos.appendChild(div);
}      );