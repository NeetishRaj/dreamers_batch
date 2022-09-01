/**
 * Create a function named 'generate_employee' that takes 3 arguments
 * 
 * 1. id
 * 2. name
 * 3. dept
 * 
 * and returns a new object that looks like this
 * 
 * {
 *  id: 1,
 *  name: 'raj',
 *  dept: 'marketing'
 * }
 * 
 */

// Approach 1
function generate_employee(id, name, dept) {
    const result = {};

    result.id = id;
    result.name = name;
    result.dept = dept;

    return result;
}
 
console.log(generate_employee(1, 'raj', 'marketing'));
// {
//     id: 1,
//     name: 'raj',
//     dept: 'marketing'
//  }



// Approach 2
function generate_employee_2(id, name, dept) {
    const result = {
        id: id,
        name: name,
        dept: dept
    };
    
    return result;
}
 
console.log(generate_employee_2(1, 'raj', 'marketing'));
// {
//     id: 1,
//     name: 'raj',
//     dep


// Approach 3
const generate_employee_3 = (id, name, dept) => {
    return {
        id: id,
        name: name,
        dept: dept
    };
}
 
console.log(generate_employee_3(1, 'raj', 'marketing'));
// {
//     id: 1,
//     name: 'raj',
//     dep


// Approach 4
const generate_employee_4 = (id, name, dept) => ({
    id: id,
    name: name,
    dept: dept
});
 
console.log(generate_employee_4(1, 'raj', 'marketing'));
// {
//     id: 1,
//     name: 'raj',
//     dep


// Approach 5
const generate_employee_5 = (id, name, dept) => ({id, name, dept});
 
console.log(generate_employee_5(1, 'raj', 'marketing'));
// {
//     id: 1,
//     name: 'raj',
//     dep