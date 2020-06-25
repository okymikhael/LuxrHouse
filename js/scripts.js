(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    // new WOW().init();
    
    $('a.page-scroll').click(function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
        console.log($($ele.attr('href')).offset());
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

    
    $('.image-zoom').click(function () {
        var img = $(this).data("src");
        var page = $(this).data("page");
        console.log(img);
        $('header').css({"background-image":"url('"+img+"')"});
        $('header').css({"background-size":"cover"});
        $('header .header-content').css({"background-color":"rgba(0, 0, 0, 0.2)"});
        $('.main-title').css({"display":"none"});
        $('#leamo').css({"display":"block","width":"200px"},1000).attr("href",page);
     });

    $('#comeback').click(function () {
        $('.main-title').delay(1000).fadeIn();
        $('#leamo').css({"display":"none"});
        $('header .header-content').delay(1000)
        .queue(function (next) { 
          $(this).css({"background-color":"rgba(0, 0, 0, 0.616)"});
          next(); 
        });
        // $('header').delay(1000)
        // .queue(function (next) { 
        //   $(this).css({"background-attachment":"unset"});
        //   next(); 
        // });

    });

    $('#leamo').on({
        mouseenter: function () {
            $('header .header-content').css({"background-color":"rgba(0, 0, 0, 0.616)","transition":"1s"});
            $('#space').animate({"width":"20px"})

    },
        mouseleave: function () {
            $('header .header-content').css({"background-color":"rgba(0, 0, 0, 0.2)","transition":"1s"});
            $('#space').animate({"width":"0px"})
        }
    });
        

})(jQuery);