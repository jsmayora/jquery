$(document).ready(function() {
    // alert("js activo");
    $('button').click(function() {
        var texto = ""; // += indica que texto va a tener el valor de lo que este depues de =

        texto += $('#caja').width() + 'px' + '</br>';
        texto += $('#caja').height() + 'px';
        $('#detalles').html(texto);

    });

});