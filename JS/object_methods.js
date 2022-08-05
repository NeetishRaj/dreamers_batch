const obj = {
    name: "john",
    age: 23,
    city: "Agra"
}


console.log(Object.keys(obj)) //["name", "age", "city"]

console.log(Object.values(obj)) //["john", 23, "Agra"]

console.log(Object.entries(obj)) //[["name", "john"], [], []]



const is_city_prop = obj.hasOwnProperty('city') // true

console.log(is_city_prop); // true