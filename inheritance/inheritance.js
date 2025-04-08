// The concept of inheritance in JavaScript allows the child class to inherit the properties 
// and methods of the parent class. 
// Inheritance is also a fundamental concept of object-oriented programming like encapsulation and polymorphism. 
// It allows for code reusability and a hierarchical class structure. 
// In JavaScript, inheritance is primarily achieved through the prototype chain,
//  where objects inherit properties and methods from their prototypes.
// In ES6, the `class` syntax was introduced, which provides a clearer and more concise way to create classes and handle inheritance.
//  The `extends` keyword is used to create a child class that inherits
//  from a parent class, and the `super` keyword is used to call the constructor of the parent class.

// syntax for inheritance in JavaScript fir a simgle class: 
// class ChildClass extends ParentClass {
// Child  class body.
//     }

// Example of multi-level inheritance in JavaScript using ES6 classes:
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }   

}
class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}
const dog = new Dog('Buddy');
dog.speak(); // Buddy barks.
const cat = new Cat('Whiskers');    
cat.speak(); // Whiskers meows.
// The `Dog` and `Cat` classes inherit from the `Animal` class.