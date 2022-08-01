let generateOrder = function(starting) {
    
    let counter = starting;

    return function() {
        console.log("Total orders = " + counter); 
        counter = counter + 1;
    }
}

const order = generateOrder(1);

order();

order();
order();


order();