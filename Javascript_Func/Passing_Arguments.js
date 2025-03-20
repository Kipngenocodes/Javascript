// passing arguments by reference to a function

// Pass by Value (Primitives)
function tryToChangeValue(x) {
    x = 100;  // This only changes the local copy
}
let num = 50;
tryToChangeValue(num);
console.log(num);  // Still 50

// Pass by Reference (Objects)
function changeObject(obj) {
    obj.name = "Alice";  // Modifies the original object
}
let person = { name: "Bob" };
changeObject(person);
console.log(person.name);  // Now "Alice"

// Array example (also passed by reference)
function modifyArray(arr) {
    arr.push(4);  // Modifies the original array
}
let numbers = [1, 2, 3];
modifyArray(numbers);
console.log(numbers);  // [1, 2, 3, 4]