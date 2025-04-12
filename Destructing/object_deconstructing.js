// The object destructuring is a very useful feature 
// when you have an object with a lot of properties and you only need a few of them.

// It allows you to extract only the properties you need and assign them to variables.
// This can make your code cleaner and more readable.
/*syntax for object destructuring: 
const { property1, property2, ...rest } = object;
        OR 
const { prop1, popr2 } = obj;
        OR
const { prop1: p1, prop12: p2 } = obj; // Renaming variables
        OR
const { prop1 = default_vaule } = obj; // With Default values
        OR
const { prop1, ...prop2 } = obj; // With rest parameter
*/

const person = {  
    name: 'John Doe',
    age: 30,
    city: 'New York',
    country: 'USA',
    occupation: 'Software Engineer',
    hobbies : ['reading', 'gaming', 'hiking'],
    address: {
        street: '123 Main St',
        zip: '10001'
    }
};
// Destructuring the object
const { name, age } = person; // Extracting only name and age properties
console.log(name); // Output: 'John Doe'
console.log(age);   
// Output: 30
// Renaming variables   
const { name: fullName, age: years } = person; // Renaming variables
console.log(fullName);
// Output: 'John Doe'
console.log(years);
// Output: 30

// Default values
const { name: firstName, age: yearsOld, country: nation = 'Unknown' } = person; // Default value for country
console.log(firstName); // Output: 'John Doe'
console.log(yearsOld); // Output: 30
console.log(nation); // Output: 'USA'   

// Rest parameter
const { name: first, ...restOfPerson } = person; // Extracting the rest of the properties
console.log(first); // Output: 'John Doe'
console.log(restOfPerson); // Output: { age: 30, city: 'New York', country: 'USA', occupation: 'Software Engineer', hobbies: [ 'reading', 'gaming', 'hiking' ], address: { street: '123 Main St', zip: '10001' } }
// Accessing nested properties
const { address: { street, zip } } = person; // Accessing nested properties
console.log(street);
// Output: '123 Main St'
console.log(zip);