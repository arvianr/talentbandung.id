var headContainerHeight = $('.reveal').height();

$(window).scroll(function(){

  var pScroll = $(this).scrollTop();

  if (pScroll <= headContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px,' + pScroll /12 + '%)'
    });
  }
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
}
