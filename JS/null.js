// null 

// It's a type used by JS programmers to  return empty values
// It is always allocated manually by us.

let some_variable; 

console.log(typeof some_variable); //undefined

some_variable = null;

console.log(typeof some_variable) //object




// Testing for null types

console.log(some_variable === null) // true




// Usecase
function mul_10(num) {
    if(typeof num === 'undefined') {
        console.log("Please provide number argument to mul_10 function");
        return null;
    }

    return num * 10;
}

// console.log(mul_10(5)); // 50

// console.log(mul_10()); // Please provide number argument to mul_10 function