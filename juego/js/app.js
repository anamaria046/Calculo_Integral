document.addEventListener("DOMContentLoaded", () => {
  const urlActual = window.location.pathname;
  const nombrePagina = urlActual.split("/").pop();

  if (!localStorage.getItem("nivelDesbloqueado")) {
    localStorage.setItem("nivelDesbloqueado", 1);
  }

  if (nombrePagina === "index.html" || nombrePagina === "") {
    const btnJugar = document.querySelector(".btn-play button");

    if (btnJugar) {
      btnJugar.addEventListener("click", () => {
        window.location.href = "intro.html";
      });
    }
  }

  else if (nombrePagina === "intro.html") {
    const video = document.querySelector("video");

    if (video) {
      video.setAttribute("autoplay", true);
      video.setAttribute("controls", false);

      video.addEventListener("ended", () => {
        window.location.href = "mapa.html";
      });
    }

    const btnSaltar = document.querySelector("#btnSaltar");
    if (btnSaltar) {
      btnSaltar.addEventListener("click", () => {
        window.location.href = "mapa.html";
      });
    }
  }

  else if (nombrePagina === "mapa.html") {
    const edificios = document.querySelectorAll(".edificio");
    const nivelDesbloqueado = parseInt(localStorage.getItem("nivelDesbloqueado")) || 1;

    edificios.forEach((edificio, index) => {
      const nivel = index + 1;

      if (nivel <= nivelDesbloqueado) {
        edificio.classList.add("desbloqueado");
        edificio.addEventListener("click", () => {
          localStorage.setItem("nivelActual", nivel);
          window.location.href = "nivel.html";
        });
      } else {
        edificio.classList.add("bloqueado");
        edificio.addEventListener("click", () => {
          alert("Este edificio aún está bloqueado. Completa los anteriores primero.");
        });
      }
    });
  }

  else if (nombrePagina === "nivel.html") {
  }
});