// The Function () constructor

/*
The JavaScript Function() constructor can dynamically create a function object at the run time. 
The functions created using Function() constructor have global scope only.
The Function() constructor is a built-in JavaScript constructor that creates a new function object.
 Use Function() constructor with caution as it can lead to vulnerabilities in the code.

Syntax: new Function([arg1[, arg2[, ...argN]],] functionBody)
*/

// example function
var add = new Function("a", "b", "return a + b;");
console.log(add(5, 10)); // Output: 15

// example of function with default argument
var add = new Function("a", "b", "if (b === undefined) { b = 0; } return a + b;");
console.log(add(5)); // Output: 5 (5 + 0)

// example of function with multiple arguments
var add = new Function("a", "b", "c", "return a + b + c;");
console.log(add(5, 10, 15)); // Output: 30

