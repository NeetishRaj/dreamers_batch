
const obj = {
    num: 10,
    print: function() {
        console.log(this.num);
    }
}

obj.print(); // 10




var num = 30;
// window.num = 30

const obj2 = {
    num: 10,
    print: () => {
        console.log(this.num);
    }
}

obj2.print(); //30