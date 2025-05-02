function validateSync(data) {
        const errors = {};
        if (!data.username) errors.username = 'Username is required';
        if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            errors.email = 'Invalid email format';
        }
        return Object.keys(errors).length ? errors : null;
    }

    const data = { username: 'kipchep', email: 'user@gmail.com' };
    console.log(validateSync(data));
  // Output: { username: 'Username is required', email: 'Invalid email format' }