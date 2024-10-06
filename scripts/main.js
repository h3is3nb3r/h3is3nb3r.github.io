let miImage = document.querySelector("img");
miImage.onclick = function () {
    let miSrc = miImage.getAttribute("src");
    if (miSrc === "/1mg/profile-imagen-2.png") {
        miImage.setAttribute("src", "/1mg/profile-imagen-1.jpg");
    } else {
        miImage.setAttribute("src", "1mg/profile-imagen-2.png");
    }
};


let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("p");

function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    if (!miNombre) {
        estableceNombreUsuario();
    }else { 
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = "Mozilla es genial," + miNombre;
    }
}


miBoton.onclick = function () {
    estableceNombreUsuario();
};


