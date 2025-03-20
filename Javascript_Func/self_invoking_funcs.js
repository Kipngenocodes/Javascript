// working with the self invoking function

/* syntax: 
(function () {
    function body
})();
*/

// Example 1: Self-invoking function to add two numbers
(function () {
    var a = 10;
    var b = 20;
    var sum = a + b;
    console.log(sum);
})();

// Example 2: Self-invoking function to create a private variable
(function () {
    var privateVar = "I am private";
    console.log(privateVar);
})();

// Example 3: Self-invoking function to create a module
var module = (function () {
    var privateVar = "I am private";
    function privateFunction() {
        console.log("I am private function");
    }
    return {
        publicVar: "I am public",
        publicFunction: function () {
            console.log("I am public function");
        }
    };
})();

console.log(module.publicVar);
module.publicFunction(); 

// Self-Invoking Functions with Parameters
(function (name) {
    console.log("Hello, " + name + "!");
})("John"); // Output: Hello, John!
console.log("End of self invoking function"); // Output: End of self invoking function