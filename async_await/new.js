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