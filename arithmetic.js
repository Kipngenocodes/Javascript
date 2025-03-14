"use strict"; // Using strict mode as per your previous request

// Function to demonstrate arithmetic operators
function demonstrateArithmetic() {
    // Basic variables
    const a = 10;
    const b = 3;

    // 1. Addition (+)
    const sum = a + b;
    console.log(`${a} + ${b} = ${sum}`);

    // 2. Subtraction (-)
    const difference = a - b;
    console.log(`${a} - ${b} = ${difference}`);

    // 3. Multiplication (*)
    const product = a * b;
    console.log(`${a} * ${b} = ${product}`);

    // 4. Division (/)
    const quotient = a / b;
    console.log(`${a} / ${b} = ${quotient}`);

    // 5. Modulus (%)
    const remainder = a % b;
    console.log(`${a} % ${b} = ${remainder}`);

    // 6. Exponentiation (**)
    const power = a ** b;
    console.log(`${a} ** ${b} = ${power}`);

    // 7. Increment (++)
    let counter = 5;
    console.log("Before increment:", counter);
    counter++; // Post-increment
    console.log("After increment:", counter);

    // 8. Decrement (--)
    let countDown = 5;
    console.log("Before decrement:", countDown);
    countDown--; // Post-decrement
    console.log("After decrement:", countDown);

    // Practical example: Calculate profit from your trading strategy
    const stockPrice = 50;
    const strikePrice = 55;
    const premium = 2;
    const profit = (strikePrice - stockPrice + premium) * 100; // Covered Call profit
    console.log(`\nTrading Example (Covered Call):`);
    console.log(`Stock: $${stockPrice}, Strike: $${strikePrice}, Premium: $${premium}`);
    console.log(`Profit: $${profit}`);
}

// Run the function
demonstrateArithmetic();