/**
 * Things to remember about JSON
 * 
 * 1. It has two functions
 *      a. JSON.parse()
 *      b. JSON.stringify()
 * 
 * 2. It doesn't support functions like a normal JS object.
 * 
 * 3. Data types supported by JSON are Array, Object, Number, String, Boolean
 *      and null
 * 
 */


const json = `
{
    "name": "john",
    "age": 23
}
`

// We can test this JSON data
const json_obj = JSON.parse(json);

console.log(json_obj);
console.log(json_obj.age); // 23

json_obj.address =  {
    street: "24th avenue",
    "area": "bhandu",
    "pin": 345003
}



// Convert the object back to JSON
const new_json = JSON.stringify(json_obj, null, 2);
console.log(new_json);



// JSON dosn't support functions.

const person = {
    name: 'ajay',
    sex: 'male',
    print: function () {
        console.log("Hello everyone");
    }
}

const person_json = JSON.stringify(person);

console.log(person_json);