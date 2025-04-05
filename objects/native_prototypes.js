// In JavaScript, each object contains the prototype property. 
// The prototype of each object contains the methods and properties related to the object.
//  So, it is also called the native prototype.

// The prototype property is used to add new properties and methods to the object constructor.
// The prototype property is also used to create an object and set values if there are any object properties present.   
// syntax for object prototype: obj.prototype.name = value;


// Accessing the array's prototype
const arr = [1, 2, 3, 4, 5];
console.log(arr.prototype); // undefined    
// The prototype property is not available on the array object directly.