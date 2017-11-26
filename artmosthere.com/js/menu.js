var nav = $('#nav-menu');
var navigation = $('.container-nav');
var menu = $('.slide-menu');
var list = $('.list-menu');


function myFunction(x) {
    x.classList.toggle("change");
    menu.animate({width: 'toggle'});
    list.fadeToggle("slow");
    navigation.css("z-index", "999");
    menu.css("z-index","998");
}

// $(document).ready(function(){
//   window.sr = ScrollReveal({ reset: true });
//   sr.reveal('#who', {
//   origin: 'right',
//   duration: 2000
//   });
// });
