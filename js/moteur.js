/*global $, jQuery, TweenMax*/

$(function () {
    "use strict";
    
    /* ==================== BURGER MENU =================== */
    
    $(".burger-container").click(function () {
        $(this).find(".burger").toggleClass("burger-active");
        $('.navbar').toggleClass('open');
    });
    
     /* ==================== ABOUT & CONTACT MENU =================== */
        
    var mq = window.matchMedia("(max-width: 414px)");
    
    $("#about-button").click(function () {
        if ($('#about').offset().left > 0) {
            TweenMax.to('#about', 0.3, {left: '36%'});
            TweenMax.to('#contact', 0.3, {left: '100%'});
        } else {
            TweenMax.to('#about', 0.3, {left: '100%'});
        }
    });
    
    $("#contact-button").click(function () {
        if ($('#contact').offset().left > 0) {
            TweenMax.to('#contact', 0.3, {left: '36%'});
            TweenMax.to('#about', 0.3, {left: '100%'});
        } else {
            TweenMax.to('#contact', 0.3, {left: '100%'});
        }
    });
    
    
    if (mq.matches) {
         
        $("#about-button").click(function () {
            if ($('#about').offset().left > 0) {
                TweenMax.to('#about', 0.3, {left: '10%'});
                TweenMax.to('#contact', 0.3, {left: '100%'});
            } else {
                TweenMax.to('#about', 0.3, {left: '100%'});
            }
        });
    
        $("#contact-button").click(function () {
            if ($('#contact').offset().left > 0) {
                TweenMax.to('#contact', 0.3, {left: '10%'});
                TweenMax.to('#about', 0.3, {left: '100%'});
            } else {
                TweenMax.to('#contact', 0.3, {left: '100%'});
            }
        });
         
    }
    
    /* ========================== GALLERY ========================== */
    
    /* ==================== CLOSE =================== */
    
    $(".close").click(function () {
        $(".hidden").fadeOut('slow', function () {
            $(".hidden").css('display', 'none');
        });
        $('html').css('overflow-Y', 'scroll');
    });
    
    /* ==================== NO SCROLLING =================== */
    
    function noScrolling() {
        $('html').css('overflow-Y', 'hidden');
        $('.hidden').css('overflow', 'scroll');
    }
    
   /* ==================== PROJET 1 =================== */
    
    $(".item1").click(function () {
        $('#item1').fadeIn("slow", function () {
            $("#item1").css('display', 'block');
            noScrolling();
        });
        
    });
    
    /* ==================== PROJET 2 =================== */
    
    $(".item2").click(function () {
        $('#item2').fadeIn("slow", function () {
            $("#item2").css('display', 'block');
            noScrolling();
        });
        
    });
    
    /* ==================== PROJET 3 =================== */
    
    $(".item3").click(function () {
        $('#item3').fadeIn("slow", function () {
            $("#item3").css('display', 'block');
            noScrolling();
        });
        
    });
    
    /* ==================== PROJET 4 =================== */
    
    $(".item4").click(function () {
        $('#item4').fadeIn("slow", function () {
            $("#item4").css('display', 'block');
            noScrolling();
        });
        
    });
    
    /* ==================== PROJET 5 =================== */
    
    $(".item5").click(function () {
        $('#item5').fadeIn("slow", function () {
            $("#item5").css('display', 'block');
            noScrolling();
        });
        
    });
    
    /* ==================== PROJET 6 =================== */
    
    $(".item6").click(function () {
        $('#item6').fadeIn("slow", function () {
            $("#item6").css('display', 'block');
            noScrolling();
        });
        
    });
    
    
});