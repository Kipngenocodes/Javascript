// The JavaScript classes are a blueprint or template for object creation. 
// They encapsulate the data and functions to manipulate that data.
//  We can create the object using classes. 
// Creating an object from a class is referred to as instantiating the class. 

// An example of creating classes 
function Car(brand){
    this.brand = brand;
}
// Creating an object from the Car class/ instantiation of the class
// The constructor function is used to create an object from the class.
const carObj = new Car("BMW");

console.log(carObj.brand); // Output: BMW


// Definition of classes in Javascript 
// Classes are defined using the class keyword.
// The class keyword defines a new class.
// A class is a template for creating objects.
// Classes are used to create objects that have common properties and methods.  
/*syntax : 
class ClassName {
    constructor() {
        // constructor code
    }
    method1() {
        // method code
    }
    method2() {
        // method code
    }
}
*/
// Example of class definition
class CarFunction {
    constructor(brand) {
        this.brand = brand;
    }
    getBrand() {
        return this.brand;
    }
}

// Creating an object from the Car class/ instantiation of the class
// The constructor function is used to create an object from the class.
const carObj1 = new CarFunction("Porsche");
const carObj2 = new CarFunction("BMW");

console.log(carObj1.getBrand()); // Output: Porsche
console.log(carObj2.getBrand()); // Output: BMW


// Creating class objects without arguments
class Person {
    constructor() {
        this.name = "John";
        this.age = 30;
    }
}

// Creating an object from the Person class/instantiation of the class
const personObj = new Person();

console.log(personObj.name); // Output: John
console.log(personObj.age); // Output: 30   years old

// Creating class objects with arguments
class PersonWithArgs {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.city = "New York"; 
        this.country = "USA";
        this.country_of_birth = "India";
        // Adding a method to the class
        // The method is a function that is defined inside the class.
        // The method is used to perform some action on the object.
        // The method is defined using the function keyword.
        // The method is defined inside the class.
        this.greet = function () {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I live in ${this.city}, ${this.country}. I was born in ${this.country_of_birth}.`);
        };
    }
}

// Creating an object from the PersonWithArgs class/instantiation of the class
const personObjWithArgs = new PersonWithArgs("John", 30);

console.log(personObjWithArgs.name); // Output: John
console.log(personObjWithArgs.age); // Output: 30   years old
console.log(personObjWithArgs.city); // Output: New York
console.log(personObjWithArgs.country); // Output: USA
console.log(personObjWithArgs.country_of_birth); // Output: India   
personObjWithArgs.greet(); // Output: Hello, my name is John and I am 30 years old. I live in New York, USA. I was born in India.


// Strict Mode in JavaScript classes 