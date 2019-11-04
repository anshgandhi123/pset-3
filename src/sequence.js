const readlineSync = require("readline-sync");
let amount = (readlineSync.question("\nEnter three numbers: \n\n"));
let secondAmount = (readlineSync.question(""));
let thirdAmount = (readlineSync.question(""));

if (amount < Number.MIN_SAFE_INTEGER || amount > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.");
}else if (secondAmount < Number.MIN_SAFE_INTEGER || secondAmount > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.");
}else if (thirdAmount < Number.MIN_SAFE_INTEGER || thirdAmount > Number.MAX_SAFE_INTEGER) {
   console.log("\nInvalid.");
}
 else if ((thirdAmount>secondAmount) && (secondAmount>amount)) {
  console.log("\nStrictly increasing.");
} else if ((thirdAmount>secondAmount) && (secondAmount==amount)){
  console.log("\nIncreasing");
}
else if ((secondAmount>amount) && (thirdAmount==secondAmount)){
  console.log("\nIncreasing");
 }
  else if ((thirdAmount==secondAmount) && (amount==secondAmount)) {
    console.log("\nEqual.");
  }
  else if ((secondAmount<amount) && (thirdAmount==secondAmount)){
    console.log("\nDecreasing");
  }
  else if ((secondAmount==amount) && (secondAmount>thirdAmount)) {
    console.log("\nDecreasing");
  }
  else if ((thirdAmount<secondAmount) && (secondAmount<amount)) {
    console.log("\nStrictly descreasing.");
  }
  else if ((secondAmount<amount) && (secondAmount<thirdAmount)) {
    console.log("\nUnordered.");
  }
  else if ((thirdAmount<secondAmount) && (secondAmount>amount)){
    console.log("\nUnordered.");
  }
  else if ((thirdAmount>secondAmount) && (amount>secondAmount)) {
    console.log("\nUnordered.");
  }
