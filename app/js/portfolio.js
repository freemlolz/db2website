$(document).ready( function () {
    $('.more-btn').on('click', function(){
        $(this).toggleClass('more-btn--opened');
        $(this).parents('.work').find('.work-more').toggleClass('work-more--opened')
    });
});