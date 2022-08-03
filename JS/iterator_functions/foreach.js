//for each


const arr = ['a', 'b', 'c', 'd', 'e'];


console.log('Using For Loop');

for (let i = 0; i < arr.length; i++) {
    console.log(i + ". " + arr[i]+ " arr: " + arr);
}


console.log('\nUsing ForEach Loop');


arr.forEach((item, index, arr) => {
    console.log(index + ". " + item + " arr: " + arr);
})