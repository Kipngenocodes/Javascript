// The Date object is a datatype built into the JavaScript language. 
// Date objects are created with the new Date( ) constructor.
// Creating a Date object
const currentDate = new Date(); // Current date and time

// Display the full date
console.log("Current Date and Time:", currentDate);

// Examples of specific Date methods
console.log("Year:", currentDate.getFullYear());
console.log("Month (0-11):", currentDate.getMonth()); // 0 = January, 11 = December
console.log("Day of Month:", currentDate.getDate());
console.log("Day of Week (0-6):", currentDate.getDay()); // 0 = Sunday, 6 = Saturday
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());

// Creating a specific date (e.g., March 25, 2025)
const specificDate = new Date(2025, 2, 25); // Note: Month is 0-based (2 = March)
console.log("Specific Date (March 25, 2025):", specificDate);

// Formatting a date manually
const formattedDate = `${specificDate.getMonth() + 1}/${specificDate.getDate()}/${specificDate.getFullYear()}`;
console.log("Formatted Date (MM/DD/YYYY):", formattedDate);