// Passing undefined Argument to a function


// Example 1: Function with default parameters\n
function multiplyNumbers(a, b = 1) {
    return a * b;
}   

// multiplyNumbers() will return 1 (1 * 1)
var product = multiplyNumbers(5, undefined);
console.log(product); // Output: 5
var product = multiplyNumbers(5, null);
console.log(product); // Output: 5

// Function expression as a default parameter

function getnumber() {
    return 675;
}
function calculateArea(width = 14, height = getnumber()) {
    return width * height;
}
var area = calculateArea(); // area will be 14 * 675 = 9450
console.log(area); // Output: 9450
var area = calculateArea(10);   // area will be 10 * 675 = 6750
console.log(area); // Output: 6750