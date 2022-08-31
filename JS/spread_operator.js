/**
 * Spread operator(...)
 * 
 * Works for both arrays and objects
 */


const arr = [1, 2, 3, 4];

// We want to create another array something like this ['a', 'b', values of arr]
// ['a', 'b', 1, 2, 3, 4]

const new_arr = ['a', 'b', ...arr];

console.log(new_arr);





// Spread operator for objects


const obj1 = {
    name: 'john',
    age: 23
}

const obj2 = {
    address: {
        state: 'goa',
        lane: 'Lane 1'
    }
}

// Create a new object by merging the properties of obj1 and obj2

const new_obj = {
    ...obj1,
    ...obj2
}

console.log(new_obj);