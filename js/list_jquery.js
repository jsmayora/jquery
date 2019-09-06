$(document).ready(function() {

    // alert("jquery activo");
    //  Ocultar elemntos de la lista
    $("button").click(function() {
        //  Ocultar el primer elemnto de la lista
        // $('ul li:first').hide(500);
        // Ocultar los primeros elementos de ambas lista con child
        // $('ul li:first-child').hide(300);

        // Ocultar los ultimos elemtos de ambas listas con last-child
        $('ul li:last-child').hide(300);

    });
});