function mostrar(id) {
    if (id == "Si") {
        $("#Justificacion").hide();
    }
    if (id == "No") {
        $("#Justificacion").show();
    }
}

function mostrarSugerencia(id) {
    if (id == "Si") {
        $("#Sugerencia").show();
    }
    if (id == "No") {
        $("#Sugerencia").hide();
    }
}