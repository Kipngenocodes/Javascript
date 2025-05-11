    // Step 1: Define the findSum function that takes p1, p2, and a callback
function findSum(p1, p2, callback) {
        // Step 2: Validate p1 and p2
        if (typeof p1 !== 'number' || typeof p2 !== 'number' || isNaN(p1) || isNaN(p2)) {
        return callback(new Error('Invalid input: p1 and p2 must be valid numbers'));
        }
    
        // Step 3: Calculate sum and call callback with result and message
        const sum = p1 + p2;
        callback(null, { sum, message: `Sum of ${p1} and ${p2} is ${sum}` });
    }
    
    // Step 4: Define the promisifyFunc to convert callback-based functions to Promise-based
function promisifyFunc(func) {
        // Step 5: Return a function that returns a Promise
        return function (...args) {
        // Step 6: Create a Promise that resolves or rejects based on callback
        return new Promise((resolve, reject) => {
            // Define the callback function for the original function
            function callbackFunc(err, result) {
            if (err) {
                return reject(err); // Reject if there's an error
            }
            resolve(result); // Resolve with the result
            }
    
            // Step 7: Add callback to args and call the original function
            args.push(callbackFunc);
            func.call(null, ...args);
        });
        };
    }
    
    // Step 8: Promisify the findSum function
    const getSumPromise = promisifyFunc(findSum);
    
    // Step 9: Use the promisified function with .then() and .catch()
    // Example 1: Valid inputs
    getSumPromise(5, 10)
        .then((result) => {
        console.log('Success:', result); // Expected: { sum: 15, message: 'Sum of 5 and 10 is 15' }
        })
        .catch((error) => {
        console.error('Error:', error.message);
        });
    
    // Example 2: Invalid inputs
    getSumPromise('invalid', 10)
        .then((result) => {
        console.log('Success:', result);
        })
        .catch((error) => {
        console.error('Error:', error.message); // Expected: 'Invalid input: p1 and p2 must be valid numbers'
        });