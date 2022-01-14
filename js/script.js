var $,
    window,
    scroll = $(window).scrollTop();

/*================================================
              Start Navigation
=================================================*/
$(function() {
    'use strict';
    $(".menu-toggle").on("click", function() {
        $("#top-nav .navbar-wrapper").toggleClass("active");
        $(this).toggleClass("rotate");
    });

    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("#top-nav").addClass("nav-white-bg");
        } else {
            $("#top-nav").removeClass("nav-white-bg");
        }
    });

    $(window).on("resize", function() {
        if ($(this).width() < 992 - 18) {
            $("#top-nav").addClass("nav-dark-bg").removeClass("nav-white-bg");
        } else {
            $("#top-nav").removeClass("nav-dark-bg").addClass("nav-white-bg");
            $("#top-nav .navbar-wrapper").removeClass("active");
        }

        if ($(this).width() > 973 && $(scroll) === 0) {
            $("#top-nav").removeClass("nav-white-bg");
        }
    });


    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#top-nav").addClass("nav-white-bg");
    } else {
        $("#top-nav").removeClass("nav-white-bg");
    }


    if ($(window).width() > 973 && $(scroll) === 0) {
        $("#top-nav").removeClass("nav-white-bg");
    }


    if ($(window).width() < 992 - 18) {
        $("#top-nav").addClass("nav-dark-bg");
    }

    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#top-nav").addClass("nav-white-bg");
    }

    $("#top-nav .navbar-wrapper li .link-item,#hero-area .btn-mouse-wrapper").on("click", function(e) {
        e.preventDefault();
        var linkVal = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(linkVal).offset().top - 50
        }, 10);

        $("#top-nav .navbar-wrapper").toggleClass("active");
        $(".menu-toggle").removeClass("rotate");
    });

    $("#top-nav .navbar-wrapper li").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
});



/*================================================
              Start Portfolio
=================================================*/

$(function() {
    'use strict';
    $('#portfolio ul.portfolio-filter li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
});

$(function() {
    'use strict';
    $('#portfolio ul.portfolio-filter li:first-of-type').on('click', function() {
        $('#portfolio .portfolio-items .item').hide(0).fadeIn(0);
    });
});


$(function() {
    'use strict';
    $('#portfolio ul.portfolio-filter li:not(:first-of-type)').on('click', function() {
        $('#portfolio .portfolio-items .item').hide(0);
        $('.' + $(this).data('value')).show(0);
    });
});


/*================================================
              Start Testimonilas
=================================================*/

$(function() {
    'use strict';
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true
    });
});

/*================================================
              Start Footer
=================================================*/

$(function() {
    'use strict';
    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $(".back-to-top").css("right", "3%", "opacity", "1");
        } else {
            $(".back-to-top").css("right", "-40%", "opacity", "0");
        }
    });

    /* Go To Top */
    $(".back-to-top a").on("click", function(e) {
        e.preventDefault();
        var linkVal = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(linkVal).offset().top - 50
        }, 100);
    });
});