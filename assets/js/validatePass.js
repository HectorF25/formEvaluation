document.getElementById('enviarDatos').addEventListener('click', Login);
let contador = 1;


function Login() {

    const usuario = document.getElementById('userInput');
    const password = document.getElementById('passwordInput');
    alertaU = document.getElementById('alertaUser');

    if (usuario.value == "CATA2345" && password.value == "975436") {
        alert('Bienvenido al sistema: ' + usuario.value);
        window.location = "views/menu.html";
    } else if (usuario.value == "admin" && password.value == "admin123") {
        const passSecretAdmin = prompt('Ingrese el password del administrador')
        if (passSecretAdmin.value == "admin123") {
            alert('Bienvenido al sistema: ' + usuario.value);
            window.location = "views/menu.html";
        }
    } else {
        alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
        alert(`Intento: ${contador}`);
        document.getElementById('userInput').value = "";
        document.getElementById('passwordInput').value = "";
        if (contador === 3) {
            document.getElementById('enviarDatos').disabled = true;
            alertaU.innerText = "El botón ha sido bloqueado, recargue la pagina para intentar nuevamente";
        }
        contador++;
    }
}