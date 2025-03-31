    /**
     * Static methods
     * Static methods belong to the class itself rather than to instances of the class.
     * They are called on the class, not on objects created from the class.
     * Static methods are often used for utility functions that don't require access
     * to instance-specific data.
     */

    // Basic example of a class with static methods
    class MathUtils {
        // Static method - called on the class, not on instances
        static add(x, y) {
            return x + y;
        }
        
        // Another static method
        static subtract(x, y) {
            return x - y;
        }
        
        // Static method that returns a formatted string
        static formatNumber(num) {
            return `$${num.toFixed(2)}`;
        }
    }

    // Using static methods - notice we call them on the class itself, not on an instance
    console.log("MathUtils.add(5, 3):", MathUtils.add(5, 3)); // Output: 8
    console.log("MathUtils.subtract(10, 4):", MathUtils.subtract(10, 4)); // Output: 6
    console.log("MathUtils.formatNumber(123.456):", MathUtils.formatNumber(123.456)); // Output: $123.46

    // Attempting to call a static method on an instance would cause an error
    try {
        const mathInstance = new MathUtils();
        console.log(mathInstance.add(1, 2)); // This will throw an error
    } catch (error) {
        console.log("Error when calling static method on instance:", error.message);
    }

    /**
     * Static methods in class inheritance
     */
    class Shape {
        constructor(name) {
            this.name = name;
        }
        
        // Instance method
        getInfo() {
            return `This is a ${this.name}`;
        }
        
        // Static method
        static createCircle(radius) {
            return new Circle(radius);
        }
        
        // Static method that uses other static methods
        static compareAreas(shape1, shape2) {
            const area1 = shape1.calculateArea();
            const area2 = shape2.calculateArea();
            
            if (area1 > area2) {
                return `${shape1.name} has a larger area`;
            } else if (area2 > area1) {
                return `${shape2.name} has a larger area`;
            } else {
                return "Both shapes have the same area";
            }
        }
    }

    class Circle extends Shape {
        constructor(radius) {
            super("Circle");
            this.radius = radius;
        }
        
        calculateArea() {
            return Math.PI * this.radius * this.radius;
        }
        
        // Static method specific to Circle
        static calculateCircumference(radius) {
            return 2 * Math.PI * radius;
        }
    }

    class Square extends Shape {
        constructor(sideLength) {
            super("Square");
            this.sideLength = sideLength;
        }
        
        calculateArea() {
            return this.sideLength * this.sideLength;
        }
        
        // Static method specific to Square
        static calculatePerimeter(sideLength) {
            return 4 * sideLength;
        }
    }

    // Using inherited static methods
    const circle = Shape.createCircle(5);
    console.log("Circle created with static method:", circle);
    console.log("Circle area:", circle.calculateArea().toFixed(2));

    // Creating instances directly
    const largerCircle = new Circle(10);
    const square = new Square(15);

    // Using static method from parent class
    console.log("Comparing areas:", Shape.compareAreas(circle, square));

    // Using class-specific static methods
    console.log("Circle circumference:", Circle.calculateCircumference(5).toFixed(2));
    console.log("Square perimeter:", Square.calculatePerimeter(15));

    /**
     * Static properties (Class variables)
     */
    class Counter {
        // Static property - shared across all instances
        static count = 0;
        
        constructor() {
            // Increment the static counter whenever a new instance is created
            Counter.count++;
        }
        
        // Instance method to get the current count
        getCount() {
            return Counter.count;
        }
        
        // Static method to reset the counter
        static resetCount() {
            Counter.count = 0;
            return "Counter reset";
        }
    }

    console.log("\nDemonstrating static properties:");
    console.log("Initial Counter.count:", Counter.count);

    // Create instances and observe how the static property changes
    const counter1 = new Counter();
    console.log("After creating counter1, Counter.count:", Counter.count);

    const counter2 = new Counter();
    const counter3 = new Counter();
    console.log("After creating 3 counters, Counter.count:", Counter.count);

    // All instances see the same static property value
    console.log("counter1.getCount():", counter1.getCount());
    console.log("counter2.getCount():", counter2.getCount());

    // Reset using static method
    console.log(Counter.resetCount());
    console.log("After reset, Counter.count:", Counter.count);

    /**
     * Real-world example: Database connection manager
     */
    class DatabaseConnection {
        // Private connection instance (using symbol for privacy)
        static #instance = null;
        
        constructor(connectionString) {
            if (DatabaseConnection.#instance) {
                throw new Error("DatabaseConnection is a singleton. Use DatabaseConnection.getInstance()");
            }
            
            this.connectionString = connectionString;
            this.isConnected = false;
            DatabaseConnection.#instance = this;
        }
        
        connect() {
            this.isConnected = true;
            console.log(`Connected to database with string: ${this.connectionString}`);
        }
        
        query(sql) {
            if (!this.isConnected) {
                throw new Error("Not connected to database");
            }
            console.log(`Executing query: ${sql}`);
            return `Results for ${sql}`;
        }
        
        // Static method to get the singleton instance
        static getInstance(connectionString) {
            if (!DatabaseConnection.#instance && connectionString) {
                new DatabaseConnection(connectionString);
            }
            return DatabaseConnection.#instance;
        }
        
        // Static utility method
        static isValidConnectionString(connectionString) {
            return typeof connectionString === 'string' && 
                connectionString.includes('://') && 
                connectionString.length > 10;
        }
    }

    console.log("\nDemonstrating a Singleton with static methods:");

    // Check if a connection string is valid
    const connectionString = "postgresql://user:password@localhost:5432/mydb";
    console.log("Is connection string valid?", 
        DatabaseConnection.isValidConnectionString(connectionString));

    // Get a database instance
    const db = DatabaseConnection.getInstance(connectionString);
    db.connect();
    console.log(db.query("SELECT * FROM users"));

    // Try to create a second instance - should throw an error
    try {
        const db2 = new DatabaseConnection("another-connection");
    } catch (error) {
        console.log("Error creating second instance:", error.message);
    }

    // Get the same instance again
    const sameDb = DatabaseConnection.getInstance();
    console.log("Are the instances the same object?", db === sameDb);

    /**
     * Key points about static methods:
     * 1. They are defined using the 'static' keyword
     * 2. They are called on the class, not on instances
     * 3. They cannot access instance data (no 'this' keyword refers to the instance)
     * 4. They are useful for utility functions and class-level operations
     * 5. They can call other static methods using the class name
     * 6. Child classes inherit static methods from parent classes
     */