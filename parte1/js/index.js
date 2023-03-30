$('.carousel-wrapper').slick({
    dots: false,
    infinite: true,
    arrow: true,
    prevArrow: '<div class="prev slick-arrow"><i class="fa-solid fa-chevron-left"></i></div>',
    nextArrow: '<div class="next slick-arrow"><i class="fa-solid fa-chevron-right"></i></div>',
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});