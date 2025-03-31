/*The tagged templates in JavaScript are an advanced version of the template literals. 
You can define the function to format the string and 
use it with a template literal to format the string according to the functionality of the function.
*/
/*  syntax for tagged templates : 
function format(str, exp1, exp2, ...expN) {
    Format the string
}

let res = format`${exp1} abcd ${exp2}`;
*/
/**
 * Tagged Templates in JavaScript
 * 
 * Tagged templates are a more advanced form of template literals that allow
 * you to parse template literals with a function. The first argument contains an
 * array of string values and the rest of the arguments are the processed expressions.
 */

// PART 1: Basic Tagged Template
console.log("=== PART 1: Basic Tagged Template ===");

// This is our tag function
function basicTag(strings, ...values) {
  console.log('Strings array:', strings);
  console.log('Values array:', values);
  
  // Returning a combined string
  let result = '';
  strings.forEach((string, i) => {
    result += string;
    if (i < values.length) {
      result += values[i];
    }
  });
  return result;
}

const name = 'Alice';
const age = 28;

// Using the tag with a template literal
const output = basicTag`My name is ${name} and I am ${age} years old.`;
console.log('Result:', output);

// PART 2: Transforming Values with Tagged Templates
console.log("\n=== PART 2: Transforming Values ===");

// A tag function that uppercases all expressions
function upperExpressions(strings, ...values) {
  let result = '';
  strings.forEach((string, i) => {
    result += string;
    if (i < values.length) {
      result += String(values[i]).toUpperCase();
    }
  });
  return result;
}

const country = 'france';
const city = 'paris';

const transformedOutput = upperExpressions`I'm from ${country} and I live in ${city}.`;
console.log('Transformed result:', transformedOutput);

// PART 3: HTML Escaping with Tagged Templates
console.log("\n=== PART 3: HTML Escaping ===");

// A tag function that escapes HTML special characters
function html(strings, ...values) {
  const escapeHTML = (str) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };
  
  let result = '';
  strings.forEach((string, i) => {
    result += string;
    if (i < values.length) {
      result += escapeHTML(String(values[i]));
    }
  });
  return result;
}

const userInput = '<script>alert("XSS attack!")</script>';
const safeHTML = html`<div>User provided content: ${userInput}</div>`;
console.log('HTML-escaped result:', safeHTML);

// PART 4: Custom Styling with Tagged Templates
console.log("\n=== PART 4: Custom Styling ===");

// A tag function that adds CSS-like styling to console output
function styled(strings, ...values) {
  // Define CSS-like styles that map to console styles
  const styles = {
    'color:red': 'color: red',
    'color:green': 'color: green',
    'color:blue': 'color: blue',
    'font-weight:bold': 'font-weight: bold',
    'font-style:italic': 'font-style: italic'
  };
  
  // Process the template by extracting style tags
  let result = '';
  let consoleStyles = [];
  
  strings.forEach((string, i) => {
    // Add the string part
    result += string;
    
    // Process the expression part if it exists
    if (i < values.length) {
      if (typeof values[i] === 'string' && values[i].startsWith('style:')) {
        // This is a style directive
        const styleKey = values[i].substring(6);
        if (styles[styleKey]) {
          consoleStyles.push(styles[styleKey]);
        }
        // Don't add the style directive to the result string
      } else {
        // This is a regular value to display
        result += `%c${values[i]}`;
      }
    }
  });
  
  // Log the styled result
  console.log('Styled logging:');
  console.log(result, ...consoleStyles);
  
  return result;
}

// Using the styled tag (note: styling will only show in browser console)
styled`This text is normal, but ${'style:color:red'} this text should be ${'red'} and 
${'style:color:blue'} ${'style:font-weight:bold'} this text should be ${'blue and bold'}.`;

// PART 5: Internationalization with Tagged Templates
console.log("\n=== PART 5: Internationalization (i18n) ===");

// A simplified i18n tag function
function i18n(strings, ...values) {
  // Pretend translation dictionary
  const translations = {
    en: {
      'Hello': 'Hello',
      'My name is': 'My name is',
      'I am': 'I am',
      'years old': 'years old'
    },
    es: {
      'Hello': 'Hola',
      'My name is': 'Me llamo',
      'I am': 'Tengo',
      'years old': 'años'
    },
    fr: {
      'Hello': 'Bonjour',
      'My name is': 'Je m\'appelle',
      'I am': 'J\'ai',
      'years old': 'ans'
    }
  };
  
  // Choose language
  const language = 'es'; // could be dynamic based on user preference
  const dictionary = translations[language];
  
  let translatedStrings = [...strings];
  
  // Translate known strings
  Object.keys(dictionary).forEach(key => {
    translatedStrings = translatedStrings.map(str => 
      str.replace(key, dictionary[key])
    );
  });
  
  // Combine strings and values
  let result = '';
  translatedStrings.forEach((string, i) => {
    result += string;
    if (i < values.length) {
      result += values[i];
    }
  });
  
  return result;
}

