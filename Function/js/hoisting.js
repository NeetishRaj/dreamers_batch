// Hoisting
/**
 * During Hoisting compiler brings all the var declarations to the top of current scope(Global or function)
 * 
 */
/**
 * 
 * Hoisting happens only in 
 * 
 * 1. var
 * 2. Function declaration 
 * 
 */




a = 100;
console.log(a * 5); //500
console.log(a);   //100

let a = 0;
/**
 * 
 * Above two line are interpreted like this by the compiler
 * 
 * var a = undefined;
*  console.log(a);
*  a = 10;
 */



// Hoisting of Function declaration


sayHello();

// function sayHello() {
//     console.log("Hi there!");
// }

const sayHello = () => {
    console.log("Hi there!");
}
    