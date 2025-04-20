// Asynchronous JavaScript is a programming technique that allows you
//  to perform tasks without blocking the execution of other code.
// Asynchronous JavaScript to make your application multi-threaded. 

// Example of asynchronous JavaScript using setTimeout
// setTimeout is a built-in JavaScript function that allows you to execute a function after a specified delay (in milliseconds).
// It is commonly used to simulate asynchronous behavior in JavaScript. 
// It is a way to perform non-blocking operations in JavaScript.
// It allows you to execute a function after a specified delay without blocking the execution of other code.
// It is commonly used to simulate asynchronous behavior in JavaScript.

// Example of asynchronous JavaScript using setTimeout
setTimeout(function() {
    console.log("This message is displayed after a 2-second delay.");
}
, 20000); // 2000 milliseconds = 2 seconds
// console.log("This message is displayed immediately.");   

// Real time use case of asynchronous JavaScript
/*
1. Fetching data from a server: When you make an API call to fetch data from a server,
   the request is sent asynchronously, allowing your application to continue running while waiting for the response.
2. User interactions: When a user interacts with a web page (e.g., clicking a button),
   you can use asyncgithronous JavaScript to handle the event without blocking the main thread.
3. Animations: You can use asynchronous JavaScript to update the UI without blocking the main thread.
4. Background tasks: You can use asynchronous JavaScript to perform long-running tasks in the background,
   without blocking the main thread.
5. Timers: You can use asynchronous JavaScript to set timers and execute code after a specified delay.
6. Promises: You can use promises to handle asynchronous operations in a more readable and manageable way.
7. Callbacks: You can use callbacks to handle asynchronous operations in JavaScript.
8. Event listeners: You can use event listeners to handle user interactions asynchronously. 
9. Web Workers: You can use Web Workers to run JavaScript code in the background, allowing you to perform long-running tasks without blocking the main thread.
10. AJAX: You can use AJAX to make asynchronous HTTP requests to a server, allowing you to fetch data without reloading the page.
11. Data Caching: You can use asynchronous JavaScript to cache data locally, without blocking the main thread.
*/