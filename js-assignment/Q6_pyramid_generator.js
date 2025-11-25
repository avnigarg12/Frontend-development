'use strict';
// Q6 – Pyramid Pattern Generator
// Generates a pyramid. Allows outer loop limit via command-line arg (default 5). Demonstrates behavior replacing let with var.

const args = process.argv.slice(2);
const limit = Number(args[0]) || 5;

console.log(`Generating pyramid with limit = ${limit}`);

for (let i = 1; i <= limit; i++) {
  let line = '';
  for (let j = 0; j < i; j++) {
    line += '* ';
  }
  console.log(line.trim());
}

console.log('\nNow sample with var (note: in strict mode var still works; differences show up in closures)');
for (var a = 1; a <= Math.min(limit,5); a++) {
  var line2 = '';
  for (var b = 0; b < a; b++) {
    line2 += '* ';
  }
  console.log(line2.trim());
}

console.log('\nNote: Using var may cause unexpected reuse of ' + 'a/b' + ' in closures.');