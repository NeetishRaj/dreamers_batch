/**
 * After the OOPS class the instructor isa requesting  you to design a
 * for teachers with following schema.
 * 
 * 
 * 
 * Class: Teacher
 *      properties
 *          - name
 *          - age
 *      methods
 *          - print() : prints the name and age info
 * 
 * Class: Instructor (extends Teacher)
 *      properties
 *          - batch_name 
 * 
 * 
 * Class: Mentor (extends Teacher)
 *      properties
 *          - days (a number between 0 to 7 only, example: 2 if instructor available 2 days in a week)
 *      methods
 *          - is_available() :  prints "mentor is available today" 

 */


class Teacher {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const t1 = new  Teacher('Drona', 56);
console.log(t1);
t1.print();



class Instructor extends Teacher {
    constructor(name, age, batch_name) {
        super(name, age);
        this.batch_name = batch_name;
    }
}

const i = new Instructor('Neet', 29, 'Dreamer');
console.log(i);






class Mentor extends Teacher {
    constructor(name, age) {
        super(name, age);
        this._days = 0;
    }

    get days() {
        return this._days;
    } 

    set days(value) {
        if(value >= 0 && value <= 7) {
            this._days = value;
        } else {
            console.log("Invalid input for Mentor days");
        }
    }
}   

const m = new Mentor('Harry', 28);
m.days = 8;
console.log(m);
console.log(m.days);