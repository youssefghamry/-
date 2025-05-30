(function ($) {
    "use strict";

    // Header Sticky
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 120) {
            $('.navbar-area').addClass("is-sticky");
        }
        else {
            $('.navbar-area').removeClass("is-sticky");
        }
    });

    // Sidebar Modal
    $(".burger-menu").on('click', function () {
        $('.sidebar-modal').toggleClass('active');
    });
    $(".sidebar-modal-close-btn").on('click', function () {
        $('.sidebar-modal').removeClass('active');
    });

    // Search Popup JS
    $('.close-btn').on('click', function () {
        $('.search-overlay').fadeOut();
        $('.search-btn').show();
        $('.close-btn').removeClass('active');
    });
    $('.search-btn').on('click', function () {
        $(this).hide();
        $('.search-overlay').fadeIn();
        $('.close-btn').addClass('active');
    });

    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // Button Hover JS
    $(function () {
        $('.default-btn')
            .on('mouseenter', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            })
            .on('mouseout', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            });
    });

    // Odometer JS
    $('.odometer').appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // Popup Image
    $('.popup-btn').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
        }
    });

    // Projects Slides
    $('.projects-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    // Tabs
    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        $('.tab ul.tabs li a').on('click', function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();
            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
            g.preventDefault();
        });
    })(jQuery);

    // Popup Video
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Feedback Slides
    $('.feedback-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            },
            1550: {
                items: 4,
            }
        }
    });

    // Partner Slides
    $('.partner-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 3,
            },
            768: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        }
    });

    // Nice Select JS
    $('select').niceSelect();

    // Input Plus & Minus Number JS
    $('.input-counter').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="text"]'),
            btnUp = spinner.find('.plus-btn'),
            btnDown = spinner.find('.minus-btn'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

    // FAQ Accordion
    $(function () {
        $('.accordion').find('.accordion-title').on('click', function () {
            // Adds Active Class
            $(this).toggleClass('active');
            // Expand or Collapse This Panel
            $(this).next().slideToggle('fast');
            // Hide The Other Panels
            $('.accordion-content').not($(this).next()).slideUp('fast');
            // Removes Active Class From Other Titles
            $('.accordion-title').not($(this)).removeClass('active');
        });
    });

    // Subscribe form
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            // everything looks good!
            event.preventDefault();
        }
    });
    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }
    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function () {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub() {
        $(".newsletter-form").addClass("animate__animated animate__shake");
        setTimeout(function () {
            $(".newsletter-form").removeClass("animate__animated animate__shake");
        }, 1000)
    }
    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }


    // Go to Top
    $(function () {
        // Scroll Event
        $(window).on('scroll', function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active');
            if (scrolled < 600) $('.go-top').removeClass('active');
        });
        // Click Event
        $('.go-top').on('click', function () {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
    });

    // New
    // Team Slides
    $('.team-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            }
        }
    });

    // Work Slides
    $('.work-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            930: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });

    // SEO Banner Slider
    $('.seo-banner-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        margin: 0,
        autoplayHoverPause: true,
        autoplay: true,
        autoHeight: true,
        mouseDrag: false,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
    });

    $(".seo-banner-slider").on("translate.owl.carousel", function () {
        $(".seo-banner h1, .seo-banner p").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
        $(".seo-banner .banner-btn").removeClass("animate__animated animate__fadeInDown").css("opacity", "0");
    });

    $(".seo-banner-slider").on("translated.owl.carousel", function () {
        $(".seo-banner h1, .seo-banner p").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
        $(".seo-banner .banner-btn").addClass("animate__animated animate__fadeInDown").css("opacity", "1");
    });

    // IT Banner Slider
    $('.it-banner-image').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        animateOut: 'fadeOut',
        dots: false,
        margin: 0,
        autoplayHoverPause: true,
        autoplay: true,
    });

    // Machine learning slider
    $('.machine-learning-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        margin: 0,
        autoplayHoverPause: true,
        autoHeight: true,
        mouseDrag: false,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
    });

    $(".machine-learning-slider").on("translate.owl.carousel", function () {
        $(".machine-learning-banner h1, .machine-learning-banner p").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
        $(".machine-learning-banner .banner-btn").removeClass("animate__animated animate__fadeInDown").css("opacity", "0");
    });

    $(".machine-learning-slider").on("translated.owl.carousel", function () {
        $(".machine-learning-banner h1, .machine-learning-banner p").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
        $(".machine-learning-banner .banner-btn").addClass("animate__animated animate__fadeInDown").css("opacity", "1");
    });

    // WOW JS
    $(window).on('load', function () {
        if ($(".wow").length) {
            var wow = new WOW({
                boxClass: 'wow',      // animate__animated animate__element css class (default is wow)
                animateClass: 'animated', // Animation css class (default is animated)
                offset: 20,         // Distance to the element when triggering the animation (default is 0)
                mobile: true,       // Trigger animations on mobile devices (default is true)
                live: true,       // Act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
    });

    // Preloader Area
    $(window).on('load', function () {
        $('.preloader').addClass('preloader-deactivate');
    });

    /* Start "Cryptocurrency Demo JS, "Cyber Security Demo JS & Big Data Solution Demo JS" */

    $('.value-trade-slides').owlCarousel({
        nav: false,
        loop: true,
        margin: 25,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 2,
            },
            1400: {
                items: 3,
            },
            1600: {
                items: 4,
            }
        }
    });

    // Unique Feedback Slides
    $('.unique-feedback-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 25,
        autoplayHoverPause: true,
        autoplay: true,

        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 2,
            },
            1550: {
                items: 2,
            }
        }
    });

    // Partner Slides
    $('.cs-partner-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 3,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 7,
            },
            1600: {
                items: 8,
            }
        }
    });

    // Buy Now Btn

    // Switch Btn
    $('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");

    /* End "Cryptocurrency Demo JS, "Cyber Security Demo JS & Big Data Solution Demo JS" */

}(jQuery));

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('aronix_theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('aronix_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}
// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('aronix_theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();
   /******************************************************/
    ! function(e, t, n, s, u, a) {
        e.twq || (s = e.twq = function() {
                s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
            }, s.version = '1.1', s.queue = [], u = t.createElement(n), u.async = !0, u.src = 'http://static.ads-twitter.com/uwt.js',
            a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a))
    }(window, document, 'script');
    // Insert Twitter Pixel ID and Standard Event data below
    twq('init', 'o4chn');
    twq('track', 'PageView');
	
	document.addEventListener('keydown', function(e) {
    // منع F12 (أدوات المطور)
    if (e.key === 'F12') {
        e.preventDefault();
    }

    // منع النسخ (Ctrl + C)، القص (Ctrl + X)، واللصق (Ctrl + V)
    if ((e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'v'))) {
        e.preventDefault();
    }

    // منع حفظ الصفحة (Ctrl + S)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
    }

    // يمكنك إضافة منع أزرار أخرى حسب الحاجة
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // منع القائمة السياقية (زر الفأرة الأيسر)
});
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey) {
        e.preventDefault(); // يمنع أي اختصار مرتبط بمفتاح Ctrl
    }
});