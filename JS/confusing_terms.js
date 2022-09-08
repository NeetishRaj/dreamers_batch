/**
 * Higher order functions.
 * 
 * Any function that returns another function
 * or take another function as an argument are 
 * example of higher order function
 */

function higher_order_func() {
    return function() {
        console.log('hi');
    }
}

higher_order_func()();




/**
 * Anomyous or Lambda functions
 * 
 * These are functions without names and mostly to be used are 
 * arguments to another functions 
 * 
 * In below example,
 * first arg i.e function is an example of anonymous or
 * lambda function
 */

setTimeout(() => {
    console.log('hi after 1 sec');
}, 1000)

const arr = [1, 2, 3]
arr.filter(function(item){
    return item % 2 === 0; 
});


/**
 * Normal functions with names are called named functions
 * 
 * 'print_hi' is a named function
 */
function print_hi() {
    console.log('hi');
}




/**
 * In JS, functions can be treated as variables.
 * Therefore they passed as arg to functions, can be redeclared
 * 
 * Hence functions are called First class functions.
 * 
 */

let func = () => {
    console.log('hi');
}

const high_func = (callback) => {
    callback();
}

high_func(func);

func = () => {
    console.log('bye');
}


/**
 * function expression
 * 
 * const func = function () {
 *      // function code
 * }
 * 
 * 
 * 
 * function declaration 
 * 
 * function func() {
 *      //function code
 * }
 * 
 */