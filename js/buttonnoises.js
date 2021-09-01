const link = document.getElementsByClassName("button");
const textlink = document.getElementsByClassName("textlink");
const homebtn = document.getElementById("homebtn");
var hoverSound = new Audio(
  "/assets/aud/hover.wav"
);

var selectSound = new Audio(
  "/assets/aud/select.wav"
);

var beckSound = new Audio(
  "/assets/aud/beck.wav"
);

function hover() {
  hoverSound.play();
}

function select() {
  selectSound.play();
}

function beck() {
  beckSound.play();
}
/*
function colorChange(specif) {
  specif.style.backgroundColor = "#92C8DD";
}
*/
for(var i = 0; i < link.length; i++) {
    link[i].addEventListener("mouseover", hover);
    link[i].addEventListener("click", select);
}

for(var i = 0; i < textlink.length; i++) {
    textlink[i].addEventListener("mouseover", hover);
    textlink[i].addEventListener("click", select);
}

homebtn.addEventListener("click", beck);
homebtn.addEventListener("mouseover", hover);
//https://cdn.glitch.com/e1c3d8b5-22bd-497f-8ad1-f179ddfa190d%2Fselect.wav?v=1627888365393
