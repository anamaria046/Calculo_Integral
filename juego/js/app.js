document.addEventListener("DOMContentLoaded", () => {
    const pagina = window.location.pathname.split("/").pop();

    switch (pagina) {
        case "index.html":
        case "":
            if (typeof inicioController !== "undefined") {
                inicioController.init();
            }
            break;

        case "intro.html":
            if (typeof introController !== "undefined") {
                introController.init();
            }
            break;

        default:
            console.warn("No se encontró un controlador para esta página:", pagina);
            break;
    }
});