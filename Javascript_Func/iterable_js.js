// In JavaScript, iterables are objects that can be iterated through using the for...of loop. 
// Iterables include arrays, strings, maps, sets, typedarrays, nodelists, arguments,  and generators.
// An iterable is an object that has a Symbol.iterator() method in its prototype.

// Iterate using the for...of loop
const iterable = [1, 2, 3, 4, 5];
for (const num of iterable) {
    console.log(num); // 1, 2, 3, 4, 5
}
// Iterate using the forEach method
const iterable1 = [1, 2, 3, 4, 5];
iterable1.forEach(num => {
    console.log(num); // 1, 2, 3, 4, 5
});
// Iterate using the map method
const iterable2 = [1, 2, 3, 4, 5];
const squared = iterable2.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]  

// Iterate using the reduce method
const iterable3 = [1, 2, 3, 4, 5];
const sum = iterable3.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15 

// iterate over a string
const str = "Hello";
for (const char of str) {
    console.log(char); // H, e, l, l, o
}   

// iterate over a map
const map = new Map();
map.set("name", "John");
map.set("age", 25);
for (const [key, value] of map) {
    console.log(`${key}: ${value}`); // name: John, age: 25
}
// iterate over a set
const set = new Set();  
set.add(1);
set.add(2);
set.add(3);
for (const value of set) {
    console.log(value); // 1, 2, 3
}