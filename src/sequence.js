const readlineSync = require("readline-sync");
let amount = Number(readlineSync.question("\nEnter three numbers. \n\n"));
let secondAmount = Number(readlineSync.question(""));
let thirdAmount = Number(readlineSync.question(""));

if (Number.isNaN(amount)){
  console.log("\nInvalid.\n");
}
else if (Number.isNaN(secondAmount)){
  console.log("\nInvalid.\n");
}
else if (Number.isNaN(thirdAmount)) {
console.log("\nInvalid.\n"); }
else if (amount < Number.MIN_SAFE_INTEGER || amount > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.\n");
}else if (secondAmount < Number.MIN_SAFE_INTEGER || secondAmount > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.\n");
}else if (thirdAmount < Number.MIN_SAFE_INTEGER || thirdAmount > Number.MAX_SAFE_INTEGER) {
   console.log("\nInvalid.\n");
}

 else if ((thirdAmount>secondAmount) && (secondAmount>amount)) {
  console.log("\nStrictly increasing.\n");
} else if ((thirdAmount>secondAmount) && (secondAmount==amount)){
  console.log("\nIncreasing.\n");
}
else if ((secondAmount>amount) && (thirdAmount==secondAmount)){
  console.log("\nIncreasing.\n");
 }
  else if ((thirdAmount==secondAmount) && (amount==secondAmount)) {
    console.log("\nEqual.\n");
  }
  else if ((secondAmount<amount) && (thirdAmount==secondAmount)){
    console.log("\nDecreasing.\n");
  }
  else if ((secondAmount==amount) && (secondAmount>thirdAmount)) {
    console.log("\nDecreasing.\n");
  }
  else if ((thirdAmount<secondAmount) && (secondAmount<amount)) {
    console.log("\nStrictly decreasing.\n");
  }
  else if ((secondAmount<amount) && (secondAmount<thirdAmount)) {
    console.log("\nUnordered.\n");
  }
  else if ((thirdAmount<secondAmount) && (secondAmount>amount)){
    console.log("\nUnordered.\n");
  }
  else if ((thirdAmount>secondAmount) && (amount>secondAmount)) {
    console.log("\nUnordered.\n");
  }
