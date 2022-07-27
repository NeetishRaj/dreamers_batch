/**
 * Write a function to add two amnounts in dollars and return the result in INR
 * 
 * Formula: 1$ = 79.95 INR
 * 
 * INPUT: first = 100, second = 200
 * OUTPUT: 23985.00
 */


function dollar_add_to_inr(first, second) {
    const sum = first + second;
    const inr = sum * 79.95;

    return inr.toFixed(2);
}


console.log(dollar_add_to_inr(100, 200));

console.log(dollar_add_to_inr(1, 2));

