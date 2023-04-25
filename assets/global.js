$(document).ready(function(){
    $('.articles-list').slick({
        slidesToShow: 3,
        infinite:false,
        arrows: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                centerMode: true,
              }
            },
          ]

    });

    $('.featured-collection-slider, .featured-collection-slider-filters').on('init', function(event, slick){
        $('.lazyload--manual', this).removeClass('lazyload--manual').addClass('lazyload');
    });

    $('.featured-collection-slider').slick({
      slidesToShow: 3.2,
        infinite:false,
        nextArrow: '.next-featured',
        prevArrow: '.previous-featured',
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2.2,
              arrows: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              arrows: false
            }
          },
      ]

    });

    $('.featured-collection-slider-filters').slick({
      slidesToShow: 3,
        infinite:false,
        arrows: false,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              arrows: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              arrows: false
            }
          },
      ]

    });

    $('.gallery-wrapper').slick({
        slidesToShow: 3.2,
        infinite:false,
        nextArrow: '.next-gallery',
        prevArrow: '.previous-gallery',
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2.2,
                arrows: false
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                arrows: false
              }
            },
        ]
    });
    
})
