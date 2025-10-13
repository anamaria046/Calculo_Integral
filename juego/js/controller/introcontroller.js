const introController = {
  init() {
    const video = document.getElementById("videoIntro");
    if (video) {
      video.addEventListener("ended", this.irAMapa);
    }
  },

  irAMapa() {
    window.location.href = "mapa.html";
  }
};