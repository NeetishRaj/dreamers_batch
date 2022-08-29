/**
 * Write a JS code to handle the property not found exception
 */


const obj = {
    name: 'John',
    age: 29,
    address: {
        street: '26 Avenue',
        area: 'almina'
    }
}


 try {
     console.log(obj.adress.area);
     
 } catch (error) {
    console.log("There was an error: " + error.message);
 }


 obj.address.area = 'bhandu';
 console.log(obj.address.area);


