/**
 * given an array
 * 
 * const arr = [1, 2, 3, 4, 5, 6, 7, 8]
 * 
 * write a function to extract all the even items inside arr in a new array called 'even'
 * 
 * 
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const even = [];

for (let i = 0; i < arr.length; i++) {
    
    if(arr[i] % 2 === 0) {
        even.push(arr[i]);
    }
}

// or
//const even = arr.filter(item => item % 2 === 0);


console.log(even); // [2, 4, 6, 8]