// JavaScript timing events are used to execute the code after a specified time only once or multiple times.
// JavaScript setTimeout() method is used to execute a function after a specified number of milliseconds.
// setTimeout() method is used to execute a function after a specified number of milliseconds.  
// The setTimeout() method is used to execute a function after a specified number of milliseconds.
// ClearTimeout() method is used to cancel the execution of a function that has been scheduled using setTimeout() method.
// the Clearinterval() method is used to cancel the execution of a function that has been scheduled using setInterval() method.

// Example of setTimeout() method
function greet() {
    console.log("Hello, World!");
}

setTimeout(greet, 3000); // Executes greet() after 3 seconds (3000 milliseconds)

// Example of setTimeout() with parameters
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}
setTimeout(greetUser, 2000, "John");


// Example of setTimeout() with promise
function greetUserWithPromise(name) { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello, ${name}!`);
        }, 2000);
    });
} 

greetUserWithPromise("John").then((message) => {
    console.log(message);
});

// ClearTimeout() method example
let timeoutId = setTimeout(() => {
    console.log("This will not be executed.");
}, 5000);

clearTimeout(timeoutId); // Cancels the timeout before it executes
console.log("Timeout cleared.");