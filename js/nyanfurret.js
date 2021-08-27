var music = new Audio(
  "https://cdn.glitch.com/e1c3d8b5-22bd-497f-8ad1-f179ddfa190d%2Fnyanfurret.wav?v=1628487146527"
);
const timer = document.getElementById("timer")
const furret = document.getElementById("furret")
var time = 0.0;
//does it count as plagiarizing if you're taking it from yourself?
var sinNum = 0;
var sinAcc = 0.05;
var aaaaaa=0;
music.loop = true;
music.play()
function doTime() {
  time += 0.1;
  time = Math.round(time*10)/10;
  timer.innerText = "Furret has walcced for "+time+" seconds!";
}
function speen() {
  sinNum += sinAcc;
  furret.style.transform = "rotate(" + Math.sin(sinNum) * 10 + "deg)";
  console.log("WALCC WALCC WALCC")
  aaaaaa+=0.00005;
  sinAcc+=0.0001;
  music.playbackRate = 1+aaaaaa;
}
setInterval(doTime, 100)
setInterval(speen, 10)
window.onbeforeunload = function() {
  music.playbackRate = 4;
};
