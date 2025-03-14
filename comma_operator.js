// syntax var answer = (exp1, exp2, exp3, ex4, ...);
// Basic comma operator usage
let x = 1, y = 2, z = 3;
console.log(x, y, z); // 1 2 3

// The comma operator evaluates each expression and returns the last one
let result = (5, 10, 15, 20);
console.log(result); // 20

// Using comma in a for loop
for(let i = 0, j = 10; i < 5; i++, j--) {
  console.log(`i: ${i}, j: ${j}`);
}
// Output:
// i: 0, j: 10
// i: 1, j: 9
// i: 2, j: 8
// i: 3, j: 7
// i: 4, j: 6

// Using comma in a return statement (must use parentheses)
function multiOperation() {
  return (console.log("This runs first"), "This is returned");
}
console.log(multiOperation()); // This runs first
                              // This is returned

// Using comma to execute multiple operations in a ternary
const value = true ? (console.log("True case"), "truthy") : (console.log("False case"), "falsy");
console.log(value); // True case
                    // truthy