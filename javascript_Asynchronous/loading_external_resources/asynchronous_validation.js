// validateAsync.js (Node.js)
const fetch = require('node-fetch').default;

async function validateAsync(data) {
    const errors = {};

    // Synchronous checks
    if (!data.username) errors.username = 'Username is required';
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = 'Invalid email format';
    }

    // Asynchronous check: Ensure email is not taken
    if (!errors.email) {
        try {
        const response = await fetch(`https://api.example.com/check-email?email=${encodeURIComponent(data.email)}`);
        if (!response.ok) {
            throw new Error('API request failed');
        }
        const result = await response.json();
        if (result.taken) {
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
    const data = { username: 'john', email: 'john@example.com' };
    const errors = await validateAsync(data);
    if (errors) {
        console.log('Validation errors:', errors);
    } else {
        console.log('Validation passed:', data);
    }
})();
