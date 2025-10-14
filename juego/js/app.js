import { Progreso } from "./model/progreso.js";

document.addEventListener("DOMContentLoaded", async () => {
  const pagina = document.body.dataset.pagina;

  switch (pagina) {
    case "inicio": {
      const module = await import("../controller/inicioController.js");
      module.default.init();
      break;
    }

    case "intro": {
      const module = await import("../controller/introController.js");
      module.default.init();
      break;
    }

    case "mapa": {
      const module = await import("../controller/mapaController.js");
      module.default.init(Progreso);
      break;
    }

    default:
      console.warn("Página sin controlador definido.");
  }
});