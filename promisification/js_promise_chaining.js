// The Concept od promise chaining in Javascript allows you to do multiple related asynchronous operations with single promise object.
//  It is a way to handle multiple asynchronous operations in a more readable and maintainable way.
// Syntax of promise chaining is to return the promise object from the then() method and call the next then() method on it.
/* promise
.then((result) => {
    Handle the result of the previous operation
    return anotherPromise;
})
.then((result) => {
    Handle the result of the previous operation
    return anotherPromise;
})
.catch((error) => {
    Handle any errors that occurred in the chain
}); */   

//  Example of promise chaining
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === 'validURL') {
                resolve({ data: 'Fetched Data' });
            } else {
                reject(new Error('Invalid URL'));
            }
        }, 1000);
    });
}
function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data.data === 'Fetched Data') {
                resolve({ processedData: 'Processed Data' });
            } else {
                reject(new Error('Invalid Data'));
            }
        }, 1000);
    });
}
function displayData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(data.processedData);
            resolve('Data Displayed');
        }, 1000);
    });
}
// Example of promise chaining
fetchData('validURL')
    .then(processData)
    .then(displayData)
    .catch((error) => {
        console.error('Error:', error.message);
    });