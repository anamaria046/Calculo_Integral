const video = document.getElementById("videoIntro");
const btnSaltar = document.getElementById("btnSaltar");

// Espera la interaccion del usuario para reproducir con sonido
const iniciarVideo = () => {
  video.play()
    .then(() => {
      console.log("Video reproducido con sonido 🎵");
    })
    .catch(err => {
      console.warn("El navegador bloqueó la reproducción automática:", err);
    });

  // Quita el listener después del primer clic
  document.removeEventListener("click", iniciarVideo);
};

// Inicia el video al hacer clic en cualquier parte
document.addEventListener("click", iniciarVideo);

// Boton Saltar
btnSaltar.addEventListener("click", () => {
  video.pause();
  window.location.href = "mapa.html";
});
