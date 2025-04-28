/**
 * JavaScript Async/Await Tutorial
 * 
 * Async/await provides a cleaner way to work with Promises in JavaScript,
 * making asynchronous code look and behave more like synchronous code.
 */

// Example 1: Basic number validation with async/await
async function isEvenPromise(num) {
    // Simulating some async operation
    return new Promise((resolve, reject) => {
        // Add a small delay to simulate async processing
        setTimeout(() => {
            if (typeof num !== 'number') {
                reject('Input must be a number');
            }
            else if (num % 2 === 0) {
                resolve(`${num} is even`);
            } else {
                reject(`${num} is odd`);
            }
        }, 500);
    });
}

// Example 2: Simulated API call
async function fetchUserData(userId) {
    // Simulating fetch with a Promise that doesn't require actual HTTP
    return new Promise((resolve, reject) => {
        console.log(`Fetching data for user ${userId}...`);
        
        // Simulate network delay
        setTimeout(() => {
            // Sample data for demo purposes
            if (userId < 1) {
                reject(new Error('Invalid user ID'));
                return;
            }
            
            const userData = {
                id: userId,
                name: `User ${userId}`,
                email: `user${userId}@example.com`,
                registered: new Date().toISOString()
            };
            
            console.log("Data retrieved successfully");
            resolve(userData);
        }, 1000);
    });
}

// Example 3: Chaining multiple async operations
async function processUserActivity(userId) {
    try {
        // First async operation
        const userData = await fetchUserData(userId);
        console.log(`Found user: ${userData.name}`);
        
        // Second async operation (simulating activity fetch)
        const userActivity = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    userId: userId,
                    lastLogin: new Date().toISOString(),
                    activities: ['login', 'view profile', 'edit settings']
                });
            }, 800);
        });
        
        // Combining results from multiple async operations
        return {
            user: userData,
            activity: userActivity,
            summary: `${userData.name} performed ${userActivity.activities.length} activities`
        };
    } catch (error) {
        console.error(`Failed to process user activity: ${error.message || error}`);
        throw error; // Re-throw to allow calling function to handle it
    }
}

// Example 4: Parallel async operations with Promise.all
async function fetchMultipleUsers(userIds) {
    try {
        console.log(`Fetching data for ${userIds.length} users simultaneously...`);
        
        // Run all fetch operations in parallel
        const userPromises = userIds.map(id => fetchUserData(id));
        const users = await Promise.all(userPromises);
        
        console.log(`Successfully retrieved ${users.length} users`);
        return users;
    } catch (error) {
        console.error('Error in batch operation:', error);
        throw error;
    }
}

// Main function to execute our examples
async function runExamples() {
    // Example 1 tests
    console.log("\n--- Example 1: Basic Promise Tests ---");
    try {
        console.log(await isEvenPromise(4)); // Should resolve
    } catch (error) {
        console.error(error);
    }
    
    try {
        await isEvenPromise(5); // Should reject
    } catch (error) {
        console.error(error);
    }
    
    try {
        await isEvenPromise("hello"); // Should reject
    } catch (error) {
        console.error(error);
    }

    // Example 2 test
    console.log("\n--- Example 2: User Data Fetch ---");
    try {
        const user = await fetchUserData(42);
        console.log('User data:', user);
    } catch (error) {
        console.error('Failed to fetch user:', error);
    }
    
    // Example 3 test
    console.log("\n--- Example 3: Chained Operations ---");
    try {
        const processedData = await processUserActivity(7);
        console.log('Processed data:', processedData);
    } catch (error) {
        console.error('Processing failed:', error);
    }
    
    // Example 4 test
    console.log("\n--- Example 4: Parallel Operations ---");
    try {
        const users = await fetchMultipleUsers([1, 2, 3]);
        console.log('Multiple users:', users);
    } catch (error) {
        console.error('Failed to fetch multiple users:', error);
    }
}

// Execute all examples
console.log("Starting async/await examples...");
runExamples().then(() => {
    console.log("\nAll examples completed!");
}).catch(err => {
    console.error("Fatal error in examples:", err);
});