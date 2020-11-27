$('.reviews-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',

    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }

    ]
});

$('.checkbox-inp').on('click', function(){
    var parent = $(this).parents("form");

    if (this.checked){

        parent.find('.label-phone').css('display','flex');
    }
    else
        parent.find('.label-phone').css('display','none');

});


$('.go_to').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});