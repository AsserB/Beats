const slider = $('.headphones__list').bxSlider({
    pager:false,
    controls: false
});

$('.features__arrow--next').click(function (e) { 
    e.preventDefault();

    slider.goToNextSlide();
    
});

$('.features__arrow--prew').click(function (e) { 
    e.preventDefault();
    
    slider.goToPrevSlide();
    
});

$('.features__arrow--next--tablets').click(function (e) { 
    e.preventDefault();

    slider.goToNextSlide();
    
});

$('.features__arrow--prew--tablets').click(function (e) { 
    e.preventDefault();
    
    slider.goToPrevSlide();
    
});