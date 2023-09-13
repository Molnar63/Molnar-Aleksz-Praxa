var modeicon = document.getElementById("modeicon");

modeicon.onclick = function () {
  document.body.classList.toggle("bright-theme");
  if (document.body.classList.contains("bright-theme")) {
    modeicon.src = "./images/sun.png";
  } else {
    modeicon.src = "./images/moon.png";
  }
};
