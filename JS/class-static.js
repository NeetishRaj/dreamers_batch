class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} says woof!`);
    }

    static desc() {
        console.log("Dog class" );
    }
}

// Dog.bark() // Illegal
Dog.desc() // Legal 


const d1 = new Dog('scooby', 'Great Dane');
d1.bark();
console.log(d1);


const d2 = new Dog('doggie', 'German shephered');
d2.bark();
console.log(d2);