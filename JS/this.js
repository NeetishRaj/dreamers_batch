/**
 * 'this' always points to the object in current lexical scope.
 * 
 * Therefore it's a convenient way to access the current object
 * we are working with without worrying about it's name or refernce.
 * 
 */

const obj = {
    name:  'John',

    print: function() {
        // here 'this' is pointing to the obj class
        console.log(this.name);
    }
};

console.log(obj);

obj.print();

// Here 'this' is pointing to the global window object
console.log(this);

console.log("hello");
