/**
 * Map and reduce are Array utlity functions where
 * 
 * 
 * Map - helps is mapping out specific properties from an Array
 * 
 * const arr = [];
 * 
 * arr.map((item, index, array) => {
 *      return item.prop;
 * }) 
 * returns a new array
 * 
 * 
 * 
 * Reduce - helps in accumulating result while iterating through 
 * an array in a single line syntax.
 * 
 * const arr = [1, 2, 3, 4];
 * arr.reduce((acc, item, index, array) => {
 *      return acc + item.prop;
 * }, initializing_value);
 *  
 * returns  the sum of arr
 * 
 * 
 * Nice video explanation: https://www.youtube.com/watch?v=e-5obm1G_FY
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


// MAP 


// Sometimes there are situations we are not interested in all the object properties
// We want to focus on specific properties.
// In those cases we can create an alternate version of that array using Array.map()



// Let's say we want only department information from Employees array
const departments = Employees.map((item , index, arr) => {
    return item.department;
})

console.log(departments); // [ 'sales', 'Customer Success', 'Engineering' ]



// This is nothing but
const depts  = [];

for (let i = 0; i < Employees.length; i++) {
    depts.push(Employees[i].department);
}

console.log(depts) //




//// Let's say we want only department & registration information from Employees array
const department_and_registration = Employees.map((item , index, arr) => {
    return {
        registration: item.registration,
        department: item.department
    }
})

console.log(department_and_registration); // [[ 'sales', 'Customer Success', 'Engineering' ]]





// Array.reduce is used to conveniently iterate over an array and get the final result



// Example 1: Using reduce() to add the numbers of an Array.

const arr = [1, 2, 3, 4, 5, 6,7, 8, 9, 10];

const sum = arr.reduce((acc, item, index, arr) => acc + item, 0);

console.log(sum);  //55



// Example 2: Using reduce() to concatanate the strings.

const str = ['I', 'love', 'to', 'code'];

const sentence = str.reduce((acc, item, index, arr) => acc + ' ' + item, '');

console.log(sentence);  //I love to code

// Inner working of above code

function map_inner_working() {

    let acc = '';
    
    for (let i = 0; i < str.length; i++) {
    
        acc += ' ' + str[i];
    }
    
    return acc;
}

console.log(map_inner_working()); // //I love to code




