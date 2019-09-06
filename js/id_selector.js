$(document).ready(function() {
    // alert("JQuery activo");
    //  ejempllo 1
    $("button").click(function() {
        // $("#text2").hide();


        // Esconder todo los textos
        $("*").hide();
    });

    // Ejemplo 2
    $("#enviar").click(function() {
        var x = $("#espacio").val();
        // mostrar por pantalla
        alert(x);
    });

});