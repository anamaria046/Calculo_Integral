const niveles = {
  1: {
    profesor: "Profesor Boyacá",
    imagen: "assets/img/profesor1.png",
    dialogo: [
      "¡Bienvenido aprendiz!",
      "Soy el Profesor Boyacá, guardián del primer edificio.",
      "Para continuar tu camino, deberás responder uno de mis acertijos..."
    ],
    acertijos: [
      {
        pregunta: "¿Qué sube pero nunca baja?",
        respuestaCorrecta: "la edad",
        mensajeCorrecto: "¡Exacto! La edad solo aumenta, como tu sabiduría.",
        mensajeError: "No es esa. Intenta pensar en algo que crece sin detenerse."
      },
      {
        pregunta: "¿Qué tiene ojos pero no puede ver?",
        respuestaCorrecta: "una aguja",
        mensajeCorrecto: "¡Bien! Una aguja tiene ojo, pero no ve.",
        mensajeError: "Incorrecto, recuerda que no todo lo que tiene ojos ve."
      },
      {
        pregunta: "¿Qué se moja mientras seca?",
        respuestaCorrecta: "la toalla",
        mensajeCorrecto: "¡Perfecto! Una toalla se moja al cumplir su función.",
        mensajeError: "Piénsalo... algo que se moja ayudando a secar."
      },
      {
        pregunta: "¿Qué corre pero no tiene piernas?",
        respuestaCorrecta: "el agua",
        mensajeCorrecto: "¡Muy bien! El agua corre sin tener piernas.",
        mensajeError: "No, es algo líquido y en constante movimiento."
      },
      {
        pregunta: "¿Qué palabra se escribe incorrectamente en todos los diccionarios?",
        respuestaCorrecta: "incorrectamente",
        mensajeCorrecto: "¡Exacto! La palabra 'incorrectamente' se escribe así.",
        mensajeError: "Parece una paradoja, pero es más simple de lo que parece."
      },
      {
        pregunta: "¿Qué tiene cuello pero no cabeza?",
        respuestaCorrecta: "una botella",
        mensajeCorrecto: "¡Bien hecho! Una botella tiene cuello pero no cabeza.",
        mensajeError: "Busca un objeto cotidiano con cuello pero sin rostro."
      },
      {
        pregunta: "¿Qué no se puede usar antes de romperlo?",
        respuestaCorrecta: "un huevo",
        mensajeCorrecto: "¡Correcto! Un huevo debe romperse para usarse.",
        mensajeError: "Es algo frágil y común en la cocina."
      },
      {
        pregunta: "¿Qué tiene ciudades, pero no casas; montañas, pero no árboles; y agua, pero no peces?",
        respuestaCorrecta: "un mapa",
        mensajeCorrecto: "¡Exacto! Un mapa muestra todo eso, pero no lo tiene realmente.",
        mensajeError: "Piensa en algo que representa el mundo sin serlo."
      },
      {
        pregunta: "¿Qué es tan frágil que al decir su nombre se rompe?",
        respuestaCorrecta: "el silencio",
        mensajeCorrecto: "¡Silencio! Lo rompiste al nombrarlo. Muy bien.",
        mensajeError: "Es algo que se quiebra cuando hablas."
      },
      {
        pregunta: "¿Qué puedes atrapar pero no lanzar?",
        respuestaCorrecta: "un resfriado",
        mensajeCorrecto: "¡Muy bien! Un resfriado se atrapa, no se lanza.",
        mensajeError: "Es algo relacionado con la salud, y lo 'atrapas'."
      }
    ]
  },

  2: {
    profesor: "Doctora Tunja",
    imagen: "assets/img/profesor2.png",
    dialogo: [
      "Has llegado al segundo edificio.",
      "Soy la Doctora Tunja y pondré a prueba tu ingenio.",
      "Veamos si puedes responder uno de mis acertijos."
    ],
    acertijos: [
      {
        pregunta: "¿Qué se rompe sin tocarlo?",
        respuestaCorrecta: "una promesa",
        mensajeCorrecto: "¡Excelente! Las promesas pueden romperse sin contacto.",
        mensajeError: "Piensa en algo intangible, no físico."
      },
      {
        pregunta: "¿Qué tiene un anillo pero no dedo?",
        respuestaCorrecta: "un teléfono",
        mensajeCorrecto: "¡Correcto! Los teléfonos suenan con su anillo.",
        mensajeError: "No es joya, pero también 'tiene anillo'."
      },
      // ... puedes agregar los demás acertijos de la misma forma
    ]
  },

  3: {
    profesor: "Profesor Sogamoso",
    imagen: "assets/img/profesor3.png",
    dialogo: [
      "¡Increíble, aprendiz!",
      "Llegaste al tercer edificio, hogar del conocimiento minero.",
      "Prepárate para mis acertijos de sabiduría ancestral."
    ],
    acertijos: [
      // 10 acertijos personalizados para este nivel
    ]
  },

  4: {
    profesor: "Maestra Paipa",
    imagen: "assets/img/profesor4.png",
    dialogo: [
      "Bienvenido a Paipa, tierra de energía y vapor.",
      "Demuestra que tus pensamientos son tan claros como el agua termal."
    ],
    acertijos: [
      // 10 acertijos personalizados para este nivel
    ]
  },

  5: {
    profesor: "Gran Sabio Boyacense",
    imagen: "assets/img/profesor5.png",
    dialogo: [
      "Has llegado al último desafío.",
      "Solo los más sabios logran superar mis enigmas.",
      "Prepárate para el reto final."
    ],
    acertijos: [
      // 10 acertijos finales personalizados
    ]
  }
};

// Exportar el modelo (si usas módulos)
if (typeof module !== "undefined") {
  module.exports = niveles;
}