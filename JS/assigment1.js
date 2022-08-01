/**
 * Create a program to create an array to store tables of 5
 * [5, 10, 15, ,,,,,50]
 * 
 * Also print all the values of the table array
 */


function table_of_5() {

    const table = [];
    
    for(let i = 0; i < 10; i++) {
        
        table[i] = (i + 1) * 5; 
    }

    console.log(table.length);  // 10
     console.log(table);
}

table_of_5();