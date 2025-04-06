
/*Encapsulation in JavaScript is a way to keep the related properties and methods under a single namespace by bundling them.
It can be a function, a class or an object.
In JavaScript, the encapsulation can be implemented using closures, classes and getters and setters.
*/

// Ways to implement encapsulation in JavaScript
// 1. Using closures
// 2. Using classes
// 3. Using getters and setters
// 4. Using IIFE (Immediately Invoked Function Expression)

// Example of encapsulation using closures in JavaScript
//  function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            console.log(`Incremented count to: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Decremented count to: ${count}`);
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log("Initial count:", counter.getCount());

counter.increment();
counter.increment();
console.log("After two increments:", counter.getCount());

counter.decrement();
console.log("After one decrement:", counter.getCount());