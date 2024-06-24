//Seteo los 4 primeros cuadrados
const setCuadrados = (id, color = "white") => {
  const ele = document.querySelector("#" + id);
  ele.style.backgroundColor = color;
};

setCuadrados("cuadrado-azul", "blue");
setCuadrados("cuadrado-rojo", "red");
setCuadrados("cuadrado-verde", "green");
setCuadrados("cuadrado-amarillo", "yellow");
setCuadrados("key");

//Cambiar color a negro cuando haya click

const setNegro = (id) => {
  const ele = document.querySelector("#" + id);
  ele.addEventListener("click", function (evt) {
    evt.target.style.backgroundColor = "black";
  });
};

setNegro("cuadrado-azul");
setNegro("cuadrado-rojo");
setNegro("cuadrado-verde");
setNegro("cuadrado-amarillo");

//Cambiar color al cuadrado blanco
// a: rosado, s:naranja, d:celeste ,q: morado w:gris, e:cafe

// La siguiente función crea un div con un id que se pasa como parámetro
const crearDiv = (id) => {
  const main = document.querySelector("main");
  const newDiv = document.createElement("div");
  newDiv.classList.add("cuadrado");
  newDiv.setAttribute("id", id);
  main.appendChild(newDiv);
  //newDiv.style.backgroundColor = "purple";
};

//Manejador de eventos que responde a las pulsaciones de teclado
const cuadradoKey = document.querySelector("#key");
document.addEventListener("keydown", function (evt) {
  if (evt.key === "a") {
    setCuadrados("key", "pink");
  } else if (evt.key === "s") {
    setCuadrados("key", "orange");
  } else if (evt.key === "d") {
    setCuadrados("key", "lightblue");
  } else if (evt.key == "q" && !document.querySelector("#cuadrado-morado")) {
    crearDiv("cuadrado-morado");
    setCuadrados("cuadrado-morado", "purple");
  } else if (evt.key == "w" && !document.querySelector("#cuadrado-gris")) {
    crearDiv("cuadrado-gris");
    setCuadrados("cuadrado-gris", "gray");
  } else if (evt.key == "e" && !document.querySelector("#cuadrado-cafe")) {
    crearDiv("cuadrado-cafe");
    setCuadrados("cuadrado-cafe", "#" + "6f4e37");
  }
});
