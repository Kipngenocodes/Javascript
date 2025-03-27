// Target object
const target = {
    name: "Alice",
    age: 30
};

// Handler with traps
const handler = {
    // Trap property access
    get(target, property, receiver) {
        if (property in target) {
            return Reflect.get(target, property, receiver); // Default behavior
        }
        return "Property not found"; // Custom behavior
    },

    // Trap property assignment
    set(target, property, value, receiver) {
        if (typeof value === "number" && property === "age") {
            console.log(`Setting ${property} to ${value}`);
            return Reflect.set(target, property, value, receiver);
        }
        throw new Error(`Invalid value for ${property}`);
    },

    // Trap property deletion
    deleteProperty(target, property) {
        if (property === "name") {
            console.log("Cannot delete name!");
            return false; // Prevent deletion
        }
        return Reflect.deleteProperty(target, property);
    },

    // Trap the 'in' operator
    has(target, property) {
        return property !== "hidden" && property in target; // Hide 'hidden'
    },

    // Trap function calls (if target were a function)
    apply(target, thisArg, argumentsList) {
        console.log("Function called with args:", argumentsList);
        return target.apply(thisArg, argumentsList);
    }
};

// Create the proxy
const proxy = new Proxy(target, handler);

// Test the proxy
console.log(proxy.name);         // "Alice"
console.log(proxy.age);          // 30
console.log(proxy.unknown);      // "Property not found"
proxy.age = 31;                  // "Setting age to 31"
console.log(proxy.age);          // 31
// proxy.age = "thirty";         // Error: Invalid value for age
delete proxy.name;               // "Cannot delete name!"
console.log("name" in proxy);    // true
console.log("hidden" in proxy);  // false
proxy();                         // Function called with args: []