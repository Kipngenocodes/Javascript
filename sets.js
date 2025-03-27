// A JavaScript Set object is a collection of unique values. Each value can only occur once in a Set.
//  A Set can hold any value of any data type. The sets are introduced to JavaScript in ECMAScript 6 (ES6).

/* syntax for sets:
let set1 = new Set([iterable]);

*/ 

// Example
// Creating a new Set
const mySet = new Set();

// Adding elements
mySet.add(1);
mySet.add('hello');
mySet.add({ key: 'value' });
mySet.add(1); // Duplicate - will be ignored
console.log(mySet); // Set(3) { 1, 'hello', { key: 'value' } }

// Creating Set from array (removes duplicates)
const arrayWithDupes = [1, 2, 2, 3, 3, 3];
const uniqueSet = new Set(arrayWithDupes);
console.log(uniqueSet); // Set(3) { 1, 2, 3 }

// Size property
console.log(uniqueSet.size); // 3

// Checking if element exists
console.log(uniqueSet.has(2)); // true
console.log(uniqueSet.has(4)); // false

// Deleting elements
uniqueSet.delete(2);
console.log(uniqueSet); // Set(2) { 1, 3 }

// Iterating over Set
console.log('Iteration using for...of:');
for (let item of uniqueSet) {
    console.log(item); // 1, 3
}

// Using forEach
console.log('Iteration using forEach:');
uniqueSet.forEach(value => console.log(value)); // 1, 3

// Converting Set back to array
const uniqueArray = [...uniqueSet];
console.log(uniqueArray); // [1, 3]

// Set operations example
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);

// Union
const union = new Set([...setA, ...setB]);
console.log('Union:', union); // Set(4) { 1, 2, 3, 4 }

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log('Intersection:', intersection); // Set(2) { 2, 3 }

// Difference
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log('Difference:', difference); // Set(1) { 1 }

// Clearing a Set
mySet.clear();
console.log(mySet); // Set(0) {}