const personName = 'Carlos';
const personAge = 35;

const translatedText = i18n`Hello! My name is ${personName} and I am ${personAge} years old.`;
console.log('Translated text:', translatedText);

// PART 6: Advanced Usage - Creating a DSL (Domain Specific Language)
console.log("\n=== PART 6: Creating a DSL (SQL Builder) ===");

// A simple SQL query builder using tagged templates
function sql(strings, ...values) {
  // Replace each value with a placeholder and store the values for later
  let query = '';
  const params = [];
  
  strings.forEach((string, i) => {
    query += string;
    if (i < values.length) {
      // Add a parameter placeholder and store the actual value
      query += '?';
      params.push(values[i]);
    }
  });
  
  // In a real implementation, this would prepare and execute an SQL statement
  return {
    query,
    params,
    execute() {
      console.log(`Executing query: ${this.query}`);
      console.log(`With parameters: ${JSON.stringify(this.params)}`);
      // Simulate query execution
      return `Query executed with ${this.params.length} parameters`;
    }
  };
}

const userId = 42;
const status = 'active';

const query = sql`
  SELECT * FROM users
  WHERE id = ${userId}
  AND status = ${status}
  ORDER BY created_at DESC
  LIMIT 10
`;

console.log('Generated query:', query.query);
console.log('Parameters:', query.params);
console.log(query.execute());

// PART 7: Tagged Templates with Regular Expressions
console.log("\n=== PART 7: Tagged Templates with RegExp ===");

// A tag function that creates a RegExp object from a template
function regex(strings, ...values) {
  // Escape special regex characters in the string parts
  const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  // Build the regex pattern
  let pattern = '';
  strings.forEach((string, i) => {
    pattern += escapeRegExp(string);
    if (i < values.length) {
      // If the value is a RegExp object, extract its pattern without escaping
      if (values[i] instanceof RegExp) {
        pattern += values[i].source;
      } else {
        pattern += escapeRegExp(String(values[i]));
      }
    }
  });
  
  // Return a new RegExp object
  return new RegExp(pattern);
}

// A digit pattern to reuse
const digits = /\d+/;

// Create a regex to match a date format like "YYYY-MM-DD"
const datePattern = regex`${digits}-${digits}-${digits}`;
console.log('RegExp pattern:', datePattern);

// Test the pattern
const testDate1 = '2023-03-15';
const testDate2 = 'March 15, 2023';

console.log(`Does "${testDate1}" match? ${datePattern.test(testDate1)}`);
console.log(`Does "${testDate2}" match? ${datePattern.test(testDate2)}`);

// PART 8: Using Raw Strings in Tagged Templates
console.log("\n=== PART 8: Using Raw Strings ===");

// A tag function that uses the raw strings
function raw(strings, ...values) {
  console.log('Cooked strings:', strings);
  console.log('Raw strings:', strings.raw);
  
  let result = '';
  strings.raw.forEach((rawString, i) => {
    result += rawString;
    if (i < values.length) {
      result += values[i];
    }
  });
  
  return result;
}

// Special characters are not processed in raw strings
const cookedVsRaw = raw`Line 1\nLine 2\tTabbed\u00A9`;
console.log('Result with raw strings:', cookedVsRaw);

// The String.raw built-in tag function
const builtInRaw = String.raw`Line 1\nLine 2\tTabbed\u00A9`;
console.log('Result with String.raw:', builtInRaw);

// PART 9: Composing Multiple Tagged Templates
console.log("\n=== PART 9: Composing Tagged Templates ===");

// Compose multiple tagged template functions
function compose(...tags) {
  return function(strings, ...values) {
    // Process the template with the first tag
    let result = tags[0](strings, ...values);
    
    // Process the result with the remaining tags
    for (let i = 1; i < tags.length; i++) {
      // For simplicity, we're assuming the result is a string that can be tagged again
      // In a real implementation, you'd need to handle different return types
      const singleString = [result];
      result = tags[i](singleString);
    }
    
    return result;
  };
}

// Simple tag functions to compose
function uppercase(strings, ...values) {
  let result = '';
  strings.forEach((string, i) => {
    result += string.toUpperCase();
    if (i < values.length) {
      result += String(values[i]).toUpperCase();
    }
  });
  return result;
}

function reverse(strings, ...values) {
  if (typeof strings === 'string') {
    // Handle the case where we have a single string from composition
    return strings.split('').reverse().join('');
  }
  
  // Normal tag function behavior
  let result = '';
  strings.forEach((string, i) => {
    result += string;
    if (i < values.length) {
      result += values[i];
    }
  });
  return result.split('').reverse().join('');
}

// Compose uppercase and reverse
const upperReverse = compose(uppercase, reverse);

const message = "Hello";
const composedResult = upperReverse`${message} world!`;
console.log('Result after composition:', composedResult);
