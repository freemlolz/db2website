$(document).ready(function(){
    $('.top-wrap__items--border-wrap.first')
        .hover(
        function() {
            $('.top-wrap__items--doted-arrow-first').css('display','block');
            $('.top-wrap__items--triangle-first').css('display', 'block');
        },
        function(){
            $('.top-wrap__items--doted-arrow-first').css('display','none');
            $('.top-wrap__items--triangle-first').css('display', 'none');
        })
        .on('click', function(){
            $('.ui-design').css('display', 'none');
            $('.web-development').css('display', 'none');
            $('.mobile-development').css('display', 'block');
            $('.what-we-do .bot-wrap').css('background','url(../dist/img/bg-apps.png) left center');
            $('.what-we-do .bot-wrap').css('background-size','cover');
        });
    $('.top-wrap__items--border-wrap.second')
        .hover(
        function() {
            $('.top-wrap__items--doted-arrow-second').css('display','block');
            $('.top-wrap__items--triangle-second').css('display', 'block');
        },
        function(){
            $('.top-wrap__items--doted-arrow-second').css('display','none');
            $('.top-wrap__items--triangle-second').css('display', 'none');
        })
        .on('click', function(){
            $('.web-development').css('display', 'none');
            $('.mobile-development').css('display', 'none');
            $('.ui-design').css('display', 'block');
            $('.what-we-do .bot-wrap').css('background','url(../dist/img/bg-design.png) left center');
            $('.what-we-do .bot-wrap').css('background-size','cover');
        });
    $('.top-wrap__items--border-wrap.third')
        .hover(
        function() {
            $('.top-wrap__items--doted-arrow-third').css('display','block');
            $('.top-wrap__items--triangle-third').css('display', 'block');
        },
        function(){
            $('.top-wrap__items--doted-arrow-third').css('display','none');
            $('.top-wrap__items--triangle-third').css('display', 'none');
        })
        .on('click', function(){
            $('.mobile-development').css('display', 'none');
            $('.ui-design').css('display', 'none');
            $('.web-development').css('display', 'block');
            $('.what-we-do .bot-wrap').css('background','url(../dist/img/bg-web.png) left center');
            $('.what-we-do .bot-wrap').css('background-size','cover');
        });
    $('.our-team .top-wrap__items.first img')
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
    $('.our-team .top-wrap__items.second img')
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
    $('.our-team .top-wrap__items.third img')
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
    $('.portfolio__tabs .web_tab')
        .hover(
        function() {
            $('.portfolio__tabs .web_tab').css('color', 'white');
            $('.portfolio__tabs .web_tab').css('opacity', '1');
        },
        function(){
            $('.portfolio__tabs .web_tab').css('color', '#000');
            $('.portfolio__tabs .web_tab').css('opacity', '.55');

        })
        .on('click', function(){
            $('.portfolio-example.ios').css('display', 'none');
            $('.portfolio-example.android').css('display', 'none');
            $('.portfolio-example.web').css('display', 'block');
        });
    $('.portfolio__tabs .ios_tab')
        .hover(
        function() {
            $('.portfolio__tabs .ios_tab').css('color', 'white');
            $('.portfolio__tabs .ios_tab').css('opacity', '1');
        },
        function(){
            $('.portfolio__tabs .ios_tab').css('color', '#000');
            $('.portfolio__tabs .ios_tab').css('opacity', '.55');

        })
        .on('click', function(){
            $('.portfolio-example.web').css('display', 'none');
            $('.portfolio-example.android').css('display', 'none');
            $('.portfolio-example.ios').css('display', 'block');
        });
    $('.portfolio__tabs .android_tab')
        .hover(
        function() {
            $('.portfolio__tabs .android_tab').css('color', 'white');
            $('.portfolio__tabs .android_tab').css('opacity', '1');
        },
        function(){
            $('.portfolio__tabs .android_tab').css('color', '#000');
            $('.portfolio__tabs .android_tab').css('opacity', '.55');

        })
        .on('click', function(){
            $('.portfolio-example.web').css('display', 'none');
            $('.portfolio-example.ios').css('display', 'none');
            $('.portfolio-example.android').css('display', 'block');
        });

});