const readlineSync = require("readline-sync");
const amount = Number(readlineSync.question("\nEnter a number: "));

if (Number.isNaN(amount)) {
  console.log("\nInvalid.") }
else if (amount < Number.MIN_SAFE_INTEGER) {
 console.log("\nInvalid.");
} else if (amount > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.");
} else if (amount > 0) {
  console.log("\nPositive.");
} else if (amount < 0) {
console.log("\nNegative.");
} else {
console.log("\nZero.");}
