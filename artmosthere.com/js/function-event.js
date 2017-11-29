var headContainerHeight = $('.top').height();
var sideContainerHeight = $('.two-side').height();

$(window).scroll(function(){

  var pScroll = $(this).scrollTop();

  if (pScroll <= headContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px,' + pScroll /12 + '%)'
    });
  };

  // if (pScroll => $('.two-side').offset().top - $(window).height()) {
  // $('.left-side').css('top', +1-(pScroll*0.300) + 'px');

  $('.right-side').css('top', -40+(pScroll*0.300) + 'px');
  // };


});

var input = $('#input');
input.keyup(filter);

function filter(){
  var search = $('.event');

  for (var i = 0; i < search.length; i++) {
    var item = $(search[i]).text().toLowerCase();
    if (item.indexOf(input.val().toLowerCase()) > -1) {
      $(search[i]).slideDown();
    }else {
      $(search[i]).slideUp();
    }
  }
};

$(document).ready(function(){
	var ev = $('.gallery-carousel').slick({
		// infinite: true;
		// slidesToShow: 1;
		responsive: true,
		appendArrows:$('.arrow'),
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>'
	});
	// window.sr = ScrollReveal({reset: true});
	// sr.reveal('.who-p', {duration: 2000});
	// sr.reveal('.icon-about', { duration: 2000 }, 150);
	// sr.reveal('.detail-about', { duration: 2000 }, 150);
  var gall = $('.gallery-slider').slick({
    infinite: true,
    slidesToShow: 1,
    autoplay : true,
    responsive: true,
    nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-forward"></button>',
    prevArrow: '<button type="button" class="slick-prev"><i class="ion-ios-arrow-back"></button>'
  });
});
