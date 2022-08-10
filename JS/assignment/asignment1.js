/**
 * Write a javascript function that returns a random number 
 * between 1 to 6 (inclusive) thus simulating a Ludo dice.
 *
 * 
 */

function dice(){
    let rand = Math.random();
    rand = rand * 6; 
    rand = Math.ceil(rand);

    return rand;
}


console.log(dice()); //any number b/w 1 - 6
console.log(dice()); //any number b/w 1 - 6
console.log(dice()); //any number b/w 1 - 6
console.log(dice()); //any number b/w 1 - 6