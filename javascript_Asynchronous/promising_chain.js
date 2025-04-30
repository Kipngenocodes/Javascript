// promise chaining in JavaScript can handle multiple asynchronous operations in a more readable way.
// It allows you to chain multiple .then() methods together, where each .then() method returns a new promise.
// This makes it easier to handle multiple asynchronous operations in a more readable way.

/*In JavaScript, we can produce the promise code using the Promise() constructor and consume using the then() method.
The then() method returns a new promise.
It handles the single asynchronous operation. 
To handle the multiple asynchronous operations we can use the promise chaining.
*/
// example of promise chaining
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The first promise has resolved");
        resolve(10);
    }, 1 * 1000);
});
p1.then((result) => {
    console.log(`p1 resulted ${result}`);
    // return another promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is the second promise result");
        }, 2 * 1000);
    });
}).then((result) => {
    console.log(`p2 resulted ${result}`);
});

// JavaScript Promise Chaining
// In JavaScript, promise chaining is a technique that allows you to chain multiple asynchronous operations together using promises.
// It enables you to handle the results of each operation in a sequential manner, making your code more readable and maintainable.
// The then() method is used to chain promises together, where each then() method returns a new promise.
// This makes it easier to handle multiple asynchronous operations in a more readable way.
// example of promise chaining
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The first promise has resolved");
        resolve(10);
    }, 1 * 1000);
});
promise1.then((result) => {
    console.log(`p1 resulted ${result}`);
    // return another promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is the second promise result");
        }, 2 * 1000);
    });
}).then((result) => {
    console.log(`p2 resulted ${result}`);
}); 

// Error Handling with Promise Chaining

// When handling errors in promise chaining, you can use the catch() method to catch any errors that occur during the execution of the promises.
// The catch() method is used to handle errors that occur during the execution of the promises in the promise chain.
// example of promise chaining with error handling
let promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The first promise has resolved");
        resolve(10);
    }, 1 * 1000);
});
promise5.then((result) => {
    console.log(`p1 resulted ${result}`);
    // return another promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is the second promise result");
        }, 2 * 1000);
    });
}).then((result) => {
    console.log(`p2 resulted ${result}`);
}).catch((error) => {
    console.error("Error occurred:", error);
});