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