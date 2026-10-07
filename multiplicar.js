function generarTablas() {

    //recuperar numero

    let tabla=recuperarInt("txtNumeroTabla")
    let limite = tabla*10;

    let contenedor = document.getElementById("contenedorTablas");
    let contenido = "";

    for (let i = 0; i <= 10; i++) {
    let resultado = tabla * i;

    contenido = contenido + "<tr><td>" + tabla + " × " + i + "</td><td>" + resultado + "</td></tr>";
}

    contenedor.innerHTML = contenido;
}



