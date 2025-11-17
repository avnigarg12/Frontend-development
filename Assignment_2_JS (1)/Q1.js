// Q1: Scope Conflict Resolver
// Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
  let salary = 40000; // local variable
  if (isPermanent) {
    salary += bonus;
  }
  console.log(`Total Salary: ₹${salary}`);
}

// Test cases
calculateSalary(true);  // Adds bonus
calculateSalary(false); // No bonus
console.log("Global Bonus:", bonus);
