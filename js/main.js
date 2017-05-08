$(document).ready(function () {
    $('.container').click(function () {
        $('.container').removeClass('containerClicked');
        $('.container .bot').removeClass('botClicked');
        $('.container .bot .card').removeClass('cardClicked');
        $('.container .bot .card h2').removeClass('nameClicked');
        $('.container .section').removeClass('removeBorder');
        $('.container .top img').css({
            display: 'block'
        });
        $(this).addClass('containerClicked');
        $(this).find('.bot').addClass('botClicked');
        $(this).find('.card').addClass('cardClicked');
        $(this).find('h2').addClass('nameClicked');
        $(this).find('.section').addClass('removeBorder');
        $(this).find('.top img').css({
            display: 'none'
        })
    });
    
    
  $('.slicker').slick({
      
  });
})