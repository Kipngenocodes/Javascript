let str1 = "Hello World!"; // Using double quotes
let str2 = 'Hello World!'; // Using single quotes
let str3 = `Hello World!`; // Using backticks
console.log(str1);
console.log(str2);

console.log("\n")
//working with numbers 
let num1 = 10; // Integer
let num2 = 3.14;
console.log(num1);
console.log(num2);
console.log("\n")
//working with booleans
let bool1 = true;
let bool2 = false;
console.log(bool1);
console.log(bool2);

console.log("\n")
//working with null and undefined
let nullValue = null;
let undefinedValue;
console.log(nullValue);
console.log(undefinedValue);
console.log("\n")
//working with arrays
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);
console.log(arr.length);
arr.push(6);
console.log("\n")
//working with objects
let obj = {
    name: "John",
    age: 30
};

console.log(obj);
console.log(obj.name);
console.log("\n")
//working with functions
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice"));
console.log(greet("Bob"));

console.log("\n")
// working with regex
let regex = /ab+c/;

console.log(regex.test("abc")); // true
console.log(regex.test("ac")); // false
console.log(regex.test("abbbbc")); // true
console.log(regex.test("a")); // false

// working with template literals
let name = "Alice";
let age = 25;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Hello, my name is Alice and I am 25 years old.    

// date and time
let now = new Date();
console.log(now);

// checking the datatype of a variable
console.log(typeof str1); // string
console.log(typeof num1); // number
console.log(typeof bool1); // boolean   

