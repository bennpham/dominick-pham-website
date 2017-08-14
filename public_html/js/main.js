// JQuery Smooth Scroll Navigation
$('.smooth').on('click', function () {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + this.id
    });
    return false;
});