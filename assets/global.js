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

    $('.featured-collection-slider').on('init', function(event, slick){
        $('.lazyload--manual', this).removeClass('lazyload--manual').addClass('lazyload');
    });

    $('.featured-collection-slider').slick({
        slidesToShow: 4,
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

    $('.gallery-wrapper').slick({
        slidesToShow: 3.2,
        infinite:false,
        arrows: false,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2.2,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                centerMode: true,
              }
            },
        ]
    });
    
})
