'use strict';
// Q9 – JSON Audit
// Parse entries, detect missing keys, push valid entries to clean array and convert age to Number.

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];
  try {
    const parsed = JSON.parse(line);
    if (!parsed.user || !parsed.age) throw new Error('Missing user or age');
    // convert age to number
    parsed.age = Number(parsed.age);
    if (Number.isNaN(parsed.age)) throw new TypeError('Age conversion failed');
    clean.push(parsed);
  } catch (err) {
    errors.push({ line: i, raw: line, error: err.message });
  }
}

console.log('Clean entries:', clean);
console.log('Errors (with line numbers):', errors);
console.log('Filtered under-18 (none expected here):', clean.filter(u => u.age < 18));
console.log('\n--- End Q9 ---\n');