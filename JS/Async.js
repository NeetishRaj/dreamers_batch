/**
 * Async 
 * 
 *      Asynchronous             Vs                 Synchronous
 * 
 *      - No need to wait                           - We have to wait before going to next task
 *      - While some task is happening              - Cannot do this.
 *          we can start another task
 */



setTimeout(() => {
    console.log("this is async")
}, 0)

console.log('this is sync');