$('.owl-carousel').owlCarousel({
    autoplay: true,
    dotsEach: true,
    autoplaytimeout: 750,
    loop:true,
    margin:10,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
