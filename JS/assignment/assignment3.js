/***
 * Write a recursive function to add numbers from 1 to n
 * 
 */



// Using simple for loop
function add_n(n){

    let sum = 0;

    for (let i = 1; i <= n ; i++) {
        
        sum += i;

    }

    return sum;
}

console.log(add_n(10)); //55



// Now let's use  reursive logic to solve this

function add_n_recursive(n) {

    if(n < 1) {
        return n;
    }

    return n + add_n_recursive(n - 1);
}

console.log(add_n_recursive(10)); //55