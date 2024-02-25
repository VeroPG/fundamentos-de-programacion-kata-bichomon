console.log(document.title);


//Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon"
    document.getElementById("gen-1").innerHTML="Generasión 1 Pokimo"

//Cambia el color de fondo de la primera generación de Pokimon.
let fondo2 = document.querySelector(".infocard-list")
fondo2.style.background = "lightblue" 

//Imprime por consola la URL de la página.
console.log(location.pathname);
console.log(window.location.pathname)

//Imprime por consola el dominio de la página.
console.log(window.location.host)

//Imprime todos los nodos de imagen.

let nodosImagen = document.querySelectorAll("img");
console.log(nodosImagen.length);

//Sustituye el atributo "src" de todas las imágenes por este:"https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

const source = document.querySelectorAll("img");

for (const img of source) {
  img.setAttribute(
    "src",
    "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
  );
}

//Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying



function cambiarColor() {
  let elements = document.querySelectorAll(".infocard-lg-data.text-muted")
  for (let i = 0; i < elements.length; i++) {
      const el=elements[i].querySelector(".flying");
      if (el!=undefined) {
          el.style.background = "red";
      }
  }
}

cambiarColor();