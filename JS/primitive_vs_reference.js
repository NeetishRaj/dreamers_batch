/**
 * Primitive types
 *      String
 *      Number
 *      Boolean
 *  
 * Reference types
 *      Array
 *      Object
 * 
 * 
 * More On Primitive vs Reference: https://neetishop.medium.com/copying-objects-in-javascript-8590e2d45c4
 * 

*/


let num1 = 5;
let num2 = num1;

console.log("num1: " + num1);
console.log("num2: " + num2);

// changing num2

num2 = 10;
console.log("after changing num2 to 10");

console.log("num1: " + num1);
console.log("num2: " + num2);




// Now if we do the same thing in reference types it get's messed up.


const obj1 = {name: 'john'}
const obj2 = obj1;

console.log('obj1');
console.log(obj1);

console.log('obj2');
console.log(obj2);


// Now changing obj2

obj2.name = 'Jill';
console.log('After changing obj2');

console.log('obj1');
console.log(obj1);

console.log('obj2');
console.log(obj2);

