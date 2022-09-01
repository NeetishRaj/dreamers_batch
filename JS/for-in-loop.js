const obj = {
    prop1: "value1",
    prop2: "value2",
    prop3: "value3"
}



for (const key in obj) {
    console.log(`key: ${key}, value: ${obj[key]}`);
}


// 'in' keyword in javascript can be used to check if a property exist in an object

console.log('prop1' in obj) //true
console.log('prop2' in obj) //true
console.log('something' in obj) //false