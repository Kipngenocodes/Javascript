// The Concept od promise chaining in Javascript allows you to do multiple related asynchronous operations with single promise object.
//  It is a way to handle multiple asynchronous operations in a more readable and maintainable way.
// Syntax of promise chaining is to return the promise object from the then() method and call the next then() method on it.
/* promise
.then((result) => {
    Handle the result of the previous operation
    return anotherPromise;
})
.then((result) => {
    Handle the result of the previous operation
    return anotherPromise;
})
.catch((error) => {
    Handle any errors that occurred in the chain
}); */   
