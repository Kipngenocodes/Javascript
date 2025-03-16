/*The function parameters in JavaScript are variables listed inside the parentheses in the function definition. 
A function can have multiple parameters separated by commas. The function arguments are the values that are passed to function when it is called. 
We define function listing the parameters and call the function passing the arguments.
*/

/*
function functionName (parameter1, parameter2, parameter3) {
    //statements
  }
  */

//Example 1: Function with parameters
function addNumbers(a, b) {
    return a + b;
  }
  var sum = addNumbers(5, 10); // sum will be 15    
  console.log(sum);
  
  //Example 2: Function with default parameters
    function multiplyNumbers(a, b = 1) {
        return a * b;
    }
    var product = multiplyNumbers(5); // product will be 5 (5 * 1)
    console.log(product);    
    var product2 = multiplyNumbers(5, 2); // product2 will be 10 (5 * 2)
    console.log(product2);    
    var product3 = multiplyNumbers(5, 3); // product3 will be 15 (5 * 3)
    console.log(product3);    
    var product4 = multiplyNumbers(5, 4); // product4 will be 20 (5 * 4)
    console.log(product4);    
    var product5 = multiplyNumbers(5, 5); // product5 will be 25 (5 * 5)
    console.log(product5);    
    var product6 = multiplyNumbers(5, 6); // product6 will be 30 (5 * 6)
    console.log(product6);    
    var product7 = multiplyNumbers(5, 7); // product7 will be 35 (5 * 7)
    console.log(product7);  