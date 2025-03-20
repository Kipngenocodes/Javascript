// working with default parameters

/*Default parameters allow named parameters to be initialized with default values if no value or undefined is passed.
Default parameters are a great way to set default values for function parameters.
if the function is called with missing argument or argument with an undefined value,
 it uses the default value of the parameter in the function.
 If the function is called with a valid argument, that argument will be used.
*/


/*
function functName(param1 = defaultValue1, param2 = DefaultValue2, ..) {
    body of a function;
}
    */


// Example 1: Function with default parameters 
function multiplyNumbers(a, b = 1) {
    return a * b;
}

// calling the function with default value of b
var product = multiplyNumbers(5); // product will be 5 (5 * 1)
console.log(product);

// 