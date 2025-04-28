/*
The JavaScript functions defined with the async/await keyword 
can perform the same task as promises with fewer lines of code, and it makes the code readable. 
The promise's syntax is a bit complex, so the async/await syntax is introduced.
The async/await syntax makes it easier to write asynchronous code in JavaScript.
*/

// To use async/await, we need to define an async function first. 
// For this we write async before function definition. An async function returns a promise. 
// The await keyword is used inside an async function only.
// The await keyword makes JavaScript wait for the promise to resolve before continuing the function.

// The JavaScript Async Keyword
// The async function allows you to produce asynchronous code.
// The await keyword is used to wait for a promise to resolve.

/*
It always returns the promise.
If you don't return the promise manually and return the data, string, number, etc., 
it creates a new promise and resolves that promise with the returned value.     
The async function always returns a promise.
If the function returns a value, the promise will be resolved with that value.  
If the function throws an error, the promise will be rejected with that error.
*/

// Syntax for creating an async function
// async function functionName() {  
//    // Perform asynchronous operations
//    // Call resolve() if successful
//    // Call reject() if failed   
// }

// Example of an async function that returns a promise
async function isEvenPromise(num) {
    return new Promise((resolve, reject) => {
        if (typeof num !== 'number') {
            reject('Input must be a number');
        }
        else if (num % 2 === 0) {
            resolve(`${num} is even`);
        } else {
            reject(`${num} is odd`);  
        }
    });
}

// Example of using the async function with an even number
async function testEvenNumber() {
    try {
        const result = await isEvenPromise(4);
        console.log(result); // Output: 4 is even
    } catch (error) {
        console.error(error);
    }
}

// Example of using the async function with an odd number
async function testOddNumber() {
    try {
        const result = await isEvenPromise(5);
        console.log(result); 
    } catch (error) {
        console.error(error); // Output: 5 is odd
    }
}

// Example of using the async function with an invalid input
async function testInvalidInput() {
    try {
        const result = await isEvenPromise("hello");
        console.log(result);
    } catch (error) {
        console.error(error); // Output: Input must be a number
    }
}

// Call the async functions to see the results
testEvenNumber();
testOddNumber();
testInvalidInput();