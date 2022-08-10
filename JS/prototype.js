const arr = [1, 2, 3];


console.log(arr instanceof Array);


Array.prototype.something = 100;



const arr2 = [];
const arr3 = new Array(10);


console.log(arr.something); //100

console.log(arr2.something); //100

console.log(arr3.something); // 100

