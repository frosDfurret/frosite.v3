const foxText = document.getElementById("foxText");
if (
  /Firefox/i.test(
    navigator.userAgent
  )
) {
  if (document.cookie == "checked=true") {
    foxText.style.opacity = "0%";
  } else {
    foxText.style.opacity = "100%";
  }
  
}