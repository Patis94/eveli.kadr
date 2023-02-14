$(window).scroll(function(){
    if($(this).scrollTop()>600) $('.scrollup').fadeIn();
    else $('.scrollup').fadeOut();
}

);

$(window).scroll(function(){
    var top = $(window).scrollTop();
    var find_class_small = $.contains('.main__header', '.main__header--small');

    if(top > 100 && find_class_small == false) {
     $('.main__header').addClass('main__header--small');
    }
    else {
     $('.main__header').removeClass('main__header--small');
    }
});


   
    