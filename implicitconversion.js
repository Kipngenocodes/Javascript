//When type conversion is done by JavaScript automatically, it is called implicit type conversion
// Example
let a = 5; // number
let b = "5"; // string


let sum = a + b; // JavaScript automatically converts string to number
console.log(sum); // 55
console.log(typeof sum);

let B ="100" + 24; // Converts 24 to string
let C ='100' + false; // Converts false boolean value to string
let D ="100" + null; // Converts null keyword to string

console.log(B); // 10024
console.log(C); // 100false 
console.log(D); // 100null
console.log(typeof B);
console.log(typeof C);
console.log(typeof D);
