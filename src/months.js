const readlineSync = require("readline-sync");
let month = (readlineSync.question("\nEnter a month: "));
let days = month.toLowerCase();

switch (days){
  case (days = "jan"):
    console.log("\n31 days.\n");
    break;
  case (days = "january"):
    console.log("\n31 days.\n");
    break;

  case (days = "feb"):
    console.log("\n28 or 29 days.\n");
    break;
  case (days = "february"):
    console.log("\n28 or 29 days.\n");
    break;

  case (days = "mar"):
    console.log("\n31 days.\n");
    break;
  case (days = "march"):
    console.log("\n31 days.\n");
    break;

  case (days = "apr"):
    console.log("\n30 days.\n");
    break;
  case (days = "april"):
    console.log("\n30 days.\n");
    break;

  case (days = "may"):
    console.log("\n31 days.\n");
    break;

  case (days = "jun"):
    console.log("\n30 days.\n");
    break;
  case (days = "june"):
    console.log("\n30 days.\n");
    break;

  case (days = "jul"):
    console.log("\n31 days.\n");
    break;
  case (days = "july"):
    console.log("\n31 days.\n");
    break;

  case (days = "aug"):
    console.log("\n31 days.\n");
    break;
  case(days = "august"):
    console.log("\n31 days.\n");
    break;

  case (days = "sep"):
    console.log("\n30 days.\n");
    break;
  case (days = "september"):
    console.log("\n30 days.\n");
    break;

  case (days = "oct"):
    console.log("\n31 days.\n");
    break;
  case (days = "october"):
    console.log("\n31 days.\n")
    break;

  case (days = "nov"):
    console.log("\n30 days.\n");
    break;
  case (days = "november"):
    console.log("\n30 days.\n");
    break;

  case (days = "dec"):
    console.log("\n31 days.\n");
    break;
  case (days = "december"):
    console.log("\n31 days.\n");
    break;

default:
  console.log ("\nInvalid.\n")
  break;
}
