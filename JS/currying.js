// currying example

const a = (a) => (b) => (c) => a + b + c;


// It's same as this
// const a = funtion(a) {
//     return function(b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }


const result = a(10)(20)(30);

// // This is same as below
// const func1 = a(10);
// const func2 = func1(20);
// const result = func2(30);

console.log(result);