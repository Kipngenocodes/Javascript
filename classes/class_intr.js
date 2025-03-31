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