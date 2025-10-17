import { Progreso } from "../model/progreso.js";
import { preguntasRetoFinal } from "../model/preguntasRetoFinal.js";

const retofinalController = {
  dialogos: [
    { personaje: "Profesor Cifuentes", texto: "Felicidades, viajero digital." },
    { personaje: "Profesor Cifuentes", texto: "Soy Gabriel Ricardo Cifuentes, Decano de la Facultad de Ciencias e Ingeniería de la Universidad de Boyacá." },
    { personaje: "Profesor Cifuentes", texto: "Has llegado hasta aquí porque has cumplido con todos los retos y desafíos que te propusimos en este viaje. Ahora, para completar tu misión, debes responder una última adivinanza que pondrá a prueba todo lo que has aprendido."},
    { personaje: "Profesor Cifuentes", texto: "¡Muy buena suerte!"}
  ],

  indiceDialogo: 0,
  preguntaActual: null,

  init() {
    console.log("Controlador de Reto Final iniciado");

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
    this.preguntaActual = preguntasRetoFinal[Math.floor(Math.random() * preguntasRetoFinal.length)];
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
      Progreso.establecerNivelDesbloqueado(5);
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
    window.location.href = "victoria.html";
  }
};

export default retofinalController;
