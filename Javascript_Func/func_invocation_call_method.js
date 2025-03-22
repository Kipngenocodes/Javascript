// using function call () method

/*The Function call() method allows us to 
invoke a function given a specific value for this and arguments provided individually.

syntax: function.call(thisArg, arg1, arg2, ..., argN)   */

function greet() {
    console.log(this.message);
}

var obj = {
    message: "Hello, World!"
};
greet.call(obj);