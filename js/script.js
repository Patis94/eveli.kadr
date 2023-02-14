$('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    item: 1,
    autoplayTimeout: 5000,
    autoplay: true,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
    }
});


AOS.init({
    duration: 1100,
    once: true,
});


const lightbox = GLightbox({
    touchNavigation: true,
    loop: false,
    autoplayVideos: true
});


jQuery(function ($) {
    $.scrollTo(0);

    $('.scroll--media').click(function () {
        $.scrollTo($('.description'), 500);
    });
});


const mobileNav1 = document.querySelector('.header__nav');
const mobileNav2 = document.querySelector('.header__socials');
const burgerIcon = document.querySelector('.header__burger');

burgerIcon.addEventListener('click', function () {
    mobileNav1.classList.toggle('header__nav--active');
    mobileNav2.classList.toggle('header__socials--active');
    burgerIcon.classList.toggle('header__burger--active');
});
