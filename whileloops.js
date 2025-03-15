/* while (expression) {
   Statement(s) to be executed if expression is true
} */
// Basic while loop counting from 1 to 5
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
// Output: 1, 2, 3, 4, 5

// Sum numbers from 1 to 10
let sum = 0;
let num = 1;
while (num <= 10) {
    sum += num;
    num++;
}
console.log("Sum:", sum); // Output: Sum: 55

// Infinite loop with a break condition
let counter = 0;
while (true) {
    counter++;
    console.log("Iteration:", counter);
    
    if (counter >= 3) {
        console.log("Breaking the loop");
        break;
    }
}
// Output: 
// Iteration: 1
// Iteration: 2
// Iteration: 3
// Breaking the loop