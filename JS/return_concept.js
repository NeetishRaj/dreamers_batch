/***
 * Important facts related to return.
 * 
 * 
 * 1. If return is executed inside a function then any code after that return statement is ignored.
 * 
 * 
 * 2. If return is empty then return type is always undefined
 * 
 */


function add(num1, num2) {

    const sum = num1 + num2;

    return; // this returns undefined

    return sum;
    
    return 100;

    console.log("Random log");
}


const result = add(5, 10);  // 15

console.log(result); //15