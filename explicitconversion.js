//When you use the string values containing the digits with the arithmetic operators except for the '+' operator,
// JavaScript it converts operands to numbers automatically and performs the arithmetic operation
let a = '100' / 50; // Converts '100' to 100
 let b = '100' - '50'; // Converts '100' and '50' to 100 and 50
let c = '100' * true; // Converts true to 1
let d = '100' - false; // Converts false to 0
let e = 'tp' / 50 // converts 'tp' to NaN

// output the results
console.log(a); // 2    
console.log(b); // 50
console.log(c); // 100
console.log(d); // 100

// output NaN (Not a Number) for the third and fourth cases
console.log(e); // NaN
