//The JavaScript conditional (ternary) operator is only operator that takes three operands
//  – a condition followed by a question mark (?).

/*
    Syntax:
    condition ? value1 : value2;

    If the condition is true, the value1 is returned.
    If the condition is false, the value2 is returned.
*/

var condition = true;
var result = condition ? "Condition is true" : "Condition is false";
console.log(result); // Output: Condition is true

var condition = false;
var result = condition ? "Condition is true" : "Condition is false";
console.log(result); // Output: Condition is fa lse 

// Example with numbers
var a = 5;
var b = 10;
var max = (a > b) ? a : b;
console.log(max); // Output: 10
// Example with strings
var name = "John";
var greeting = (name === "John") ? "Hello, John!" : "Hello, stranger!";
console.log(greeting); // Output: Hello, John!

// Example with functions

function compareNumbers(a, b) {
    return (a > b) ? a : b;
}

var num1 = 5;
var num2 = 10;
var max = compareNumbers(num1, num2);
console.log(max); // Output: 10


// Example with objects
var person = {
    name: "John",
    age: 30
};

var message = (person.age > 25) ? "Person is over 25 years old" : "Person is not over 25 years old";
console.log(message);

// Example with arrays
var numbers = [1, 2, 3, 4, 5];
var max = (numbers[0] > numbers[1]) ? numbers[0] : numbers[1];
console.log(max); // Output: 2  

// Example with null and undefined
var value = null;
var message = (value !== undefined) ? "Value is defined" : "Value is undefined";
console.log(message); // Output: Value is undefined