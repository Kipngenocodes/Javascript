// C:\Users\p1\Desktop\javascript\javascript_Asynchronous\loading_external_resources\validateAsync.js
const fetch = require('node-fetch').default;

async function validateAsync(data) {
    const errors = {};

    // Synchronous checks
    if (!data.username) errors.username = 'Username is required';
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = 'Invalid email format';
    }

  // Asynchronous check: Check if email exists using JSONPlaceholder
    if (!errors.email) {
        try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${encodeURIComponent(data.email)}`);
        if (!response.ok) {
            throw new Error(`API request failed: ${response.statusText}`);
        }
        const result = await response.json();
        // If result array has entries, email is "taken"
        if (result.length > 0) {
            errors.email = 'Email is already registered';
        }
        } catch (error) {
        errors.email = 'Failed to validate email';
        console.error('API error:', error);
        }
    }

    return Object.keys(errors).length ? errors : null;
}

// Example usage
(async () => {
    const data = { username: 'john', email: 'Spincere@april.biz' }; // Email exists in JSONPlaceholder
    const errors = await validateAsync(data);
    if (errors) {
        console.log('Validation errors:', errors);
    } else {
        console.log('Validation passed:', data);
    }
})();