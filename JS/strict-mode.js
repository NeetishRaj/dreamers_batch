/**
 * Without strict mode JS will supopress a lot of error-prone code.
 * 
 * But with strict mode on, all those error prone codes will throw
 * 
 * Strict mode can be used in 2 ways
 * #################################
 * 
 * 1. Global scope (on top of the code)
 *    Here strict mode applicable to complete code.
 * 
 * 2. Function scope (Inside a function)
 *    Here strcit mode is only applicable within the function.
 * 
 * 
 * Benefit of strict mode
 * ######################
 * 
 * It helps maintain the code quality and reduces the tendency to do mistakes.
 * 
 * 
 * 
 * For more related to strict mode: 
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
 */


// strict mode globally

// "use strict";

let my_var = 10;

// In strict mode this will be an error because not using var, const or let to create a variable
my_va = 20;

console.log(my_var);




// Example of strict mode inside a function
function some_func() {
    "use strict";

    console.log("strict mode function");
}