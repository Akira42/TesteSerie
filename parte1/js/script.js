$( document ).ready(function() {
    
    $(window).scroll(function(){
        pageScroll();
    });

    function pageScroll(){
        if($(window).scrollTop()  > 100) {
            $('#header').addClass('header-active-bg');
            
            $('.faixa-topo').css('margin-top', -$('.faixa-topo').height());
        } else {
            $('#header').removeClass('header-active-bg');

            $('.faixa-topo').css('margin-top', 0);
        }
        
    }

    pageScroll();

    $('.icon-bag').click(function(){
      $('#cart-preview').toggleClass('cart-hidden');
    });

    $('#close-cart').click(function(){
      $('#cart-preview').addClass('cart-hidden');
    });

    $('.back-to-store').click(function(){
      $('#cart-preview').addClass('cart-hidden');
    });

    $('#hamburger-menu').click(function(){
      $('.menu-mobile-wrapper').toggleClass('menu-mob-hidden');
    });

});

AOS.init();