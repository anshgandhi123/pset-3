const readlineSync = require("readline-sync");
const amount = Number(readlineSync.question("\nEnter an integer: "));

if (amount < Number.MIN_SAFE_INTEGER) {
 console.log("\nInvalid.");
} else if (amount > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.");
} else if ((amount % 2) == 0) {
  console.log("\nEven.");
} else if ((amount % 2) == 1){
  console.log("\nOdd.");
}
