// Microtasks in JS are small functions that are executed after the completion of thhe function or program code that create them and it the JS execution stack is is empty.
// They are used to perform operations that need to be done after the current code has finished executing
// Microtasks are executed before any macrotasks, such as setImmediate() and setTimeout().
//  Microtasks are used to implement features such as promises.

/*JavaScript runs the code based on the event loop. The event loop is responsible for executing the code, processing it, 
collecting the event data, and executing the sub-tasks. The event loop is a single-threaded loop that runs continuously, checking for tasks to execute. 
The event loop is responsible for executing the code, processing it, collecting the event data, and executing the sub-tasks.
The event loop is a single-threaded loop that runs continuously, checking for tasks to execute. */  

// Microtasks are executed before any macrotasks, such as setImmediate() and setTimeout()..
// Microtasks is a s shorter functions that is produced by promise, or asynchronous function and consume later.
// list of microtasks are Promise Callbacks, MutationObserver callbacks, and queueMicrotask() callbacks.

/*Whatever callback function you pass as an argument of the then(), catch(), 
or finally() method while consuming the promise code it gets added into the microtask queue. */

// Example demonstrating microtasks vs macrotasks execution order
function demoMicrotaskExecution() {
        // Synchronous code: Executes immediately
        console.log('Start');
    
        // Macrotask: Scheduled in the macrotask queue (executes after microtasks)
        setTimeout(() => {
        console.log('Timeout 1 - Macrotask');
        }, 0);
    
        // Microtask: Scheduled in the microtask queue (executes before macrotasks)
        Promise.resolve().then(() => {
        console.log('Promise 1 - Microtask');
        // Nested microtask: Scheduled during microtask execution
        Promise.resolve().then(() => {
            console.log('Promise 2 - Nested Microtask');
        });
        });
    
        // Microtask: Another microtask via queueMicrotask
        queueMicrotask(() => {
        console.log('QueueMicrotask 1 - Microtask');
        });
    
        // Synchronous code: Executes immediately
        console.log('End');
}
  // Run the function
    demoMicrotaskExecution();

// Macrotasks
// The Macrotasks are also a short function that gets executed after the execution of all code, which is inside the call stack and microtask queue.
// Javascript  run-time engine adds the macrotasks into the macrotask queue and executes them after the completion of all microtasks.
// The macrotasks are executed after the completion of all microtasks and the call stack is empty.
// Macrotasks include setTimeout(), setInterval(), and I/O operations.

// Example demonstrating the execution order of macrotasks
function demoMacrotaskExecution() {
        // Synchronous code: Executes immediately
        console.log('Start');

        // Macrotask: Scheduled in the macrotask queue (executes after microtasks)
        setTimeout(() => {
        console.log('Timeout 1 - Macrotask');
        }, 0);

        // Macrotask: Another macrotask via setTimeout
        setTimeout(() => {
        console.log('Timeout 2 - Macrotask');
        }, 0);

        // Synchronous code: Executes immediately
        console.log('End');
}
// Run the function
demoMacrotaskExecution();