/**
 * Given an array of 'data' shown below return a new array of strings like this.
 * 
 * Expected Output:
 * [
 *  'ID: 1, Name: Raj, Age: 28',
 *  'ID: 2, Name: Ramesh, Age: 29',
 *  'ID: 3, Name: Arjun, Age: 25'
 * ]
 * 
 * 
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

const output = data.map(function(item, index, arr) {
    // console.log(item);

    let result = '';

    result += 'ID: ' + item.id + ', ';
    result += 'Name: ' + item.name + ', ';
    result += 'Age: ' + item.age;

    return result;
})

// const output = data.map(item => `ID: ${item.id}, Name: ${item.name}, Age: ${item.age}`);


console.log(output);

