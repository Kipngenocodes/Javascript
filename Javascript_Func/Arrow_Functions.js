// The arrow functions in JavaScript allow us to create a shorter and anonymous function.
// Arrow functions are often used in combination with higher-order functions, which are functions that take other functions as arguments or return functions as their result.   
// Arrow functions are not hoisted, so they must be defined before they are called.

/* Syntax :
const varName = (parameters) => {
     function body
};

or 
const Varname = (parameters) => function body;
*/


// An Example of arrow functions that take other functions as arguments or return functions as their result
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const calculate = (operation, a, b) => operation(a, b);

console.log(calculate(add, 2, 3)); // Output: 5
console.log(calculate(multiply, 2, 3)); // Output: 6   

// Arrow Function with Multiple Statements
const greet = (name) => {
    const greeting = `Hello, ${name}!`;
    console.log(greeting);
    return greeting;
};

greet('John'); // Output: Hello, John!

// Arrow Function with Multiple Statements with integer return type
const addition = (a, b) => {
    const sum = a + b;
    return sum;
};

console.log(addition(5, 3)); // Output: 8

// Arrow Function with Default Parameters
const greeting = (name = 'Guest') => `Hello, ${name}!`; // Default parameter value
console.log(greeting()); // Output: Hello, Guest!

// Arrow Function without parameters
const sayhello = () => 'Hello, World!';
console.log(sayhello());

// arrow function with object return type
const createPerson = (name, age) => ({ name, age });
const person = createPerson('Alice', 25);
console.log(person); // Output: { name: 'Alice', age: 25 }

// Arrow Function as an Expression
const square = (x) => x * x;
console.log(square(5));
