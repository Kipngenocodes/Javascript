/*Promisification in JavaScript is a concept to convert the callback
functions into a regular function, returning the promise.
The reason to convert the callback functions into promises 
is that when you need to write the nested callback functions, 
it increases the complexity of the code. So, you can write a function returning the promise.
*/

//In JavaScript, you can pass the function as an argument of another function called the callback function. 
// The callback functions are used to handle the asynchronous task.

/**
 * Promisification Examples in JavaScript
 * 
 * This file demonstrates various techniques for converting callback-based APIs
 * to Promise-based APIs through promisification.
 */

// ==========================================
// EXAMPLE 1: MANUAL PROMISIFICATION
// ==========================================

// Traditional callback-based function
function getUserFromDatabase(userId, callback) {
    // Simulating database query with setTimeout
    setTimeout(() => {
      if (userId <= 0) {
        callback(new Error('Invalid user ID'));
      } else {
        const user = {
          id: userId,
          name: `User ${userId}`,
          email: `user${userId}@example.com`
        };
        callback(null, user);
      }
    }, 1000);
  }
  
  // Manual promisification
  function getUserFromDatabasePromise(userId) {
    return new Promise((resolve, reject) => {
      getUserFromDatabase(userId, (error, user) => {
        if (error) {
          reject(error);
        } else {
          resolve(user);
        }
      });
    });
  }
  
  // Using the promisified function
  console.log('Example 1: Manual Promisification');
  getUserFromDatabasePromise(1)
    .then(user => {
      console.log('User found:', user);
      // Test error case
      return getUserFromDatabasePromise(0); 
    })
    .then(user => {
      console.log('This should not execute');
    })
    .catch(error => {
      console.error('Error fetching user:', error.message);
    });
  
  // ==========================================
  // EXAMPLE 2: CUSTOM PROMISIFY UTILITY
  // ==========================================
  
  // Generic promisify function
  function promisify(fn) {
    return function(...args) {
      return new Promise((resolve, reject) => {
        fn(...args, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    };
  }
  
  // A callback-based function for reading files
  function readConfig(filePath, callback) {
    // Simulating file read with setTimeout
    setTimeout(() => {
      if (filePath.includes('invalid')) {
        callback(new Error('File not found'));
      } else {
        const configData = {
          port: 3000,
          host: 'localhost',
          timeout: 5000
        };
        callback(null, configData);
      }
    }, 800);
  }
  
  // Using our custom promisify utility
  const readConfigPromise = promisify(readConfig);
  
  console.log('\nExample 2: Custom Promisify Utility');
  readConfigPromise('config.json')
    .then(config => {
      console.log('Config loaded:', config);
      // Test error case
      return readConfigPromise('invalid.json');
    })
    .catch(err => {
      console.error('Error reading config:', err.message);
    });
  
  // ==========================================
  // EXAMPLE 3: NODE.JS BUILT-IN PROMISIFY
  // ==========================================
  
  // Simulating Node.js util.promisify
  // In real Node.js, you would use:
  // const { promisify } = require('util');
  
  // A callback-based function with multiple arguments
  function saveData(data, options, callback) {
    // Simulating database save operation
    setTimeout(() => {
      if (!data) {
        callback(new Error('No data provided'));
        return;
      }
      
      const savedRecord = {
        ...data,
        id: Math.floor(Math.random() * 1000),
        savedAt: new Date().toISOString(),
        ...options
      };
      
      callback(null, savedRecord);
    }, 500);
  }
  
  // Using our promisify utility for this example
  const saveDataPromise = promisify(saveData);
  
  console.log('\nExample 3: Node.js-style Promisify');
  saveDataPromise({ name: 'Product XYZ', price: 99.99 }, { persist: true })
    .then(record => {
      console.log('Data saved:', record);
      // Test error case
      return saveDataPromise(null, {});
    })
    .catch(err => {
      console.error('Error saving data:', err.message);
    });
  
  // ==========================================
  // EXAMPLE 4: ASYNC/AWAIT WITH PROMISIFIED FUNCTIONS
  // ==========================================
  
  // Using async/await with our promisified functions
  async function fetchUserAndSavePreferences() {
    console.log('\nExample 4: Using Async/Await with Promisified Functions');
    
    try {
      // Get user data
      const user = await getUserFromDatabasePromise(42);
      console.log(`Found user: ${user.name}`);
      
      // Get configuration
      const config = await readConfigPromise('config.json');
      console.log('Using config with port:', config.port);
      
      // Save user preferences
      const preferences = {
        userId: user.id,
        theme: 'dark',
        notifications: true
      };
      
      const savedPrefs = await saveDataPromise(preferences, { timestamp: true });
      console.log('Saved user preferences:', savedPrefs);
      
      return { user, preferences: savedPrefs };
    } catch (error) {
      console.error('Operation failed:', error.message);
      throw error;
    }
  }
  
  // Execute our async function
  fetchUserAndSavePreferences()
    .then(result => {
      console.log('\nAll operations completed successfully!');
    })
    .catch(error => {
      console.error('\nWorkflow failed:', error);
    });
  
  // ==========================================
  // EXAMPLE 5: PROMISIFYING EVENT EMITTERS
  // ==========================================
  
  // Simulating a simple EventEmitter class
  class SimpleEventEmitter {
    constructor() {
      this.listeners = {};
    }
    
    on(event, listener) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(listener);
    }
    
    emit(event, ...args) {
      if (this.listeners[event]) {
        this.listeners[event].forEach(listener => listener(...args));
      }
    }
  }
  
  // Example using an event emitter
  function downloadFile(url) {
    const emitter = new SimpleEventEmitter();
    
    // Simulate file download with progress events
    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      emitter.emit('progress', progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        if (url.includes('error')) {
          emitter.emit('error', new Error('Download failed'));
        } else {
          emitter.emit('complete', { url, size: '15MB' });
        }
      }
    }, 500);
    
    return emitter;
  }
  
  // Promisify event-based API
  function promisifyDownload(url) {
    return new Promise((resolve, reject) => {
      const downloader = downloadFile(url);
      
      downloader.on('progress', (percent) => {
        console.log(`Download progress: ${percent}%`);
      });
      
      downloader.on('complete', (result) => {
        resolve(result);
      });
      
      downloader.on('error', (error) => {
        reject(error);
      });
    });
  }
  
  // Use the promisified event emitter
  console.log('\nExample 5: Promisifying Event Emitters');
  promisifyDownload('https://example.com/file.zip')
    .then(result => {
      console.log('Download completed:', result);
    })
    .catch(error => {
      console.error('Download failed:', error.message);
    });