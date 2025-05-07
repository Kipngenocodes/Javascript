// C:\Users\p1\Desktop\javascript\javascript_Asynchronous\loading_external_resources\delayedGreeting.js
function delayedGreeting() {
    setTimeout(() => {
        console.log("Hello after 2 seconds!");
    }, 2000);
}
//This has to be challenging 

function delayedGreetingWithCallback(callback) {
    setTimeout(() => {
        console.log("Hello after 20 seconds!");
        callback(); // Call the callback function after the delay
    }, 20000);
}

// Execute the functions to get output
delayedGreeting(); // Trigger the first function

delayedGreetingWithCallback(() => {
    console.log("Callback executed after 20 seconds!");
});   