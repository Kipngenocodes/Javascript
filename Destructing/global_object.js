    // JavaScript Global Object Demonstration

    // Different environments have different global object names
    // - Browser: window
    // - Node.js: global
    // - Web Workers: self
    // - ECMAScript 2020 introduced: globalThis (works everywhere)

    // PART 1: Creating global variables and functions

    // Creating global variables by assigning to the global object directly
    globalThis.globalVariable = "I'm available everywhere";

    // Creating a global function
    globalThis.sayHello = function() {
    return "Hello from the global scope!";
    };

    // Alternatively, variables and functions declared without var/let/const 
    // at the top level become global (not recommended, but demonstrates the concept)
    notRecommendedGlobal = "I'm also a global variable";

    // Function declaration at top level becomes global
    function globalFunction() {
    return "I'm a global function";
    }

    // PART 2: Demonstration of accessing global properties

    console.log("=== Accessing Global Variables and Functions ===");
    console.log(globalThis.globalVariable);  // "I'm available everywhere"
    console.log(globalVariable);             // Same as above, direct access
    console.log(globalThis.sayHello());      // "Hello from the global scope!"
    console.log(sayHello());                 // Same as above, direct access

    // PART 3: Built-in global properties and methods

    console.log("\n=== Built-in Global Properties ===");
    console.log("Infinity:", globalThis.Infinity);
    console.log("NaN:", globalThis.NaN);
    console.log("undefined:", globalThis.undefined);

    console.log("\n=== Built-in Global Functions ===");
    console.log("parseInt('42'):", globalThis.parseInt("42"));
    console.log("parseFloat('3.14'):", globalThis.parseFloat("3.14"));
    console.log("isNaN('hello'):", globalThis.isNaN("hello"));
    console.log("encodeURI('https://example.com/?q=test space'):", 
                globalThis.encodeURI("https://example.com/?q=test space"));

    // PART 4: Built-in constructor functions available globally

    console.log("\n=== Built-in Constructor Functions ===");
    console.log("Object constructor:", Object === globalThis.Object);
    console.log("Array constructor:", Array === globalThis.Array);
    console.log("String constructor:", String === globalThis.String);
    console.log("Number constructor:", Number === globalThis.Number);
    console.log("Boolean constructor:", Boolean === globalThis.Boolean);
    console.log("Date constructor:", Date === globalThis.Date);
    console.log("RegExp constructor:", RegExp === globalThis.RegExp);
    console.log("Map constructor:", Map === globalThis.Map);
    console.log("Set constructor:", Set === globalThis.Set);
    console.log("Promise constructor:", Promise === globalThis.Promise);

    // PART 5: Environment detection using the global object

    function detectEnvironment() {
    if (typeof window !== 'undefined') return "Browser";
    if (typeof global !== 'undefined') return "Node.js";
    if (typeof self !== 'undefined') return "Web Worker";
    return "Unknown Environment";
    }

    console.log("\n=== Environment Detection ===");
    console.log("Current environment:", detectEnvironment());
    console.log("globalThis is available everywhere:", typeof globalThis !== 'undefined');

    // PART 6: Inspecting the global object

    console.log("\n=== Global Object Properties ===");
    // Get a subset of properties for cleaner output
    const sampleProps = Object.getOwnPropertyNames(globalThis).slice(0, 10);
    console.log("Sample global object properties:", sampleProps);

    // PART 7: Adding properties and methods at runtime

    globalThis.currentTime = function() {
    return new Date().toLocaleTimeString();
    };

    console.log("\n=== Runtime Additions ===");
    console.log("Current time:", currentTime());

    // PART 8: Examining differences in browser vs Node.js
    // (This code will behave differently depending on where it's run)

    console.log("\n=== Environment-Specific Globals ===");
    if (typeof window !== 'undefined') {
    console.log("Browser-specific globals:");
    console.log("- document exists:", typeof document !== 'undefined');
    console.log("- navigator exists:", typeof navigator !== 'undefined');
    console.log("- localStorage exists:", typeof localStorage !== 'undefined');
    } else if (typeof global !== 'undefined') {
    console.log("Node.js-specific globals:");
    console.log("- process exists:", typeof process !== 'undefined');
    console.log("- Buffer exists:", typeof Buffer !== 'undefined');
    console.log("- __dirname exists:", typeof __dirname !== 'undefined');
    }

