/**
 * Create a constructor function (i.e class) called Ball
 * with following properties.
 * 
 * id
 * color
 * diameter
 * 
 * 
 * then use this constructor function to create 100 ball
 * objects with id ranging from 1tp 100
 * 
 */


function Ball(id, color, diameter) {
    this.id = id;
    this.color = color;
    this.diameter = diameter;
}


// Logic to create 100 ball objects
const balls = []
for (let i = 1; i < 100; i++) {
    let nb = new Ball(i, 'red', 8);
    balls.push(nb);
}


// Print all the 100 ball objects.
balls.forEach((ball) => {
    console.log(ball);
});

