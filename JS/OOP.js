/**
 * Object Oriented Programming in JS
 * 
 * - Encapsualation
 * - Abstraction/Data  Hiding
 * - Inheritance
 * - Polymorphism
 */

//Encapsulation
// JS Classes encapsulates realted data types.


var wheels
var color 


class Car {
    constructor() {
        this.wheels;
        this.color;
    }

    #print() {
        console.log("Hidden method");
    }

}


// Abstraction  Data hiding
// We have hidden print method, it's not accessible outside
const c = new Car();
// c.print(); throws error




// Inheritance

class BMW extends Car {
    
}

// Polymorphism  support is weak in JS but it's definitely possible
