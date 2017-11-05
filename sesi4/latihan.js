var buah = ["Apel", "Mengkudu", "Anggur", "Jeruk", "Pir", "Duren", "Ceri"];

console.log(buah[0]);

console.log(buah[4]);

buah[4] = "Kersen";


function buahaya(){
  console.log(buah[4]);
}

var quran = {
  "code":200,"status":"OK","data":{"number":1,"name":"\u0633\u0648\u0631\u0629 \u0627\u0644\u0641\u0627\u062a\u062d\u0629","englishName":"Al-Faatiha","englishNameTranslation":"The Opening","revelationType":"Meccan","numberOfAyahs":7,"ayahs":[{"number":1,"text":"\ufeff\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650","numberInSurah":1,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":2,"text":"\u0627\u0644\u0652\u062d\u064e\u0645\u0652\u062f\u064f \u0644\u0650\u0644\u0651\u064e\u0647\u0650 \u0631\u064e\u0628\u0651\u0650 \u0627\u0644\u0652\u0639\u064e\u0627\u0644\u064e\u0645\u0650\u064a\u0646\u064e","numberInSurah":2,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":3,"text":"\u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650","numberInSurah":3,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":4,"text":"\u0645\u064e\u0627\u0644\u0650\u0643\u0650 \u064a\u064e\u0648\u0652\u0645\u0650 \u0627\u0644\u062f\u0651\u0650\u064a\u0646\u0650","numberInSurah":4,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":5,"text":"\u0625\u0650\u064a\u0651\u064e\u0627\u0643\u064e \u0646\u064e\u0639\u0652\u0628\u064f\u062f\u064f \u0648\u064e\u0625\u0650\u064a\u0651\u064e\u0627\u0643\u064e \u0646\u064e\u0633\u0652\u062a\u064e\u0639\u0650\u064a\u0646\u064f","numberInSurah":5,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":6,"text":"\u0627\u0647\u0652\u062f\u0650\u0646\u064e\u0627 \u0627\u0644\u0635\u0651\u0650\u0631\u064e\u0627\u0637\u064e \u0627\u0644\u0652\u0645\u064f\u0633\u0652\u062a\u064e\u0642\u0650\u064a\u0645\u064e","numberInSurah":6,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":7,"text":"\u0635\u0650\u0631\u064e\u0627\u0637\u064e \u0627\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e \u0623\u064e\u0646\u0652\u0639\u064e\u0645\u0652\u062a\u064e \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650\u0645\u0652 \u063a\u064e\u064a\u0652\u0631\u0650 \u0627\u0644\u0652\u0645\u064e\u063a\u0652\u0636\u064f\u0648\u0628\u0650 \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650\u0645\u0652 \u0648\u064e\u0644\u064e\u0627 \u0627\u0644\u0636\u0651\u064e\u0627\u0644\u0651\u0650\u064a\u0646\u064e","numberInSurah":7,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false}],"edition":{"identifier":"quran-simple","language":"ar","name":"Simple","englishName":"Simple","format":"text","type":"quran"}}
}

console.log(quran.data.name);
// console.log(quran.data.ayahs[0].text);
// console.log(quran.data.ayahs[1].text);
// console.log(quran.data.ayahs[2].text);
// console.log(quran.data.ayahs[3].text);
// console.log(quran.data.ayahs[4].text);
// console.log(quran.data.ayahs[5].text);
// console.log(quran.data.ayahs[6].text);

for (var i = 0; i < 7; i++) {
  console.log(quran.data.ayahs[i].text);
}

var nilai = 8;
if (nilai >= 6) {
  console.log("Selamat Anda Lulus dengan Nilai " + nilai);
}else {
  console.log("Coba Lagi");
}

var jam = 19;

if (jam >= 1 && jam <= 11) {
  console.log("selamat pagi");
}else if (jam >= 12 && jam <= 15) {
  console.log("selamat siang");
}else if (jam >= 16 && jam <= 18) {
  console.log("selamat sore");
}else {
  console.log("selamat malam");
}

var hari = 5;
switch (hari) {
  case 0:
    alert("Senin");
    break;
  case 1:
    alert("Selasa");
    break;
  case 2:
    alert("Rabu");
    break;
  case 3:
    alert("Kamis");
    break;
  case 4:
    alert("Jumat");
    break;
  case 5:
    alert("Sabtu");
    break;
  case 6:
    alert("Minggu");
    break;
  default:
    alert("Nama hari tidak ditemukan");
}

for (var i = 0; i < buah.length; i++) {
  console.log(buah[i]);
}


// function greeting(nama) {
//   alert("halo "+nama);
// }
// greeting("arief");


function input(){
  var ngaran = document.getElementById("name")
  var inputn = ngaran.value;

  var surat = document.getElementById("email");
  var inpute = surat.value;

  var a = alert(inputn + " " + inpute)
  return a;
}

var greeting = document.getElementById('greeting');
greeting.addEventListener('click', input);

function greeting(){
  alert("Halo")
}

var btnname = document.getElementsByClassName("randomname");

  for (var i = 0; i < btnname.length; i++) {
    //var rname = btnname[i].textContent;
    //btnname[i].addEventListener('click', greet);
    if (btnname[i] == btnname[0]) {
      btnname[0].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[0].textContent);
      }
    }else if (btnname[i] == btnname[1]) {
      btnname[1].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[1].textContent);
      }
    }else if (btnname[i] == btnname[2]) {
      btnname[2].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[2].textContent);
      }
    }else if (btnname[i] == btnname[3]) {
      btnname[3].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[3].textContent);
      }
    }else if (btnname[i] == btnname[4]) {
      btnname[4].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[4].textContent);
      }
    }else if (btnname[i] == btnname[5]) {
      btnname[5].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[5].textContent);
      }
    }else if (btnname[i] == btnname[6]) {
      btnname[6].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[6].textContent);
      }
    }else if (btnname[i] == btnname[7]) {
      btnname[7].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[7].textContent);
      }
    }else if (btnname[i] == btnname[8]) {
      btnname[8].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[8].textContent);
      }
    }else if (btnname[i] == btnname[9]) {
      btnname[9].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[9].textContent);
      }
    }


  }


// btnname.onclick = function(){
//   btnname.getAttribute('onclick');
//   btnname.setAttribute('onclick', 'greet()');
// }


// btnname.addEventListener('click', function(){
//   alert("Halo")
// })
