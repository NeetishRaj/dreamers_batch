// Callback way of handling async stuff

// function boil_milk(milk, cb) {
//     setTimeout(function() {
//         console.log(`Boiled ${milk} litres of milk`);

//         cb(milk);
//     }, 3000);
// }

// boil_milk(5, function() {

//     console.log("Now we are ready to make coffee");
// });




// Promise version of the same code.

function boil_milk(milk) {

    const promise = new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Boiled ${milk} litres of milk`);
            resolve();
        }, 3000);
    });

    return promise;
}

boil_milk(5).then(() => {
    console.log("Now we are ready to make coffee");
})