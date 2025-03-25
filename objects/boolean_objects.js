// JavaScript Boolean object represents two values, either "true" or "false".
// If value parameter is omitted or is 0, -0, null, false, NaN, undefined,
// or the empty string (""), the object has an initial value of false. In programming,
// the if-else statement evaluates either the code of the 'if' block or the 'else' block based
// on the boolean value of the conditional expression

/* Syntax for creating a boolean object: const val = new Boolean(value);*/
// Creating a boolean object
const val = new Boolean(true);
console.log(val); // Output: true

// Creating a boolean object with false value
const val1 = new Boolean(false);
console.log(val1); // Output: false 


// JavaScript Boolean() Function
console.log(Boolean(1));         // true
console.log(Boolean(0));         // false
console.log(Boolean("hello"));   // true
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean({}));        // true
console.log(Boolean([]));        // true
console.log(Boolean(NaN));       // false