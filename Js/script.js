


let lastScroll = 0;
const body = document.body;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 450) {
    // Al bajar: ocultar
    body.classList.add("scroll-down");
    body.classList.remove("scroll-up");
  } else if (currentScroll < lastScroll) {
    // Al subir: mostrar
    body.classList.add("scroll-up");
    body.classList.remove("scroll-down");
  }
  lastScroll = currentScroll;
});


