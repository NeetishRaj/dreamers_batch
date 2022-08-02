

function square(num) {
    return num * num;
}


const square = (num) => {
    return num * num;
}


const square = (num) => num * num;


const square = num => num * num;



console.log(square(3)); //9


// NOTE: Cannot ommit parenthesis in case of multiple args
// const add = num1, num2 => num1 + num2;   // Illegal
// const add = (num1, num2) => num1 + num2;   // Legal
