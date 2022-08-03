// Array.some() - returns either true or false
// Array.every() -returns either true or false


const ages = [17, 24, 28, 78];


// We have to find out, are there any senior citizen inside ages array.

const is_any_sc = ages.some((item, index, arr) => {
    return item > 60;
})


console.log(is_any_sc); //true



// We have to make sure every body is senior citizen in ages array or not.

const is_every_sc = ages.every((item, index, arr) => {
    return item > 60;
})

console.log(is_every_sc); //false

