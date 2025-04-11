// Deconstructing Assignment 
// Destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
// It is a JavaScript expression that allows unpacking values from arrays or properties from objects into distinct variables.
// It is a convenient way to extract values from arrays or properties from objects and assign them to variables in a single statement.

// array destructuring
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

// Nested array destructuring
const nestedArr = [1, [2, 3]];
const [x, [y, z]] = nestedArr;
console.log(x); // Output: 1
console.log(y); // Output: 2
console.log(z); // Output: 3    

// Object destructuring Assignment  
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name); // Output: 'John'
console.log(age); // Output: 30