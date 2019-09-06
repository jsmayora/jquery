$(document).ready(function() {
    // alert("jquery activo");
    // Otorgando colores a las filas de indice par
    $('tr:even').css('background-color', 'yellow');

    // Otorgando colores a las filas de indice impar
    $('tr:odd').css('background-color', 'red');
});