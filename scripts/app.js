console.log('sanity checkt');
$(document).ready(function() {
  $('.projectinfo').slick({
    dots: false,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<i class="slickright fa fa-arrow-circle-right"></i>',
    prevArrow: '<i class="slickleft fa fa-arrow-circle-left"></i>',
    appendArrows: $('.arrowdiv')
  });
  $('.parallax').parallax();
  $(".button-collapse").sideNav();

});
