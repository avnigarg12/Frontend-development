'use strict';
// Q1 – Dynamic Data Parser
// Converts mixed API data to Number, Boolean, String forms,
// separates valid numeric data from invalid entries and prints a detailed report.

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];
const report = [];

for (let i = 0; i < apiData.length; i++) {
  const original = apiData[i];
  // Convert to String form reliably
  const asString = String(original);
  // Convert to Boolean form
  const asBoolean = Boolean(original && original !== 'false' && asString.trim() !== '');
  // Try Number conversion
  const asNumber = Number(original);

  const entry = { index: i, original, asString, asBoolean, asNumber };

  // Check for valid numeric values: not NaN and finite
  if (typeof asNumber === 'number' && !Number.isNaN(asNumber) && Number.isFinite(asNumber)) {
    validNumbers.push(asNumber);
    entry.valid = true;
  } else {
    // Treat empty strings or strings with non-numeric chars as invalid
    invalidNumbers.push(original);
    entry.valid = false;
  }
  report.push(entry);
}

// Print detailed report
console.log('--- Q1 Dynamic Data Parser Report ---');
for (const r of report) {
  console.log(`Index ${r.index}: original=${JSON.stringify(r.original)} | String="${r.asString}" | Boolean=${r.asBoolean} | Number=${r.asNumber} | valid=${r.valid}`);
}
console.log('\nValid numeric array:', validNumbers);
console.log('Invalid entries array:', invalidNumbers);
console.log('--- End Q1 ---\n');