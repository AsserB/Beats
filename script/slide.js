const findBlockByAlias = alias =>{
    return $(".review__item").filter((ndx, item) =>{
        return $(item).attr("data-with") == alias
    })
}

$(".review__switch--link").click ((e) =>{
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemShow = findBlockByAlias(target);
    const $curItem = $this.closest(".review__subitem");

    itemShow.addClass("active").siblings().removeClass("active");
    $curItem.addClass("active").siblings().removeClass("active");

})