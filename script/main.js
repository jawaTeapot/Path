$(document).ready(function(){
    $('.pagination__info').slick({
        prevArrow: "#left",
        nextArrow: "#right"
    });
    $('.carousel__info').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        prevArrow: "#cl_left",
        nextArrow: "#cl_right"
    });
});

function removeRotate() {
    $(".nav__link").each(function (i,e) {
        console.log(e);
        $(e).removeClass("vector--open");
    })
}
$( "#menu_doctor" ).click(function () {
    if($("#doctor").is(":visible")){
        $("#doctor").hide();
        $("#nav").removeClass("nav--open");
        removeRotate();
    } else {
        removeRotate();
        $("#doctor").show();
        $("#nav").addClass("nav--open");
        $("#menu_doctor").addClass("vector--open");
    }
    $("#patient").hide();
    $("#drug").hide();
})
$( "#menu_patient" ).click(function () {
    if($("#patient").is(":visible")){
        $("#patient").hide();
        $("#nav").removeClass("nav--open");
        removeRotate();
    } else {
        removeRotate();
        $("#patient").show();
        $("#nav").addClass("nav--open");
        $("#menu_patient").addClass("vector--open");
    }
    $("#doctor").hide();
    $("#drug").hide();
})
$( "#menu_drug" ).click(function () {
    if($("#drug").is(":visible")){
        $("#drug").hide();
        $("#nav").removeClass("nav--open");
        removeRotate();
    } else {
        removeRotate();
        $("#drug").show();
        $("#nav").addClass("nav--open");
        $("#menu_drug").addClass("vector--open");
    }
    $("#doctor").hide();
    $("#patient").hide();
})
$( document ).click( function (e) {
    const a = $(e.target).closest('.nav')
    if (a.length === 0){
        $("#doctor").hide();
        $("#patient").hide();
        $("#drug").hide();
        $("#nav").removeClass("nav--open");
        removeRotate();
    }
})
