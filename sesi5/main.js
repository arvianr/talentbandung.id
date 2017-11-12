// var buah = ["apel", "jeruk", "mangga", "duren"];
//
// var listBuah = document.getElementById('buah');
//
//
// for (var i = 0; i < buah.length; i++) {
//   var listItem = document.createElement('li');
//   listItem.classList.add('buah');
//   listItem.textContent = buah[i];
//
//   listBuah.appendChild(listItem);
// }
//
// function searchbuah() {
//   var input = document.getElementById('filter');
//   var filter = input.value.toLowerCase();
//   var li = listBuah.getElementsByClassName('buah');
//
//   for (var i = 0; i < li.length; i++) {
//     var cari = li[i].textContent.toLowerCase()[0];
//     if (cari.indexOf(filter) > -1) {
//       li[i].style.display = "block";
//     }else {
//       li[i].style.display = "none";
//     }
//   }
// }


var buah = ["apel", "jeruk", "mangga", "duren"];
var listBuah = $('#buah');

for (var i = 0; i < buah.length; i++) {
  $('#buah').append(
    $('<li></li>')
    .addClass("buah")
      .text(buah[i])
)};

  var filter = $('#filter');
  filter.keyup(filterBuah);

function filterBuah(){
  var buah = $('.buah');

  for (var i = 0; i < buah.length; i++) {
    var item = $(buah[i]).text().toLowerCase();
    if (item.indexOf(filter.val().toLowerCase()) > -1) {
      $(buah[i]).slideDown();
    }else {
      $(buah[i]).slideUp();
    }
  }
}

// var search = filter.val();
//
// var buahitem = $('.buah');
//
// buahitem.each(function(){
//   var buah = $(this);
//   var namabuah = buah.text().toLowerCase();
//
//   if (namabuah.indexOf(search.toLowerCase()) > -1){
//     buah.slideDown();
//   }else {
//     buah.slideUp();
//   }
// });


$.get('https://ariona.net/talentbandung/', function(data, status) {
  for (var i = 0; i < data.length; i++) {
    $('#list-taman').append('<li class="taman">' +data[i].nama+ '<img src="'+data[i].image.thumbnail+'"></li>');
  }

  // var cari = $('#search').val();
  // var tamanitem = $('.taman');
  //
  // tamanitem.each(function(){
  //   var namataman = $(this).text().toLowerCase();
  //
  //   if (namataman.indexOf(cari.toLowerCase()) > -1) {
  //     $(this).slideDown();
  //   }else {
  //     $(this).slideUp();
  //   }
  // });

  var filter = $('#search');
  filter.keyup(filtertaman);

  function filtertaman(){
    var taman = $('.taman');

    for (var i = 0; i < taman.length; i++) {
      var item = $(taman[i]).text().toLowerCase();
      if (item.indexOf(filter.val().toLowerCase()) > -1) {
        $(taman[i]).slideDown();
      }else {
        $(taman[i]).slideUp();
      }
    }
  }

});
