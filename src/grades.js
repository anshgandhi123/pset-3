const readlineSync = require("readline-sync");

const grade = Number(readlineSync.question("\nEnter a grade: "));

const gradeA = ((grade >= 90) && (grade <= 100))
const gradeB = ((grade >= 80) && (grade <= 89))
const gradeC = ((grade >= 70) && (grade <= 79))
const gradeD = ((grade >= 60) && (grade <= 69))
const gradeF = ((grade >= 0) && (grade <= 59))

if (!Number.isNaN(grade)) {
if (gradeA) {
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
}
