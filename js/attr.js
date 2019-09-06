$(document).ready(function() {
    // alert("js activo");
    // Realizar la iteracion implcita al prescionar el boton
    $("button").click(function() {
        //  este insertara los id de cada clase css a la etiqueta p del document
        $("p").attr("id", function(index) {
            return "p" + (index + 1);
        });
    });

});