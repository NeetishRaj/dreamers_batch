/**
 * Write a program, to iterate over the items of the 
 * fibonacci array and make sure it's correct using forEach loop
 */
const fibonacci = [0, 1, 1, 2, 3, 5 , 8, 13, 21];

let is_valid_fibonacci = true;

fibonacci.forEach((item, index, arr) => {
    // Write the code to test the fibonacci series
    if(index == 0 && item !== 0)  {
        is_valid_fibonacci = false;
        return;
    } else if(index === 1 && item !== 1) {
        is_valid_fibonacci = false;
        return;
    } else if(index > 1 && item !== (arr[index - 1] + arr[index - 2])) {
        is_valid_fibonacci = false;
        return;
    }

})

console.log(is_valid_fibonacci); // should give us true