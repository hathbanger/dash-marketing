$(document).ready(function ($) {
    'use strict';


/* ---------------------------------------------
     page  Prealoader
 --------------------------------------------- */
    $(window).on('load', function () {
        $("#loading-center-page").fadeOut();
        $("#loading-page").delay(400).fadeOut("slow");
    });


});

 
/* ---------------------------------------------
    Owl caroussel
 --------------------------------------------- */

$('.testimonial-caroussel').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav:false,
    dots:true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 500,
    center: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1

        },
        1200: {
            items: 1
        }
    }
});


/*--------------------
 MAGNIFIC POPUP IMAGE  JS
 ----------------------*/
$('.popup-image').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-with-zoom',
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,

        duration: 300,
        easing: 'ease-in-out',

        opener: function (openerElement) {

            return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
    }
});



/*----------------------------------------------------*/
/*	VIDEO POP PUP
/*----------------------------------------------------*/
  $('.video-modal').magnificPopup({
            type: 'iframe',
              
                iframe: {
                    patterns: {
                        youtube: {
               
                            index: 'youtube.com',
                            src: 'https://www.youtube.com/embed/7e90gBu4pas'
                
                                }
                            }
                        }                 
        });

/* ---------------------------------------------
 Back top page scroll up
 --------------------------------------------- */


$.scrollUp({
    scrollText: '<i class="arrow_up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});


/* ---------------------------------------------
 WoW plugin
 --------------------------------------------- */

new WOW().init({
    mobile: true,
});

/* ---------------------------------------------
 Smooth scroll
 --------------------------------------------- */

  $('a.section-scroll[href*="#"]:not([href="#"])').on('click', function (event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
        event.preventDefault();
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 750);
            return false;
        }
    }
});


/*----------------------------------------
 Newsletter Subscribe
 --------------------------------------*/


    $(".subscribe-mail").ajaxChimp({
        callback: mailchimpCallRep,
        url: "mailchimp-post-url" //Replace this with your own mailchimp post URL. Just paste the url inside "".
    });

function mailchimpCallRep(resp)
{
    if (resp.result === "success") {
        $(".sucess-message").html(resp.msg).fadeIn(1000);
        $(".error-message").fadeOut(500);
    } else if (resp.result === "error") {
        $(".error-message").html(resp.msg).fadeIn(1000);
    }
}
