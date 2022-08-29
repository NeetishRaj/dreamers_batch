const promise = new Promise((resolve, reject) => {
        resolve("result");
        // reject("failed");
});


promise
    .then((res) => {
        console.log(res);
        res1.concat('2');
        return res + '1';
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log("Catch block");
        console.log(err.message);
    })
    .finally(() => {
        console.log("Finally block");
    })