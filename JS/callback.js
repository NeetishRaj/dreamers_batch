/**
 * callbacks are functions which are passed as arguments to another functions (HO function).
 *  
 */


// func is a Higher order function
function func(callback1, callback2) {
    // Here is some time taking operation
    callback1();
    callback2();
}


function print1() {
    console.log('Prints something 1');
}

function print2() {
    console.log('Prints something 2');
}



func(print1, print2);
// func(print2);



// function add(num1, num2) {
//     return num1 + num2;
// }

// add(34, 34);
// add('book', 'storm');
    



// function some_time_taking_function(callback) {
//     //
//     for (let i = 0; i < 5000000000; i++) {
//     }

//     callback();
// }

// function sometask_after_time_taking_function () {
//     console.log('Done something else');
// }

// some_time_taking_function(sometask_after_time_taking_function);



// console.log("final task");

