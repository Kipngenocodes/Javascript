// working of callback function with setTimeout
// setTimeout is a built-in JavaScript function that executes a callback function after a specified delay (in milliseconds).
// It is commonly used to simulate asynchronous behavior in JavaScript. 
// It is a way to perform non-blocking operations in JavaScript.
// It allows you to execute a function after a specified delay without blocking the execution of other code.
// This is particularly useful in scenarios where you want to delay the execution of a function or create a timer-based effect.

// Example 1: Basic setTimeout with callback
function delayedGreeting() {
    setTimeout(() => {
        console.log("Hello after 2 seconds!");
    }, 2000);
}