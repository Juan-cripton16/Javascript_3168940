
const personajes = document.querySelector('.container-personaje');
const capitulos = document.querySelector('.container-capitulo');


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
       div.classList.add('capitulo');
       div.innerHTML = `
        <div class="imagen">
          <img src="${cap.portada}" alt="">
        </div>
        <div class="info-capitulo">
          <h3>${cap.nombre}</h3>
          <p>${cap.descripcion}</p>
          <button class="vercapitulo">ver capitulo</button>
        </div>
       `;
       capitulos.appendChild(div);
}      );