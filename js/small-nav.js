
$(window).scroll(function (){
    var top = $(window).scrollTop();
    var find_class_small = $.contains('.header', '.header--small',);

    if(top > 70 && find_class_small == false) {
     $('.header').addClass('header--small');
    }
    else {
     $('.header').removeClass('header--small');
    }
});
