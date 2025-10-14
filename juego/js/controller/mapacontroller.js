const mapaController = {
  init(Progreso) {
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
    window.location.href = "nivel.html";
  }
};

export default mapaController;