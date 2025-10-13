const inicioController = {
  init() {
    const boton = document.getElementById("btnJugar");
    boton.addEventListener("click", this.irAIntro);
  },

  irAIntro() {
    window.location.href = "intro.html";
  }
};