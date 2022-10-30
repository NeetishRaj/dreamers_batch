/**
 * Hoisting is applicable in only two situations
 * 
 * 1. for variables created using var
 *      var some_var = 2;
 *  
 * 2. for function declarations
 *      Ex. function my_func() {
 *          }
 * 
 */


// here we can use test() before definition because it's getting Hoisted to the top
// of current scope before execution.

////////////////////////////////////////////
// NORMAL CODE
////////////////////////////////////////////

test();

function test() {
    console.log("printing something");
}

console.log(some_var);

var some_var = 10;


//////////////////////////////////////////////
// Hoisted code
//////////////////////////////////////////////

function test() {
    console.log("printing something");
}
var some_var = undefined;


test();
console.log(some_var);
some_var = 10;