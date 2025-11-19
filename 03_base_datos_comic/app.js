
const personajes = document.querySelector('.container-personajes');



comic.personajes.forEach(char=> {
       const div = document.createElement('div');
       div.classList.add('personaje');
       div.innerHTML = `
              <div class="imagen">
          <img src="${char.imagen}" alt="">
        </div>
        <h3 class="${char.nombre}"></h3>
        <p class="${char.descripcion}">
          
        </p>
       `;
       personajes.appendChild(div);
});          