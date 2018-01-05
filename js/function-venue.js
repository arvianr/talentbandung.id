$(document).ready(function(){
  var gallery = $('.gallery-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    autoplay : true,
    responsive: true,
    appendArrows:$('.arrow'),
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>'
   });
});

function initMap() {
  var sabuga = {lat:-6.886559, lng: 107.608383};
  var map = new google.maps.Map(document.getElementById('sabuga'), {
    zoom: 17,
    center: sabuga
  });
  var marker = new google.maps.Marker({
    position: sabuga,
    map: map
  });

}

function eldoradoMap(){
  var eldorado = {lat:-6.840826, lng: 107.598761};
  var map = new google.maps.Map(document.getElementById('eldorado'), {
    zoom: 17,
    center: eldorado
  });
  var marker = new google.maps.Marker({
    position: eldorado,
    map: map
  });

}
