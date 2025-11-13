// Q2: Multi-Type Data Summary
let userName = "Avani";
let age = 22;
let isStudent = true;
let hobbies = ["reading", "music"];
let address = { city: "Delhi", country: "India" };
let nothing = null;
let unknown;

console.table([
  { Label: "userName", Value: userName, Type: typeof userName },
  { Label: "age", Value: age, Type: typeof age },
  { Label: "isStudent", Value: isStudent, Type: typeof isStudent },
  { Label: "hobbies", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { Label: "address", Value: JSON.stringify(address), Type: typeof address },
  { Label: "nothing", Value: nothing, Type: typeof nothing },
  { Label: "unknown", Value: unknown, Type: typeof unknown }
]);