function func1() {
    console.log('Called func1');
    func2();
}


function func2() {
    console.log('Called func2');
    func3();
}


function func3() {
    console.log('Called func3');

    console.log(a);
    let a = 10;
}


func1();



// CALLSTACK is the order of function calls


// CAllSTACK for this code
func3()
func2()
func1()