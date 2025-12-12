import { comic } from './bd.js';

const personajes = document.querySelector('.container-personaje');
const capitulos = document.querySelector('.container-capitulos');
const info= document.querySelector('info fade-right');







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



const portadas = document.querySelectorAll('.carrusel-portadas img');
let index = 0;

setInterval(() => {
  portadas[index].classList.remove('activa');
  index = (index + 1) % portadas.length;
  portadas[index].classList.add('activa');
}, 4000);



const inicio = document.querySelector('#comic-principal');


comic.inicio.forEach ( ini => {
const div = document.createElement("div");
div.classList.add("inicio-comic");
div.innerHTML =  `
div class="portada fade-left">
    <div class="carrusel-portadas">
      <img src="portada.png" class="activa">
      <img src="mate.png">
      <img src="abu.png">
    </div>
  </div>

  <div class="info fade-right">
    <h1 class="titulo">${ini.nombrecomic}</h1>
    <p class="genero">${ini.genero}</p>
    <p class="autor">${ini.autores}</p>
    <p class="año">${ini.sinopsis}</p>
  </div>
             `
             inicio.appendChild(div);
});
