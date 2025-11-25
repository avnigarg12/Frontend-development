class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "A", "CSE", 30000),
    new Employee(2, "B", "IT", 25000),
    new Employee(3, "C", "HR", 28000),
    new Employee(4, "D", "Admin", 26000),
    new Employee(5, "E", "Finance", 32000)
];

const total = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);
console.log(total);
