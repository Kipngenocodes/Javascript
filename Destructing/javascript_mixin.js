// JavaScript Mixins Example

// Mixin function to add properties of source to target prototype
function mixin(target, source) {
    Object.keys(source).forEach(key => {
        Object.defineProperty(target.prototype, key, 
            Object.getOwnPropertyDescriptor(source, key));
    });
}

// Example 1: Using mixins with constructor functions
console.log("=== Example 1: Using mixins with constructor functions ===");

// Create constructor functions
function Vehicle() {
    this.isVehicle = true;
}

function Car() {
    this.name = "Car";
}

// Create mixin objects with methods
const movableMixin = {
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} has stopped`);
    }
};

const honkableMixin = {
    honk() {
        console.log(`${this.name} is honking: Beep beep!`);
    }
};

// Apply mixins to Car
mixin(Car, movableMixin);
mixin(Car, honkableMixin);

// Create an instance and use the mixed-in methods
const myCar = new Car();
console.log("Is myCar a Car?", myCar instanceof Car);
console.log("myCar name:", myCar.name);
myCar.move();
myCar.stop();
myCar.honk();

// Example 2: Using Object.assign for mixins with object literals
console.log("\n=== Example 2: Using Object.assign with object literals ===");

const parent = {
    name: "Parent",
    sayHello() {
        console.log(`Hello from ${this.name}`);
    }
};

const child = {
    name: "Child",
    sayGoodbye() {
        console.log(`Goodbye from ${this.name}`);
    }
};

// Correct way to mix properties from parent to child
Object.assign(child, parent);

// Now child has parent's methods
child.sayHello();
child.sayGoodbye();

// Example 3: Using mixins with ES6 classes
console.log("\n=== Example 3: Using mixins with ES6 classes ===");

// Mixin function for ES6 classes
const flyableMixin = Base => class extends Base {
    fly() {
        console.log(`${this.name} is flying high`);
    }
    
    land() {
        console.log(`${this.name} has landed safely`);
    }
};

const swimableMixin = Base => class extends Base {
    swim() {
        console.log(`${this.name} is swimming`);
    }
};

// Base class
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    eat() {
        console.log(`${this.name} is eating`);
    }
}

// Apply mixins to create new classes
class Bird extends flyableMixin(Animal) {
    chirp() {
        console.log(`${this.name} is chirping`);
    }
}

class Duck extends swimableMixin(flyableMixin(Animal)) {
    quack() {
        console.log(`${this.name} is quacking`);
    }
}

// Create instances
const sparrow = new Bird("Sparrow");
sparrow.eat();
sparrow.fly();
sparrow.chirp();

const donald = new Duck("Donald");
donald.eat();
donald.fly();
donald.swim();
donald.quack();

// Example 4: Using mixins to share behavior without inheritance
console.log("\n=== Example 4: Utility mixins without inheritance ===");

// Create utility methods as a mixin
const loggingMixin = {
    log(message) {
        console.log(`[${this.name}] ${message}`);
    },
    
    error(message) {
        console.error(`[ERROR][${this.name}] ${message}`);
    }
};

// Apply to different objects
class Service {
    constructor(name) {
        this.name = name;
    }
    
    process() {
        this.log("Processing data...");
        // Process logic
        this.log("Processing complete");
    }
}

// Apply the mixin
Object.assign(Service.prototype, loggingMixin);

const userService = new Service("UserService");
userService.process();
userService.error("Failed to fetch user data");