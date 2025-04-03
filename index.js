const getLen = document.getElementById("length");
const getVol = document.getElementById("volume");
const getMass = document.getElementById("mass");

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});