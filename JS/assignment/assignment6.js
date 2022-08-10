/**
 * Create a Car class with the following
 *  Properties
 *      - Wheels
 *      - steering
 *      
 *  
 * Create Maruti and Honda class that derive from Car class
 * thus reusing it's Wheels and sttering property
 * 
 *  Honda
 *      Properties
 *          - engine: i-vtec
 * 
 *  Maruti
 *      Properties
 *          - service: "Low cost service"
 * 
 */

function Car() {
    this.wheels = 4;
    this.steering = 'right';
}

const c1 = new Car();
console.log(c1);

// Incorrect way to create Honda and Maruti classes

// function Honda() {
//     this.wheels = 4;
//     this.steering = 'right';
//     this.engine = 'ivtec'
// }

// const h1 = new Honda();
// console.log(h1);


// function Maruti() {
//     this.wheels = 4;
//     this.steering = 'right';
//     this.service = 'low cost';
// }

// const m1 = new Maruti();
// console.log(h1);


// Correct way to create Honda and Maruti classes



function Honda() {
    // Calling the parent constructor
    Car.call(this);
    this.engine = 'ivtec'
}

const h1 = new Honda();
console.log(h1);


function Maruti() {
    // Calling the parent constructor
    Car.call(this);
    this.service = 'low cost';
}

const m1 = new Maruti();
console.log(m1);



