/*Microtasks in JavaScript are small functions that are 
executed after the completion of the function or program code that creates them 
and if the JavaScript execution stack is empty. Microtasks are executed before any macrotasks, 
such as setImmediate() and setTimeout(). 
Microtasks are used to implement features such as promises.
*/

//a microtask is a shorter function that is produced by the promise, 
// or asynchronous function, and consumed later.
// Microtasks are executed after the current script has finished executing, 
// and before any macrotasks, such as setTimeout() or setImmediate().
// This means that microtasks can be used to perform tasks that need to be done immediately after the current script,
// but before any other tasks are executed.

// Microtasks are typically used to implement features such as promises, async/await, and mutation observers.
// They are also used to implement the Promise.resolve() and Promise.reject() methods, 
// which are used to create resolved and rejected promises.

// Example of a microtask
Promise.resolve().then(() => {
    console.log('Microtask executed');
});
console.log('Script finished');

// Example of a microtask with a promise
new Promise((resolve, reject) => {
    console.log('Promise created');
    resolve();
}).then(() => {
    console.log('Microtask executed after promise');
});
console.log('Script finished');