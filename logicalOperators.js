"use strict"; // Enabling strict mode

// Function to demonstrate logical operators
function demonstrateLogicalOperators() {
    // Test variables
    const age = 25;
    const income = 120000;
    const isVerified = true;

    // 1. Logical AND (&&)
    // True if both conditions are true
    const canJoinPremium = age >= 18 && income > 100000;
    console.log(`Age: ${age}, Income: $${income}`);
    console.log(`Can join premium (age >= 18 && income > 100000): ${canJoinPremium}`);

    // 2. Logical OR (||)
    // True if at least one condition is true
    const canLogin = age >= 18 || isVerified;
    console.log(`Age: ${age}, Verified: ${isVerified}`);
    console.log(`Can login (age >= 18 || verified): ${canLogin}`);

    // 3. Logical NOT (!)
    // Inverts the boolean value
    const isNotVerified = !isVerified;
    console.log(`Is verified: ${isVerified}`);
    console.log(`Is NOT verified: ${isNotVerified}`);

    // Combining operators
    const isEligible = (age >= 18 && income > 50000) || isVerified;
    console.log(`\nCombined Example:`);
    console.log(`Eligible (age >= 18 && income > 50000) || verified: ${isEligible}`);

    // Practical example: Dating site eligibility (from your project)
    console.log(`\nDating Site Example:`);
    const user = {
        age: 30,
        income: 150000,
        race: "White",
        verified: true
    };
    const isRichWhiteOrAfrican = (user.race === "White" && user.income > 100000) || user.race === "African";
    const canJoin = user.age >= 18 && isRichWhiteOrAfrican && user.verified;
    console.log(`User - Age: ${user.age}, Income: $${user.income}, Race: ${user.race}, Verified: ${user.verified}`);
    console.log(`Can join site: ${canJoin}`);
}

// Run the function
demonstrateLogicalOperators();