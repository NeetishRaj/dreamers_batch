/**
 * Any function which on some given input always return the
 * same output is a pure function.
 */

// mul_10 is a pure function

function mul_10(num) {
    return num * 10;
}

console.log(mul_10(5)) //it will always be 50
console.log(mul_10(6)) //it will always be 60





// Example of an Impure function
function get_random_num_char(str) {
    const rand_index = Math.floor(str.length * Math.random());
    return str[rand_index];
}


console.log(get_random_num_char('abcdef'))  // given the same input it may have different output