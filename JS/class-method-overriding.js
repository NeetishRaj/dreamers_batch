class Parent {
    print() {
        console.log("Parent class");
    }
}

class Child extends Parent {

    // Here we are overriding the parent's print class
    print() {
        console.log("Child class");
    }
}


const c = new Child();
c.print();