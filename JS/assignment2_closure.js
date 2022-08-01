function countBy(initial){

    // return the output using return keyword
    // do not console.log it

    let current = initial;

    return function (num) {
        current = current + num;
        return current;
    }
}

const count = countBy(4) // initial value of counter 4, returns a function
/**
 * After execution of line 14 this happens
 * 
 * const count = function (num) {
        current += num;
        return current;
    }
 * 
 */

console. log(count(2)) // prints 6 because 4 + 2

console. log(count(-4)) // prints 2 because 6 - 4

console. log(count(8)) // prints 10 because 2 + 8
