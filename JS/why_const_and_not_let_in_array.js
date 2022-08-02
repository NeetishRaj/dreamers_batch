

let arr = [1, 2, 3];

// While working in arrays we don't do any redeclaration
arr = ['a', 'b']

console.log(arr);


// usually we just declare an array once ane work with the items inside
// And it's best doable via const

const arr2 = [1, 2, 3];

//arr2 = ['a', 'b'] // Illegal

arr2[0] = 'a';
arr2[1] = 'b';

console.log(arr2);