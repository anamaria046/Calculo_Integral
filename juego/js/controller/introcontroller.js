const introController = {
  init() {
    const video = document.getElementById("videoIntro");
    const btnSaltar = document.getElementById("btnSaltar");

    if (video) {
      video.addEventListener("ended", () => this.irAMapa());
    }

    if (btnSaltar) {
      btnSaltar.addEventListener("click", () => this.irAMapa());
    }
  },

  irAMapa() {
    window.location.href = "mapa.html";
  }
};

export default introController;
