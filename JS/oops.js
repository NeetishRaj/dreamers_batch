// Constructor  function
function Car(engine, model, year) {
    this.engine = engine;
    this.model = model;
    this.year = year;
}


// const car1 = {
//     engine: "800cc",
//     model: "Maruti 800",
//     year: 2006
// }

const car1 = new Car("800cc", "Maruti 800", 2006);

// const car2 = {
//     engine: "1.2L",
//     model: "Honda Jazz",
//     year: 2018
// }

const car2 = new Car("1.2L", "Honda Jazz", 2018);


console.log(car1);
console.log(car2);