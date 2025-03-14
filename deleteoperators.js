// Creating an object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com"
  };
  
  console.log(person); // Shows all properties
  
  // Using delete to remove a property
  delete person.email;
  
  console.log(person); // The email property is now gone
  
  // Delete with bracket notation
  delete person["age"];
  
  console.log(person); // The age property is now gone
  
  // Delete with array
  const fruits = ["apple", "banana", "orange", "grape"];
  console.log(fruits); // ["apple", "banana", "orange", "grape"]
  console.log(fruits.length); // 4
  
  delete fruits[1]; // Deletes "banana" but leaves a hole
  console.log(fruits); // ["apple", empty, "orange", "grape"]
  console.log(fruits.length); // Still 4, but with an empty slot
  
  // Attempting to delete a variable (won't work)
  let testVar = "cannot delete me";
  console.log(delete testVar); // Returns false
  console.log(testVar); // "cannot delete me" - still exists