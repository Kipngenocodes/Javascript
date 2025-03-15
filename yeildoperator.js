/* The yield operator in JavaScript is used to pause and 
 resume the generator function asynchronously. In JavaScript, generator 
functions are the special functions that you can pause or resume while executing.
*/

// syntax of yield operator: function* functionName() { yield value; }

// Example 1: Using yield operator in a generator function

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generateSequence();
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3

function* test() {
    console.log("I'm before yield expression");
    yield 20;
}
const genObj = test();
console.log(genObj.next());


function* test() {
    yield 20;
    yield [1,2,3];
    yield "Hello World";
}
let res = test();
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());