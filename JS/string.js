//Striung type

// ways to create string in JS

let str1 = "Hello world!";
console.log(str1);


let str2 = 'Hello world!';
console.log(str2);


let str3 = `Hello world!`;
console.log(str3);


let str4 = String("Hello world!");
console.log(str4);


const num = 4567;
let str5 = num.toString();
console.log(str5);


let str6 = "Hello " + "world!";
console.log(str6);




// detect a string type

console.log(typeof str1 === 'string') //true



// usecases 


function salutation(name) {

    const salu = `Hello ${name}! How are you doing today?`;
    console.log(salu);
}


salutation('Harry');
salutation('Rakesh');
