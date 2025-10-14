const inicioController = {
  init() {
    const btnJugar = document.getElementById("btnJugar");
    const btnReiniciar = document.getElementById("btnReiniciar");

    if (btnJugar) {
      btnJugar.addEventListener("click", () => this.irAIntro());
    }

    if (btnReiniciar) {
      btnReiniciar.addEventListener("click", () => this.reiniciarProgreso());
    }
  },

  irAIntro() {
    // Si no hay progreso inicia desde el nivel 1
    if (!localStorage.getItem("nivelDesbloqueado")) {
      localStorage.setItem("nivelDesbloqueado", 1);
    }
    window.location.href = "intro.html";
  },

  reiniciarProgreso() {
    const confirmar = confirm("¿Seguro que deseas reiniciar todo tu progreso?");
    if (confirmar) {
      localStorage.clear();
      alert("Progreso reiniciado. Puedes comenzar de nuevo.");
    }
  }
};

export default inicioController;
