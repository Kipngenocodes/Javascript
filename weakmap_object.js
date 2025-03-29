/*A WeakMap object in JavaScript is a collection of key-value pairs where the keys are weakly referenced.
This means that if there are no other references to a key object, it can be garbage collected.
This is in contrast to a regular Map object, where the keys are strongly referenced.
The WeakMap keys must be objects or non-registered symbols, and values are of any arbitrary JavaScript type. */

// Creating a WeakMap
const weakMap = new WeakMap();

// Objects to use as keys (WeakMap only accepts objects as keys)
const key1 = { id: 1 };
const key2 = { id: 2 };
const key3 = { id: 3 };

// Setting key-value pairs
weakMap.set(key1, 'Value 1');
weakMap.set(key2, 'Value 2');
console.log(weakMap.has(key1));      // true
console.log(weakMap.get(key1));      // 'Value 1'

// Demonstrating weak reference behavior
let tempKey = { id: 4 };
weakMap.set(tempKey, 'Temporary');
console.log(weakMap.has(tempKey));   // true

// Removing reference to tempKey
tempKey = null;
// After garbage collection, the entry would be removed
// (Note: We can't directly observe this as GC timing is unpredictable)

// Basic methods
console.log(weakMap.get(key2));      // 'Value 2'
weakMap.delete(key2);
console.log(weakMap.has(key2));      // false

// Practical example: private data storage
const privateData = new WeakMap();

class Person {
    constructor(name) {
        privateData.set(this, { name });
    }

    getName() {
        return privateData.get(this).name;
    }
}

const person = new Person('Alice');
console.log(person.getName());       // 'Alice'
console.log(person.name);            // undefined (data is private)

// Memory management example
function cacheResults() {
    const cache = new WeakMap();
    
    return function expensiveOperation(obj) {
        if (cache.has(obj)) {
            console.log('Returning cached result');
            return cache.get(obj);
        }
        
        const result = obj.value * 100; // Expensive calculation
        cache.set(obj, result);
        console.log('Calculated new result');
        return result;
    };
}

const compute = cacheResults();
const data = { value: 5 };
console.log(compute(data));          // 'Calculated new result', 500
console.log(compute(data));          // 'Returning cached result', 500

// WeakMap limitations
// weakMap.size        // undefined - no size property
// weakMap.entries()   // undefined - not iterable
// weakMap.keys()      // undefined - not iterable
// weakMap.values()    // undefined - not iterable
// [...weakMap]        // Error - not iterable

// Demonstrating garbage collection eligibility
function demonstrateGC() {
    const wm = new WeakMap();
    let key = {};
    wm.set(key, new Array(1000000).fill('data'));
    console.log('Key added to WeakMap');
    
    key = null; // Remove strong reference
    // The large array can now be garbage collected
    return wm;
}
// what about this.
const testWM = demonstrateGC();
// When testWM is no longer needed, its contents can be GC'd