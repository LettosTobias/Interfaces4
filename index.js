// Obtén el encabezado y la imagen
var header = document.getElementById("main-header");
var logo = document.getElementById("logo");

// Función para manejar el evento de desplazamiento
window.onscroll = function () {
  // Obtén la posición de desplazamiento actual
  var scrollPos = window.scrollY;

  // Cambia el tamaño de la imagen y el color de fondo del encabezado al hacer scroll
  if (scrollPos > 10) {
    header.style.position = "fixed";
    header.style.height = "60px";
    header.style.backgroundColor = "#5499F8"; // Cambia el color de fondo a rojo
    logo.style.margin = "0px";
    logo.style.maxWidth = "140px"; // Cambia el tamaño de la imagen
  } else {
    logo.style.margin = "0px"; 
    header.style.height = "150px";
    header.style.background =
      "linear-gradient(180deg, #5499F8 0%, #5499F8 87.91%, rgba(84, 153, 248, 0.00) 100%)";// Restaura el color de fondo original
    logo.style.maxWidth = "100%"; // Restaura el tamaño de la imagen original
    
  }





  var posY = document.documentElement.scrollTop;
  var elem1 = document.querySelectorAll(".parallax1");
  var elem2 = document.querySelector(".parallax2");
  var duende = document.querySelector(".duendePx");

  var cardRuta1 = document.querySelector(".parallax3");
  var cardRuta2 = document.querySelector(".parallax4");
  var cardRuta3 = document.querySelector(".parallax5");



  elem1.forEach(function(elem){

    elem.style.bottom = posY * (0.4) + "px";  

  });
  

 
    elem2.style.bottom = posY * (0.05) + "px";  
    duende.style.bottom = -posY * (0.1) + "px";

    cardRuta1.style.bottom = -posY * (0.01) + "px";
    cardRuta2.style.bottom = -posY * (0.03) + "px";
    cardRuta3.style.bottom = -posY * (0.04) + "px";
      

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

=======
handleScroll();




        


let spiderRosa = document.querySelector(".spRosaDos");
let spiderRojo = document.querySelector(".spDos");
let spiderNegro = document.querySelector(".spNegroDos");
let fondo = document.querySelector(".tresSpider");
let fondo2 = document.querySelector(".skewInverso");

function spiderHover(){


  spiderRosa.style.scale = "1.3";
  spiderNegro.style.scale = "0.8";
  spiderRojo.style.scale = "0.8";


  spiderNegro.style.filter = "blur(10px)";
  spiderRojo.style.filter = "blur(10px)";

  fondo.classList.toggle('fondoRosa');
  fondo2.classList.toggle('fondoRosa2');
}    


function spiderHover2(){


  spiderRojo.style.scale = "1.3";
  spiderNegro.style.scale = "0.8";
  spiderRosa.style.scale = "0.8";


  spiderNegro.style.filter = "blur(10px)";
  spiderRosa.style.filter = "blur(10px)";

  fondo.classList.toggle('fondoAzul');
  fondo2.style.borderbottom = "20px solid #2552C8";
}    


function spiderHover3(){


  spiderNegro.style.scale = "1.3";
  spiderRojo.style.scale = "0.8";
  spiderRosa.style.scale = "0.8";


  spiderRojo.style.filter = "blur(10px)";
  spiderRosa.style.filter = "blur(10px)";

  fondo.classList.toggle('fondoNegro');
}    


>>>>>>> 0475d54b63f79f94cb57108bc00805b55594688d
