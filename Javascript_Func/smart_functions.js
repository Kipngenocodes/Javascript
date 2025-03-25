// The concept of smart functions is to avoid using global variables as much as possible.
// This is because global variables can be modified by any part of the code, making it difficult to track changes.
// Instead, it is recommended to use local variables within functions and pass them as parameters to other functions.
// The concept of smart function parameters in JavaScript is a way to make a function adaptable to different use cases.
//  It allows the function to handle the different kinds of arguments passed to it while invoking it.

// Default function parameters
function greet(name = "World") {
    console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, World!

function addition (a= 89, b= 90) {
    return a + b;
}

console.log(addition()); // Output: 179