const readlineSync = require("readline-sync");
const number = Number(readlineSync.question("\nEnter an integer: "));

if (!Number.isInteger(number)) {
  console.log("\nInvalid.\n") }
  else if (number < Number.MIN_SAFE_INTEGER) {
 console.log("\nInvalid.\n");
} else if (number > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.\n");
}
else if ((number % 2) == 0) {
  console.log("\nEven.\n");
} else if ((number % 2) == 1 || -1){
  console.log("\nOdd.\n");
}
else {
  console.log("\nInvalid.\n")
}
