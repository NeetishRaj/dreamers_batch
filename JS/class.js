
// ES5 way to create classes
function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
}

// ES6 way to create classes
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}


const d1 = new Dog('scooby', 'Great Dane');
console.log(d1);


const d2 = new Dog('doggie', 'German shephered');
console.log(d2);