// Promisification in JavaScript is a concept to convert the 
// callback functions into a regular function, returning the promise.

// The reason to convert the callback functions into promises is
//  that when you need to write the nested callback functions, 
// it increases the complexity of the code. So, you can write a function returning the promise.

// Promisification is a process of converting a callback function into a promise.

// 1. Callback function
function callbackFunction(name, callback) {
    console.log("Hi" + " " + name);
    callback();
}

function callbackFunction2() {
    console.log("I am a callback function");
}

callbackFunction("Peter", callbackFunction2);

// 2. Promisification
function callbackFunction(name) {
    console.log("Hi" + " " + name);
    return new Promise((resolve, reject) => {
    resolve();
    });
}

function callbackFunction2() {
    console.log("I am a callback function");
}

callbackFunction("Peter").then(callbackFunction2);
