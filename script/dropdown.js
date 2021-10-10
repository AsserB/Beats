const openItem = item =>{
    const container = item.closest(".team__item");
    const contentBlock = container.find(".team__content");
    const textBlock = contentBlock.find(".team__content--block");
    const blockHeight = textBlock.height();
   
   
    container.addClass('active');

    contentBlock.height(blockHeight);
}

const closeItem = container =>{
    const items = container.find(".team__content");
    const allItem = container.find('.team__item');

    allItem.removeClass('active');
    items.height(0);
}

$(".team__desc").click(function (e) { 
    e.preventDefault();
    
    const $this = $(e.currentTarget);
    const container = $this.closest('.team');
    const activeElem = $this.closest('.team__item')
 
    if (activeElem.hasClass("active")) {

        closeItem (container);
        
    } else {
        closeItem (container);
        openItem($this);
    }

    

});