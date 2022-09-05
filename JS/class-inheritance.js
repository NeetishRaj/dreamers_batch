class Car {
    constructor(wheels) {
        this.steering = 1;
        this.wheels = wheels;
    }

    honk() {
        console.log("Beep Beep!");
    }
}

// const c1 = new Car(4);
// console.log(c1);



class Honda extends Car{
    constructor(wheels) {
        super(wheels);
    }

    engine() {
        console.log("Engine ivtec");
    }
}

const h1 = new Honda(4);
console.log(h1);
h1.engine();


class Maruti extends Car  {
    constructor(wheels) {
        super(wheels);
    }

    service() {
        console.log("cheaper service");
    }
}

const m1 = new Maruti(4);
console.log(m1);
m1.service();