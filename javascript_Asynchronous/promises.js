// A JavaScript promise is an object that represents the completion or failure of an asynchronous operation.
// It employs callback functions to manage asynchronous operations, offering a easier syntax for handling such operations more easily.
/*A promise object can created using the Promise() constructor. The promise constructor takes a callback function as an argument.
The callback function accepts two functions, resolve() and reject(), as arguments. 
The resolve function is called if the promise returns successfully. The reject function is called when taks fails and returns the reason.
*/

// Syntax for creating a promise object
// const promise = new Promise((resolve, reject) => {
    // Perform asynchronous operations
   // Call resolve() if successful
 // Call reject() if failed   
// });

// Let promise = new Promise(Callback);

// Example 1 of a simple promise
// Example of a simple promise for checking if a number is even
function isEvenPromise(num) {
    return new Promise((resolve, reject) => {
        if (typeof num !== 'number') {
            reject('Input must be a number');
        }
        if (num % 2 === 0) {
            resolve(`${num} is even`);
    
        } else {
            reject(`${num} is odd`);  
        }
    });
}
// Example of using the promise
isEvenPromise(4)
    .then(result => console.log(result)) // Output: 4 is even
    .catch(error => console.error(error)); // Output: Input must be a number
// Example of using the promise with an odd number
isEvenPromise(5)
    .then(result => console.log(result)) // Output: 5 is odd    
    .catch(error => console.error(error)); // Output: Input must be a number    

isEvenPromise("hello")
    .then(result => console.log(result)) // Output: 4 is even
    .catch(error => console.error(error)); // Output: Input must be a number
// Example of using the promise with an odd number
isEvenPromise(5)




