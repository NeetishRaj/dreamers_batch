const arr = [1, 3, 5, 7]


// Task1: Find if all the items are odd inside arr array
// Tip: use Array.every()

const is_all_odd = arr.every((item, index, arr) => {
    return item % 2 !==  0;
})


console.log(is_all_odd);  // false