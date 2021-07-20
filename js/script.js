$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.nav__header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});