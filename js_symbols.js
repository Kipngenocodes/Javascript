// In JavaScript, Symbol is a primitive data type and it was introduced in ECMAScript 6 (ES6).
//  It can be created using the 'Symbol' constructor.
// Symbols are immutable and unique, unlike to other primitive data types like strings or numbers

/* syntax of  symbols
const sym = Symbol([description]);*/

// Creating basic Symbols
const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols with descriptions (for debugging purposes)
const symbol3 = Symbol('mySymbol');
const symbol4 = Symbol('mySymbol');

// Demonstrating unique nature of Symbols
console.log(symbol1 === symbol2);         // false - each Symbol is unique
console.log(symbol3 === symbol4);         // false - even with same description

// Using Symbols as object property keys
const myObj = {
    name: 'Test Object',
    [symbol3]: 'Hidden value'
};

// Adding Symbol property after object creation
const secretKey = Symbol('secret');
myObj[secretKey] = 'Confidential data';

// Showing how Symbols hide properties from normal iteration
console.log(Object.keys(myObj));          // ['name'] - Symbol properties not included
console.log(myObj[symbol3]);             // 'Hidden value'
console.log(myObj[secretKey]);           // 'Confidential data'

// Converting Symbol to string
console.log(symbol3.toString());          // 'Symbol(mySymbol)'
console.log(typeof symbol3);              // 'symbol'

// Using Symbol as unique identifier in a class
class UniqueTracker {
    constructor() {
        this.id = Symbol('trackerId');
    }
}

const tracker1 = new UniqueTracker();
const tracker2 = new UniqueTracker();
console.log(tracker1.id === tracker2.id); // false - each instance gets unique Symbol

// Well-known Symbols example
const array = [1, 2, 3];
console.log(array[Symbol.iterator]);      // Shows the iterator function

// Creating a custom iterator using Symbol.iterator
const customIterable = {
    *[Symbol.iterator]() {
        yield 'a';
        yield 'b';
        yield 'c';
    }
};

for (let value of customIterable) {
    console.log(value);                   // 'a', 'b', 'c'
}