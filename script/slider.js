const slider = $('.headphones__list').bxSlider({
    pager:false,
    controls: false
});

$('.features__arrow--next').click(function (e) { 
    e.preventDefault();

    slider.goToNextSlide();
    
});

$('.features__arrow--prev').click(function (e) { 
    e.preventDefault();
    
    slider.goToPrewSlide();
    
});

$('.features__arrow--next--tablets').click(function (e) { 
    e.preventDefault();

    slider.goToNextSlide();
    
});

$('.features__arrow--prev--tablets').click(function (e) { 
    e.preventDefault();
    
    slider.goToPrewSlide();
    
});