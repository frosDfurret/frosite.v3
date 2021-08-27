const cover = document.getElementById("cover");
const overlay = document.getElementById("overlay");
const furret = document.getElementById("furret");
var fCry = new Audio(
  "https://cdn.glitch.com/e1c3d8b5-22bd-497f-8ad1-f179ddfa190d%2Ffurret.mp3?v=1627883383086"
);
var sinNum = 0;
var sinAcc = 0.01;

function overlayDone() {
  cover.style.opacity = "0%";
  overlay.style.opacity = "0%";
  fCry.play();
  sinAcc = 0.1;
  setTimeout(function() {
    window.open("./home.html", "_self");
  }, 500);
}
function spinnyspinny() {
  sinNum += sinAcc;
  furret.style.transform = "rotate(" + Math.sin(sinNum) * 10 + "deg)";
  //console.log("rotate("+(Math.sin(sinNum)*100)+"deg)");
}
setInterval(spinnyspinny, 10);
