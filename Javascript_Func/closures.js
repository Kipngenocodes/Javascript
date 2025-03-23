/* The concept of closures in JavaScript allows nested functions to access variables 
defined in the scope of the parent function, even if the execution of the parent function is finished. 
In short, you can make global variables local or private using the closures. */

// example function


// Outer function that creates a closure
function createCounter() {
    let count = 0; // Private variable in the closure

    // Inner function with access to 'count'
    function increment() {
        count++; // Modifies the outer variable
        return count;
    }

    return increment; // Return the inner function
}

// Create a counter instance
const myCounter = createCounter();

// Test the closure
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3

// Show that 'count' is private
console.log(typeof count); // undefined (not accessible outside)