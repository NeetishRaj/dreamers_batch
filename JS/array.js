const arr = [1, 2, 3];

// length of the array
console.log(arr.length);  //3


// accessing array items
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3

arr[2] = "hi";

console.log(arr); //[1, 2, 'hi']
console.log(arr[2]); // 'hi'



// We want to create an empty array of n size then we can use Array constructor

const arr2 = new Array(10); 
console.log(arr2.length);  //10
console.log(arr2); //[undefined, undefined, undefined, ... ]


// We want to create an array of size 'n' with some value

const arr3 = new Array(10);
arr3.fill(1)
console.log(arr3.length);  //10
console.log(arr3); //[1, 1, 1, 1, ......]


// determining the Array types in JS using Array.isArray
if(Array.isArray(arr3)) {
    console.log('arr3 is an Array');
} else {
    console.log('arr3 is not an Array');
}
