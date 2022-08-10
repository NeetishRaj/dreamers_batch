// Ways of creating a string.

const str1 = "Hello world";
const str2 = 'Hello world';

const str3 = `hello world`;



// escape character in string Newline \n, tab \t

console.log("\nHey Guys,\n\nHow are you doing?");
console.log("Name\tAge\tId\nNeha\t23\t124");



// string interpolation is done using backquotes
const Name = "John Doe";
const str4 = `${Name} is a great programmer.`;
console.log(str4);

// If not using interpolation syntax then we d have to use + operator
const str5 = Name + " is a great programmer."
console.log(str5);



const str6 = "asdf";
console.log(str6.toUpperCase()); //ASDF

console.log("ABCDE".toLowerCase()); //abcde




//concat() works just like + operator

const str7 = "hello ";
const str8 = "world";

console.log(str7.concat(str8)); // hello world



// includes() used to find a character or substring inside a string

const str9 = "John Doe";
console.log(str9.includes('Doe')); //true





//split() is used to split a string into character array

const str10 = "Hey Guys";
const str10_arr = str10.split("");
console.log(str10_arr); // ['H', 'e', 'y',' ', 'G', 'u',  'y', 's']