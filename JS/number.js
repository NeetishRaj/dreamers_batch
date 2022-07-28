//Number type




//ways to create number type

const num1 = 45;
console.log(num1); //45

const num2 = NaN;
console.log(num2); //NaN


const num3 = Infinity;
console.log(num3); //Infinity

const num4 = Number(45);
console.log(num4); //45


const num5 = parseInt('75') // 75
console.log(num5); //75

const num6 = 6.789394893;
console.log(num6);  //6.789394893


const num7 = (3 + 5) * (67 / 32);
console.log(num7);  //16.75



// Detecting a number type


console.log(typeof num1 === 'number');  //true

// to test for invalid numbers i.e NaN
console.log(Number.isNaN(num2)) //true
 





// Usecases of Number type

for(let i = 0; i < 10; i++) {
    console.log(i + ". hello world");
}


