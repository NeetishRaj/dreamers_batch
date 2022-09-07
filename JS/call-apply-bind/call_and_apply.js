/**
 * call() function is defined in the Function class
 * 
 * Therefore all the functions can also be called using call() function
 * 
 * 
 * WHY TO USE call() ???
 * 
 * We use call to bind 'this' to an object of our choice
 */


// Any function can also be called using call()
function print() {
    console.log("Printing");
}

print();

print.call();


// 

function print () {
    console.log('Num: ' + this.num);
}

const obj1 = {
    num: 20,
}

const obj2 = {
    num: 30
}

print(); // Num: undefined

print.call(obj1)  // Num: 20

print.call(obj2) // Num: 30



// call with arguments


function salutation(name, age) {
    console.log(`Hi myself ${name}, and I am ${age} years old`);
}

salutation('john', 22);

salutation.call(null, 'john', 22);





// apply is also same as call in behavior and used for this binding
// only difference is apply takes the function arguments as a single array

salutation.apply(null, ['john', 22]);