/***
 * Why closure ?
 * 
 * To prevent polluting global scope.
 * using closure we can conveniently restrict a variable within a function scope
 * without compromising any functionality.
 *
 * 
 */

// let clicks = 0;

// function AddClick() {
//     clicks += 1;
//     console.log(clicks);
// }

// AddClick();
// AddClick();



// Re-write the code using closure

function closure_func() {
    let clicks = 0;

    return function AddClick() {
        clicks += 1;
        console.log(clicks);
    }
}

const AddClickSafe = closure_func();


AddClickSafe();
AddClickSafe();