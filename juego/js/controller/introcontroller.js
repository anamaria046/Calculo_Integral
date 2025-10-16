const video = document.getElementById("videoIntro");
const btnSaltar = document.getElementById("btnSaltar");

const iniciarVideo = () => {
  video.play()
    .then(() => {
      console.log("Video reproducido con sonido ");
    })
    .catch(err => {
      console.warn("El navegador bloqueó la reproducción automática:", err);
    });

  
  document.removeEventListener("click", iniciarVideo);
};
document.addEventListener("click", iniciarVideo);

btnSaltar.addEventListener("click", () => {
  video.pause();
  window.location.href = "mapa.html";
});
