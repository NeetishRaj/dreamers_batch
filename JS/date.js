// Date

// UTC  time
const date = new Date();

console.log(date);



// Milliseconds ellapsed

const Milliseconds = Date.now()
console.log(Milliseconds);


// Get the time 27 hours 30 mins from now.

const ms_to_add = (27 * 60 + 30) * 60 * 1000;
const final_time = Date.now() + ms_to_add;

console.log(final_time);
console.log(new Date(final_time));