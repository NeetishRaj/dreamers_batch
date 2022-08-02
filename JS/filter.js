const arr = [1, 2, 3, 4, 5, 6,7, 8];
console.log(arr);

// Syntax 1
const even_logic = function(item) {
    return item % 2 === 0;
}

const even1 = arr.filter(even_logic)



//Syntax 2
const even2 = arr.filter(function(item) {
    return item % 2 === 0;
})


// Syntax 3
const even3 = arr.filter((item) => {
    return item % 2 === 0;
})


// Syntax 4
const even4 = arr.filter(item => {
    return item % 2 === 0;
})


// Syntax 5
const even5 = arr.filter(item => item % 2 === 0);




console.log(even1); //[ 2, 4, 6, 8 ]
console.log(even2); //[ 2, 4, 6, 8 ]
console.log(even3); //[ 2, 4, 6, 8 ]
console.log(even4); //[ 2, 4, 6, 8 ]
console.log(even5); //[ 2, 4, 6, 8 ]

