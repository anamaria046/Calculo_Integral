const introController = {
  init() {
    const video = document.getElementById("videoIntro");
    const btnSaltar = document.getElementById("btnSaltar");

    if (!video || !btnSaltar) return;

    const iniciarVideo = () => {
      video.play().catch(err => {
        console.warn("El navegador bloqueó la reproducción automática:", err);
      });
      document.removeEventListener("click", iniciarVideo);
    };

    document.addEventListener("click", iniciarVideo);

    video.addEventListener("ended", () => {
      window.location.href = "mapa.html";
    });

    btnSaltar.addEventListener("click", () => {
      video.pause();
      window.location.href = "mapa.html";
    });
  }
};

export default introController;