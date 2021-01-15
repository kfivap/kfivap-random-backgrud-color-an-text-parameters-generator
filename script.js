'use strict';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let winheight = window.innerHeight
let winwidth =window.innerWidth
let ofheight=document.getElementById('hello').offsetHeight
let ofwidth=document.getElementById('hello').offsetWidth



///////////////




var timing1 = 500,
    textspeed = document.getElementById('textspeed');
function loop1() {
document.getElementById('hello').style.fontSize=(`${getRandomArbitrary(40,winwidth*0.4)}px`)
document.getElementById('hello').style.fontSize=(`${getRandomArbitrary(20,winwidth*0.1)}px`)
document.getElementById('hello').style.marginTop = (`${getRandomInt(winheight*0.7-ofheight)}px`);
document.getElementById('hello').style.marginLeft = (`${getRandomInt(winwidth*1.7-ofwidth)}px`);
document.getElementById('hello').style.color = (`rgb(${getRandomInt(255)},
		${getRandomInt(255)},
		${getRandomInt(255)})`);

  window.setTimeout(loop1, timing1);
}
document.getElementById('textspeed').addEventListener('change', function (e) {
  timing1 = parseInt(this.value);
});


var timing2 = 500,
    textspeed = document.getElementById('colorspeed');
function loop2() {
	document.body.style.background=(`rgb(${getRandomArbitrary(150,255)},
		${getRandomArbitrary(150,255)},
		${getRandomArbitrary(150,255)})`)


  window.setTimeout(loop2, timing2);
}
document.getElementById('colorspeed').addEventListener('change', function (e) {
  timing2 = parseInt(this.value);
});



loop1()
loop2()