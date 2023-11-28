// Obtén el encabezado y la imagen
var header = document.getElementById("main-header");
var logo = document.getElementById("logo");

// Función para manejar el evento de desplazamiento
window.onscroll = function () {
  // Obtén la posición de desplazamiento actual
  var scrollPos = window.scrollY;

  // Cambia el tamaño de la imagen y el color de fondo del encabezado al hacer scroll
  if (scrollPos > 100) {
    header.style.position = "fixed";
    header.style.backgroundColor = "#5499F8"; // Cambia el color de fondo a rojo
    header.style.padding = "10px"; // Ajusta el padding si es necesario
    logo.style.margin = "0px";
    logo.style.maxWidth = "100px"; // Cambia el tamaño de la imagen
  } else {
    logo.style.margin = "0px"; // Restaura el color de fondo original
    header.style.background =
      "linear-gradient(180deg, #5499F8 0%, #5499F8 87.91%, rgba(84, 153, 248, 0.00) 100%)";
    logo.style.maxWidth = "100%"; // Restaura el tamaño de la imagen original
  }
};

// Obtén las referencias a los elementos
let cards = document.querySelectorAll(".spidersCards");

// Función para verificar si un elemento está en el viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para manejar el scroll
function handleScroll() {
  cards.forEach((card) => {
    if (isElementInViewport(card)) {
      card.classList.add("visible");
    }
    if (window.scrollY > 3000 || window.scrollY < 1000) {
      card.classList.remove("visible");
    }
  });
}

// Adjunta el evento de scroll
window.addEventListener("scroll", handleScroll);

// Llama a handleScroll al cargar la página para verificar los elementos iniciales
// Asumiendo que tienes un array de datos de cards

// Resto del código...

// Cambiar la imagen de la columna de imagen al hacer scroll
const imagenSticky = document.getElementById("imagenSticky");

const src1 = "./img/image 21 (1).png";
const src2 = "./img/image 9.png";
const src3 = "./img/image 10 (1).png";
const src4 = "./img/image 6.png";

let cardContainer = document.getElementById("cardsContainer");
let section = document.querySelector(".masAmigosMAsDiversion");
let c1, c2, c3, c4;
c1 = document.getElementById("c1");
c2 = document.getElementById("c2");
c3 = document.getElementById("c3");
c4 = document.getElementById("c4");

section.addEventListener("scroll", () => {
  let scrollPos = section.scrollTop;
  console.log(scrollPos);
  if (scrollPos < 100) {
    imagenSticky.src = src1;
    c1.classList.add("active");
    c2.classList.remove("active");
    c1.style.opacity = 1;

    // }
  }
  if (scrollPos >= 100 && scrollPos < 300) {
    // Cambiar la imagen al hacer scroll
    imagenSticky.src = src2;
    c1.classList.remove("active");
    c3.classList.remove("active");

    c1.style.opacity = 0;

    c2.classList.add("active");
    console.log(c1.style.width);

    // cardContainer.innerHTML = card2;
  }
  if (scrollPos >= 300 && scrollPos < 500) {
    // Restaurar la imagen original
    imagenSticky.src = src3;
    // cardContainer.innerHTML = card3;
    c2.classList.remove("active");
    c3.classList.add("active");
  }

  if (scrollPos >= 500 && scrollPos < 700) {
    imagenSticky.src = src4;
    c3.classList.remove("active");
    c4.classList.add("active");
  }
});
