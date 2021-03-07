$(document).ready(function () {
    // loader page when reload
    $(window).on("load", function () {
        $(".loader-wrapper").fadeOut("slow")
    })

    $(window).scroll(function () {
        // scroll-up button show/hide script
        if (this.scrollY > 20) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // slide-up script
    $(".scroll-up-btn").click(function () {
        $("html").animate({
            scrollTop: 0,
        });
        // removing smooth scroll on slide-up button click
        $("html").css("scrollBehavior", "auto");
    });

    $(".navbar .menu li a").click(function () {
        // applying again smooth scroll on menu items click
        $("html").css("scrollBehavior", "smooth");
        $(".navbar .menu li a").removeClass("nav-active");
        $(this).addClass("nav-active");
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    // toggle menu/navbar script
    $(".menu-btn").click(function () {
        $(".nav-right ul").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    // owl carousel script
    $(".carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 1500,
        margin: 20,
        loop: true,
        nav: false,
        dot: true,
        responsive: {
            0: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        },
    });
});

// init cursor
var cursors = [{
    cursor_id: "3",
    cursor_type: "0",
    cursor_shape: "15",
    cursor_image: "",
    default_cursor: "auto",
    hover_effect: "plugin",
    body_activation: "1",
    element_activation: "0",
    selector_type: "tag",
    selector_data: "body",
    color: "#f72c26",
    width: "30",
    blending_mode: "normal",
}, ];