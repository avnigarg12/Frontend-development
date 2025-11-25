'use strict';
// Q7 – Smart Calculator
// Handles operations with switch and custom errors.

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class InvalidOperationError extends Error {}
class MathError extends Error {}

function calculate(op, x, y) {
  switch (op) {
    case 'add': return x + y;
    case 'subtract': return x - y;
    case 'divide':
      if (y === 0) throw new MathError('Divide by zero');
      return x / y;
    case 'power': return Math.pow(x, y);
    case 'root':
      if (x < 0) throw new MathError('Root of negative number');
      return Math.pow(x, 1 / y);
    default:
      throw new InvalidOperationError('Operation not recognized: ' + op);
  }
}

for (const op of operations.concat('unknown')) {
  try {
    const result = calculate(op, num1, num2);
    console.log(`Operation: ${op} -> Result: ${result}`);
  } catch (err) {
    console.error(`Operation ${op} failed:`, err.message);
  }
}

console.log('\n--- End Q7 ---\n');