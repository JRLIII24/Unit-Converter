const getNum = document.getElementById("number")
const getLen = document.getElementById("length");
const getVol = document.getElementById("volume");
const getMass = document.getElementById("mass");
let convertBtn = document.getElementById("convert")

function convert() {
  let inputValue = parseFloat(getNum.value);
  // Length
  let metersToFeet = inputValue * 3.28084;
  let feetToMeters = inputValue * 0.3048;

  // Volume
  let litersToGallons = inputValue * 0.264172;
  let gallonsToLiters = inputValue * 3.78541;

  // Mass
  let kilosToPounds = inputValue * 2.20462;
  let poundsToKilos = inputValue * 0.453592;
  if(isNaN(inputValue)) {
    getLen.textContent = `Please enter a number`
    getVol.textContent = `Please enter a number`
    getMass.textContent = `Please enter a number`
  }else {
    getLen.textContent = `${inputValue} meters = ${metersToFeet.toFixed(3)} feet | ${inputValue} feet = ${feetToMeters.toFixed(3)} meters`
    getVol.textContent = `${inputValue} liters = ${litersToGallons.toFixed(3)} gallons | ${inputValue} gallons = ${gallonsToLiters.toFixed(3)} liters`
    getMass.textContent = `${inputValue} kilos = ${poundsToKilos.toFixed(3)} pounds | ${inputValue} pounds = ${kilosToPounds.toFixed(3)} kilos`

  }

}

convertBtn.addEventListener("click", convert)

getNum.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    convert();
  }
});
/*Create a function that gets the number using getNum and uses
a formula to convert that number from meters into feet and from
feet into meteres from liters into gallons and from
gallons into liters from kilos into pounds and from
pounds into kilos */

/*
When the convert button is clicked all of the outputs will change
Each output will show up on the webpage and have this format as a string
20 meters = 65.616 feet | 20 feet = 6.096 meters
limit to 3 decimals
I will include units clearly using template literals
I want to create a single function if that is the most
optimal
I want it to be when the button is clicked or if enter is pressed
*/










const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});