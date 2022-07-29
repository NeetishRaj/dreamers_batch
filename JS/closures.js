

// function multiply_10(num) {
//     let  multiplier = 10;    
//     return num * multiplier;
// }

// console.log(multiply_10(5));  //50


// function multiply_20(num) {
//     let  multiplier = 20;    
//     return num * multiplier;
// }

// console.log(multiply_20(5));  //100


// Problem: We are looking for a generic multiply_x function, which can give us a unique multiplier function


function multiply_x(multiplier) {
    return function(num) {
        return multiplier * num;
    }
}



const multiply_10 = multiply_x(10);
console.log(multiply_10(5));  //50


const multiply_20 = multiply_x(20);
console.log(multiply_20(5));  //100



