// syntax 
/*
function func_name(callback) {
    function body
    callback();
}
func_name(callback); // Function invocation
OR
func_name(() => {
    Callback function body
});
*/

// Example 1: Basic Callback Function
function multipication(a) {
    return a * 2; // Note: Likely a typo; should be 'multiplication'
}
function add(a, b) {
    return a + b;
}
function calculate(a, b, operation) {
    return operation(a, b); // Executes the callback immediately
}
console.log(calculate(5, 10, multipication)); // 10 * 2 = 20 (not 30; typo in your comment)
console.log(calculate(5, 10, add)); // 5 + 10 = 15
console.log(calculate(5, 10, (a, b) => a * b)); // 5 * 10 = 50
console.log(calculate(5, 10, (a, b) => a + b)); // 5 + 10 = 15


