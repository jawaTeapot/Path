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
$( "#menu_doctor" ).click(function () {
    if($("#doctor").is(":visible")){
        $("#doctor").hide();
        $("#nav").removeClass("nav--open");
    } else {
        $("#doctor").show();
        $("#nav").addClass("nav--open");
    }
    $("#patient").hide();
    $("#drug").hide();
})
$( "#menu_patient" ).click(function () {
    if($("#patient").is(":visible")){
        $("#patient").hide();
        $("#nav").removeClass("nav--open");
    } else {
        $("#patient").show();
        $("#nav").addClass("nav--open");
    }
    $("#doctor").hide();
    $("#drug").hide();
})
$( "#menu_drug" ).click(function () {
    if($("#drug").is(":visible")){
        $("#drug").hide();
        $("#nav").removeClass("nav--open");
    } else {
        $("#drug").show();
        $("#nav").addClass("nav--open");
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
    }
})
