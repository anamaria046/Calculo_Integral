import { progresoModel } from "../model/progreso.js";
import { preguntasNivel1 } from "../view/preguntasNivel1.js";

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

    this.btnSiguiente.addEventListener("click", () => this.mostrarSiguienteDialogo());
    this.btnResponder.addEventListener("click", () => this.verificarRespuesta());
    this.btnSiguienteNivel.addEventListener("click", () => this.irASiguienteNivel());

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
    this.cajaAdivinanza.style.display = "block";
    this.preguntaActual = preguntasnivel1[Math.floor(Math.random() * preguntasnivel1.length)];
    this.textoAdivinanza.textContent = this.preguntaActual.pregunta;
    this.respuestaJugador.value = "";
    this.mensajeResultado.textContent = "";
  },

  verificarRespuesta() {
    const respuestaJugador = this.respuestaJugador.value.trim().toLowerCase();
    const respuestaCorrecta = this.preguntaActual.respuesta.toLowerCase();

    if (respuestaJugador === respuestaCorrecta) {
      this.mensajeResultado.textContent = this.preguntaActual.dialogoCorrecto;
      setTimeout(() => {
        this.cajaAdivinanza.style.display = "none";
        this.mostrarDialogoFinal();
        progreso.establecerNivelDesbloqueado(1);
      }, 2000);
    } else {
      this.mensajeResultado.textContent = this.preguntaActual.dialogoIncorrecto;
      setTimeout(() => this.mostrarAdivinanza(), 3000);
    }
  },

  mostrarDialogoFinal() {
    this.dialogoFinal.style.display = "block";
  },

  irASiguienteNivel() {
    window.location.href = "nivel2.html";
  }
};

document.addEventListener("DOMContentLoaded", () => nivel1Controller.init());
