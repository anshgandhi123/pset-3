const readlineSync = require("readline-sync");
const amount = Number(readlineSync.question("\nEnter a number: "));

if (Number.isNaN(amount)) {
  console.log("\nInvalid.\n") }
else if (amount < Number.MIN_SAFE_INTEGER) {
 console.log("\nInvalid.\n");
} else if (amount > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.\n");
} else if (amount > 0) {
  console.log("\nPositive.\n");
} else if (amount < 0) {
console.log("\nNegative.\n");
} else {
console.log("\nZero.\n");}
