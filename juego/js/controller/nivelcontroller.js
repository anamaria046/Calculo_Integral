document.addEventListener("DOMContentLoaded", () => {
  const imgProfesor = document.getElementById("img-profesor");
  const nombreProfesor = document.getElementById("nombre-profesor");
  const textoDialogo = document.getElementById("texto-dialogo");
  const btnContinuar = document.getElementById("btn-continuar");
  const contenedorPregunta = document.getElementById("pregunta");
  const textoPregunta = document.getElementById("texto-pregunta");
  const inputRespuesta = document.getElementById("respuesta");
  const btnResponder = document.getElementById("btn-responder");
  const mensajeFinal = document.getElementById("mensaje-final");
  const textoMensaje = document.getElementById("texto-mensaje");
  const btnVolverMapa = document.getElementById("btn-volver-mapa");

  const btnIntentar = document.createElement("button");
  btnIntentar.textContent = "Volver a intentarlo";
  btnIntentar.id = "btn-intentar";
  btnIntentar.classList.add("oculto");
  mensajeFinal.appendChild(btnIntentar);

  const nivelActual = parseInt(localStorage.getItem("nivelActual")) || 1;
  const datosNivel = niveles[nivelActual];

  if (!datosNivel) {
    alert("No se encontraron datos para este nivel.");
    window.location.href = "mapa.html";
    return;
  }

  let indiceDialogo = 0;
  let acertijoActual = null;

  imgProfesor.src = datosNivel.imagen;
  nombreProfesor.textContent = datosNivel.profesor;
  textoDialogo.textContent = datosNivel.dialogo[indiceDialogo];

  btnContinuar.addEventListener("click", () => {
    indiceDialogo++;
    if (indiceDialogo < datosNivel.dialogo.length) {
      textoDialogo.textContent = datosNivel.dialogo[indiceDialogo];
    } else {
      document.getElementById("dialogo").classList.add("oculto");
      mostrarNuevoAcertijo();
    }
  });

  function mostrarNuevoAcertijo() {
    acertijoActual =
      datosNivel.acertijos[Math.floor(Math.random() * datosNivel.acertijos.length)];

    textoPregunta.textContent = acertijoActual.pregunta;
    inputRespuesta.value = "";
    contenedorPregunta.classList.remove("oculto");
    mensajeFinal.classList.add("oculto");
    btnIntentar.classList.add("oculto");
  }

  btnResponder.addEventListener("click", () => {
    const respuestaJugador = inputRespuesta.value.trim().toLowerCase();
    const correcta = acertijoActual.respuestaCorrecta.trim().toLowerCase();

    contenedorPregunta.classList.add("oculto");
    mensajeFinal.classList.remove("oculto");

    if (respuestaJugador === correcta) {
      textoMensaje.textContent = acertijoActual.mensajeCorrecto;
      btnIntentar.classList.add("oculto");
      btnVolverMapa.classList.remove("oculto");

      desbloquearSiguienteNivel(nivelActual);
    } else {
      textoMensaje.textContent = acertijoActual.mensajeError;
      btnVolverMapa.classList.add("oculto");
      btnIntentar.classList.remove("oculto");
    }
  });

  btnVolverMapa.addEventListener("click", () => {
    window.location.href = "mapa.html";
  });

  btnIntentar.addEventListener("click", () => {
    mostrarNuevoAcertijo();
  });

  function desbloquearSiguienteNivel(nivel) {
    const siguiente = nivel + 1;
    const desbloqueado = parseInt(localStorage.getItem("nivelDesbloqueado")) || 1;

    if (siguiente > desbloqueado) {
      localStorage.setItem("nivelDesbloqueado", siguiente);
    }
  }
});