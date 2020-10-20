"use strict";

function travazap() {
  var audio = new Audio('./assets/music/windows-10-error-sound.mp3');
  var audio2 = new Audio('./assets/music/avast.mp3');
  var box2 = document.getElementById("b");
  var box = document.getElementById("a");
  var e2 = '';
  var e1 = '';
  var i = 0;
  var rdn = 0;

  while (i < 100) {
    songs();
    rdn = Math.floor(Math.random() * 25);
    out(i, rdn);
    i++;
  }

  function out(i, rdn) {
    setTimeout(function () {
      e2 = "<img style=\"position:fixed; right: ".concat(i += rdn, "rem; top: ").concat(i += rdn, "rem\" src='./assets/img/error2.png'>");
      box2.innerHTML += e2;
      e1 = "<img style=\"z-index:1; position:fixed; left: ".concat(i += rdn, "rem; top: ").concat(i += rdn, "rem;\" src='./assets/img/error.png'>");
      box.innerHTML += e1;
      setTimeout(function () {
        audio.play();
      }, 1000);
      setTimeout(function () {
        audio2.play();
      }, 5000);
      console.log("<img style=\"position:fixed; left: ".concat(i, "rem; top: ").concat(i, "rem\" src='./assets/img/error.png'>"));
    }, 50 * i);
  }

  function songs() {
    audio.play();
    setTimeout(function () {
      audio.play();
    }, 2000);
  }

  setTimeout(function () {
    document.getElementById('bImg').classList.add('is--active');
  }, 4500);
  setTimeout(function () {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO", "lusca", "height=500,width=500");
  }, 15000);
} // function alterimg() {
//     setTimeout(() => {
//         var imag = document.getElementById('imagem')
//         imag.src = './assets/img/hacking.svg'
//     }, 1000);
// }
// function removeImg() {
//     setTimeout(() => {
//     var imag = document.getElementById('imagem')
//     imag.src = './assets/img/internet.svg'
//     }, 1000);
// }
// window.onload = function() {
//     writer();
// };