/*The JavaScript proxies are objects that allow you to wrap a
particular object and customize the fundamental operations of the object, 
like getting and setting object properties.
*/
// The proxies are used to implement features such as logging, caching, and securities.
// The proxies are used to intercept the operations of an object and customize them.
// The proxies are used to create a new object that wraps the original object and provides a new interface for it.
// Sntax: const obj = new Proxy(targetObj, Handler);
// 1. Define the base object (a user profile)
const user = {
    _id: "user123",          // Private field (should not be accessible)
    firstName: "John",
    lastName: "Doe",
    age: 30,
    getSecretToken() {
      console.log("Secret token accessed!");
      return "s3cr3t-t0k3n";
    },
  };
  
  // 2. Create a Proxy with all combined features
  const enhancedUser = new Proxy(user, {
    // ==== (A) Property Access Control ====
    get(target, prop) {
      // Block access to private fields (starting with '_')
      if (prop.startsWith('_')) {
        throw new Error(`Access denied to private field: ${prop}`);
      }
  
      // Virtual property: fullName (combines firstName + lastName)
      if (prop === 'fullName') {
        return `${target.firstName} ${target.lastName}`;
      }
  
      // Return the actual property
      return target[prop];
    },
  
    // ==== (B) Property Assignment Validation ====
    set(target, prop, value) {
      // Prevent modifying 'age' with invalid values
      if (prop === 'age') {
        if (typeof value !== 'number' || value < 0 || value > 120) {
          throw new Error('Age must be a number between 0 and 120');
        }
      }
  
      // Log changes (Observable behavior)
      console.log(`[LOG] Property "${prop}" changed from ${target[prop]} to ${value}`);
      target[prop] = value;
      return true; // Required for strict mode
    },
  
    // ==== (C) Function Interception (Caching) ====
    apply(target, thisArg, args) {
      const cacheKey = `func-${target.name}-${JSON.stringify(args)}`;
      if (cache.has(cacheKey)) {
        console.log(`[CACHE] Returning cached result for ${target.name}`);
        return cache.get(cacheKey);
      }
  
      console.log(`[LOG] Function ${target.name} called with args: ${args}`);
      const result = target.apply(thisArg, args);
      cache.set(cacheKey, result);
      return result;
    },
  
    // ==== (D) Prevent Deletion of Critical Fields ====
    deleteProperty(target, prop) {
      if (prop === 'firstName' || prop === 'lastName') {
        throw new Error(`Cannot delete required field: ${prop}`);
      }
      delete target[prop];
      return true;
    },
  
    // ==== (E) Custom Property Enumeration (for virtual 'fullName') ====
    ownKeys(target) {
      return Reflect.ownKeys(target).filter(key => !key.startsWith('_'));
    },
  });
  
  // 3. Cache storage for memoization
  const cache = new Map();
  
  // 4. Testing the Proxy
  console.log(enhancedUser.fullName); // "John Doe" (virtual property)
  enhancedUser.age = 31;              // [LOG] Property "age" changed from 30 to 31
  enhancedUser.age = -5;              // ❌ Error: Age must be between 0 and 120
  console.log(enhancedUser._id);      // ❌ Error: Access denied to private field: _id
  console.log(enhancedUser.getSecretToken()); // [LOG] Function called, then cached
  delete enhancedUser.firstName;      // ❌ Error: Cannot delete required field: firstName