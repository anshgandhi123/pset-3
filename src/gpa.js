const readlineSync = require("readline-sync");
letterA = 4;
letterB = 3;
letterC = 2;
letterD = 1;
letterF = 0;

let grades = (readlineSync.question("\nEnter a letter grade: "));
let grade = grades.toUpperCase()


if (grade == "A+") {
  console.log("\nYour GPA is 4.00.\n");
}
else if (grade == "A") {
  console.log("\nYour GPA is 4.00.\n");
}
else if (grade == "A-") {
  console.log("\nYour GPA is 3.67.\n");
}
else if (grade == "B+") {
  console.log("\nYour GPA is 3.33.\n");
}
else if (grade == "B") {
  console.log("\nYour GPA is 3.00.\n");
}
else if (grade == "B-") {
  console.log("\nYour GPA is 2.67.\n");
}
else if (grade == "C+") {
  console.log("\nYour GPA is 2.33.\n");
}
else if (grade == "C") {
  console.log("\nYour GPA is 2.00.\n");
}
else if (grade == "C-") {
  console.log("\nYour GPA is 1.67.\n");
}
else if (grade == "D+") {
  console.log("\nYour GPA is 1.33.\n");
}
else if (grade == "D") {
  console.log("\nYour GPA is 1.00.\n");
}
else if (grade == "F") {
  console.log("\nYour GPA is 0.00.\n");
}
else {
  console.log("\nInvalid.\n");
}

