
function mul_10(num) {
    return num * 10;
}

mul_10(5); //50




// Higher order function
/**
 * Any function which returns or take functions as arguments 
 */

function func1() {
    return function func2() {
        return 'hi';
    }
}


let result = func1();
let final_result = result(); 

console.log(final_result);  //'hi'


