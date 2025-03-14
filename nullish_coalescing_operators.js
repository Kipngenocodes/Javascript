// *The Nullish Coalescing operator in JavaScript is
//  represented by two question marks (??)
//  and is used to provide a default value when dealing with null or undefined values.
//  It differs from the logical OR operator (||) in that it only considers null and undefined as falsy values.
//  This means that if the left-hand side of the operator is not null or undefined,
//  it will be returned, and if it is, the right-hand side will be returned.
//  This is useful when you want to provide a default value only when the left-hand side is null or undefined,
//  and not when it is falsy (e.g., 0, false, or an empty string).*

// Example with null and undefined
var value = null;
var defaultVal = "Default Value";
var result = value ?? defaultVal;
console.log(result); // Output: Default Value

var value = undefined;
var defaultVal = "Default Value";
var result = value ?? defaultVal;
console.log(result); // Output: Default Value

var value = 0;
var defaultVal = "Default Value";
var result = value ?? defaultVal;
console.log(result); // Output: 0

var value = "";
var defaultVal = "Default Value";
var result = value ?? defaultVal;
console.log(result); 
