const readlineSync = require("readline-sync");
let month = (readlineSync.question("\nEnter a month: "));
let days = month.toLowerCase();

switch (days){
  case (days = "jan"):
    console.log("\n31 days.");
    break;
  case (days = "january"):
    console.log("\n31 days.");
    break;

  case (days = "feb"):
    console.log("\n28 or 29 days.");
    break;
  case (days = "february"):
    console.log("\n28 or 29 days.");
    break;

  case (days = "mar"):
    console.log("\n31 days.");
    break;
  case (days = "march"):
    console.log("\n31 days.");
    break;

  case (days = "apr"):
    console.log("\n30 days.");
    break;
  case (days = "april"):
    console.log("\n30 days.");
    break;

  case (days = "may"):
    console.log("\n31 days.");
    break;

  case (days = "jun"):
    console.log("\n30 days.");
    break;
  case (days = "june"):
    console.log("\n30 days.");
    break;

  case (days = "jul"):
    console.log("\n31 days.");
    break;
  case (days = "july"):
    console.log("\n31 days.");
    break;

  case (days = "aug"):
    console.log("\n31 days.");
    break;
  case(days = "august"):
    console.log("\n31 days.");
    break;

  case (days = "sep"):
    console.log("\n30 days.");
    break;
  case (days = "september"):
    console.log("\n30 days.");
    break;

  case (days = "oct"):
    console.log("\n31 days.");
    break;
  case (days = "october"):
    console.log("\n31 days.")
    break;

  case (days = "nov"):
    console.log("\n30 days.");
    break;
  case (days = "november"):
    console.log("\n30 days.");
    break;

  case (days = "dec"):
    console.log("\n31 days.");
    break;
  case (days = "december"):
    console.log("\n31 days.");
    break;

default:
  console.log ("\nInvalid.")
  break;
}
