const ring = document.querySelector("circle");
var radius = ring.r.baseVal.value;
var circumfrence = radius * 2 * Math.PI;
ring.style.strokeDasharray = `${circumfrence} ${circumfrence}`;
ring.style.strokeDashoffset = `${circumfrence}`

let csec = 0



let reMin = 0;
let reSec = 0;
const time = document.querySelector(".time");
const test = document.querySelector(".testOutput");
const hour = document.querySelector("#hour");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const pause = document.querySelector('.pause')
var paused = false

pause.addEventListener('click', ()=>{
  paused = !paused
  start()
})

var secTotalTime = 0;

hour.value = minutes.value = seconds.value = 00;

let display1 = document.querySelector(".display1");
const maxValue = (node, max) => {
  node.addEventListener("input", function (e) {
    if (parseInt(node.value) > max) {
      node.value = max;
    }
    secTotalTime =
      parseInt(hour.value) * 3600 +
      parseInt(minutes.value) * 60 +
      parseInt(seconds.value);
    csec = secTotalTime
    document.querySelector(".display1").innerText = Math.trunc(
      secTotalTime / 3600
    );
    reMin = secTotalTime % 3600;
    console.log(reMin);
    document.querySelector(".display2").innerText = Math.trunc(reMin / 60);
    reSec = reMin % 60;
    document.querySelector(".display3").innerText = reSec;

  });
};

const minValue = (node, min) => {
  node.addEventListener("input", function (e) {
    if (parseInt(node.value) < min || isNaN(parseInt(node.value))) {
      node.value = min;
    }
  })
}
minValue(hour, 0);
minValue(minutes, 0);
minValue(seconds, 1);

maxValue(hour, 23);
maxValue(minutes, 59);
maxValue(seconds, 59);

let updateText = (input, output) => {
  input.addEventListener("input", function (e) {
    output.innerText = input.value;
  });
};

const setoffset = function (percent, node) {
  var offset = circumfrence - (percent / 100) * circumfrence;
  node.style.strokeDashoffset = offset;
};
let clean = false


const reset = () => {
  hour.value = 0;
  minutes.value = 0
  seconds.value = 0
  csec = 0
  reMin = 0
  reSec = 0

  secTotalTime = 0
  clean = true
  setoffset(0, ring)
  console.log('lol')
}
let psec = 0
const updateClock = () =>{
  document.querySelector(".display1").innerText = Math.trunc(
    csec / 3600
  ).toString().padStart(2, '0')
  reMin = csec % 3600;

  document.querySelector(".display2").innerText = Math.trunc(reMin / 60).toString().padStart(2, '0');
  reSec = reMin % 60;
  document.querySelector(".display3").innerText = reSec.toString().padStart(2, '0');
  psec = (csec / secTotalTime) * 100

  setoffset(psec, ring)
  console.log(csec)
  csec = csec - 1;
}
function start() {
  csec > -1 && !paused ? updateClock() : null
  var timer = setInterval(() => {

    console.log(paused)
    csec<0 || paused ? clearInterval(timer) : null
    csec > -1 && !paused ? updateClock() : null


  }, 1000);




}


const soo = () => {
  start()
};




