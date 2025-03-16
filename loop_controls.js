// JavaScript provides break and continue statements.
// The break statement terminates the loop and transfers control to the statement following the loop.   
// The continue statement skips the current iteration of the loop and continues with the next iteration.    //


// Example of break statement
for (let i = 0; i < 29; i++) {
    if (i === 14) {
        break; // Exit the loop when i is 5
    }
    console.log(i);
}
// Output: 0, 1, 2, 3, 4