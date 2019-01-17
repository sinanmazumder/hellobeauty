//nav fixed
$("document").ready(function () {
    $("#order,.order2").click(function () {
        $(".button-popup").addClass("active");
    });
    $(".button-popup .content a").click(function () {
        $(".button-popup").removeClass("active");
    });
});



$('document').ready(function () {
    $('#cross').click(function(){
        $('.epopup').hide(40);
    });
});
