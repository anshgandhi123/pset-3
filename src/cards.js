const readlineSync = require("readline-sync");

let cards = (readlineSync.question("\nEnter a playing card: "));

let cardNames = cards.toUpperCase();

switch (cardNames){
  case (cardNames = "AS"):
    console.log("\nAce of Spades.\n");
    break;
  case (cardNames = "AD"):
    console.log("\nAce of Diamonds.\n");
    break;
  case (cardNames = "AH"):
    console.log("\nAce of Hearts.\n");
    break;
  case (cardNames = "AC"):
    console.log("\nAce of Clubs.\n");
    break;
  case (cardNames = "KS"):
    console.log("\nKing of Spades.\n");
    break;
  case (cardNames = "KD"):
    console.log("\nKing of Diamonds.\n");
    break;
  case (cardNames = "KH"):
    console.log("\nKing of Hearts.\n");
    break;
  case (cardNames = "KC"):
    console.log("\nKing of Clubs.\n");
    break;
  case (cardNames = "QS"):
    console.log("\nQueen of Spades.\n");
    break;
  case (cardNames = "QD"):
    console.log("\nQueen of Diamonds.\n");
    break;
  case (cardNames = "QH"):
    console.log("\nQueen of Hearts.\n");
    break;
  case (cardNames = "QC"):
    console.log("\nQueen of Clubs.\n");
    break;
  case (cardNames = "JS"):
    console.log("\nJack of Spades.\n");
    break;
  case (cardNames = "JD"):
  console.log("\nJack of Diamonds.\n");
    break;
  case (cardNames = "JH"):
  console.log("\nJack of Hearts.\n");
    break;
  case (cardNames = "JC"):
    console.log("\nJack of Clubs.\n");
    break;
  case (cardNames = "TS"):
    console.log("\nTen of Spades.\n");
    break;
  case (cardNames = "TD"):
    console.log("\nTen of Diamonds.\n");
    break;
  case (cardNames = "TH"):
    console.log("\nTen of Hearts.\n");
    break;
  case (cardNames = "TC"):
    console.log("\nTen of Clubs.\n");
    break;
  case (cardNames = "9S"):
    console.log("\nNine of Spades.\n");
    break;
  case (cardNames = "9D"):
    console.log("\nNine of Diamonds.\n");
    break;
  case (cardNames = "9H"):
    console.log("\nNine of Hearts.\n");
    break;
  case (cardNames = "9C"):
    console.log("\nNine of Clubs.\n");
    break;
  case (cardNames = "8S"):
    console.log("\nEight of Spades.\n");
    break;
  case (cardNames = "8D"):
    console.log("\nEight of Diamonds.\n");
    break;
  case (cardNames = "8H"):
    console.log("\nEight of Hearts.\n");
    break;
  case (cardNames = "8C"):
    console.log("\nEight of Clubs.\n");
    break;
  case (cardNames = "7S"):
    console.log("\nSeven of Spades.\n");
    break;
  case (cardNames = "7D"):
    console.log("\nSeven of Diamonds.\n");
    break;
  case (cardNames = "7H"):
    console.log("\nSeven of Hearts.\n");
    break;
  case (cardNames = "7C"):
    console.log("\nSeven of Clubs.\n");
    break;
  case (cardNames = "6S"):
    console.log("\nSix of Spades.\n");
    break;
  case (cardNames = "6D"):
    console.log("\nSix of Diamonds.\n");
    break;
  case (cardNames = "6H"):
    console.log("\nSix of Hearts.\n");
    break;
  case (cardNames = "6C"):
    console.log("\nSix of Clubs.\n");
    break;
  case (cardNames = "5S"):
    console.log("\nFive of Spades.\n");
    break;
  case (cardNames = "5D"):
    console.log("\nFive of Diamonds.\n");
    break;
  case (cardNames = "5H"):
    console.log("\nFive of Hearts.\n");
    break;
  case (cardNames = "5C"):
    console.log("\nFive of Clubs.\n");
    break;
  case (cardNames = "4S"):
    console.log("\nFour of Spades.\n");
    break;
  case (cardNames = "4D"):
    console.log("\nFour of Diamonds.\n");
    break;
  case (cardNames = "4H"):
    console.log("\nFour of Hearts.\n");
    break;
  case (cardNames = "4C"):
    console.log("\nFour of Clubs.\n");
    break;
  case (cardNames = "3S"):
    console.log("\nThree of Spades.\n");
    break;
  case (cardNames = "3D"):
    console.log("\nThree of Diamonds.\n");
    break;
  case (cardNames = "3H"):
    console.log("\nThree of Hearts.\n");
    break;
  case (cardNames = "3C"):
    console.log("\nThree of Clubs.\n");
    break;
  case (cardNames = "2S"):
    console.log("\nTwo of Spades.\n");
    break;
  case (cardNames = "2D"):
    console.log("\nTwo of Diamonds.\n");
    break;
  case (cardNames = "2H"):
    console.log("\nTwo of Hearts.\n");
    break;
  case (cardNames = "2C"):
  console.log("\nTwo of Clubs.\n");
    break;
default:
  console.log("\nInvalid.\n");
  break;
}
