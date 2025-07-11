/* You can use the function constructor to create the template for the object.
The function constructor should contain the 'name' and 'message' properties.
Next, you can change the prototype of the function constructor with the prototype of the Error class.
This will allow the object to inherit the properties and methods of the Error class.
Finally, you can create an instance of the function constructor and throw it.
*/

// Example of a custom error using function constructor
function CustomError(name, message) {
    this.name = name;
    this.message = message;
    this.stack = (new Error()).stack;
    }
    CustomError.prototype = Object.create(Error.prototype);
