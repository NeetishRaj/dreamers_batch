// All about function arguments


// Here 'num' is called parameter
function multiply_10(num) {
    return num * 10;
}


// Here '5' is an argument to function multiply_10
const result = multiply_10(5);
console.log(result); // 50





// In JS, we can have as many arguments as we want.

function add_multiple(n1, n2, n3, n4, n5, n6, n7) {
    return n1 + n2 + n3 + n4 + n5 + n6 + n7;
}

const sum  = add_multiple(1, 2, 3, 4, 5, 6, 7);
console.log(sum);



// If we don't pass an argument to a function then it stays undefined.


function greeting(name) {
    const greet = "Hello! " + name + ", How are you doing?";

    console.log(greet);
}

greeting(); // Hello! undefined, How are you doing?





// Default value for arguments
function power(num, pow = 2) {
    return num**pow;   // for doing like 2^3 
}

console.log(power(2, 3)) // 8

console.log(power(2)) // 4





