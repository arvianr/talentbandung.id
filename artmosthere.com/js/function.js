var headContainerHeight = $('.reveal').height();

$(window).scroll(function(){

  var pScroll = $(this).scrollTop();

  if (pScroll <= headContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px,' + pScroll /12 + '%)'
    });
  }
});
