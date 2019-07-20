$( document ).ready(function() {
    $('.menu-button').click(function() {
        $('.sidebar').animate({left: 0}, 300);
    });
    $('.menu-close ').click(function() {
        $('.sidebar').animate({left: "-320px"}, 300);
    });
});