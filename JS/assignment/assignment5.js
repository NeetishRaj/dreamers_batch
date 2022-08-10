/**
 * Create a class Employee with following
 *  properties
 * 
 * Properties
 *  - name
 *  - dept
 * 
 * Method
 *  - print_info() Should console employees name and dept.
 * 
 * 
 * Test the Employee print_info() method by creating 3 employees
 *  and testing their print_info() method. 
 */

// Create a constructor function Employee
function Employee (name, dept) {
    this.name = name;
    this.dept = dept;
}

Employee.prototype.print_info = function () {
    console.log(`Employee's name: ${this.name} and Dept: ${this.dept}`);
}

// Create 3 employee instances
const e1 = new Employee("Suresh", "Marketing");
const e2 = new Employee("Divya", "Engineering");
const e3 = new Employee("Mahima", "Sales");


// call their print_info() method
e1.print_info();
e2.print_info();
e3.print_info();


// If we were not using print_info() method then we would end up with this

console.log(`Employee's name: ${e1.name} and Dept: ${e1.dept}`);
console.log(`Employee's name: ${e2.name} and Dept: ${e2.dept}`);
console.log(`Employee's name: ${e3.name} and Dept: ${e3.dept}`);