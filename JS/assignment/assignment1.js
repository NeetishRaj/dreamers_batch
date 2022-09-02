/**
 * We have an object Company
 * 
 * 
 */

const Company = {
    name: 'SpaceX',
    _employees: [
        {
            id: 1,
            name: 'Harry',
            dept: 'Metal Fabrication'
        },
        {
            id: 2,
            name: 'Neha',
            dept: 'Public Relations'
        }
    ],
    get employees() {
        let result = '';

        this._employees.forEach((emp, index) => {
            result += `${index + 1}. ID: ${emp.id}, Name: ${emp.name}, Dept: ${emp.dept}\n`;
        });

        return result;
    },
    set employees(value) {
        this._employees.push({
            id: this._employees.length + 1,
            name: value.name,
            dept: value.dept
            // or just this one line to handle all other properties
            // ...value
        })
    }
}


console.log(Company.employees) 
// 1. ID: 1, Name: Harry, Dept: Metal Fabrication
// 2. ID: 2, Name: Neha, Dept: Public Relations


// If somebody does this, then we should push the new employee item into the employees array
Company.employees = {
    name: 'Mika',
    dept: 'Operations'
}
console.log(Company.employees) 
// 1. ID: 1, Name: Harry, Dept: Metal Fabrication
// 2. ID: 2, Name: Neha, Dept: Public Relations
// 3. ID: 3, Name: Mika, Dept: Operations