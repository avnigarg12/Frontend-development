// Q4: Array Performance Analyzer
let scores = Array.from({length: 8}, () => Math.floor(Math.random() * 71) + 30);
let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let average = scores.reduce((a, b) => a + b, 0) / scores.length;
let passed = scores.filter(score => score >= 50).length;
console.log(`Scores: ${scores}`);
console.log(`Highest: ${highest}, Lowest: ${lowest}, Average: ${average.toFixed(2)}, Passed: ${passed}`);
