// In JavaScript, each object contains the prototype property. 
// The prototype of each object contains the methods and properties related to the object.
//  So, it is also called the native prototype.

// The prototype property is used to add new properties and methods to the object constructor.
// The prototype property is also used to create an object and set values if there are any object properties present.   
// syntax for object prototype: obj.prototype.name = value;


// Function to display native JavaScript objects
function displayNativeObjects() {
    // Array of common native JavaScript objects
    const nativeObjects = [
        { name: 'Array', object: Array },
        { name: 'Object', object: Object },
        { name: 'String', object: String },
        { name: 'Number', object: Number },
        { name: 'Boolean', object: Boolean },
        { name: 'Date', object: Date },
        { name: 'Math', object: Math },
        { name: 'RegExp', object: RegExp },
        { name: 'Function', object: Function },
        { name: 'Error', object: Error },
        { name: 'Promise', object: Promise },
        { name: 'JSON', object: JSON }
    ];

    // Container for output
    console.log('=== Native JavaScript Objects ===');
    
    nativeObjects.forEach(obj => {
        console.log(`\n${obj.name}:`);
        console.log('------------------------');
        
        // Get all properties and methods
        const properties = Object.getOwnPropertyNames(obj.object);
        
        properties.forEach(prop => {
            try {
                let value = obj.object[prop];
                let type = typeof value;
                
                // Handle different types of properties
                if (type === 'function') {
                    console.log(`${prop}: [Function]`);
                } else {
                    console.log(`${prop}: [${type}] ${value}`);
                }
            } catch (e) {
                console.log(`${prop}: [inaccessible]`);
            }
        });
    });
}

// Execute the function
displayNativeObjects();

// Example usage of some native objects
console.log('\n=== Example Usage ===');
const arr = new Array(1, 2, 3);
console.log('Array example:', arr);
console.log('Math.PI:', Math.PI);
console.log('Date now:', new Date());
