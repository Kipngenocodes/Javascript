// The JavaScript WeakSet object is a collection of objects. 
// The WeakSet is very similar to the Set. 
// The main difference between the WeakSet and Set is that the WeakSet contains only objects, 
// and the Set can also contain the values like numbers, Boolean, string

// Syntax : const weakest = new WeakSet([iterable]);

// Creating a WeakSet
const weakSet = new WeakSet();

// Objects to use as values (WeakSet only accepts objects)
const obj1 = { id: 1 };
const obj2 = { id: 2 };
const obj3 = { id: 3 };

// Adding objects to WeakSet
weakSet.add(obj1);
weakSet.add(obj2);
weakSet.add(obj1); // Duplicate object reference - accepted but no effect
console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj3)); // false

// Demonstrating weak reference behavior
let tempObj = { id: 4 };
weakSet.add(tempObj);
console.log(weakSet.has(tempObj)); // true

// Removing reference to tempObj
tempObj = null;
// After garbage collection, tempObj would be removed from weakSet
// (Note: We can't directly observe this as garbage collection timing is unpredictable)

// Checking existence
console.log(weakSet.has(obj2)); // true

// Deleting an object
weakSet.delete(obj2);
console.log(weakSet.has(obj2)); // false

// Practical example: tracking visited objects
const visitedObjects = new WeakSet();

function processObject(obj) {
    if (visitedObjects.has(obj)) {
        console.log('Object already processed');
        return;
    }
    console.log('Processing object:', obj);
    visitedObjects.add(obj);
}

const testObj = { name: 'test' };
processObject(testObj); // "Processing object: { name: 'test' }"
processObject(testObj); // "Object already processed"

// WeakSet limitations
// weakSet.size // undefined - no size property
// weakSet.forEach // undefined - not iterable
// console.log([...weakSet]) // Error - not iterable

// Memory management example
function createLargeObjectTracker() {
    const tracker = new WeakSet();
    const largeObj = new Array(1000000).fill('data');
    
    tracker.add(largeObj);
    console.log('Large object added to WeakSet');
    
    return tracker;
}

let tracker = createLargeObjectTracker();
// When tracker is no longer referenced, both it and largeObj can be garbage collected
tracker = null;
// Memory will be freed when garbage collector runs