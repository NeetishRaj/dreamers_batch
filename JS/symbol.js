// Symbol type



// Creating a symbol type
const sym1  = Symbol();
console.log(sym1);

const sym2 = Symbol('randomstring');
console.log(sym2);


// Detecting a symbol type
console.log(typeof sym1 === 'symbol');


// Uses of a Symbol
const obj = {
    sym1: "some value"
}


