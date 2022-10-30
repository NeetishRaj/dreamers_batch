/**
 * Closures in JS
 * 
 * When you hear closures, think function inside function.
 * 
 * Why function inside function?
 * Closures, was a hack in JS to have private variables.
 * 
 */

////////////////////////////////
//Problem : timer is not private
///////////////////////////////

let timer = 0;
function increment() {
    return ++timer;
}
console.log(increment());

////////////////////////////////
//Solution : Use closure 
///////////////////////////////


function closure() {
    let timer = 0;
    
    return function increment() {
        return ++timer;
    }
}

const inc = closure();
console.log(inc());
console.log(inc());

// console.log(timer) // timer is not accessible in global scope 