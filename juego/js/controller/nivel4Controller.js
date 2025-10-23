import { Progreso } from "../model/progreso.js";
import { preguntasNivel4 } from "../model/preguntasnivel4.js";

const nivel4Controller = {
  dialogos: [
    { personaje: "Profesora Caro", texto: "Bienvenido, aventurero digital." },
    { personaje: "Profesora Caro", texto: "Soy Catherin Dayani Caro, Directora de Ingeniería Ambiental e Ingeniería Sanitaria." },
    { personaje: "Profesora Caro", texto: "En estas carreras trabajamos por el bienestar del planeta y de las personas; diseñamos, analizamos y gestionamos soluciones para el agua, los residuos, la calidad del aire y los ecosistemas. Desde el campo hasta la ciudad, impulsamos proyectos que previenen y resuelven problemáticas ambientales, mejoran la salud pública y promueven un desarrollo sostenible en armonía con la sociedad y la naturaleza."},
    { personaje: "Profesora Caro", texto: "¡Son carreras muy útiles para todos!"}
  ],

  indiceDialogo: 0,
  preguntaActual: null,

  init() {
    console.log("Controlador de Nivel 4 iniciado");

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
    console.log("Mostrando adivinanza");
    this.cajaAdivinanza.style.display = "block";
    this.preguntaActual = preguntasNivel4[Math.floor(Math.random() * preguntasNivel4.length)];
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
      }, 5000);
    } else {
      this.mensajeResultado.textContent = this.preguntaActual.dialogoIncorrecto;
      this.mensajeResultado.style.color = "red";
      this.respuestaJugador.value = "";

      setTimeout(() => {
        this.mostrarAdivinanza();
      }, 5000);
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

export default nivel4Controller;
