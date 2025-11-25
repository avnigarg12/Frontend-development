// Prototype version (from earlier)
function Person(name) {
    this.name = name;
}
Person.prototype.showName = function () {
    console.log(this.name);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.showBranch = function () {
    console.log(this.branch);
};

// ES6 class version
class PersonC {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}

class StudentC extends PersonC {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }
    showBranch() {
        console.log(this.branch);
    }
}

const sProto = new Student("Avani", "CSE");
sProto.showName();
sProto.showBranch();

const sClass = new StudentC("Avani", "CSE");
sClass.showName();
sClass.showBranch();
