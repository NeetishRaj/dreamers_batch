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


const object4  = new Object();
object4.name = "John";
object4.age = 22;


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

// function inside object
const data = {
    nodes: 234,
    print:  function() {
        console.log("the current count of nodes is " + data.nodes);
    }
}


data.print();



// JS is very forgiving in nature when it comes to undefined prop names
const some_obj = {
    age: 23
}

console.log(some_obj.something_else);  //undefined
