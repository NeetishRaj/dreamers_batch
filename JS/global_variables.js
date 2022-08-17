/**
 * Any variables created using var keyword
 * and function declarations in global scope
 * become a part of the window object
 */

var someVar = 10;
console.log(window.someVar); //10



function print() {
    console.log("Printing....");
}
window.print();

