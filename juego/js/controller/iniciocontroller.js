import { Progreso } from "../model/progreso.js";

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
    const nivel = Progreso.obtenerNivelDesbloqueado();
    if (!nivel || nivel < 1) {
      Progreso.establecerNivelDesbloqueado(1);
    }
    window.location.href = "intro.html";
  },

  reiniciarProgreso() {
    const confirmar = confirm("¿Seguro que deseas reiniciar todo tu progreso?");
    if (confirmar) {
      Progreso.reiniciar();
      alert("Progreso reiniciado. Puedes comenzar de nuevo.");
      window.location.reload();
    }
  },
};

export default inicioController;