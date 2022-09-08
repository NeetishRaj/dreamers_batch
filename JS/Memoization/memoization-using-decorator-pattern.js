// memoize_decorator is utlizing decorator pattern
// And we decorated 'mul_10' and 'cube' functions to create their memoized version

const memoize_decorator = (func) => {
    const cache = {};

    return (arg) => {
        let result;

        if(cache[arg]) {
            console.log('From cache');
            return cache[arg];
        } else {
            result = func(arg);
            cache[arg] = result;
        }

        return result;
    }
}


const mul_10 = (num) => {
    return num * 10;
}

const mul_10_memoized = memoize_decorator(mul_10);

console.log(mul_10_memoized(3)) // 30
console.log(mul_10_memoized(3)) // From cache 30







const cube = (num) => {
    return num * num * num;
}

const cube_memoized = memoize_decorator(cube);

console.log(cube_memoized(3)) // 27
console.log(cube_memoized(3)) // From cache 27



