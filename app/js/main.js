$(function () {

  $(".rate-star").rateYo({
    rating: 4.5,
    readOnly: true,
    ratedFill: "#ffc000",
    starWidth: "15px"
  });

  var mixer = mixitup('.products__inner-box');

  $('.product-slider__boxslide').slick({
    arrows: true,
    variableWidth: true,
    prevArrow: $('.lnr-chevron-left'),
    nextArrow: $('.lnr-chevron-right')
  });



});