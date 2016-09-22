$(document).ready(function(){
    /*** what we do***/
    $('.top-wrap__items--border-wrap.ios')
        .hover(
        function() {
            $('.top-wrap__items--doted-arrow-ios').css('display','block');
            $('.top-wrap__items--triangle-ios').css('display', 'block');
        },
        function(){
            $('.top-wrap__items--doted-arrow-ios').css('display','none');
            $('.top-wrap__items--triangle-ios').css('display', 'none');
        })
        .on('click', function(){
            $('.ui-design').css('display', 'none');
            $('.web-development').css('display', 'none');
            $('.mobile-development').css('display', 'block');
            $('.what-we-do .bot-wrap').css('background','url(../dist/img/bg-apps.png) left center');
            $('.what-we-do .bot-wrap').css('background-size','cover');
        });
    $('.top-wrap__items--border-wrap.design')
        .hover(
        function() {
            $('.top-wrap__items--doted-arrow-design').css('display','block');
            $('.top-wrap__items--triangle-design').css('display', 'block');
        },
        function(){
            $('.top-wrap__items--doted-arrow-design').css('display','none');
            $('.top-wrap__items--triangle-design').css('display', 'none');
        })
        .on('click', function(){
            $('.web-development').css('display', 'none');
            $('.mobile-development').css('display', 'none');
            $('.ui-design').css('display', 'block');
            $('.what-we-do .bot-wrap').css('background','url(../dist/img/bg-design.png) left center');
            $('.what-we-do .bot-wrap').css('background-size','cover');
        });
    $('.top-wrap__items--border-wrap.web')
        .hover(
        function() {
            $('.top-wrap__items--doted-arrow-web').css('display','block');
            $('.top-wrap__items--triangle-web').css('display', 'block');
        },
        function(){
            $('.top-wrap__items--doted-arrow-web').css('display','none');
            $('.top-wrap__items--triangle-web').css('display', 'none');
        })
        .on('click', function(){
            $('.mobile-development').css('display', 'none');
            $('.ui-design').css('display', 'none');
            $('.web-development').css('display', 'block');
            $('.what-we-do .bot-wrap').css('background','url(../dist/img/bg-web.png) left center');
            $('.what-we-do .bot-wrap').css('background-size','cover');
        });

    /*** our team***/
    $('.our-team .top-wrap__items.first')
        .hover(
        function() {
            $('.our-team .top-wrap__items.first').css('background','rgba(0, 0, 0, 0.1)');
            $('.our-team .top-wrap__items--doted-arrow-first').css('display','block');
            $('.our-team .top-wrap__items--triangle-first').css('display', 'block');
        },
        function(){
            $('.our-team .top-wrap__items--doted-arrow-first').css('display','none');
            $('.our-team .top-wrap__items--triangle-first').css('display', 'none');
            $('.our-team .top-wrap__items.first').css('background','transparent');
        })
        .on('click', function(){
            $('.right-block.designer').css('display', 'none');
            $('.right-block.web-developer').css('display', 'none');
            $('.right-block.mobile-developer').css('display', 'inline-block');
        });
    $('.our-team .top-wrap__items.second')
        .hover(
        function() {
            $('.our-team .top-wrap__items.second').css('background','rgba(0, 0, 0, 0.1)');
            $('.our-team .top-wrap__items--doted-arrow-second').css('display','block');
            $('.our-team .top-wrap__items--triangle-second').css('display', 'block');
        },
        function(){
            $('.our-team .top-wrap__items--doted-arrow-second').css('display','none');
            $('.our-team .top-wrap__items--triangle-second').css('display', 'none');
            $('.our-team .top-wrap__items.second').css('background','transparent');
        })
        .on('click', function(){
            $('.right-block.web-developer').css('display', 'none');
            $('.right-block.mobile-developer').css('display', 'none');
            $('.right-block.designer').css('display', 'inline-block');
        });
    $('.our-team .top-wrap__items.third')
        .hover(
        function() {
            $('.our-team .top-wrap__items.third').css('background','rgba(0, 0, 0, 0.1)');
            $('.our-team .top-wrap__items--doted-arrow-third').css('display','block');
            $('.our-team .top-wrap__items--triangle-third').css('display', 'block');
        },
        function(){
            $('.our-team .top-wrap__items--doted-arrow-third').css('display','none');
            $('.our-team .top-wrap__items--triangle-third').css('display', 'none');
            $('.our-team .top-wrap__items.third').css('background','transparent');

        })
        .on('click', function(){
            $('.right-block.designer').css('display', 'none');
            $('.right-block.mobile-developer').css('display', 'none');
            $('.right-block.web-developer').css('display', 'inline-block');
        });

    /**tabs**/
    $('.portfolio__tabs .web_tab')
        .on('click', function(){
            $('.main .portfolio__tabs span.web_tab').addClass('active');
            $('.main .portfolio__tabs span.ios_tab').removeClass('active');
            $('.main .portfolio__tabs span.android_tab').removeClass('active');
            $('.portfolio-example.ios').css('display', 'none');
            $('.portfolio-example.android').css('display', 'none');
            $('.portfolio-example.web').css('display', 'block');
        });
    $('.portfolio__tabs .ios_tab')
        .on('click', function(){
            $('.main .portfolio__tabs span.web_tab').removeClass('active');
            $('.main .portfolio__tabs span.ios_tab').addClass('active');
            $('.main .portfolio__tabs span.android_tab').removeClass('active');
            $('.portfolio-example.web').css('display', 'none');
            $('.portfolio-example.android').css('display', 'none');
            $('.portfolio-example.ios').css('display', 'block');
        });
    $('.portfolio__tabs .android_tab')
        .on('click', function(){
            $('.main .portfolio__tabs span.web_tab').removeClass('active');
            $('.main .portfolio__tabs span.ios_tab').removeClass('active');
            $('.main .portfolio__tabs span.android_tab').addClass('active');
            $('.portfolio-example.web').css('display', 'none');
            $('.portfolio-example.ios').css('display', 'none');
            $('.portfolio-example.android').css('display', 'block');
        });
});