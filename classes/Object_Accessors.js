// The object accessor properties in JavaScript are methods that get or set the value of an object. 
// They are defined using the get and set keywords. Accessor properties are a powerful way to control how your objects are accessed and modified.

/*
The JavaScript object can have two kinds of properties.

Data properties

Accessor properties

Data properties: const obj = {
    key: "value", // Data property
}
*/
// In JavaScript, you can use the getters to get the object properties and setters to set the object properties.
// The getters and setters are defined using the get and set keywords.
// The getters and setters are a powerful way to control how your objects are accessed and modified.    

// JavaScript Getters and Setters
/*get methodName() {
    // Method body
}
obj.methodName; */

// Example of using getters and setters in JavaScript
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    // Getter method to get the full name
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    // Getter method to get the language
    get lang() {
        return this.language;
    },
    // Setter method to set the language
    set lang(lang) {
        this.language = lang;
    }
};    
console.log(person.fullName); // Output: John Doe
console.log(person.lang); // Output: en 
console.log(person.language); // Output: en
console.log(person.lang = "fr"); // Output: fr  
console.log(person.language); // Output: fr
console.log(person.lang); // Output: fr