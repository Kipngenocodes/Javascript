// The JavaScript Array object lets you store multiple values in a single variable
// An array is used to store a sequential collection of multiple elements of same or different data types.
// An array is a special variable, which can hold more than one value at a time.

// Syntax for creating an array object:
// const arr = new Array(element0, element1, ..., elementN);    

// Sample array for demonstration
let arr = [1, 2, 3, 4, 5, 6];

// 1. at() - To get an element from a particular index.
console.log("at():", arr.at(2)); // Output: 3

// 2. concat() - Returns a new array merged with another array or value(s).
let newArr = arr.concat([7, 8, 9]);
console.log("concat():", newArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 3. copyWithin() - To copy part of the array into the same array at different locations.
arr.copyWithin(0, 3, 5); // Copies elements from index 3 to 5 and puts them starting from index 0
console.log("copyWithin():", arr); // Output: [4, 5, 3, 4, 5, 6]

// 4. entries() - Returns each entry of the array.
for (let entry of arr.entries()) {
    console.log("entries():", entry); // Output: [index, value]
}

// 5. every() - Returns true if every element satisfies the provided testing function.
console.log("every():", arr.every(num => num > 0)); // Output: true

// 6. fill() - Fills the array with a static value.
arr.fill(0, 2, 4); // Fills indices 2 to 4 with 0
console.log("fill():", arr); // Output: [4, 5, 0, 0, 5, 6]

// 7. filter() - Creates a new array with elements that pass the provided test.
let filtered = arr.filter(num => num > 3);
console.log("filter():", filtered); // Output: [4, 5, 5, 6]

// 8. find() - Finds an element satisfying the condition.
let found = arr.find(num => num > 4);
console.log("find():", found); // Output: 5

// 9. findIndex() - Finds the index of the element satisfying the condition.
let foundIndex = arr.findIndex(num => num > 4);
console.log("findIndex():", foundIndex); // Output: 4

// 10. findLast() - Finds an element satisfying the condition from the last.
let lastFound = arr.findLast(num => num > 4);
console.log("findLast():", lastFound); // Output: 6

// 11. findLastIndex() - Finds the index of the element satisfying the condition from the last.
let lastFoundIndex = arr.findLastIndex(num => num > 4);
console.log("findLastIndex():", lastFoundIndex); // Output: 5

// 12. flat() - Flattens the array.
let nestedArr = [1, [2, 3], [4, [5, 6]]];
console.log("flat():", nestedArr.flat()); // Output: [1, 2, 3, 4, [5, 6]]

// 13. flatMap() - Creates a new array after flattening the array.
console.log("flatMap():", nestedArr.flatMap(x => x)); // Output: [1, 2, 3, 4, [5, 6]]

// 14. forEach() - Calls a function for each element in the array.
arr.forEach(num => console.log("forEach():", num));

// 15. includes() - Checks if the array contains a specific element.
console.log("includes():", arr.includes(5)); // Output: true

// 16. indexOf() - Returns the first index of an element or -1 if not found.
console.log("indexOf():", arr.indexOf(5)); // Output: 4

// 17. join() - Joins all elements of an array into a string.
console.log("join():", arr.join('-')); // Output: 4-5-0-0-5-6

// 18. keys() - Returns an iterator containing the key for each array element.
for (let key of arr.keys()) {
    console.log("keys():", key); // Output: 0, 1, 2, 3, 4, 5
}

// 19. lastIndexOf() - Returns the last index of an element or -1 if not found.
console.log("lastIndexOf():", arr.lastIndexOf(5)); // Output: 4

// 20. map() - Creates a new array by calling a provided function on each element.
let mapped = arr.map(num => num * 2);
console.log("map():", mapped); // Output: [8, 10, 0, 0, 10, 12]

// 21. pop() - Removes the last element from the array and returns that element.
let popped = arr.pop();
console.log("pop():", popped); // Output: 6

// 22. push() - Adds one or more elements to the end of the array and returns the new length.
let newLength = arr.push(7, 8);
console.log("push():", arr, newLength); // Output: [4, 5, 0, 0, 5, 7, 8], 7

// 23. reduce() - Applies a function against two values of the array to reduce it to a single value.
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log("reduce():", sum); // Output: 21

// 24. reduceRight() - Applies a function against two values of the array (from right to left) to reduce it to a single value.
let reverseSum = arr.reduceRight((acc, curr) => acc + curr, 0);
console.log("reduceRight():", reverseSum); // Output: 21

// 25. reverse() - Reverses the order of the array.
arr.reverse();
console.log("reverse():", arr); // Output: [8, 7, 5, 0, 0, 5, 4]

// 26. shift() - Removes the first element from the array and returns that element.
let shifted = arr.shift();
console.log("shift():", shifted); // Output: 8

// 27. slice() - Extracts a section of the array and returns a new array.
let sliced = arr.slice(1, 4);
console.log("slice():", sliced); // Output: [7, 5, 0]

// 28. some() - Returns true if at least one element satisfies the testing function.
console.log("some():", arr.some(num => num < 0)); // Output: false

// 29. toSorted() - Sorts the elements in a specific order.
let sorted = arr.toSorted();
console.log("toSorted():", sorted); // Output: [4, 5, 7, 8]

// 30. sort() - Sorts the elements of an array.
arr.sort((a, b) => a - b);
console.log("sort():", arr); // Output: [0, 0, 4, 5, 5, 7, 8]

// 31. splice() - Adds/removes elements from the array.
arr.splice(2, 2, 10, 11);
console.log("splice():", arr); // Output: [0, 0, 10, 11, 5, 7, 8]

// 32. toLocaleString() - Converts the array elements into a string.
console.log("toLocaleString():", arr.toLocaleString()); // Output: "0,0,10,11,5,7,8"

// 33. toReversed() - Returns the reverse of the array.
let reversedArr = arr.toReversed();
console.log("toReversed():", reversedArr); // Output: [8, 7, 5, 11, 10, 0, 0]

// 34. toSpliced() - Returns a new array with some elements removed/replaced.
let splicedArr = arr.toSpliced(2, 2, 12, 13);
console.log("toSpliced():", splicedArr); // Output: [0, 0, 12, 13, 5, 7, 8]

// 35. toString() - Converts the array to a string.
console.log("toString():", arr.toString()); // Output: "0,0,10,11,5,7,8"

// 36. unshift() - Adds one or more elements to the front of the array.
arr.unshift(9);
console.log("unshift():", arr); // Output: [9, 0, 0, 10, 11, 5, 7, 8]

// 37. values() - Returns an iterator containing values of each array index.
let iterator = arr.values();
console.log("values():", [...iterator]); // Output: [9, 0, 0, 10, 11, 5, 7, 8]

// 38. with() - Returns a new array with the element replaced at the specified index.
let newArray = arr.with(3, 20); // Replace element at index 3 with 20
console.log("with():", newArray); // Output: [9, 0, 0, 20, 11, 5, 7, 8]


// Accessing Array Elements
// You can access array elements using their index.
// Array indexes are zero-based, which means the first element is at index 0, the second element is at index 1, and so on.
// You can access elements using bracket notation [] with the index number.

// Define an array
const arr = [5, 3, 1, 8, 2, 9];

// Function to access array elements within a specified range
function accessRange(arr, start, end) {
    console.log(`Accessing elements from index ${start} to ${end}:`);
    for (let i = start; i <= end; i++) {
        console.log(`Index ${i}: ${arr[i]}`);
    }
}

// Direct access examples
console.log("Direct Access Examples:");
console.log("First element (index 0):", arr[0]);    // Output: 5
console.log("Third element (index 2):", arr[2]);    // Output: 1
console.log("Last element (index 5):", arr[5]);     // Output: 9

// Using our range function
console.log("\nRange Access Example:");
accessRange(arr, 1, 4);  // Access elements from index 1 to 4
/* Output:
Accessing elements from index 1 to 4:
Index 1: 3
Index 2: 1
Index 3: 8
Index 4: 2
*/

// Bonus: Using modern JavaScript slice() to get a range
console.log("\nUsing slice() for range:");
const rangeSlice = arr.slice(1, 5); // Gets elements from index 1 to 4 (end is exclusive)
console.log("Elements from index 1 to 4:", rangeSlice); // Output: [3, 1, 8, 2]
