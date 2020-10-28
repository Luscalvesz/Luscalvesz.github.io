"use strict";

function travazap() {
  var audio = new Audio('./assets/music/windows-10-error-sound.mp3');
  var audio2 = new Audio('./assets/music/avast2.mp3');
  var box2 = document.getElementById("b");
  var box = document.getElementById("a");
  var e2 = '';
  var e1 = '';
  var i = 0;
  var rdn = 0;
  var rdn2 = 0;
  var dno = document.getElementById('download');

  function download() {
    dno.click();
  }

  download();

  while (i < 100) {
    songs();
    rdn = Math.floor(Math.random() * 20);
    rdn2 = Math.floor(Math.random() * 20);
    out(i, rdn, rdn2);
    i++;
  }

  function out(i, rdn, rdn2) {
    setTimeout(function () {
      e2 = "<img style=\"z-index:".concat(rdn2, "; position:fixed; right: ").concat(i -= rdn, "rem; top: ").concat(i -= rdn, "rem\" src='./assets/img/error2.png'>");
      box2.innerHTML += e2;
      e1 = "<img style=\"z-index:".concat(rdn2, "; position:fixed; left: ").concat(i += rdn, "rem; top: ").concat(i += rdn, "rem;\" src='./assets/img/error.png'>");
      box.innerHTML += e1;
      console.log("<img style=\"position:fixed; left: ".concat(i, "rem; top: ").concat(i, "rem\" src='./assets/img/error.png'>"));
    }, 50 * i);
  }

  function songs() {
    audio.play();
    setTimeout(function () {
      audio2.play();
    }, 5000);
  }

  setTimeout(function () {
    document.getElementById('bImg').classList.add('is--active');
  }, 5000);
  setTimeout(function () {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO", "lusca", "height=500,width=500");
  }, 15000);
}

function showHeader() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('menuTransform');
  var headerDrop = document.getElementById('drop');
  headerDrop.classList.toggle('activeHeader');
}