/*
The function hoisting in JavaScript is a default
behavior in which function declarations are
moved at the top of their local scope before execution of the code.
This means that you can call a function before it's declared.
*/

// Example of function hoisting

console.log(myFunction()); // Output: Hello, World!

function myFunction() {
    return "Hello, World!";
}


// Example of using a function before it's declared

console.log(add (10, 20)); // Output: 30

function add(a, b) {
    return a + b;
}

console.log(add (11, 20));