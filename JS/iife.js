/**
 * IIFE (Immediately invoked function expression)
 * Syntax: 
 *          (function() {
 *              // Private code here    
 *          })()
 * 
 * A cool trick to maintain private scope
 * 
 * 
 * Benefits of IIFE
 * 
 * 1. We can maintain private scope
 * 2. We can expose public methods or properties
 * 3. Very useful in creating libraries
 * 
 */


// Normal function vs IIFE
// ############################

// This function will get invoked itself, hence called IIFE
(function(num){    
    console.log('IIFE ' + num);
})(20)


function print(num) {
    console.log("PRINTING " + num);
}
print(20);









(function(){
    console.log("hi");
    const a = 10;
})()


function func() {
    console.log("hi");
    const a = 10;
}
func();