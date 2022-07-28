
// Undefined type
// All the declared variables (using either var, let or const) if not initialized are of 'undefined' type in JS

let some_variable;

// console.log(some_variable); // undefined

// console.log(typeof some_variable);  //typeof undefined




// detecting the undefined type
console.log(typeof some_variable === 'undefined');



// Usecase
function mul_10(num) {
    if(typeof num === 'undefined') {
        console.log("Please provide number argument to mul_10 function");
        return;
    }

    return num * 10;
}

console.log(mul_10(5)); // 50

console.log(mul_10()); // NaN

