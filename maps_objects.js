// Javascrip map objects
/*A Map object in JavaScript is a collection of key-value 
pairs where the keys can be of any type, including objects or functions.
The order of the map elements is the same as the insertion order of the key-value pairs
*/
// syntax for creating a map object:
// const map = new Map([iterable]);
// Creating a new Map
const myMap = new Map();

// Setting key-value pairs
myMap.set('name', 'John');
myMap.set(1, 'One');
myMap.set(true, 'Boolean key');

// Using objects as keys
const objKey = { id: 1 };
myMap.set(objKey, 'Object value');

// Initializing Map with array of key-value pairs
const initializedMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
]);

// Basic Methods
console.log(myMap.get('name'));      // 'John'
console.log(myMap.get(objKey));      // 'Object value'
console.log(myMap.has(1));           // true
console.log(myMap.size);             // 4

// Deleting an entry
myMap.delete(1);
console.log(myMap.has(1));           // false
console.log(myMap.size);             // 3

// Iterating over Map
console.log('Entries iteration:');
for (let [key, value] of myMap.entries()) {
    console.log(`${key}: ${value}`);
}
// Output:
// name: John
// true: Boolean key
// [object Object]: Object value

// Using keys() iterator
console.log('Keys:');
for (let key of myMap.keys()) {
    console.log(key);
}
// Output: 'name', true, { id: 1 }

// Using values() iterator
console.log('Values:');
for (let value of myMap.values()) {
    console.log(value);
}
// Output: 'John', 'Boolean key', 'Object value'

// Using forEach
console.log('forEach iteration:');
myMap.forEach((value, key) => {
    console.log(`${key} => ${value}`);
});

// Converting to array
const entriesArray = [...myMap];
console.log('As array:', entriesArray);

// Practical example: counting occurrences
const countOccurrences = (arr) => {
    const countMap = new Map();
    arr.forEach(item => {
        countMap.set(item, (countMap.get(item) || 0) + 1);
    });
    return countMap;
};

const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const counts = countOccurrences(items);
console.log('Occurrences:', counts);
// Map(3) { 'apple' => 3, 'banana' => 2, 'orange' => 1 }

// Merging Maps
const map1 = new Map([['a', 1], ['b', 2]]);
const map2 = new Map([['b', 3], ['c', 4]]);
const merged = new Map([...map1, ...map2]);
console.log('Merged map:', merged);
// Map(3) { 'a' => 1, 'b' => 3, 'c' => 4 }

// Clearing the Map
myMap.clear();
console.log(myMap.size);             // 0

// Using Map with different key types
const typeDemo = new Map()
    .set(1, 'number')
    .set('1', 'string')
    .set(true, 'boolean')
    .set(null, 'null')
    .set(undefined, 'undefined');

console.log(typeDemo);
// Map(5) {
//   1 => 'number',
//   '1' => 'string',
//   true => 'boolean',
//   null => 'null',
//   undefined => 'undefined'
// }