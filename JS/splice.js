const arr = [1, 2, 3, 4, 5];
console.log(arr);

// Now, we want to remove 3 from arr
// The index of 3 in arr is 2
arr.splice(2, 1);
console.log(arr); // [1, 2, 4, 5]



// Now, we want to replace 4 with 'four'
arr.splice(2, 1, 'four');
console.log(arr);