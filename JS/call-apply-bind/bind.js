/**
 * bind() is also for the same purpose as binding this to an
 * object of our choice
 */


function print_info() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const obj = {
    name: "John Carmack",
    age: 52
}

const obj2 = {
    name: "Linus Torvalds",
    age: 52
}

const print_info_obj = print_info.bind(obj);
const print_info_obj2 = print_info.bind(obj2);


print_info_obj();
print_info_obj2();