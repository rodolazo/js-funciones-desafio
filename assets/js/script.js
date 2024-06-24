function pintar(elemento, color = "green") {
  elemento.style.backgroundColor = color;
}

const elemento = document.querySelector("#ele1");
elemento.addEventListener("click", () => {
  pintar(elemento, "yellow");
});
