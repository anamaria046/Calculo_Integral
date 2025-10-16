import { Progreso } from "../model/progreso.js";

const mapaController = {
  init() {
    const edificios = document.querySelectorAll(".edificio");
    const nivelDesbloqueado = Progreso.obtenerNivelDesbloqueado();

    edificios.forEach((edificio) => {
      const nivel = parseInt(edificio.dataset.nivel);

      if (nivel <= nivelDesbloqueado) {
        edificio.classList.add("desbloqueado");
        edificio.addEventListener("click", () => this.irANivel(nivel));
      } else {
        edificio.classList.add("bloqueado");
        edificio.addEventListener("click", () => {
          alert("Este edificio está bloqueado. Completa los anteriores primero.");
        });
      }
    });
  },

  irANivel(nivel) {
    localStorage.setItem("nivelActual", nivel);
    window.location.href = "nivel1.html"; // 
  }
};

export default mapaController;