/*The polymorphism in JavaScript allows you to define multiple methods 
with the same name and different functionalities. Polymorphism is achieved
by using method overloading and overriding. JavaScript does not support method overloading natively.
Method overriding allows a subclass or child class to redefine a method of superclass or parent class.*/

// Example of Polymorphism in JavaScript 
class Shape {
    area(a, b) {
        return "The area of each Geometry is different! <br>";
    }
}

class Circle extends Shape {
    area(r) { // Overriding the method of the Shape class
       return "The area of Circle is " + (3.14 * r * r) ;
    }
}

class Rectangle extends Shape {
    area(l, b) { // Overriding the method of the Shape class
       return "The area of Rectangle is " + (l * b) ;
    }
}

const circle = new Circle();
const rectangle = new Rectangle();
const shape = new Shape();
console.log(shape.area());
console.log(circle.area(5)); // Calling the method of Circle class

console.log(rectangle.area(5, 10)); // Calling the method of Rectangle class

// Parent Class Method's Functionality Extension in Child Class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a noise.`;
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} barks.`; // Overriding the speak method of Animal class
    }

}
// Creating an instance of Dog class
const dog = new Dog('Rover');
console.log(dog.speak()); // Output: Rover barks.