function buy_milk() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bought milk");
        }, 3000);
    })
}


// Using buy_milk via Promises

// buy_milk().then((result) => {
//     console.log(result);
// });



// Using async await 
async function buy_milk_async() {
    const result = await buy_milk();
    console.log(result);
}

buy_milk_async();