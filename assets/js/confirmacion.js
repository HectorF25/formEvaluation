document.getElementById('cerrarSes').addEventListener('click', Cerrar);
document.getElementById('realizarNuev').addEventListener('click', Realizar);

function Realizar() {
    const opcion = confirm("Si está seguro de realizar nuevamente la evaluación, haga click en acpetar");

    if (opcion == true) {
        alert('Espere ');
        window.location = "menu.html";
    }
}

function Cerrar() {
    alert('Cerrando su sesion...');
}