/**
 * Method chaining is a way to create cleaner code with 
 * less variables
 */

const arr = [{n: 1}, {n: 2},{n: 3}, {n: 4},{n: 5}, {n: 6}];

/**
 * Perform these operations on arr
 * 
 * 1. Filter out the objects with even n values 
 *      [{n: 2}, {n: 4}, {n: 6}, ]
 * 2. map out the numbers from objects
 *      [2, 4, 6]
 * 3. calculate the sum of all the numbers
 *      12
 */


const even_arr = arr.filter((item) => item.n % 2 === 0);
console.log(even_arr);

const even_numbers = even_arr.map(item => item.n);
console.log(even_numbers);

const result   = even_numbers.reduce((acc, item) => acc + item, 0);
console.log(result); // 12


// Simplified syntax using Method chaining
const result1 = arr
    .filter((item) => item.n % 2 === 0)
    .map(item => item.n)
    .reduce((acc, item) => acc + item, 0);

console.log(result1);