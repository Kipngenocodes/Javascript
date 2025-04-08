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

// multi-level inheritance example:
class car {
    constructor(name) {
        this.name = name;
    }

    drive() {
        console.log(`${this.name} is driving.`);
    }
}

class sedan extends car {
    constructor(name, model) {
        super(name); // Call the constructor of the parent class
        this.model = model;
    }

    drive() {
        console.log(`${this.name} ${this.model} is driving.`);
    }
}

class SUV extends sedan {
    constructor(name, model, offroadCapability) {
        super(name, model); // Call the constructor of the parent class
        this.offroadCapability = offroadCapability;
    }

    drive() {
        console.log(`${this.name} ${this.model} is driving with ${this.offroadCapability} capability.`);
    }   
}
const myCar = new SUV('Toyota', 'RAV4', 'excellent');
myCar.drive(); // Output: Toyota RAV4 is driving with excellent capability. 
// The `SUV` class inherits from the `sedan` class, which in turn inherits from the `car` class.

// Example of hierarchical inheritance in JavaScript using ES6 classes:
class Shape {
    constructor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color); // Call the constructor of the parent class
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color); // Call the constructor of the parent class
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
const rectangle = new Rectangle('red', 5, 10);
console.log(`Rectangle color: ${rectangle.getColor()}`); // Rectangle color: red
console.log(`Rectangle area: ${rectangle.getArea()}`); // Rectangle area: 50
const circle = new Circle('blue', 3);
console.log(`Circle color: ${circle.getColor()}`); // Circle color: blue
console.log(`Circle area: ${circle.getArea()}`); // Circle area: 28.274333882308138 