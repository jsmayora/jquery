$(document).ready(function() {
    // alert("jqqry activo");.
    //  boton 1
    // Modificar texto1  haciendo click en boton1 por el contenido que tiene el metodo .text()
    $('#boton1').click(function() {
        $('#texto1').text('<b>Hola Mundo</b>');
    });

    //  boton 2
    // Modificar texto2  haciendo click en boton2 por el contenido que tiene el metodo .html()
    $('#boton2').click(function() {
        $('#texto2').html('<b>Tutoriales</b>');
    });
});