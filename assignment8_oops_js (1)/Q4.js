// Q4 – Employee Inheritance

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
  work() {
    console.log(this.name + " is working in " + this.department);
  }
}

class Manager extends Employee {
  work() {
    console.log(this.name + " is managing the team in " + this.department);
  }
}

const e = new Employee("Aman", "IT");
const m = new Manager("Riya", "HR");

e.work();
m.work();
