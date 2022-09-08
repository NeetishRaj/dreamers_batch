/**
 *  Memoization is a tactic to cache outputs for pure functions  
 */


const mul_10 = (num) => {
    return num * 10;
}


console.log(mul_10(3)); //30
console.log(mul_10(3)); //30
console.log(mul_10(6)); //60



// Here the problem is we are doing 3 x 10 twice but we can cache the results
// to improve performance.

// So this caching of results is called memoization


let cache = {};

const mul_10_memoized = (num) => {
    let result;

    if(cache[num]) {
        console.log('From Cache');
        return cache[num];
    } else {
        result = num * 10;
        cache[num] = result;
    }

    return result;
}

console.log(mul_10_memoized(3)); //30
console.log(mul_10_memoized(3)); //30

console.log(mul_10_memoized(6)); //60

console.log(cache); //{ '3': 30, '6': 60 }

