// Encapsulation using getters and setters
class User {
    constructor(name, email) {
      // Private variables (by convention with underscore)
      this._name = name;
      this._email = email;
      this._lastLogin = new Date();
    }
    
    // Getter methods
    get name() {
      return this._name;
    }
    
    get email() {
      return this._email;
    }
    
    get lastLogin() {
      return this._lastLogin;
    }
    
    // Setter methods
    set name(newName) {
      if (typeof newName === 'string' && newName.length > 0) {
        this._name = newName;
      } else {
        throw new Error('Name must be a non-empty string');
      }
    }
    
    set email(newEmail) {
      // Simple email validation
      if (/^\S+@\S+\.\S+$/.test(newEmail)) {
        this._email = newEmail;
      } else {
        throw new Error('Invalid email format');
      }
    }
    
    // No setter for lastLogin - making it read-only
  }
  
  // Usage example
  const user = new User('John Doe', 'john@example.com');
  
  // Using getters
  console.log(user.name);     // John Doe
  console.log(user.email);    // john@example.com
  console.log(user.lastLogin); // Current date/time
  
  // Using setters
  try {
    user.name = 'Jane Doe';   // Works fine
    console.log(user.name);   // Jane Doe
    
    user.email = 'invalid';   // Will throw an error
  } catch (error) {
    console.error(error.message);
  }
  
  // Trying to modify private property directly (not recommended)
  user._name = 'Direct Access'; // Works but violates encapsulation
  console.log(user.name);       // Direct Access