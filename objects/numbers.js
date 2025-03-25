// The JavaScript Number object represents numerical data as floating-point numbers. 
// It contains different properties (constants) and methods for working on numbers.
// A JavaScript number is always stored as a floating-point value (decimal number)
/* syntax for creating a number object:
        const val = new Number(number);*/

// Number Properties 
// MAX_VALUE: The largest possible number in JavaScript.
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
// MIN_VALUE: The smallest possible number in JavaScript.
console.log(Number.MIN_VALUE);  
// Output: 5e-324
// POSITIVE_INFINITY: Represents positive infinity.
console.log(Number.POSITIVE_INFINITY); // Output: Infinity
// NEGATIVE_INFINITY: Represents negative infinity.
console.log(Number.NEGATIVE_INFINITY);
// Output: -Infinity
// NaN: Represents a value that is not a number.
console.log(Number.NaN); // Output: NaN
// Epshilon: Represents the difference between 1 and the smallest floating-point number greater than 1.
console.log(Number.EPSILON); // Output: 2.220446049250313e-16


// Number Methods
// isFinite(): Determines whether the passed value is a finite number.
console.log(Number.isFinite(123)); // Output: true
console.log(Number.isFinite(Infinity)); // Output: false
// isInteger(): Determines whether the passed value is an integer.
console.log(Number.isInteger(123)); // Output: true
console.log(Number.isInteger(123.45)); // Output: false
// toExponential(): Returns a string representing the number in exponential notation.
console.log((123.456).toExponential()); // Output: 1.23456e+2
// toFixed(): Returns a string representing the number with a specified number of decimal places.
console.log((123.456).toFixed(2)); // Output: 123.46
// toLocaleString(): Returns a string representing the number in the current locale's number format.
console.log((123.456).toLocaleString()); // Output: 123.456
// toPrecision(): Returns a string representing the number with a specified number of significant digits.
console.log((123.456).toPrecision(2)); // Output: 1.2e+2  

// JavaScript Number() Function
// The Number() function converts a value to a number.
console.log(Number("123")); // Output: 123
console.log(Number("123.45")); // Output: 123.45    
console.log(Number(true)); // Output: 1 
console.log(Number(false)); // Output: 0    