/* The global variables in JavaScript are the variables that are defined outside of the function or any particular block.
They are accessible from anywhere in JavaScript code. 
All scripts and functions can access the global variables.
*/

// Global variable
let message = "Hello, World!";

console.log("Initial value:", message); // Access globally

function changeMessage() {
    message = "Hi, Universe!"; // Modify globally
    console.log("Inside function:", message);
}

changeMessage();
console.log("After function:", message); // Still accessible and modified