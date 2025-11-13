// Q4: Academic Performance Evaluator
let marks = [78, 85, 90, 80, 88];
let totalMarks = marks.reduce((a, b) => a + b, 0);
let average = totalMarks / marks.length;
let detained = marks.some(mark => mark < 35);

if (detained) {
  console.log("Detained (one or more subjects below 35)");
} else if (average >= 85) {
  console.log("Promoted with Distinction");
} else if (average >= 50) {
  console.log("Promoted");
} else {
  console.log("Detained");
}