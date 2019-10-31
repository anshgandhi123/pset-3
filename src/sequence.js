const readlineSync = require("readline-sync");
let amount = parseFloat(readlineSync.question("\nEnter three numbers: \n\n"));
let secondAmount = parseFloat(readlineSync.question(""));
let thirdAmount = parseFloat(readlineSync.question(""));

if (amount < Number.MIN_SAFE_INTEGER) {
 console.log("\nInvalid.");
} else if (amount > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.");
} else if (thirdAmount>secondAmount>amount) {
  console.log("\nStrictly increasing.");
} else if (thirdAmount>amount>secondAmount){
  console.log("\nIncreasing");
}
  else if (thirdAmount=amount=secondAmount) {
    console.log("\nEqual.");
  }
  else if (thirdAmount<amount) {
    console.log("\nDecreasing.");
  }
  else if (thirdAmount<secondAmount<amount) {
    console.log("\nStrictly descreasing.");
  }
  else if (thirdAmount<amount<secondAmount  || amount<thirdamount<secondamount) {
    console.log("\nUnordered.");
  }
