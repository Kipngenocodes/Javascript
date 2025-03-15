/*The for...in loop in JavaScript is used to loop through an object's properties.
The JavaScript for...in loop is a variant of the for loop. 
The for loop can't be used to traverse through the object properties. 
So, the for...in loop is introduced to traverse through all object properties. */
/* syntax: for (variable in object) {
Statement(s) to be executed for
 each property in the object}  
*/

// Example with an object
const person = {
    name: "John",
    age: 30,
    city: "New York",
    email: "john@example.com",
    phone: "123-456-7890",
    address: "123 Main Street",
    occupation: "Software Engineer",
    hobbies: ["reading", "painting", "coding"],
    isMarried: false,
    children: null,
    salary: 50000,
    nationality: "American",
    education: "Bachelor's Degree",
    graduationYear: 2020
};

for (let property in person) {
    console.log(property + ": " + person[property]);
}


// example with an array
const colors = ["red", "green", "blue", "yellow"];

for (let color in colors) {
    console.log(color + ": " + colors[color]);
}

// example with a null value
const emptyObject = null;
for (let property in emptyObject) {
    console.log(property + ": " + emptyObject[property]);
}

// example with a non-object value
const number = 42;  
    for (let property in number) {
        console.log(property + ": " + number[property]);
    } // Output: undefined

// example with a string value
 const text = "Hello";
    for (key in text) {
        console.log(property + ": " + text[property]);
    } // Output: undefined