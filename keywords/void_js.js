/*The void keyword in JavaScript is used as an operator that evaluates
a given expression and returns undefined. The void is an important keyword in JavaScript. The meaning of the void is null or empty.
The void keyword can be used as a unary operator that appears before
its single operand, which may be of any type. This operator specifies an expression 
to be evaluated without returning a value or returning the undefined

syntax: void operand;
*/

voidFunction = function() 
{    console.log("This function does not return a value.");
    return void 0; // Explicitly returning undefined
 }