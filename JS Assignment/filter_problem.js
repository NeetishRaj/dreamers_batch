/**
 * Given the data array of students filter the ones with project experience
 */

const Students = [
    {id: 1, age: 25, projectExperience: 'no'},
    {id: 2, age: 24, projectExperience: 'no'},
    {id: 3, age: 24, projectExperience: 'yes'},
    {id: 4, age: 26, projectExperience: 'yes'},
    {id: 5, age: 22, projectExperience: 'no'},
    {id: 6, age: 21, projectExperience: 'yes'},
    {id: 7, age: 22, projectExperience: ''},
]

const output = Students.filter(function(item) {
    return item.projectExperience === 'yes';
});

console.log(output);