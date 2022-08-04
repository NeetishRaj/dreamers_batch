/**
 * 
 * We have a table of students that needs to be converted 
 * to a convenient data structure in JS using Objects and Arrays
 * 
 * 
 * roll_no  Student_name     age     interest
 * 1        Rekha           23      Bio
 * 2        Vishal          21      Che
 * 3        Diksha          22      Geo
 * 
 */
// const Bio = "Bio"



const students = [
    {
        roll_no: 1,
        name: "Rekha",
        age: 23,
        interest: "Bio"
    },
    {
        roll_no: 2,
        name: "Vishal",
        age: 21,
        interest: "Che"
    },
    {
        roll_no: 3,
        name: "Diksha",
        age: 22,
        interest: "Geo"
    }
]

// console.log(students);


// students.forEach((student, index, arr) => {
//     console.log(`${student.name} is of age ${student.age} and their favourite subject is ${student.interest}`);
// })



// Approach 2

const studentss = [];

function update_students(name, age, roll_no, interest) {
    const student = {
        name: name,
        age: age,
        roll_no: roll_no,
        interest: interest
    }

    studentss.push(student);
}


update_students("Reka", 23, 1, "Bio");
update_students("Vishal", 21, 2, "Che");
update_students("Diksha", 22, 3, "Geo");

// console.log(studentss);




// Approach 3: let's make to introduce an incrementing roll_no concept

const studentsss = [];

function add_students_generator() {
    let current_roll_no = 0;

    return (name, age, interest) => {

        const student = {
            name: name,
            age: age,
            roll_no: ++current_roll_no,
            interest: interest
        }
    
        studentsss.push(student);
    }
}

const add_student = add_students_generator();

add_student("Reka", 23, "Bio");
add_student("Vishal", 21, "Che");
add_student("Diksha", 22, "Geo");

console.log(studentsss);