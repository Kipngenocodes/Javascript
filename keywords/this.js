/*In JavaScript, the 'this' keyword contains the reference to the object. 
It represents the context of the function or current code. It is used to access the properties and methods of the current object.
It can be used in different contexts, such as in global scope, inside a function, or as part of an object method.
When this keyword is used inside a function, the this will refer to the object that the function is called with.
If the function is called as a method of an object, 'this' refers to that object.
If the function is called in the global scope, 'this' refers to the global object (window in browsers, global in Node.js).
In JavaScript, functions are also objects. So, you can use the 'this' keyword with functions also. 


some example  case:
The 'this' keyword refers to the window object in the global scope.
When you use the 'this' keyword inside the function, it also represents the 'window' object.
The 'this' keyword refers to an undefined in the strict mode in the function.
The 'this' keyword refers to the object when you use it in the object method.
In the event handler, the 'this' keyword refers to the element on which the event is executed.
The 'this' keyword in methods like call(), apply(), and bind() can refer to different objects.

synax: this.property
or this.method() */

// Setting 'this' in the global scope
global.global_var = "I am a global variable";
function showThis() {
    console.log(this.global_var); // Explicitly use global
}
showThis.call(global); // Output: I am a global variable


// JavaScript 'this' in a Function

global.global_var1 = "I am a global variable";
function showThisInFunction() {
    var local_var = "I am a local variable";
    console.log(this.global_var1); // In non-strict mode, this refers to the global object
    console.log(local_var); // This will work as local_var is defined in the function scope
    }
showThisInFunction(); // Output: I am a global variable
// In strict mode, this will throw an error

// this in restricted mode
'use strict';
var global_var2 = "I am a global variable";
function showThisInStrictMode() {
    console.log(this.global_var2); // In strict mode, this is undefined
}
showThisInStrictMode();


// 'this' in a Constructor Function
function Location(city, country) {
    this.city = city;
    this.country = country;
    this.showLocation = function() {
        console.log(`City: ${this.city}, Country: ${this.country}`);
    };
}
// Creating an instance of the Location class
var loc = new Location("New York", "USA");
loc.showLocation(); // Output: City: New York, Country: USA


// "this" in an Object Method
var person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
person.greet(); // Output: Hello, my name is John and I am 30 years old

// "this" in arrow functions
