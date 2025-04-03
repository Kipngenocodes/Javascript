// An object constructor in JavaScript is a function that creates an instance of a class, which is typically called an object.
/*A constructor is called when you declare an object using the new keyword.
The purpose of a constructor is to create an object and set values if there are any object properties present.
The constructor is defined using the function keyword and is typically named with an uppercase letter.*/

/*
syntax for object constructor: 
function Funcname(p1, p2, ... , pN) {
    this.prop1 = p1;
}
const obj = new Funcname(args);
*/

// Creating an object using a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// Creating an instance of the Person object using the new keyword
const person1 = new Person("John", 30); 
console.log(person1.name); // Output: John
console.log(person1.age); // Output: 30
console.log(person1); // Output: Person { name: 'John', age: 30 }
console.log(typeof person1); // Output: object

// JavaScript Object Prototypes
// An object prototype is a blueprint for creating objects in JavaScript.
// It allows you to define properties and methods that can be shared across multiple objects.
// The prototype is defined using the prototype keyword.
// The prototype is used to create objects and set values if there are any object properties present.
// syntax for object prototype: obj.prototype.name = value;

// Example of using object prototypes in JavaScript
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);  
}
// Creating an instance of the Person object using the new keyword
const person2 = new Person("Alice", 25);
person2.greet(); // Output: Hello, my name is Alice and I am 25 years old.      