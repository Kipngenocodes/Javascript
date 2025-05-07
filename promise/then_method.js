const num1 = 10;
const num2 = 20;

const promise = new Promise((resolve, reject) => {
    if (num1 === num2) {
        resolve("The numbers are equal");
    } else {
        reject(new Error("The numbers are not equal")); // Use Error object
    }
});

// Approach 1: Using .then() and .catch()
promise
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.error("Error:", error.message); // Output: Error: The numbers are not equal
    });

// Approach 2: Using success and error callbacks with .then()
function successCallback(message) {
    console.log("Success:", message);
}

function errorCallback(error) {
  console.error("Error:", error.message); // Output: Error: The numbers are not equal
}

promise.then(successCallback, errorCallback);

// Approach 3: Using async/await for cleaner handling
async function processNumbers() {
    try {
        const result = await promise;
        console.log("Success:", result);
    } catch (error) {
    console.error("Error:", error.message); // Output: Error: The numbers are not equal
    }
}