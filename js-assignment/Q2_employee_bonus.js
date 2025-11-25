'use strict';
// Q2 – Employee Bonus Calculator
// Convert salary and years to numbers, calculate bonus, validate strictly and handle errors gracefully.

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

for (const emp of employees) {
  try {
    if (!emp || !emp.name) throw new Error('Missing employee object or name');

    // explicit conversions
    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (Number.isNaN(salary) || Number.isNaN(years)) throw new TypeError('Salary or years conversion failed');

    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

    console.log(`Employee: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus.toFixed(2)}`);
  } catch (err) {
    console.error(`Error processing employee ${emp && emp.name ? emp.name : 'unknown'}:`, err.message);
  }
}

console.log('--- End Q2 ---\n');