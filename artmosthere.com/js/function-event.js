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
