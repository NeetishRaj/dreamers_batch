/**
 * 
 * Write a program to create an array of size 200 with even nos only
 * const even = [2,...  ,400]
 * 
 * Then write the sum of all those numbers.
 * 
 * NOTE: We only have to use forEach loop for this code.
 * 
 */

// Create an array of length 200 with even nos.

const even = new Array(200);

for (let i = 0; i < even.length; i++) {
    even[i] = (i + 1) * 2;
}

// This will not work
// even.forEach((item, index, arr) => {
//     even[index] = (index + 1) * 2;
// })

console.log(even);// [2, 4, 6, .. ,400]





// calculate the sum of all the items in even array

let sum = 0;

even.forEach((item, index, arr) => {
    sum += item;
})

console.log(sum); // 40200

