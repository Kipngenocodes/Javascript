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