/**
 * Given a data array, create a new array like shown  below using map
 * 
 * Expected Output: 
 * 
 [
    {
        name: 'Raj',
        age: 28
    },
    {
        name: 'Ramesh',
        age: 29
    },
    {
        name: 'Arjun',
        age: 25
    }
]
 */

 const data = [
    {
        id: 1,
        name: 'Raj',
        age: 28
    },
    {
        id: 2,
        name: 'Ramesh',
        age: 29
    },
    {
        id: 3,
        name: 'Arjun',
        age: 25
    }
]


const output = data.map(function(item) {
    let result = {}
    result.name = item.name;
    result.age = item.age;

    return result;
})

// const output = data.map(item => ({name: item.name, age: item.age}))


console.log(output);