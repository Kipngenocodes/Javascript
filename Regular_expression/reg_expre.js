// A regular expression (RegExp) in JavaScript is an object that describes a pattern of characters.
/*It can contain the alphabetical, numeric, and special characters.
 Also, the regular expression pattern can have single or multiple characters.

The JavaScript RegExp class represents regular expressions, 
and both String and RegExp define methods that use regular expressions
to perform powerful pattern-matching and search-and-replace functions on text.*/


// There are two ways to construct the regular expression in JavaScript.
// 1.  Using the RegExp() constructor.
// 2.  Using the regular expression literal.

/* syntax for creating a regular expression using the RegExp() constructor:
            var pattern = new RegExp(pattern, attributes);
            or simply
            var pattern = /pattern/attributes;
*/

// Function to test and display regex results
function displayRegex(pattern, testString, description) {
    const regex = pattern instanceof RegExp ? pattern : new RegExp(pattern);
    const match = testString.match(regex);
    const testResult = regex.test(testString);
    
    console.log(`=== ${description} ===`);
    console.log("Pattern:", regex);
    console.log("Test String:", testString);
    console.log("Matches:", match ? match : "No match");
    console.log("Test Result (true/false):", testResult);
    console.log("------------------------");
}

// Example 1: Simple word match
const wordRegex = /\bhello\b/i; // Matches "hello" (case-insensitive, word boundary)
displayRegex(wordRegex, "Hello world! Hello again.", "Match whole word 'hello'");

// Example 2: Email pattern
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
displayRegex(emailRegex, "user@example.com", "Validate email address");
displayRegex(emailRegex, "invalid-email", "Test invalid email");

// Example 3: Digits only
const digitRegex = /^\d+$/;
displayRegex(digitRegex, "12345", "Match only digits");
displayRegex(digitRegex, "123abc", "Test digits with letters");

// Example 4: Replace with regex
const replaceRegex = /\s+/g; // Matches one or more whitespace characters
const originalString = "Too   many   spaces   here";
const replacedString = originalString.replace(replaceRegex, " ");
console.log("=== Replace Example ===");
console.log("Pattern:", replaceRegex);
console.log("Original:", originalString);
console.log("After Replace:", replacedString);
console.log("------------------------");

// Example 5: Capture groups
const groupRegex = /(\w+)\s(\w+)/; // Captures two words separated by space
const groupString = "John Doe";
const groupMatch = groupString.match(groupRegex);
console.log("=== Capture Groups Example ===");
console.log("Pattern:", groupRegex);
console.log("Test String:", groupString);
console.log("Full Match:", groupMatch[0]);      // "John Doe"
console.log("Group 1:", groupMatch[1]);         // "John"
console.log("Group 2:", groupMatch[2]);         // "Doe"
console.log("------------------------");