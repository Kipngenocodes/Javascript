// Synchrous JavaScript
// Synchronous JavaScript is a programming model where code is executed line by line
// and executed one at a time in the same order as it appears in the source code.

// Example of synchronous JavaScript
console.log("Start");
console.log("Hello, World!");
console.log("End");

// In this example, the code is executed in the order it appears.
// The output will be:
// Start
// Hello, World!    
// End

// Functions in JavaScript are also executed synchronously by default.
// When a function is called, the program waits for it to finish executing before moving on to the next line of code.
// Example of synchronous function execution
function myFunction() {
    console.log("Function started");
    console.log("Function finished");   

}
myFunction(); // Call the function