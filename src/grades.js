const readlineSync = require("readline-sync");
const MIN = 0
const MAX = 100
const grade = Number(readlineSync.question("\nEnter a grade: "));

const gradeA = ((grade >= 90) && (grade <= 100))
const gradeB = ((grade >= 80) && (grade < 90))
const gradeC = ((grade >= 70) && (grade < 80))
const gradeD = ((grade >= 60) && (grade < 70))
const gradeF = ((grade >= 0) && (grade < 60))

if (Number.isNaN(grade)) {
  console.log("\nInvalid.");}
  else if (grade < MIN || grade > MAX) {
    console.log("\nInvalid.");
  }
  else if (gradeA) {
 console.log("\nYou received an A.");
} else if (gradeB) {
  console.log("\nYou received a B.")
}
  else if (gradeC)  {
    console.log("\nYou received a C.")
  }
  else if (gradeD) {
    console.log("\nYou received a D.")
  }
  else if (gradeF) {
    console.log("\nYou received an F.")
  }
  else {
    console.log("\nInvalid.")
  }
