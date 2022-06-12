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
