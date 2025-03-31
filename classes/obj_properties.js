/*An object property in JavaScript is a key: value pair, where key is a string and value can be anything. 
The key in key: value pair is also called property name. 
So the properties are association between key (or name) and value.
The properties are used to store data in an object.

Syntax for defining object properties:
objectName.propertyName = value;
objectName["propertyName"] = value; // using square brackets
objectName[expression] = value; // using expressions

*/
// Example of defining object properties

const person = {
    name: "John",
    age: 30,
    city: "New York"
};  

console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York
console.log(person["name"]);    // Output: John
console.log(person["age"]);     // Output: 30
console.log(person["city"]);    // Output: New York

// Accessing object properties using expressions
const propertyName = "name";
console.log(person[propertyName]); //       
console.log(person.name); //     Output: John
console.log(person.age);    
// Output: 30

// Modifying object properties
person.name = "Jane";   
person.age = 25;

console.log(person.name); // Output: Jane
console.log(person.age); // Output: 25

// Adding new properties to an object   

person.gender = "Female";
console.log(person.gender); // Output: Female

// Removing properties from an object
person.age = undefined; // setting age to undefined

console.log(person.age); // Output: undefined   