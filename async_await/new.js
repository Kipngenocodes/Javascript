// The  javascript functions defined with the async keyword are called async functions.
// Async functions are functions that return a promise object.
// The promise's syntax is a bit complex, so  the async/await syntax is introduced.
// syntax of async function
// async function function_name() {
//     function body    
// }
// An Example  of async function
async function simpleAsyncExample() {
    return "This is an async function";
}

simpleAsyncExample().then((result) => {
    console.log(result); // Output: This is an async function

})
// The await keyword is used inside an async function to wait for a promise to resolve or reject.
// The await keyword can only be used inside an async function.
// The await keyword waits for a promise to settle and returns the resolved value or rejects the reason.
// Example of the await keyword
async function awaitExample() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved");
        }, 2000);
    });

    const result = await promise; // Wait for the promise to resolve
    console.log(result); // Output: Promise resolved
}

awaitExample(); // Call the async function to see the output

// Approach 1: Using .then() and .catch() for error handling
async function gettingData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
      return data; // Return data for use in .then()
    } catch (error) {
      throw error; // Re-throw error for .catch()
    }
    }

gettingData()
    .then((data) => {
        console.log("Data fetched successfully:", data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error.message);
    });

  // Approach 2: Using try...catch within async function
async function tryCatchExample() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data fetched successfully (try...catch):", data);
    } catch (error) {
        console.error("Error fetching data (try...catch):", error.message);
    }
    }

  // Execute the try...catch example
tryCatchExample();


// JavaScript Await Keyword
/* async function func_name(parameters) {
    await promise;
    Function body
}
*/
// Example of async function with await
async function asyncAwaitExample() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Didn't we have a great time?"); // Resolve the promise after 2 seconds
        }, 2000);
    });

    const result = await promise; // Wait for the promise to resolve
    console.log(result); // Output: Promise resolved
}

asyncAwaitExample(); // Call the async function to see the output