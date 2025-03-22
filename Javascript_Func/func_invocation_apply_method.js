/* The Function apply() method in JavaScript allows us to invoke a function given 
a specific value for this and arguments provided as an array.
The Function call() and apply() methods are very similar, 
but the main difference between them is function apply() method takes a single array containing all function arguments,
 and the function call() method takes individual arguments. */

// Example
// Example
function sheleftme() {
    return "She was my girl but I was still grinding to make a name for myself.";
}

console.log(sheleftme());          // "She was my girl but I was still grinding to make a name for myself."
console.log(sheleftme.apply(null)); // "She was my girl but I was still grinding to make a name for myself."
// sheleftme.apply();              // Avoid this - it’s incomplete and may behave unpredictably 