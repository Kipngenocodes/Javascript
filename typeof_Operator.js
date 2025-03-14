/**
 * JavaScript typeof Operator Examples
 * 
 * The typeof operator returns a string indicating the type of the unevaluated operand.
 */

// ===== Basic Types =====

// Numbers
console.log("typeof 42:", typeof 42);                  // "number"
console.log("typeof 3.14:", typeof 3.14);              // "number"
console.log("typeof NaN:", typeof NaN);                // "number" (special case, but still considered a number)
console.log("typeof Infinity:", typeof Infinity);      // "number"
console.log("typeof -Infinity:", typeof -Infinity);    // "number"

// Strings
console.log("\ntypeof \"hello\":", typeof "hello");    // "string"
console.log("typeof '':", typeof '');                  // "string"
console.log("typeof `template`:", typeof `template`);  // "string"

// Booleans
console.log("\ntypeof true:", typeof true);            // "boolean"
console.log("typeof false:", typeof false);            // "boolean"

// Undefined
console.log("\ntypeof undefined:", typeof undefined);  // "undefined"
let undefinedVar;
console.log("typeof undefinedVar:", typeof undefinedVar); // "undefined"

// Null (historical quirk in JavaScript)
console.log("\ntypeof null:", typeof null);            // "object" (this is often considered a bug in JavaScript)

// Objects
console.log("\ntypeof {}:", typeof {});                // "object"
console.log("typeof []:", typeof []);                  // "object" (arrays are objects in JavaScript)
console.log("typeof new Date():", typeof new Date());  // "object"
console.log("typeof /regex/:", typeof /regex/);        // "object"
console.log("typeof new Map():", typeof new Map());    // "object"
console.log("typeof new Set():", typeof new Set());    // "object"

// Functions
console.log("\ntypeof function(){}:", typeof function(){}); // "function"
console.log("typeof (() => {}):", typeof (() => {}));       // "function"
console.log("typeof class {}:", typeof class {});           // "function" (classes are functions in JavaScript)

// Symbols (added in ES6)
console.log("\ntypeof Symbol():", typeof Symbol());    // "symbol"

// BigInt (added in ES2020)
console.log("\ntypeof 1n:", typeof 1n);               // "bigint"
console.log("typeof BigInt(42):", typeof BigInt(42)); // "bigint"

// ===== Practical Use Cases =====

console.log("\n// ===== PRACTICAL USE CASES =====");

// 1. Type checking before operations
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  return a + b;
}

try {
  console.log("\nAdd numbers: 5 + 10 =", add(5, 10));   // Works: 15
  console.log("Add string and number: '5' + 10 =", add("5", 10)); // Throws error
} catch (error) {
  console.error("Error:", error.message);  // "Both arguments must be numbers"
}

// 2. Checking if a variable is defined
console.log("\n// Checking if variables are defined:");
// Using typeof is safe even with undeclared variables
if (typeof possiblyUndeclaredVar !== "undefined") {
  console.log("possiblyUndeclaredVar exists");
} else {
  console.log("possiblyUndeclaredVar is undefined");
}

// 3. Checking for function existence
console.log("\n// Checking for function existence:");
const user = {
  name: "John",
  sayHello: function() { 
    return "Hello, I'm " + this.name; 
  }
};

// Check if a method exists before calling it
if (typeof user.sayHello === "function") {
  console.log(user.sayHello());  // "Hello, I'm John"
}

// This would cause an error if we didn't check
if (typeof user.sayGoodbye === "function") {
  console.log(user.sayGoodbye());
} else {
  console.log("sayGoodbye method doesn't exist");
}

// ===== Limitations of typeof =====

console.log("\n// ===== LIMITATIONS OF TYPEOF =====");

// 1. Cannot distinguish between different types of objects
console.log("\nLimitation: Cannot distinguish between different object types:");
console.log("typeof {}:", typeof {});               // "object"
console.log("typeof []:", typeof []);               // "object"
console.log("typeof new Date():", typeof new Date()); // "object"
console.log("typeof null:", typeof null);           // "object" (incorrectly)

// 2. Better ways to check for specific object types
console.log("\nBetter alternatives:");

// For Arrays
console.log("Array.isArray([]):", Array.isArray([]));          // true
console.log("Array.isArray({}):", Array.isArray({}));          // false

// For null
const nullVar = null;
console.log("nullVar === null:", nullVar === null);            // true

// Using Object.prototype.toString for more specific type checks
console.log("\nUsing Object.prototype.toString for precise type checking:");
console.log("Object.prototype.toString.call({}):", Object.prototype.toString.call({}));           // "[object Object]"
console.log("Object.prototype.toString.call([]):", Object.prototype.toString.call([]));           // "[object Array]"
console.log("Object.prototype.toString.call(new Date()):", Object.prototype.toString.call(new Date()));   // "[object Date]"
console.log("Object.prototype.toString.call(/regex/):", Object.prototype.toString.call(/regex/));      // "[object RegExp]"
console.log("Object.prototype.toString.call(null):", Object.prototype.toString.call(null));         // "[object Null]"
console.log("Object.prototype.toString.call(undefined):", Object.prototype.toString.call(undefined));    // "[object Undefined]"

// Using instanceof for custom objects
console.log("\nUsing instanceof for custom objects:");
class Person {
  constructor(name) {
    this.name = name;
  }
}

const john = new Person("John");
console.log("john instanceof Person:", john instanceof Person);  // true
console.log("typeof john:", typeof john);  // "object" (not very helpful)

// ===== Best Practices =====

console.log("\n// ===== BEST PRACTICES =====");

/**
 * Type checking utility functions
 */

// Check if value is an array
function isArray(value) {
  return Array.isArray(value);
}

// Check if value is an object (but not null and not an array)
function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// Check if value is a function
function isFunction(value) {
  return typeof value === "function";
}

// Check if value is a string
function isString(value) {
  return typeof value === "string";
}

// Check if value is a number (but not NaN)
function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

// Check if value is a boolean
function isBoolean(value) {
  return typeof value === "boolean";
}

// Check if value is undefined
function isUndefined(value) {
  return typeof value === "undefined";
}

// Check if value is null
function isNull(value) {
  return value === null;
}

// Check if value is a date
function isDate(value) {
  return value instanceof Date;
}

// Examples of using these utility functions
console.log("\nUsing type checking utility functions:");
console.log("isArray([1, 2, 3]):", isArray([1, 2, 3]));  // true
console.log("isObject({name: 'John'}):", isObject({name: 'John'}));  // true
console.log("isFunction(() => {}):", isFunction(() => {}));  // true
console.log("isNumber(42):", isNumber(42));  // true
console.log("isNumber(NaN):", isNumber(NaN));  // false
console.log("isDate(new Date()):", isDate(new Date()));  // true
