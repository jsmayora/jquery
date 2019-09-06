$(document).ready(function() {
    // alert("js activo");

    $('button').click(function() {
        //  cambiar el color a todos los parrafos
        // $('p').css("color", "red");

        //  cambiar el color a el primer parrafo
        // $('p:last').css("color", "red");

        // usando addclass ejemplo 1
        //  cambiar el color a todos los parrafos
        // $('p').addClass('nuevaClase'); 

        // usando addclass ejemplo 2: usando una iteración
        $('p').addClass(function(index) {
            return "miclase" + (index + 1);
        });

    });


});