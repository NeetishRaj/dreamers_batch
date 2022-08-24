// Explicit type casting to String type

const num = 23;
const bool = true;
const arr = [1, 2, 3];

console.log(String(num)); "23"
console.log(String(bool)); "true"
console.log(String(arr));  "1, 2, 3"


// Explicit type casting to boolean
const num1 = 0;
const num2 = 100;
const str1 = '';
const str2 = 'hi';
const arr1 = [];
const arr2 = [1, 2, 3];
const obj1 = {}
const obj2 = {age: 30}

console.log(Boolean(num1)); //false
console.log(Boolean(num2)); //true

console.log(Boolean(str1)); //false
console.log(Boolean(str2)); //true

console.log(Boolean(arr1)); //true
console.log(Boolean(arr2)); //true

console.log(Boolean(obj1)); //true
console.log(Boolean(obj2)); //true


// Truthy and falsy values
console.log(Boolean(null));         //false
console.log(Boolean(undefined));    //false
console.log(Boolean(2));            //true



// Explicit type casting to Number

const nstr1 = "hello123"
console.log(Number(nstr1)); // NaN

const nstr2 = "1234";
console.log(Number(nstr2)); // 1234

const  nbool1 = true;
console.log(Number(nbool1)); //1

const  nbool2 = false;
console.log(Number(nbool2)); //0





// Implicit type casting examples


/**
 * Whenever we have a string as an operand for + operator then
 * both the operand are treated as a string.
 * and non-string operands are implicitly type casted to string type
 */

const numb = 23;
const str = "20";

console.log(numb + str); // 2330
// This behaves like 
console.log(String(numb) + str);


/**
 * variables inside if() are implicitly type-casted to boolean type.
 * 
 */

let some_var = null;


if(some_var) {
    console.log("this line will not be logged");
} 