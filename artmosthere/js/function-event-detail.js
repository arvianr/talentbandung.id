
function gsgtelkomMap() {
  var gsgtelkom = {lat:-6.976443, lng: 107.630330};
  var map = new google.maps.Map(document.getElementById('gsgtelkom'), {
    zoom: 17,
    center: gsgtelkom
  });
  var marker = new google.maps.Marker({
    position: gsgtelkom,
    map: map
  });
}
