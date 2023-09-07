let modelbox = document.getElementById("modelbox");

function showPopup() {
  modelbox.style.display = "block";
  setTimeout(function () {
    modelbox.style.display = "none";
  }, 15000);
}

showPopup();

setInterval(showPopup, 30000);

function closeModel() {
  modelbox.style.display = "none";
}
