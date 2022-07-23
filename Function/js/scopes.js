console.log("Scopes in JS");

// Anything declared globally will be accessible everywhere
let global_var = "gv";
const PI = 3.141;

console.log(global_var); // gv


function func() {
    // This is a function scope
    
    let func_var = 'fv';
    console.log(func_var); //fv

    console.log(global_var); // gv

    function nested_func() {
        let nested_func_var = 'nfv';
        console.log(func_var); //fv
    }

    nested_func();




    {
        // Anything other than functions having curly braces becomse a block scope.
        console.log(global_var); // gv
        
        let block_var = 'bv';
        var v_block_var = 'vbv';

        console.log(block_var); //bv
    }

    console.log(v_block_var); // vbv
    // console.log(block_var); //bv Incorrect
}

func();

// console.log(func_var); //fv







// Global Vs function scope problem
let sum = 0;
function f1() {
}

function f2() {
    let sum = 0;
}



// var does not follow block scope

function run_loops() {

    for(var i = 0; i < 5; i++) {
	// for(let i = 0; i < 5; i++) {
		console.log(i);
	}
	
	console.log(i);

}

run_loops();

