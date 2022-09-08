// Lets try to improve the code of Memoization using closure.
// As we don't want the 'cache' variable polluting the global scope

const memoize_closure = () => {
    let cache = {};

    return (num) => {
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
}


const mul_10_memoized = memoize_closure();


console.log(mul_10_memoized(3)); //30
console.log(mul_10_memoized(3)); //30

console.log(mul_10_memoized(6)); //60