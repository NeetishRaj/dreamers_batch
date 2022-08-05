/**
 * Write a function to create an object which looks somthing  like this,
 *
 * const obj = {
*    "1":  10,
*    "2": 20,
*    ..
*    ..
*    ..
*    "100": 1000
* }
*/



function object_creator() {

    const result = {};

    for (let i = 1; i <= 100; i++) {
        // Your code here
        result[i] = i * 10;
    }

    return result;
}

console.log(object_creator());  // {"1": 10, "2": 20........., "100": 1000}