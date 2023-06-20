"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employee extends Person {
    constructor(empCode, name) {
        super(name);
        this.empCode = empCode;
    }
    displayDetails() {
        console.log("Name = " + this.name + ",Employee code= " + this.empCode);
    }
}
let emp = new Employee(1977, 'Komal');
emp.displayDetails();
