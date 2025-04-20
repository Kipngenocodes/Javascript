// Asynchronous JavaScript is a programming technique that allows you
//  to perform tasks without blocking the execution of other code.
// Asynchronous JavaScript to make your application multi-threaded. 

// Example of async/await function
async function fetchData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}