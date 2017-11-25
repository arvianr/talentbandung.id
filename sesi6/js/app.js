$(document).ready(function(){

   var daftarTaman = $('.daftar-taman');
   var filter      = $('#filter');

   $.get('https://www.ariona.net/talentbandung/', function(data){
      $.each( data, function(){
         var html =  '<div class="grid-item"><article class="taman">'+
                        '<figure>'+
                           '<a href="single.html"><img src="'+this.image.thumbnail+'" alt=""/></a>'+
                        '</figure>'+
                        '<div class="taman-detail">'+
                           '<h2>'+
                              '<a href="single.html">'+
                                 '<span class="subtitle">Taman</span>'+
                                 '<span class="title">'+this.nama+'</span>'+
                              '</a>'+
                           '</h2>'+
                           '<p>'+this.alamat+'</p>'+
                        '</div>'+
                     '</article></div>';

         daftarTaman.append(html);

      } );
   });

   filter.on('keyup', function(){
      var taman  = $(".grid-item");
      var search = this.value.toLowerCase();

      taman.each(function(){
         var namaTaman   = $(this).find('.title').text().toLowerCase();
         var alamatTaman = $(this).find('p').text().toLowerCase();


         if (namaTaman.indexOf(search) != -1 || alamatTaman.indexOf(search) != -1) {
            $(this).show(300);
         } else {
            $(this).hide(300);
         }
      })
   });

   var gallery = $('.gallery-carousel').slick({
     infinite: true,
     slidesToShow: 3,
     autoplay : true,
     responsive: true,
     autoplaySpeed : 1500,
     appendArrows:$('.arrow'),
     nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-forward"></button>',
     prevArrow: '<button type="button" class="slick-prev"><i class="ion-ios-arrow-back"></button>'
   });

});

function initMap() {
  var balkot = {lat:-6.912992, lng: 107.609583};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: balkot
  });
  var marker = new google.maps.Marker({
    position: balkot,
    map: map
  });
}
