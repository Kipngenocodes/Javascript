/*        For...of Loop 
The for...of loop in JavaScript is used to traverse elements of the iterable object.
In each iteration, it gives an element of the iterable object.
 Iterable objects include arrays, strings, maps, sets, and generators. 
 */

 /*syntax:
 for (ele of iterable) {
    // loop body
}
 */
// Example with an array
const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
    console.log(num);
}

// Example with a string
const text = "Hello";

for (let char of text) {
    console.log(char);
}

// Example with a map
const map = new Map([
    ["name", "Alice"],
    ["age", 25]
]);

for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// Example with a set
const set = new Set([1, 2, 3, 4, 5]);

for (let num of set) {
    console.log(num);
}

// Example with a generator function

function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

for (let num of generateNumbers()) {
    console.log(num);
}   

