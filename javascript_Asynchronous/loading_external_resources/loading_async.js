// loading_async.js
const fetch = require('node-fetch').default;

async function loadScript(src) {
    try {
    const response = await fetch(src);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${src}: ${response.statusText}`);
    }
    const scriptContent = await response.text();
    // Evaluate the script (use with caution)
    eval(scriptContent);
    return Promise.resolve();
    } catch (error) {
    return Promise.reject(error);
    }
}

const scripts = [
  // Replace with real script URLs
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.6/underscore-min.js'
];

Promise.all(scripts.map(src => loadScript(src)))
    .then(() => {
    console.log('All scripts loaded successfully');
    // Example: Verify if a library is loaded
    if (typeof jQuery !== 'undefined') {
        console.log('jQuery is loaded:', jQuery.fn.jquery);
    }
    if (typeof _ !== 'undefined') {
        console.log('Underscore is loaded:', _.VERSION);
    }
    })
    .catch(error => {
    console.error('Script loading failed:', error);
    });