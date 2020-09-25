$(function () {

  $(".rate-star").rateYo({
    rating: 4.5,
    readOnly: true,
    ratedFill: "#ffc000",
    starWidth: "15px"
  });

  $('.product-slider__boxslide').slick({
    arrows: true,
    variableWidth: true,
    prevArrow: $('.lnr-chevron-left'),
    nextArrow: $('.lnr-chevron-right')
  });

  $('.follower-slider__inner').slick({
    arrows: true,
    variableWidth: true,
    prevArrow: $('.left'),
    nextArrow: $('.right')
  });

  $('.feedback__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    variableWidth: true,
    prevArrow: $('.feedback__slider-btnl'),
    nextArrow: $('.feedback__slider-btnr')
  });


  var mixer = mixitup('.products__inner-box');

});