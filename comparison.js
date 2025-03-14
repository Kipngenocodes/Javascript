"use strict"; // Enabling strict mode

// Function to demonstrate comparison operators
function demonstrateComparison() {
    // Test variables
    const num1 = 10;
    const num2 = "10"; // String for type comparison
    const num3 = 5;

    // 1. Loose Equality (==)
    console.log(`${num1} == ${num2}: ${num1 == num2}`); // Compares value, not type

    // 2. Strict Equality (===)
    console.log(`${num1} === ${num2}: ${num1 === num2}`); // Compares value AND type

    // 3. Loose Inequality (!=)
    console.log(`${num1} != ${num3}: ${num1 != num3}`); // Value comparison

    // 4. Strict Inequality (!==)
    console.log(`${num1} !== ${num2}: ${num1 !== num2}`); // Value and type comparison

    // 5. Greater Than (>)
    console.log(`${num1} > ${num3}: ${num1 > num3}`);

    // 6. Less Than (<)
    console.log(`${num3} < ${num1}: ${num3 < num1}`);

    // 7. Greater Than or Equal To (>=)
    console.log(`${num1} >= ${num1}: ${num1 >= num1}`); // Equal case
    console.log(`${num1} >= ${num3}: ${num1 >= num3}`); // Greater case

    // 8. Less Than or Equal To (<=)
    console.log(`${num3} <= ${num1}: ${num3 <= num1}`);
    console.log(`${num1} <= ${num1}: ${num1 <= num1}`); // Equal case

    // Practical example: Dating site age verification
    console.log("\nDating Site Example:");
    const userAge = 25;
    const minAge = 18;
    const maxAge = 35;
    const isEligible = userAge >= minAge && userAge <= maxAge;
    console.log(`User Age: ${userAge}`);
    console.log(`Eligible (18-35): ${isEligible}`);
}

// Run the function
demonstrateComparison();