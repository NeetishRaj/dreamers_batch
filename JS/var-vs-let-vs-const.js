/**
 * 
 * var                  let                     const
 * ##################################################################
 * 1. redeclarable      1. Not                  1. Not
 * 
 * 2. Global &          2. Global, Function     2. Global, Function
 *  Function scope          & Block scope           & Block scope
 * 
 * 3. Hoisted           3. Not hoisted          3. Not hoisted
 * 
 * 4. In global  scope  4. NOt                  4. Not
 *  becomes window
 *  property
 * 
 * 5. Value can be      5. Value can be         5. Not
 *  changed             changed
 * 
 */

//1.
// Ony var is Redeclaraable

var a = 10;
var a = "somestr";

let x = 10;
// let x = "somestr";   // Illegal

const y = 10;
// const y = "somestr";   // Illegal




//2.
// unlike var, let and const also support 
// block scope (any code blocks with curly braces ie. if(){}, for(){}) 


{
    let block_let = 1;
    const block_const = 2;
    var block_var = 3;
}

// console.log(block_let) // Error 
// console.log(block_const) // Error
console.log(block_var) // 3



//3.

// Only var is hoisted
function some_func() {
    a = 20;
    console.log(a); // 20
    var a = 10;
}
some_func();

// compiler interprests above code like below
// function some_func() {
//     var a = undefined;

//     a = 20;
//     console.log(a); // 20
//     a = 10;
// }



//4. 
// any variable declared using 'var' keyword in global scope
// becomes a window property.

var something = 10;
console.log(window.something); 10;

let something_let = 20;
console.log(window.something_let);  // undefined

const something_const = 30;
console.log(window.something_const);  // undefined