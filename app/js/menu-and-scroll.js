$(document).ready(function(){
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        if ($('#nav-icon').hasClass('open')){
            $('.navigation-blackout').css('display','block');
            $('.navigation').css('z-index','3');
            $('#nav-icon span').css('background','white');
            $('.carousel-indicators').css('z-index','1');
        } else {
            $('.navigation-blackout').css('display','none');
            $('#nav-icon span').css('background','#d3531a');
        }
    });
    $('.navigation-blackout').click(function () {
        $(this).css('display','none');
        $('#nav-icon').toggleClass('open');
        $('.navigation').css('z-index','3');
        $('#nav-icon span').css('background','#d3531a');
    })
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                $('.navigation-blackout').css('display','none');
                $('#nav-icon').toggleClass('open');
                $('.navigation').css('z-index','3');
                $('#nav-icon span').css('background','#d3531a');
                return false;
            }
        }
    });
});