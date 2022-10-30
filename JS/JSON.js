/**
 * 
 * JSON
 * 
 * 
 * 1.  JSON, is data format using strings which looks like a JS object
 * 
 * 2. What are the types supported in JSON
 *      - Array
 *      - Object
 *      - string
 *      - Number
 *      - Boolean
 *      - null
 * 
 * 3. Two methods to work with JSON
 * 
 *      1. JSON.stringify() :      Object -> JSON string
 *      2. JSON.parse() :          JSON string -> Object
 */

const sample_json = `
{
    "name": "same",
    "age": 29
}
`
console.log(sample_json);

const obj = JSON.parse(sample_json);
console.log(obj);

obj.name = "Samuel";

console.log(JSON.stringify(obj));