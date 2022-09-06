/**
 * given this array
 * const arr = ['a', 'b', 'c', 'd']
 *
 * construct an object that looks like this using Array.reduce()
 * 
 *  const result = {
 *      '1': 'a',
 *      '2': 'b',
 *      '3': 'c',
 *      '4': 'd'
 *  }
 */


const arr = ['a', 'b', 'c', 'd'];

// const  result = {}
// result['1'] = arr[0];
// result['2'] = arr[1];
// result['3'] = arr[2];
// result['4'] = arr[3];

// for (let i = 0; i < arr.length; i++) {
//     result[i + 1] = arr[i];
// }


const result = arr.reduce((acc, item, index) => {
    acc[index + 1] = item;
    return acc;
}, {})

console.log(result)