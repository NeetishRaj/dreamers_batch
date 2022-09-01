/**
 * Wrtite a function using spread operator 
 * that can take any number of arguments and
 * returns the maximum number among the arguments
 * 
 */


function find_max(...numbers) {
    let max = -Infinity;

    for (let i = 0; i < numbers.length; i++) {
       if(max < numbers[i])
            max = numbers[i];
    }

    return max;
}


console.log(find_max(1, 2, 3, 4, 5)) // 5
console.log(find_max(-1.2, -2, -21, -4, 0, -100)) // 0