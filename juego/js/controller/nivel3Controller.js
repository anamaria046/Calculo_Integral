import { Progreso } from "../model/progreso.js";
import { preguntasNivel3 } from "../model/preguntasnivel3.js";

const nivel3Controller = {
  dialogos: [
    { personaje: "Profesor Avendaño", texto: "Saludos, aventurero digital." },
    { personaje: "Profesor Avendaño", texto: "Soy Julián Andrés Avendaño, Director de Ingeniería Mecatrónica." },
    { personaje: "Profesor Avendaño", texto: "En esta carrera vivimos entre engranajes, sensores y código; unimos la mecánica, la electrónica y la programación para crear soluciones inteligentes. Diseñamos máquinas que piensan y actúan, innovando con software y herramientas digitales." },
    { personaje: "Profesor Avendaño", texto: "En la Ingeniería Mecatrónica, conectamos ideas con tecnología y transformamos la creatividad en movimiento." }
  ],

  indiceDialogo: 0,
  preguntaActual: null,

  init() {
    console.log("Controlador de Nivel 3 iniciado");

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

    if (!this.cajaDialogo) {
      console.error("No se encontró el div con id='dialogoInicial'");
      return;
    }

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
    console.log("Mostrando adivinanza del nivel 3...");
    this.cajaAdivinanza.style.display = "block";

    this.preguntaActual = preguntasNivel3[Math.floor(Math.random() * preguntasNivel3.length)];
    this.textoAdivinanza.textContent = this.preguntaActual.pregunta;
    this.respuestaJugador.value = "";
    this.mensajeResultado.textContent = "";
  },

  verificarRespuesta() {
    const respuestaJugador = this.respuestaJugador.value.trim().toLowerCase();
    const respuestaCorrecta = this.preguntaActual.respuesta.toLowerCase();

    if (!respuestaJugador) {
      this.mensajeResultado.textContent = "Escribe una respuesta antes de continuar.";
      this.mensajeResultado.style.color = "yellow";
      return;
    }

    if (respuestaJugador === respuestaCorrecta) {
      this.mensajeResultado.textContent = this.preguntaActual.dialogoCorrecto;
      this.mensajeResultado.style.color = "lightgreen";

      Progreso.establecerNivelDesbloqueado(4);

      setTimeout(() => {
        this.cajaAdivinanza.style.display = "none";
        this.mostrarDialogoFinal();
      }, 2000);
    } else {
      this.mensajeResultado.textContent = this.preguntaActual.dialogoIncorrecto;
      this.mensajeResultado.style.color = "red";

      setTimeout(() => {
        this.mostrarAdivinanza();
      }, 2000);
    }
  },

  mostrarDialogoFinal() {
    console.log("Mostrando diálogo final del nivel 3...");
    this.dialogoFinal.style.display = "block";
  },

  irASiguienteNivel() {
    console.log("Volviendo al mapa...");
    window.location.href = "mapa.html";
  }
};

export default nivel3Controller;
