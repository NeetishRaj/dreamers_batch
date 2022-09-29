// Bubble sort

const arr = [5, 4, 3, 2, 1];


function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function bubble_sort() {
    for (let j = 0; j < arr.length - 1; j++) { 
        for (let i = 0; i < arr.length - i; i++) {
            // console.log(`Pairs: ${arr[i]}, ${arr[i + 1]}`);
    
            if(arr[i] > arr[i + 1])
                swap(arr, i, i + 1);
    
            console.log(arr);

        }
        console.log("*************");
    }
}

console.log(arr);
bubble_sort();
// console.log(arr);

