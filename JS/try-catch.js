const NUM = 100;

console.log("Before error");

try {
    NUM = 200;
} catch (error) {
    console.log("There was an error");
} finally {
    console.log("This will always be executed. Error or not!");
}


console.log("After error");
