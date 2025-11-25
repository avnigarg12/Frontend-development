'use strict';
// Q3 – Transaction Validator
// Throws custom errors for negative amounts, missing fields and null entries.
// Categorizes into valid and invalid arrays.

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

class TransactionError extends Error {}
class NegativeAmountError extends TransactionError {}
class MissingFieldError extends TransactionError {}
class NullEntryError extends TransactionError {}

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
  const t = transactions[i];
  try {
    if (t === null) throw new NullEntryError('Transaction is null');
    if (typeof t !== 'object') throw new MissingFieldError('Transaction not an object');

    if (!('id' in t) || !('amount' in t)) throw new MissingFieldError('Missing id or amount');
    if (typeof t.amount !== 'number') throw new TypeError('Amount is not a number');

    if (t.amount < 0) throw new NegativeAmountError('Negative amount is not allowed');

    valid.push(t);
  } catch (err) {
    // categorize
    if (err instanceof NullEntryError || err.message.includes('null')) {
      invalid.push({ type: 'NullEntry', index: i, error: err.message });
    } else if (err instanceof NegativeAmountError) {
      invalid.push({ type: 'NegativeAmount', index: i, error: err.message });
    } else if (err instanceof MissingFieldError) {
      invalid.push({ type: 'MissingField', index: i, error: err.message });
    } else {
      invalid.push({ type: 'Other', index: i, error: err.message });
    }
    // Useful breakpoint for debugging in VS Code:
    // Place a breakpoint on the line below or use 'debugger;' to inspect variables.
    // debugger;
  }
}

console.log('--- Q3 Transaction Validator Report ---');
console.log('Valid transactions:', valid);
console.log('Invalid transactions categorized:', invalid);
console.log('Counts -> Success:', valid.length, 'Failed:', invalid.length);
console.log('--- End Q3 ---\n');