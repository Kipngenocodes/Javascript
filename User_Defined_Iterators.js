/*
An iterable is an object that has a Symbol.iterator() method in its prototype.
Examples of iterables include arrays, sets, maps, strings, etc.
The Symbol.iterator() method returns an iterator object containing a next() method.
*/

// Example of an iterable object (array)
const iterable = [1, 2, 3, 4, 5];
const itr = iterable[Symbol.iterator]();
console.log(itr.next()); // { value: 1, done: false }
console.log(itr.next()); // { value: 2, done: false }
console.log(itr.next()); // { value: 3, done: false }
console.log(itr.next()); // { value: 4, done: false }
console.log(itr.next()); // { value: 5, done: false }
console.log(itr.next()); // { value: undefined, done: true } // Iteration is complete

console.log('---------------------------');
// Example of a custom iterable object
class CustomIterable {
    constructor(data) {
        this.data = data;
        this.index = 0;
    }   
    [Symbol.iterator]() {
        return this;
    }
    next() {
        if (this.index < this.data.length) {
            return { value: this.data[this.index++], done: false };
        } else {
            return { value: undefined, done: true };
        }
    }
}
const customIterable = new CustomIterable([1, 2, 3, 4, 5]);
const iter = customIterable[Symbol.iterator]();   
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: 4, done: false }
console.log(iter.next()); // { value: 5, done: false }
console.log(iter.next()); // { value: undefined, done: true } // Iteration is complete