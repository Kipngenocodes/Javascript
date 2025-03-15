/* syntax / if (expression) {
   Statement(s) to be executed if expression is true
} else {
   Statement(s) to be executed if expression is false
}*/


// Example with numbers
let number = 10;
if (number > 0) {
  console.log("The number is positive.");
}else{
    console.log("The number is negative or zero.");
}

// Example with strings
let name = "John";
if (name === "John") {
  console.log("Hello, John!");
}else{
    console.log("Hello, stranger!");
}       // Output: Hello, John!

// Example with arrays
let fruits = ["apple", "banana", "orange"];

if (fruits.length > 0) {
  console.log("The array is not empty.");
}else {
    console.log("The array is empty.");
}

// Example with objects\
let person = {
    name: "Alice",
    age: 25
    };
    
if (person.age > 0) {
    console.log("Alice is older than 0 years old.");
}else {
    console.log("Alice is not older than 0 years old.");
} // Output: Alice is older than 0 years old.

// Example with booleans
let isRaining = true;
if (isRaining) {
    console.log("It's raining.");
}else {
    console.log("It's not raining.");
} // Output: It's raining.

// Example with null and undefined
let value = null;
if (value !== null) {
    console.log("The value is not null.");
}else {
    console.log("The value is null.");
} // Output: The value is null.

// Example with NaN (Not a Number)
let result = NaN;
if (!isNaN(result)) {
    console.log("The result is a number.");
}else {
    console.log("The result is not a number.");
} // Output: The result is not a number.

// Example with undefined
let x;

if (typeof x !== "undefined") { // Check if x is defined
    console.log("x is defined.");
}else {
    console.log("x is undefined.");
} // Output: x is undefined.

/*if (expression 1) {
    Statement(s) to be executed if expression 1 is true
 } else if (expression 2) {
    Statement(s) to be executed if expression 2 is true
 } else if (expression 3) {
    Statement(s) to be executed if expression 3 is true
 } else {
    Statement(s) to be executed if no expression is true
 } */

// Example with multiple conditions
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
}else if (score >= 80) {
    console.log("Grade: B");
}else if (score >= 70) {
    console.log("Grade: C");
}else {
    console.log("Grade: F");
} // Output: Grade: B.

// Example with nested if-else statements
let age = 25;

if (age >= 18) {
    if (age >= 65) {
        console.log("You are a senior citizen.");
    }else {
        console.log("You are an adult.");
    }
}else {
    console.log("You are a child.");
} // Output: You are an adult.