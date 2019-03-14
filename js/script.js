$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        margin: 30,
        loop: true,
        nav: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            900:{
                items:3
            }
        }
    });


    $('.post .owl-nav button').on('click', function () {

        $(this).css({
            color: '#c7b299'
           
        })
    });
});