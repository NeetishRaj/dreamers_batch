
// let generateOrder = function(starting) {
    
    // }
    

let counter = 0;
    
const order = () => {
    counter = counter + 1;
    console.log('Total order = ' + counter);
}


order(); // Total orders = 1
order(); // Total orders = 2
order(); // Total orders = 3


// problem is, other codes can also access and change counter value
function some_other_code() {
    counter = 0; // Which is not acceptable
}

some_other_code();

order(); // // Total orders = 1 , instead of 4