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

