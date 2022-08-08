/**
 * Use a recursive function to add 10 numbers.
 *
 * 2 Rules of a recursive function
 * 
 * 1. Recursive function is a function that call itself.
 * 2. Exit condition to break recursion.
 */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// First using simple for loop
// function add_num() {
//     let sum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//     }

//     return sum;
// }

// console.log(add_num()); // 55



// Now let's use recursion
function add_nums_recursive(count, sum) {

    if(count > 10) {
        return sum;
    }

    console.log(`count: ${count}, sum: ${sum}`);
    
    return add_nums_recursive(count + 1, nums[count - 1] + sum);
}

console.log(add_nums_recursive(1, 0));