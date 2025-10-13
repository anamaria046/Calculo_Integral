const mapaController = {
  init() {
    const progreso = this.obtenerProgreso();

    const edificios = document.querySelectorAll(".edificio");

    edificios.forEach((edificio) => {
      const nivel = parseInt(edificio.dataset.nivel);

      if (nivel <= progreso) {
        edificio.classList.remove("bloqueado");
        edificio.disabled = false;
      }

      edificio.addEventListener("click", () => {
        if (!edificio.disabled) {
          this.irANivel(nivel);
        }
      });
    });
  },

  obtenerProgreso() {
    const guardado = localStorage.getItem("progreso");
    return guardado ? parseInt(guardado) : 1;
  },

  guardarProgreso(nivel) {
    localStorage.setItem("progreso", nivel);
  },

  irANivel(nivel) {
    localStorage.setItem("nivelActual", nivel);
    window.location.href = "nivel.html";
  },
};