
const arr = [1, 2, 3, 4, 5];

console.log(arr);

const last_item = arr.pop();
console.log("After pop() " + last_item + " is removed!");
console.log(arr);


arr.push(6);
console.log('After push() of 6');
console.log(arr);


const first_item = arr.shift();
console.log("After shift() " + first_item + " is removed!");
console.log(arr);



arr.unshift(0);
console.log('After unshift() of 0');
console.log(arr);


