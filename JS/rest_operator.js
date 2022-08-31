/**
 * Rest operator is a way to pass multiple values as arguments
 * to a function.
 * 
 * It basically converts multiple arguments into a single array
 */


function add_numbers(...numbers) {
    const sum = numbers.reduce((sum, num) => sum + num, 0);
    return sum;
}


console.log(add_numbers(1, 2, 3, 4, 5));  //15
console.log(add_numbers(1, 2));   // 3
console.log(add_numbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));   // 55



function add_numbers_to(mul1, mul2, ...c) {

    // console.log("mul1 :" + mul1);
    // console.log("mul2 :" + mul2);
    // console.log("c :" + c);

    let sum = c.reduce((sum, num) => sum + num, 0);
    sum *= mul1;
    sum *= mul2;

    return sum; 
}

console.log(add_numbers_to(10, 20, 1, 2, 3, 4, 5)) // 3000

console.log(add_numbers_to(1, 2, 3, 4)) // 14
