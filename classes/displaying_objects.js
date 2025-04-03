// Displaying Objects in JavaScript
// This code demonstrates how to display objects in JavaScript using different methods.
// It includes examples of using console.log, JSON.stringify, and custom display methods in classes.
// The code also covers the use of static methods and inheritance in classes.

console.log("Displaying Objects in JavaScript");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Custom display method
    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    // Custom display method for Student
    display() {
        super.display(); // Call the parent class's display method
        console.log(`Student ID: ${this.studentId}`);
    }   
}   

const person = new Person("John", 30);
person.display(); // Output: Name: John, Age: 30`   
console.log(JSON.stringify(person)); // Output: {"name":"John","age":30}
console.log(person); // Output: Person { name: 'John', age: 30 }
console.log(person.toString()); // Output: [object Object]

const student = new Student("Alice", 25, "12345");
student.display(); // Output: Name: Alice, Age: 25
console.log(JSON.stringify(student)); // Output: {"name":"Alice","age":25,"studentId":"12345"}
console.log(student); // Output: Student { name: 'Alice', age: 25, studentId: '12345' }
console.log(student.toString()); // Output: [object Object]

// Using the Object.enteries() Method
const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);
console.log("Object.entries(obj):", entries); // Output: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
console.log("Object.entries(obj).map(([key, value]) => `${key}: ${value}`):", entries.map(([key, value]) => `${key}: ${value}`)); // Output: [ 'a: 1', 'b: 2', 'c: 3' ]`    
