function generarTablas() {
    let contenedor = document.getElementById("contenedorTablas");
    let contenido = "";

    for (let i = 0; i <= 50; i += 5) {
        contenido = contenido + "<tr><td colspan='2'>" + i + "</td></tr>";
    }

    contenedor.innerHTML = contenido;
}