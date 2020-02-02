// Slick slider
$(document).ready(function(){
  $('.respect-gallery').slick({
      centerMode: true,
      arrows: true,
      prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
      nextArrow:'<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
      variableWidth: true,
      centerPadding: '60px',
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: false,
            variableWidth: false,
            centerPadding: '40px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: false,
            variableWidth: false,
            centerPadding: '40px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});
});
