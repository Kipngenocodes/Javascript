
function demonstrateConst() {
    // const declaration
    const PI = 3.14159;
    console.log("PI value:", PI);

    const user = {
        name: "Alice",
        age: 30
    };
    console.log("Original user:", user);
    user.age = 31; // Allowed: modifying object property
    console.log("Modified user:", user);
    // user = { name: "Bob" }; // This would throw TypeError
    const numbers = [1, 2, 3];
    console.log("Original array:", numbers);
    numbers.push(4); // Allowed: modifying array contents
    console.log("Modified array:", numbers);
    // numbers = [5, 6, 7]; // This would throw TypeError
    if (true) {
        const message = "Hello from block";
        console.log("Inside block:", message);
    }
    // console.log(message); // This would throw ReferenceError: message is not defined
    const initialized = "I must have a value";
    console.log("Initialized const:", initialized);
}

demonstrateConst();