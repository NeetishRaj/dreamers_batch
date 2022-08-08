/**
 * Given an Employee array. Use Array.reduce() method
 *  to calculate the sum of salaries of all employees
 * 
 * 
 */

 const Employees = [
    {
        name: "Avinash",
        registration: 1,
        department: 'sales',
        salary: 550000
    },
    {
        name: "Preeti",
        registration: 21,
        department: 'Customer Success',
        salary: 600000
    },
    {
        name: "Vineet",
        registration: 3,
        department: 'Engineering',
        salary: 1250000
    }
];

const total_salary = Employees.reduce((acc, item, index, arr) => {
    return acc + item.salary;
}, 0);


console.log(total_salary);