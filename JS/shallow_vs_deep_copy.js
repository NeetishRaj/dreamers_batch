const employee = {
    name: 'akash',
    age: 23,
    address: {
        street: '24 avenue',
        city: 'LA',
        country: 'USA'
    }
}

// const copy = employee;

// copy.name = "john";

// console.log(employee);
// console.log(copy);


// so we can see copy is not actualy a fresh copy.
// to create a fresh copy we can use object.assign()

const fresh_copy = Object.assign({}, employee);

fresh_copy.name = "john";

console.log(employee);
console.log(fresh_copy);


// This is good and it is a fresh copy but notice this.

// this changes the original 'employee' object as well.
fresh_copy.address.city = "SF";

console.log(employee);
console.log(fresh_copy);  


// sop the conclusion is we have to very careful when creating clones of an object using Object.assign()
// because it does cloning only at top level (shallow copy).


// For more on shallow copy. read this
// https://neetishop.medium.com/copying-objects-in-javascript-8590e2d45c4