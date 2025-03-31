/*JavaScript object methods are object properties that contains function definitions.
An object is a collection of properties,
and a property is an association between a name (or key) and a value. A property's value can be a function; 
in that case the property is known as a method.
The syntax is: objectName.methodName()
*/

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName + " " + this.id;
    }
};

console.log(person.fullName());

