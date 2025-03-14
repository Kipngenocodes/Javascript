"use strict"; // Enabling strict mode

// Function to demonstrate bitwise operators
function demonstrateBitwiseOperators() {
    // Test variables (in decimal and binary for clarity)
    const a = 5;  // Binary: 0101
    const b = 3;  // Binary: 0011

    // 1. Bitwise AND (&)
    const andResult = a & b; // 0101 & 0011 = 0001 (1)
    console.log(`${a} & ${b} = ${andResult} (Binary: ${a.toString(2)} & ${b.toString(2)} = ${andResult.toString(2)})`);

    // 2. Bitwise OR (|)
    const orResult = a | b; // 0101 | 0011 = 0111 (7)
    console.log(`${a} | ${b} = ${orResult} (Binary: ${a.toString(2)} | ${b.toString(2)} = ${orResult.toString(2)})`);

    // 3. Bitwise XOR (^)
    const xorResult = a ^ b; // 0101 ^ 0011 = 0110 (6)
    console.log(`${a} ^ ${b} = ${xorResult} (Binary: ${a.toString(2)} ^ ${b.toString(2)} = ${xorResult.toString(2)})`);

    // 4. Bitwise NOT (~)
    const notResult = ~a; // ~0101 = 1010 (inverts bits, -6 due to 32-bit signed int)
    console.log(`~${a} = ${notResult} (Binary: ~${a.toString(2)} = ${notResult.toString(2)})`);

    // 5. Left Shift (<<)
    const leftShift = a << 1; // 0101 << 1 = 1010 (10)
    console.log(`${a} << 1 = ${leftShift} (Binary: ${a.toString(2)} << 1 = ${leftShift.toString(2)})`);

    // 6. Right Shift (>>)
    const rightShift = a >> 1; // 0101 >> 1 = 0010 (2)
    console.log(`${a} >> 1 = ${rightShift} (Binary: ${a.toString(2)} >> 1 = ${rightShift.toString(2)})`);

    // 7. Zero-fill Right Shift (>>>)
    const zeroFillShift = -5 >>> 1; // -5 (11111011) >>> 1 = 2147483645 (positive due to zero-fill)
    console.log(`-5 >>> 1 = ${zeroFillShift} (Binary: ${(-5).toString(2)} >>> 1 = ${zeroFillShift.toString(2)})`);

    // Practical example: User permissions (flags) for dating site
    console.log("\nDating Site Permissions Example:");
    const PERM_READ = 1;    // 0001
    const PERM_WRITE = 2;  // 0010
    const PERM_ADMIN = 4;  // 0100
    let userPerms = PERM_READ | PERM_WRITE; // 0011 (3)
    console.log(`User permissions: ${userPerms} (Binary: ${userPerms.toString(2)})`);
    console.log(`Can read? ${Boolean(userPerms & PERM_READ)}`);
    console.log(`Can write? ${Boolean(userPerms & PERM_WRITE)}`);
    console.log(`Is admin? ${Boolean(userPerms & PERM_ADMIN)}`);
}

// Run the function
demonstrateBitwiseOperators();