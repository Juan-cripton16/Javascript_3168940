
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
        <button class="vercapitulo">ver capitulo</button>
        </div>
       `;
       capitulos.appendChild(div);
}      );