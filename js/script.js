// ! desplegar imagenes de las galerias
document.addEventListener('DOMContentLoaded', function () {
    var titulos = document.querySelectorAll('.galeria h3');

    titulos.forEach(function (titulo) {
        titulo.addEventListener('click', function () {
            var contImagenes = titulo.nextElementSibling;

            // Alternar la clase 'active' para mostrar/ocultar las imágenes
            contImagenes.classList.toggle('active');

            // Alternar la clase 'rotate' para cambiar la dirección de la flecha
            titulo.querySelector('.toggle-arrow').classList.toggle('rotate');
        });
    });
});



//!Funciones de btn Galeria deplegable

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}