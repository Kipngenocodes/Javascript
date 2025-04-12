/*JavaScript Array destructuring allows us to unpack the values from array
and assign them to the variables. After that, you can use the variables 
to access their value and use them in the code. We can perform the array 
structuring using the destructuring assignment. 
The destructuring assignment is a basically a JavaScript expression.
It allows us to unpack the values from arrays or properties from objects
into distinct variables.
*/
// /*syntax for array destructuring:    
// const [element1, element2, ...rest] = array; 

// Basic array destructuring 
const fruits = ['apple', 'banana', 'cherry', 'date'];
const [first, second, ...rest] = fruits;
console.log(first); // Output: 'apple'  
console.log(second); // Output: 'banana'
console.log(rest); // Output: ['cherry', 'date']

//Unpacking with initial N elements of the array
const numbers = [1, 2, 3, 4, 5];
const [firstNum, secondNum, ...restOfNumbers] = numbers;
console.log(firstNum); // Output: 1
console.log(secondNum); // Output: 2
console.log(restOfNumbers); // Output: [3, 4, 5]

// Unpacking with skipping elements
const colors = ['red', 'green', 'blue', 'yellow'];
const [, , , yellow] = colors;
console.log(yellow); // Output: 'yellow'

// Array Destructuring and Rest Operator
// The rest operator (...) can be used to collect the remaining elements of an array into a new array.
const [firstColor, ...otherColors] = colors;
console.log(firstColor); // Output: 'red'
console.log(otherColors); // Output: ['green', 'blue', 'yellow']    

//Array Destructuring with Default Values
// You can also assign default values to variables in case the array doesn't have enough elements.
const [a = 0, b = 0, c = 0] = [1, 2];
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 0    

// Swapping Variables Using Array Destructuring
// Array destructuring can also be used to swap the values of two variables.
const x = 1;    
const y = 2;
[x, y] = [y, x];
console.log(x); // Output: 2
console.log(y); // Output: 1

// Nested Array Destructuring
const nestedArray = [[1, 2], [3, 4]];
const [[ab, bd], [ca, df]] = nestedArray;
console.log(ab); // Output:  1
console.log(bd); // Output: 2
console.log(ca); // Output: 3
console.log(df); // Output: 4

// Array Destructuring with Functions
// You can also use array destructuring in function parameters to extract values from an array passed as an argument.
// This is especially useful when you want to pass an array to a function and you want to access its elements directly in the function body.    