
// function add_arrays(arr1, arr2) {
//     if(!Array.isArray(arr1) || !Array.isArray(arr2)) {
//         return null;
//     }

//     if(arr1.length !== arr2.length || arr1.length <= 0 ) {
//         return null;
//     }

//     const result = [];

//     for (let i = 0; i < arr1.length; i++) {
//         result.push(arr1[i] + arr2[i]);
//     }

//     return result;
// }

// console.log(add_arrays([], []))  // null
// console.log(add_arrays([1, 2], [1, 2, 3]))  // null
// console.log(add_arrays([1, 2, 3], [4, 5, 6]))  // [5, 7, 9]


// setTimeout(() => {
//     console.log("Bye");
// })

// console.log("Hi");


function factorial(n) {
    if(n <= 1)
        return 1;

    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120