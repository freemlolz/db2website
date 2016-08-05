$(document).ready(function(){
    setInterval(function(){
        var indicator = $('.navigation-indicator');
        var whatWeDo = $('.what-we-do');
        var portfolio = $('.portfolio');
        var ourTeam = $ ('.our-team');
        var clientsAboutUs = $ ('.clients-about-us');
        var contactForm = $('.contact-form');
        var indicatorOffset = indicator.offset();
        var whatWeDoOffset = whatWeDo.offset();
        var portfolioOffset = portfolio.offset();
        var ourTeamOffset = ourTeam.offset();
        var clientsAboutUsOffset = clientsAboutUs.offset();
        var contactFormOffset = contactForm.offset();

        function indicate() {
            if (indicatorOffset.top >= whatWeDoOffset.top && indicatorOffset.top < portfolioOffset.top) {
                $('.navigation-indicator #nav-id span:nth-child(1)').css('width','22px');
                $('.navigation-indicator #nav-id span:nth-child(2)').css('width','32px');
                $('.navigation-indicator #nav-id span:nth-child(3)').css('width','22px');
                $('.navigation-indicator #nav-id span:nth-child(4)').css('width','12px');
                $('.navigation-indicator #nav-id span:nth-child(5)').css('width','12px');
                $('.navigation-indicator #nav-id span:nth-child(6)').css('width','12px');
            } else if (indicatorOffset.top >= portfolioOffset.top && indicatorOffset.top < ourTeamOffset.top) {
                $('.navigation-indicator #nav-id span:nth-child(1)').css('width','12px');
                $('.navigation-indicator #nav-id span:nth-child(2)').css('width','22px');
                $('.navigation-indicator #nav-id span:nth-child(3)').css('width','32px');
                $('.navigation-indicator #nav-id span:nth-child(4)').css('width','22px');
                $('.navigation-indicator #nav-id span:nth-child(5)').css('width','12px');
                $('.navigation-indicator #nav-id span:nth-child(6)').css('width','12px');
            } else if (indicatorOffset.top >= ourTeamOffset.top && indicatorOffset.top < clientsAboutUsOffset.top) {
                $('.navigation-indicator #nav-id span:nth-child(1)').css('width','12px');
                $('.navigation-indicator #nav-id span:nth-child(2)').css('width','12px');
                $('.navigation-indicator #nav-id span:nth-child(3)').css('width','22px');
                $('.navigation-indicator #nav-id span:nth-child(4)').css('width','32px');
                $('.navigation-indicator #nav-id span:nth-child(5)').css('width','22px');
                $('.navigation-indicator #nav-id span:nth-child(6)').css('width','12px');
            } else if (indicatorOffset.top >= clientsAboutUsOffset.top && indicatorOffset.top < contactFormOffset.top) {
                $('.navigation-indicator #nav-id span:nth-child(1)').css('width','12px');
                $('.navigation-indicator #nav-id span:nth-child(2)').css('width','12px');
                $('.navigation-indicator #nav-id span:nth-child(3)').css('width','12px');
                $('.navigation-indicator #nav-id span:nth-child(4)').css('width','22px');
                $('.navigation-indicator #nav-id span:nth-child(5)').css('width','32px');
                $('.navigation-indicator #nav-id span:nth-child(6)').css('width','22px');
            } else if (indicatorOffset.top >= contactFormOffset.top) {
                $('.navigation-indicator #nav-id span:nth-child(1)').css('width','12px');
                $('.navigation-indicator #nav-id span:nth-child(2)').css('width','12px');
                $('.navigation-indicator #nav-id span:nth-child(3)').css('width','12px');
                $('.navigation-indicator #nav-id span:nth-child(4)').css('width','12px');
                $('.navigation-indicator #nav-id span:nth-child(5)').css('width','22px');
                $('.navigation-indicator #nav-id span:nth-child(6)').css('width','32px');
            } else {
                $('.navigation-indicator #nav-id span:nth-child(1)').css('width','32px');
                $('.navigation-indicator #nav-id span:nth-child(2)').css('width','22px');
                $('.navigation-indicator #nav-id span:nth-child(3)').css('width','12px');
                $('.navigation-indicator #nav-id span:nth-child(4)').css('width','12px');
                $('.navigation-indicator #nav-id span:nth-child(5)').css('width','12px');
                $('.navigation-indicator #nav-id span:nth-child(6)').css('width','12px');
            }
        }
        indicate();
    },100);
});