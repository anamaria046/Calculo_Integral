import { Progreso } from "../model/progreso.js";
import { preguntasNivel1 } from "../model/preguntasnivel1.js";

const nivel1Controller = {
  dialogos: [
    { personaje: "Profesor Valderrama", texto: "Bienvenido, viajero del dato." },
    { personaje: "Profesor Valderrama", texto: "Soy Juan Camilo Valderrama Balaguera, Director de Ingeniería Industrial." },
    { personaje: "Profesor Valderrama", texto: "En nuestra carrera nos ocupamos de optimizar los procesos productivos, aprovechando al máximo el talento humano y los recursos tecnológicos y financieros para generar eficiencia y desarrollo organizacional." },
    { personaje: "Profesor Valderrama", texto: "¿Estás listo para aplicar algo de ingenio industrial?" }
  ],

  indiceDialogo: 0,
  preguntaActual: null,

  init() {
    console.log("Controlador de Nivel 1 iniciado");

    // 🔹 Coinciden con el HTML actual
    this.cajaDialogo = document.getElementById("dialogoInicial");
    this.nombrePersonaje = document.getElementById("nombrePersonaje");
    this.textoDialogo = document.getElementById("textoDialogo");
    this.btnSiguiente = document.getElementById("btnSiguiente");

    this.cajaAdivinanza = document.getElementById("adivinanzaBox");
    this.textoAdivinanza = document.getElementById("textoAdivinanza");
    this.respuestaJugador = document.getElementById("respuestaJugador");
    this.btnResponder = document.getElementById("btnResponder");
    this.mensajeResultado = document.getElementById("mensajeResultado");

    this.dialogoFinal = document.getElementById("dialogoFinal");
    this.btnSiguienteNivel = document.getElementById("btnSiguienteNivel");

    // Verifica que la caja principal exista
    if (!this.cajaDialogo) {
      console.error("No se encontró el div con id='dialogoInicial'");
      return;
    }

    // Eventos
    this.btnSiguiente.addEventListener("click", () => this.mostrarSiguienteDialogo());
    this.btnResponder.addEventListener("click", () => this.verificarRespuesta());
    this.btnSiguienteNivel.addEventListener("click", () => this.irASiguienteNivel());

    // Primer diálogo
    this.mostrarSiguienteDialogo();
  },

  mostrarSiguienteDialogo() {
    if (this.indiceDialogo < this.dialogos.length) {
      const actual = this.dialogos[this.indiceDialogo];
      this.nombrePersonaje.textContent = actual.personaje;
      this.textoDialogo.textContent = actual.texto;
      this.indiceDialogo++;
    } else {
      this.cajaDialogo.style.display = "none";
      this.mostrarAdivinanza();
    }
  },

  mostrarAdivinanza() {
    console.log("Mostrando adivinanza");
    this.cajaAdivinanza.style.display = "block";
    this.preguntaActual = preguntasNivel1[Math.floor(Math.random() * preguntasNivel1.length)];
    this.textoAdivinanza.textContent = this.preguntaActual.pregunta;
    this.respuestaJugador.value = "";
    this.mensajeResultado.textContent = "";
  },

  verificarRespuesta() {
    const respuestaJugador = this.respuestaJugador.value.trim().toLowerCase();
    const respuestaCorrecta = this.preguntaActual.respuesta.toLowerCase();

    if (respuestaJugador === respuestaCorrecta) {
      this.mensajeResultado.textContent = this.preguntaActual.dialogoCorrecto;
      this.mensajeResultado.style.color = "lightgreen";
      Progreso.establecerNivelDesbloqueado(2);
      setTimeout(() => {
        this.cajaAdivinanza.style.display = "none";
        this.mostrarDialogoFinal();
      }, 2000);
    } else {
      this.mensajeResultado.textContent = this.preguntaActual.dialogoIncorrecto;
      this.mensajeResultado.style.color = "red";
      this.respuestaJugador.value = "";
    }
  },

  mostrarDialogoFinal() {
    console.log("Mostrando diálogo final");
    this.dialogoFinal.style.display = "block";
  },

  irASiguienteNivel() {
    window.location.href = "mapa.html";
  }
};

export default nivel1Controller;
