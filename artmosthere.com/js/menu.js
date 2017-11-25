var nav = $('#nav-menu');
var navigation = $('.container-nav');
var menu = $('.slide-menu');

// nav.click(showing);
//
// function showing(){
//   menu.slideToggle();
//   nav.css("z-index", "999");
//   menu.css("z-index","998");
//   $('body').css("z-index", "-1");
// }

function myFunction(x) {
    x.classList.toggle("change");
    menu.slideToggle();
    navigation.css("z-index", "999");
    menu.css("z-index","998");
}
