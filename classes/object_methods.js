/*JavaScript object methods are object properties that contains function definitions.
An object is a collection of properties,
and a property is an association between a name (or key) and a value. A property's value can be a function; 
in that case the property is known as a method.
The syntax is: objectName.methodName()
*/

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName + " " + this.id;
    }
};

console.log(person.fullName());

// Updating or Adding a Method to the Object
person.fullName = function() {
    return this.firstName + " " + this.lastName + " " + this.id + " updated";   

}

console.log(person.fullName());

// Deleting a Method from the Object
delete person.fullName;
console.log(person.fullName); // Output: undefined
console.log(person.firstName); // Output: John      

// Example of a method that accepts parameters
const person = {
    name: "John",   
    age: 30,
    city: "New York",
    country: "USA",
    country_of_birth: "India",
    greet: function (name) {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I live in ${this.city}, ${this.country}. I was born in ${this.country_of_birth}.`);
    }   
}

person.greet("Alice"); // Output: Hello, my name is John and I am 30 years old. I live in New York, USA. I was born in India.

// Example of a method that returns a new object