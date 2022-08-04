const object1 = {};

object1.name = "John Doe";
object1.age = 34;
object1.is_married = true;

// console.log(object1);



const object2 = {
    name: "Reina",
    age: 37,
    is_married: false
};

// console.log(object2);


const object3 = {
    "prop name with spaces": "some value",
    "(*&^&*(^%%": 34
}
// console.log(object3);


// Objects inside Objects
const person = {
    name: "john doe",
    age: 23,
    address: {
        lane: "triplicane",
        city: "ahmedabad",
        pin: "380014"
    }
}

console.log(person);

console.log(person.age); //23

console.log(person.address.city); //ahmedabad


// Arrays inside objects
const student = {
    name: "Rekha",
    age: 23,
    subjects: [
        'Bio',
        "Che",
        "Phy",
        "Music",
        "Phy Education"
    ]
}



