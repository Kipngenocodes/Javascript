/*Encapsulation in JavaScript is a way to keep the related properties and methods under a single namespace by bundling them.
It can be a function, a class or an object.
In JavaScript, the encapsulation can be implemented using closures, classes and getters and setters.
*/

// Ways to implement encapsulation in JavaScript
// 1. Using closures
// 2. Using classes
// 3. Using getters and setters
// 4. Using IIFE (Immediately Invoked Function Expression)

// Example of encapsulation using closures
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            console.log(`Count incremented to: ${count}`);
        },
        decrement: function() {
            count--; // This is the line you specifically wanted to include
            console.log(`Count decremented to: ${count}`);
        },
        getCount: function() {
            return count;
        }
    };
}

// Create a counter instance
const counter = createCounter();

// Show initial state
console.log("Initial count:", counter.getCount());

// Demonstrate increment
counter.increment();
counter.increment();
console.log("After two increments:", counter.getCount());

// Demonstrate decrement
counter.decrement();
console.log("After one decrement:", counter.getCount());

// Show that direct access to count is not possible
console.log("Trying to access count directly:", counter.count); // Will show undefined