const readlineSync = require("readline-sync");
const temperature = Number(readlineSync.question("\nEnter a temperature: "));
const scales = readlineSync.question("Enter a scale: ");
let scale = scales.toUpperCase()
const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER

const boilingFahrenheit = 212
const freezingFahrenheit = 32

const boilingCelsius = 100
const freezingCelsius = 0

const freezingKelvin = 273.15
const boilingKelvin = 373.15
if (temperature < MIN || temperature > MAX){
  console.log("\nInvalid."); }
  else if (Number.isNaN(temperature)) {
  console.log("\nInvalid.");
}
else if (scale == "F" && (temperature>freezingFahrenheit && temperature<boilingFahrenheit)) {
    console.log("\nLiquid.");
  }
  else if (scale == "F" && (freezingFahrenheit >= temperature)) {
    console.log("\nSolid."); }
  else if (scale == "F" && (temperature >= boilingFahrenheit)){
    console.log("\nGas.");
  }
  else if (scale == "C" && (temperature>freezingCelsius && temperature<boilingCelsius)) {
    console.log("\nLiquid.");
  }
  else if (scale == "C" && (freezingCelsius >= temperature)) {
    console.log("\nSolid.");
  }
  else if (scale == "C" && (temperature >= boilingCelsius)){
    console.log("\nGas."); }
  else if (scale == "K" && (temperature>freezingKelvin && temperature<boilingKelvin)) {
      console.log("\nLiquid.");
    }
  else if (scale == "K" && (freezingKelvin >= temperature)){
      console.log("\nSolid.");
    }
  else if (scale == "K" && (temperature >= boilingKelvin)) {
      console.log("\nGas."); }
  else {
        console.log("\nInvalid.");
  }
