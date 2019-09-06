$(document).ready(function() {
    // alert("js activo");
    $('button').click(function() {
        // accediendo al input con $(') para obtener el valor del atributo input con attr y guardar lo en la variable x
        // var x = "El valor del atributo" + $('input').attr('type');
        // var x = "El valor del atributo inupt es: " + $('input').attr('id');

        //  establecer un nuevo valor a todos atributo
        // $('input').attr("id","codigo"); 
        
        // cambiar el atributo a un valor en especifico
        $('input[type="text"]').attr("id","codigo");



        // accediendo id=info para guardar la variable x dentro del metodo html para mostrar el contenido
        $('#info').html(x); //el el valor del atributo type y id
    });




});