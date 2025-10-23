import { Progreso } from "../model/progreso.js";
import { preguntasNivel2 } from "../model/preguntasnivel2.js";

const nivel2Controller = {
  dialogos: [
    { personaje: "Profesor Ochoa", texto: "Saludos, viajero digital." },
    { personaje: "Profesor Ochoa", texto: "Soy Mauricio Ochoa Echeverría, Director de Ingeniería de Sistemas e Ingeniería en Multimedia." },
    { personaje: "Profesor Ochoa", texto: "En estas carreras vivimos a la vanguardia de la tecnología. Nos apasionan las nuevas herramientas digitales: trabajamos con animación 2D, 3D, realidad virtual y aumentada para crear contenidos multimedia innovadores en el mundo de la comunicación digital. También dominamos la lógica de la programación, el lenguaje secreto de las máquinas. Desde código binario hasta inteligencia artificial, combinamos creatividad y técnica para darle vida al mundo virtual." },
    { personaje: "Profesor Ochoa", texto: "Todo nace de un lenguaje muy antiguo... y muy actual." }
  ],

  indiceDialogo: 0,
  preguntaActual: null,

  init() {
    console.log("Controlador de Nivel 2 iniciado");

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
    console.log("Mostrando adivinanza del nivel 2...");
    this.cajaAdivinanza.style.display = "block";

    this.preguntaActual = preguntasNivel2[Math.floor(Math.random() * preguntasNivel2.length)];
    this.textoAdivinanza.textContent = this.preguntaActual.pregunta;
    this.respuestaJugador.value = "";
    this.mensajeResultado.textContent = "";
  },

  verificarRespuesta() {
    const respuestaJugador = this.respuestaJugador.value.trim().toLowerCase();
    const respuestaCorrecta = this.preguntaActual.respuesta.toLowerCase();

    if (!respuestaJugador) {
      this.mensajeResultado.textContent = "Escribe una respuesta antes de enviar.";
      this.mensajeResultado.style.color = "yellow";
      return;
    }

    if (respuestaJugador === respuestaCorrecta) {
      this.mensajeResultado.textContent = this.preguntaActual.dialogoCorrecto;
      this.mensajeResultado.style.color = "lightgreen";

      Progreso.establecerNivelDesbloqueado(3);

      setTimeout(() => {
        this.cajaAdivinanza.style.display = "none";
        this.mostrarDialogoFinal();
      }, 2000);
    } else {
      this.mensajeResultado.textContent = this.preguntaActual.dialogoIncorrecto;
      this.mensajeResultado.style.color = "red";

      setTimeout(() => {
        this.mostrarAdivinanza();
      }, 5000);
    }
  },

  mostrarDialogoFinal() {
    console.log("Mostrando diálogo final del nivel 2...");
    this.dialogoFinal.style.display = "block";
  },

  irASiguienteNivel() {
    console.log("Volviendo al mapa...");
    window.location.href = "mapa.html";
  }
};

export default nivel2Controller;