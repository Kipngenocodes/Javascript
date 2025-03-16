// JavaScript provides break, label and continue statements.
// The break statement terminates the loop and transfers control to the statement following the loop.   
// The continue statement skips the current iteration of the loop and continues with the next iteration.  
  


// Example of break statement
for (let i = 0; i < 29; i++) {
    if (i === 14) {
        break; // Exit the loop when i is 5
    }
    console.log(i);
}
// Output: 0, 1, 2, 3, 4

// Example of continue statement
for (let i = 0; i < 100; i++) {
    if (i % 5 === 0) {
        continue; // Skip even numbers
    }
    console.log(i);
}

// Example of labelled statement

outerLoop:
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === 2 && j === 2) {
            break outerLoop; // Exit both loops when i and j are both 2
        }
        console.log(`i: ${i}, j: ${j}`);
    }
} // Output: i: 0, j: 0, i: 0, j: 1, i: 0, j: 2, i: 0, j: 3, i: 0, j: 4, i: 1, j: 0, i: 1, j: 1, i: 1, j: 2, i: 1, j: 3, i: 1, j: 4, i: 2, j: 0, i: 2, j: 1, i: 2, j: 2
// Output: i: 2, j: 0, i: 2, j: 1de lo