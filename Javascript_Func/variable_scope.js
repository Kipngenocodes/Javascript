// scope_demo.js

/* Variable Scope in JavaScript:
   1. Global Scope: Variables declared outside any function or block.
      Accessible everywhere in the code.
   2. Function Scope: Variables declared with 'var' inside a function.
      Accessible only within that function.
   3. Block Scope: Variables declared with 'let' or 'const' inside a block (e.g., { }).
      Accessible only within that block.
*/

// Global scope variable
var globalVar = "I'm global!";
let globalLet = "I'm also global!";
const globalConst = "Global constant!";

function myFunction() {
    // Function scope variable
    var x = 10; // 'var' has function scope
    let y = 20; // 'let' has block scope, but here it's function-level
    const z = 30; // 'const' has block scope, but here it's function-level

    console.log("Inside function, before block:");
    console.log("x (function scope):", x); // 10
    console.log("y (outer block scope):", y); // 20
    console.log("z (outer block scope):", z); // 30
    console.log("---");

    // Block scope
    {
        var x = 100; // Redeclares the same 'var' variable (function scope)
        let y = 200; // New variable, block scope
        const z = 300; // New variable, block scope

        console.log("Inside block:");
        console.log("x (function scope, reassigned):", x); // 100
        console.log("y (inner block scope):", y); // 200
        console.log("z (inner block scope):", z); // 300
    }

    console.log("---");
    console.log("Inside function, after block:");
    console.log("x (function scope):", x); // 100 (changed by block)
    console.log("y (outer block scope):", y); // 20 (inner y is separate)
    console.log("z (outer block scope):", z); // 30 (inner z is separate)
}

// Call the function
myFunction();

console.log("---");
console.log("Outside function (global scope):");
console.log("globalVar:", globalVar); // "I'm global!"
console.log("globalLet:", globalLet); // "I'm also global!"
console.log("globalConst:", globalConst); // "Global constant!"
// console.log(x); // ReferenceError: x is not defined (function scope)
// console.log(y); // ReferenceError: y is not defined (block/function scope)
// console.log(z); // ReferenceError: z is not defined (block/function scope)clear
