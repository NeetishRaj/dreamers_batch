// Let's create a function that performs multiple operations

/**
 * 
 * function calculator
 * 
 * Operations 
 * add
 * sub
 * div
 * mul
 */



const calculator = (num1, num2, op) => {

    switch (op) {
        case 'add': 
            return num1 + num2;
        case 'sub': 
            return num1 - num2;
        case 'mul': 
            return num1 * num2;
        case 'div': 
            return num1 / num2;
    
        default:
            return num1 + num2;
    }
}


console.log(calculator(3, 4, 'add'));  // 7

console.log(calculator(8, 5, 'sub'));  // 3

console.log(calculator(3, 4, 'mul'));  // 12

console.log(calculator(15, 5, 'div'));  // 3