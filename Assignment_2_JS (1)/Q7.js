// Q7: Customer Feedback Processor
let feedback = "Great product! Fast delivery and amazing sound quality!";
let words = feedback.split(" ").length;
if (!feedback.toLowerCase().includes("bad") && !feedback.toLowerCase().includes("poor")) {
  console.log("Positive Feedback");
} else {
  console.log("Needs Improvement");
}
console.log("Word Count:", words);
