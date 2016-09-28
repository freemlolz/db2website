$(document).ready(function(){

    var responsive = innerWidth;
    if (responsive > 1024) {
        (function(){
            var itemsOuterHeight = $('.main .what-we-do .top-wrap__items').outerHeight(true);
            var itemsHeight = $('.main .what-we-do .top-wrap__items').height();
            var whatTriangleHeight = 30 / 2;
            var margin = (itemsOuterHeight - itemsHeight) / 2;
            var trianglePosition = itemsHeight + margin - whatTriangleHeight;
            $('.main .what-we-do .top-wrap__items--triangle-ios').css('top',trianglePosition);
            $('.main .what-we-do .top-wrap__items--triangle-design').css('top',trianglePosition);
            $('.main .what-we-do .top-wrap__items--triangle-web').css('top',trianglePosition);
            $('.main .what-we-do .top-wrap__items--doted-arrow-design').css('top',itemsHeight + (margin/5));
            $('.main .what-we-do .top-wrap__items--doted-arrow-ios').css('top',itemsHeight + (margin/5));
            $('.main .what-we-do .top-wrap__items--doted-arrow-web').css('top',itemsHeight + (margin/5));
        })();

        (function(){
            var itemsOuterHeight = $('.main .our-team .top-wrap__items').outerHeight(true);
            var itemsHeight = $('.main .our-team .top-wrap__items').height();
            var whatTriangleHeight = 30 / 2;
            var margin = (itemsOuterHeight - itemsHeight) / 2;
            var trianglePosition = itemsHeight + margin - whatTriangleHeight;
            $('.main .our-team .top-wrap__items--triangle-first').css('top',trianglePosition);
            $('.main .our-team .top-wrap__items--triangle-second').css('top',trianglePosition);
            $('.main .our-team .top-wrap__items--triangle-third').css('top',trianglePosition);
        })();

    } else if (responsive <= 1024) {
        $('.top-wrap__items--doted-arrow-design').css('visibility','hidden');
        $('.top-wrap__items--doted-arrow-ios').css('visibility','hidden');
        $('.top-wrap__items--doted-arrow-web').css('visibility','hidden');
        $('.top-wrap__items--doted-arrow-first').css('visibility','hidden');
        $('.top-wrap__items--doted-arrow-second').css('visibility','hidden');
        $('.top-wrap__items--doted-arrow-third').css('visibility','hidden');

        (function(){
            var wrapperPaddingHeight = $('.main .what-we-do .top-wrap');
            var paddBot = wrapperPaddingHeight.css('padding-bottom').replace('px','');
            var itemsHeight = $('.main .what-we-do .top-wrap__items').height();
            var paddingBot = Number(paddBot);
            var whatTriangleHeight = 30 / 2;
            var trianglePosition = itemsHeight + paddingBot - whatTriangleHeight;
            $('.main .what-we-do .top-wrap__items--triangle-ios').css('top',trianglePosition);
            $('.main .what-we-do .top-wrap__items--triangle-design').css('top',trianglePosition);
            $('.main .what-we-do .top-wrap__items--triangle-web').css('top',trianglePosition);
        })();

        (function(){
            var wrapperPaddingHeight = $('.main .our-team .top-wrap');
            var paddBot = wrapperPaddingHeight.css('padding-bottom').replace('px','');
            var itemsHeight = $('.main .our-team .top-wrap__items').height();
            var paddingBot = Number(paddBot);
            var whatTriangleHeight = 30 / 2;
            var trianglePosition = itemsHeight + paddingBot - whatTriangleHeight;
            $('.main .our-team .top-wrap__items--triangle-first').css('top',trianglePosition);
            $('.main .our-team .top-wrap__items--triangle-second').css('top',trianglePosition);
            $('.main .our-team .top-wrap__items--triangle-third').css('top',trianglePosition);
        })();

    }

});