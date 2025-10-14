export const Progreso = {
  obtenerNivelDesbloqueado() {
    return parseInt(localStorage.getItem("nivelDesbloqueado")) || 1;
  },

  establecerNivelDesbloqueado(nivel) {
    localStorage.setItem("nivelDesbloqueado", nivel);
  },

  reiniciar() {
    localStorage.clear();
  }
};
