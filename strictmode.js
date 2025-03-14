"use strict"; // Enable strict mode at the top of the file

// Function to demonstrate strict mode behavior
function demonstrateStrictMode() {
    // 1. Prevents undeclared variables
    try {
        undeclaredVar = 10; // Without strict mode, this creates a global variable
    } catch (e) {
        console.log("Error: Cannot assign to undeclared variable");
        console.log(e.message);
    }

    // 2. Disallows duplicate parameter names
    // This would throw an error in strict mode
    // function duplicateParams(a, a) { return a + a; }

    // 3. Makes assignment to read-only properties fail
    const obj = {};
    Object.defineProperty(obj, "readOnly", {
        value: 42,
        writable: false
    });
    try {
        obj.readOnly = 100; // Fails in strict mode
    } catch (e) {
        console.log("Error: Cannot modify read-only property");
        console.log(e.message);
    }

    // 4. Variables must be declared before use
    let x = 5;
    console.log("Declared variable x:", x);

    // 5. 'this' is undefined in functions (not global object)
    function checkThis() {
        console.log("Value of 'this' in strict mode:", this);
    }
    checkThis();

    // Practical example with strict mode
    const user = {
        name: "John",
        age: 30
    };
    console.log("User profile:\nName: " + user.name + "\nAge: " + user.age);
}

// Run the function
demonstrateStrictMode();