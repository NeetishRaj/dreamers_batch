/**
 * Promise is a built in class is JS which helps work with async code easily. 
 * 
 */


const first_promise = new Promise((resolve, reject) =>  {
    // Do that time taking async task.

    // If that task was successful, then call resolve
    resolve("success");


    // If that task failed, then call reject function
    reject("failed");
});


first_promise.then( 
    (response) => {
        console.log("First callback " + response);
    },
    (response) => {
        console.log("Second callback " + response);
    }
)
