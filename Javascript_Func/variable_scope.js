/*The variable scope in JavaScript determines to the 
accessibility and visibility of the variable in different part of the code. 
The scope of a variable is determined by where it is declared in the code. 
There are three types of variable scope in JavaScript:
1. Global Scope: A variable declared outside of any function or block has a global scope.
   It can be accessed from anywhere in the code, including inside functions and blocks.
2. Function Scope: A variable declared inside a function has a function scope.
   It can only be accessed within that function and is not visible outside of it.
3. Block Scope: A variable declared inside a block (e.g., inside curly braces {}) has a block scope.
   It can only be accessed within that block and is not visible outside of it.
4. local Scope: A variable declared inside a function or block has a local scope.   
   It can only be accessed within that function or block and is not visible outside of it. */   

// Javascript Block Scope
// Example
function myFunction() {
    var x = 10; // Function scope
    let y = 20; // Block scope
    const z = 30; // Block scope

    console.log(x); // 10
    console.log(y); // 20
    console.log(z); // 30
    console.log(<br/>);
    {
        var x = 100; // Same variable, different scope
        let y = 200; // New variable with block scope
        const z = 300; // New variable with block scope

        console.log(x); // 100
        console.log(y); // 200
        console.log(z); // 300
    }
// JavaScript variables defined using the 'let' and 'const' keyword inside a { } block can be accessible only inside the block in which they are defined.
console.log(<br/>);
    console.log(x); // 100 (function scope, same variable)
    console.log(y); // 20 (outer block scope)
    console.log(z); // 30 (outer block scope)
}

myFunction();