/**
 * Hoisting is phenomena that only happens with 'var' and function declarations. 
 * 
 * What is hositing?
 * No matter where the declaration of var is, it gets hoisted to the top
 * of it's scope (function or global). That's called hoisting.
 * 
 * So ideally, hoisting shoud give an error but it doesn't.
 * that's why we study about it to stay prepared.
 * 
 */


function hoist_demo() {
    
    a = a * b;
    console.log(a);

    var a = 20, b = 20;
    console.log(a);
}

hoist_demo();

// compiler sees above code like this

function hoist_demo() {
    var a = undefined, b = undefined;

    a = a * b;
    console.log(a);

    a = 20, b = 20;
    console.log(a);
}

hoist_demo();