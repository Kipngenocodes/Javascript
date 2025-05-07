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

// Error Handling with Javascript Async/Await
async function fetchData() {
    const url = "https://jsonplaceholder.typicode.com/posts/1"; // Valid public API URL
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
        const data = await response.json();
        console.log("Data fetched successfully from", url, ":", data);
    } catch (error) {
            console.error("Error fetching data from", url, ":", error.message);
        if (error.name === "TypeError") {
            console.error("Possible network issue or invalid URL.");
        }
    }
    finally {
        console.log("Fetch attempt completed.");
    }
}
  // Call the async function to execute

    fetchData();


// Example of async function with javascript async Class methods
/*async method_name() {
    return await promise;
}*/

// Example of async class method
class AsyncExample {
    async fetchData() {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data fetched from async class method");
            }, 2000);
        });

        const result = await promise; // Wait for the promise to resolve
        console.log(result); // Output: Data fetched from async class method
    }
}
// Create an instance of the class and call the async method
const asyncExample = new AsyncExample();    
asyncExample.fetchData(); // Call the async method to see the output