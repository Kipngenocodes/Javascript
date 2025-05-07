// The promise is an object that represent the completion or failure of an asynchronous operations.
// The promise object is used to handle asynchronous operations in JavaScript.
// Can be created using the Promise constructor or by using the async/await syntax.
// The promise object has three states: pending, fulfilled, and rejected.
// The promise object has two methods: then() and catch().  
// The callback function accepts two functions, resolve() and reject(), as arguments. 
// The resolve function is called if the promise returns successfully. 
// The reject function is called when taks fails and returns the reason.

/*syntax for the javascript promise object
let promise = new Promise(callback);
let promise = new Promise((resolve, reject) => {
    code to be executed
);
 */
//  The purpose of resolve is to return the value of the promise when it is fulfilled.
//  The purpose of reject is to return the reason for the promise failure.
// States of the promise object 
// 1. pending: The initial state of the promise object. The promise is neither fulfilled nor rejected.
// 2. fulfilled: The promise is successfully completed. The promise is resolved.
// 3. rejected: The promise is failed. The promise is rejected.
// 4. settled: The promise is either fulfilled or rejected. The promise is no longer pending.

// Example of the promise object
const numbers = [1, 2, 3, 4, 5];

const numberPromise = new Promise((resolve, reject) => {
    if (numbers.length > 0) {
        resolve(numbers); // Resolve with the numbers array
    } else {
        reject(new Error("No numbers found")); // Reject with an Error object
    }
});

// Using async/await for cleaner promise handling
async function processNumbers() {
    try {
        const result = await numberPromise;
        console.log("Numbers:", result); // Output: Numbers: [1, 2, 3, 4, 5]
    } catch (error) {
        console.error("Error:", error.message); // Output: Error: No numbers found
    }
}

// Execute the async function
processNumbers();