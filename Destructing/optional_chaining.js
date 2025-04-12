/*The optional chaining in JavaScript allows you to access nested properties and
methods of an object without checking if each property exists.
This can help to make your code more concise and easier to read.

The optional chaining operator (?.) is sued to achieve optional chaining in JavaScript.
It is placed before the property or method that you want to access.
If the property or method does not exist,
the expression will evaluate to undefined instead of throwing an error.
*/

// /*syntax for optional chaining:
// object?.property
// object?.method()
// Obj?.prop1?.nestedprop; // Accessing nested properties
//Obj?.[expression]; // Accessing object property via expression
//Array?.[index]; // Accessing array element
//funcName?.(); // Executing the funciton 
// */

// Example 1: Accessing Nested Properties
const user = {
    name: 'John',
    address: {
    city: 'New York',
    state: 'NY'
    }
};
const city = user.address?.city;
console.log(city); // Output: New York
// If the property does not exist, it will return undefined
// Example 2: Accessing Methods
const person = {
    name: 'John',
    greet: function() {
    console.log('Hello, my name is ' + this.name);
    }
};
person.greet?.(); // Output: Hello, my name is John 
// If the method does not exist, it will not throw an error
// Example 3: Accessing Array Elements
const arr = [1, 2, 3];
const firstElement = arr[0];
console.log(firstElement); // Output: 1
// If the array does not exist, it will return undefined    
// Example 4: Accessing Object Properties via Expression
const obj = {
    name: 'John',
    age: 30
};
const name = obj?.name;
console.log(name); // Output: John