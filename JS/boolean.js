// boolean type is from class Boolean in Javascript.


// Ways to create boolean variables

const is_night = true;
console.log(is_night); //true

const is_hungry = false;
console.log(is_hungry); //false


const  is_day = Boolean(false);
console.log(is_day); //false





// Detecting boolean type

console.log(typeof is_night === 'boolean') // true
console.log(typeof is_hungry === 'boolean') // true
console.log(typeof is_day === 'boolean') // true



// Use of true or false

function find_even_odd(num) {
    const is_even = num % 2 === 0;

    if(is_even) {
        console.log(num + " is an even number");
    } else {
        console.log(num + " is an odd number");
    }
}


find_even_odd(5); // 5 is an odd number

find_even_odd(16); //16 is an even number



const flag = true;
let counter = 0;
while(flag) {
    counter++;
    console.log(counter + '. This will be printed infinitely');

    if(counter > 100) break;
}