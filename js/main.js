$(document).ready(function () {
    $('#loading').delay(1500).fadeOut(500);
    
    $("a.scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
    
    $('.container').click(function () {
        $('.container').removeClass('containerClicked');
        $('.container .bot').removeClass('botClicked');
        $('.container .bot .card').removeClass('cardClicked');
        $('.container .bot .card h2').removeClass('nameClicked');
        $('.container .section').removeClass('removeBorder');
        $('.container .top img').css({
            display: 'block'
        });
        $('.role-container #close-menu').removeClass('closeMenu');
        $(this).addClass('containerClicked');
        $(this).find('.bot').addClass('botClicked');
        $(this).find('.card').addClass('cardClicked');
        $(this).find('h2').addClass('nameClicked');
        $(this).find('.section').addClass('removeBorder');
        $(this).find('.top img').css({
            visibility: 'hidden'
        });
        $(this).prev().addClass('closeMenu')
    });
    
    $('.role-container #close-menu').click(function () {
        $('.container').removeClass('containerClicked');
        $('.container .bot').removeClass('botClicked');
        $('.container .bot .card').removeClass('cardClicked');
        $('.container .bot .card h2').removeClass('nameClicked');
        $('.container .section').removeClass('removeBorder');
        $('.container .top img').css({
            visibility: 'visible'
        });
        $('.role-container #close-menu').removeClass('closeMenu');
    });
    
    $(document).scroll(function () {
        var lastScrollTop = 0;
        var st = $(this).scrollTop();
        var bottom = $(document).height();
    if (st > lastScrollTop) {
        $('#arrow-back').fadeOut(500);
        $('#arrow-top').fadeIn(500);
        $('.arrow').addClass('rotate');
    } else if (st == bottom) {
        $('arrow').fadeOut(500);
    } else {
        $('#arrow-back').fadeIn(500);
        $('#arrow-top').fadeOut(500);
        $('.arrow').removeClass('rotate');
    };
        console.log(st);
        console.log(bottom);
    });
    
    $('.slicker').slick({
      
    });
    
})