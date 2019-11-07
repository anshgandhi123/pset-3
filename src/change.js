const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount))
{ console.log("\nInvalid\n");
} else if (amount < MIN || amount > MAX) {
  console.log("\nInvalid\n");
} else {
  const Quarter = 0.25;
  const Dime = 0.10;
  const Nickel = 0.05;
  const Penny = 0.01;

let quarterschange = Math.floor(amount/Quarter);
let quartersremainder = amount % Quarter
let dimeschange = Math.floor(quartersremainder/Dime);
let dimesremainder = quartersremainder % Dime
let nickelschange = Math.floor(dimesremainder/Nickel);
let nickelsremainder = dimesremainder % Nickel
let pennyschange = Math.ceil(nickelsremainder/Penny);

console.log("\n" + quarterschange + " quarters, " + dimeschange + " dimes, " + nickelschange + " nickels, and " + pennyschange + " pennies.\n ");
}
