$(document).ready(function () {
    $(window).scrollTop($(window).scrollTop() + 1);
    $(window).scrollTop($(window).scrollTop() - 1);
});

$(function () {
    //$(window).scroll(changeBackground);
    $(window).scroll(stickyNav);
});

function stickyNav() {
    var window_top = $(window).scrollTop();
    var div_top = $('#navline').offset().top;

    if (window_top > (div_top - 400)) {
        $('#mainnav').addClass('shownav');
        $('#mainnav').removeClass('hidenav');
        $('.nav-font-color').addClass('black-text');
        $('.nav-font-color').removeClass('white-text');
    }
    else {
        $('#mainnav').removeClass('shownav');
        $('#mainnav').addClass('hidenav');
        $('.nav-font-color').addClass('white-text');
        $('.nav-font-color').removeClass('black-text');
    }
}

/*
function changeBackground() {
    var window_top = $(window).scrollTop();
    var div_top = $('#contact-us').offset().top;

    if (window_top > (div_top - 1000)) {
        $('body').css('background', 'url(https://lazygeniuslanz.github.io/Puppies/img/cover3.jpg) center center no-repeat');
        $('body').css('-webkit-background-size', 'cover');
        $('body').css('-moz-background-size', 'cover');
        $('body').css('-o-background-size', 'cover');
        $('body').css('background-size', 'cover');
        $('body').css('background-attachment', 'fixed');
    }
    else {
        $('body').css('background', 'url(https://lazygeniuslanz.github.io/Puppies/img/cover1.jpg) center center no-repeat');
        $('body').css('-webkit-background-size', 'cover');
        $('body').css('-moz-background-size', 'cover');
        $('body').css('-o-background-size', 'cover');
        $('body').css('background-size', 'cover');
        $('body').css('background-attachment', 'fixed');
    }
}
*/