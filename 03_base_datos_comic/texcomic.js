const infocomic = document.querySelector('.info-comic');
const personajes = document.querySelector('.card-personajes');

console.log(personajes);
console.log(infocomic);



infocomic.innerHTML = `
       <small>${comic.years}</small>
       <h1>${comic.nombrecomic}</h1>
       <p>${comic.sinopsis}</p>
       <p>${comic.genero}</p>
       `

       

personajes.innerHTML = `
       <div class="personajes">
           <img src="${comic.personajes[0].imagen}" alt="">
           <p>${comic.personajes[0].nombre}</p>
           <p>${comic.personajes[0].descripcion}</p>
       </div>

       <div class="personajes"> 
              <img src="${comic.personajes[1].imagen}" alt="">
              <p>${comic.personajes[1].nombre}</p>
              <p>${comic.personajes[1].descripcion}</p>
       </div>        
       <div class="personajes">
              <img src="${comic.personajes[2].imagen}" alt="">
              <p>${comic.personajes[2].nombre}</p>
              <p>${comic.personajes[2].descripcion}</p>
       </div>        
       `                                        


comic.personajes.forEach(char=> {
       console.log(char.nombre);
       document.ody.innerHTML += `<img src="${char.imagen}" with="200">`
});    