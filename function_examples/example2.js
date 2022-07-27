/**
 * 
 * Write a function to calculate BMI
 * 
 * BMI = Weight in Kilos / (Height in metres)
 *        
 * Input: Weight = 100, Height = 2 
 * Output: 25
 *
 */

function calculate_BMI(weight, height) {
    const bmi = weight / (height * height);

    return bmi.toFixed(2);
}

console.log(calculate_BMI(100, 2));

console.log(calculate_BMI(92, 1.82));