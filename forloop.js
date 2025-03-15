
/* syntax:
for (initialization; condition; iteration) {
    // Statement(s) to be executed if condition is true
}*/
// Basic for loop counting from 0 to 4
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0, 1, 2, 3, 4

// Counting down from 5 to 1
for (let i = 5; i > 0; i--) {
    console.log(i);
}
// Output: 5, 4, 3, 2, 1

// Skipping values with increment
for (let i = 0; i < 10; i += 2) {
    console.log(i);
}
// Output: 0, 2, 4, 6, 8

// Nested for loops (creating a small multiplication table)
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} × ${j} = ${i * j}`);
    }
}