// Basic function expression
const greet = function() {
    return "Hello world";
  };
  
  // Arrow function expression (ES6)
  const multiply = (a, b) => a * b;
  
  // Named function expression
  const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n-1);
  };
  
  // Immediately Invoked Function Expression (IIFE)
  (function() {
    console.log("I run immediately!");
  })();
  
  // Function expression as a callback
  [1, 2, 3].map(function(num) {
    return num * 2;
  });