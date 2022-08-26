function boil_milk(milk) {

    const promise = new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Boiled ${milk} litres of milk`);
            resolve(milk);
        }, 3000);
    });

    return promise;
}

function make_coffee(milk) {

    const promise = new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Made ${milk} litres of coffee`);
            resolve(milk);
        }, 3000);
    });

    return promise;
}

function serve_coffee(milk) {

    const promise = new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Served ${milk} litres of coffee`);
            resolve();
        }, 3000);
    });

    return promise;
}

boil_milk(5)
    .then((qty) => {
        return make_coffee(qty);
    })
    .then((qty) => {
        return serve_coffee(qty);
    })