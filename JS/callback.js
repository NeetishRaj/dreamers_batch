
/**
 * callback: It's just a function which is passed as an argument.
 * 
 * We use callback to do something after a time taking operation i.e. async tasks.
 * 
 */
// Examples of callback



function complex_add(num1, num2, cb) {
    
    // Let's assume next line is a time taking process.
    const sum = num1 + num2;

    cb(sum);
}

complex_add(10, 20, function(result) {
    console.log("result is " + result);
});






// Other examples of callback

setTimeout(function() {
    console.log("print something");
}, 1000);



// This is how the definition of setTimeout would be like inside browser
function setTimeout(callback, time_in_millisec) {
    // Some code to delay excecution by 'time_in_millisec' milliseconds

    callback();
}










