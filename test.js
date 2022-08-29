new Promise((a) => {
    a(10);
})
.then(val => {
    console.log(val * 10);
    return val * 10;
})
.then(val => {
    console.log(val * 20);
    val.NonExisitingFunction();
})
.catch((e) => {
    console.log("Catch Block");
})
.finally((a) => {
    console.log("Finally Block");
})