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
