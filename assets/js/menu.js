document.getElementById('enviarResp').addEventListener('click', Menu);
document.getElementById('cerrarSes').addEventListener('click', Cerrar);

function Menu() {

    var opcion = confirm("Estas seguro de que deseas Continuar");

    if (opcion == true) {
        alert('Sus respuestas han sido registradas con exito \n Redireccionando...');
        window.location = "confirmacion.html";
    } else {
        alert('Cancelando proceso');
    }
}

function Cerrar() {
    alert('Cerrando su sesion...');
}