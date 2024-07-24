// Day 11: Promises and Async/Await
// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const resolveAfter2Seconds = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Resolved after 2 seconds");
      }, 2000);
    });
  };
  
  resolveAfter2Seconds().then((message) => console.log(message));
  
// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using.catch().
const rejectAfter2Seconds = () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Rejected after 2 seconds");
      }, 2000);
    });
  };
  
  rejectAfter2Seconds().catch((error) => console.error(error));
  
// Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const fetchData = (data, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  };
  
  fetchData("Fetching user data", 1000)
    .then((message) => {
      console.log(message);
      return fetchData("Fetching user posts", 2000);
    })
    .then((message) => {
      console.log(message);
      return fetchData("Fetching user comments", 1000);
    })
    .then((message) => {
      console.log(message);
    });
  
// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const resolvePromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise resolved");
      }, 2000);
    });
  };
  
  const asyncFunction = async () => {
    const result = await resolvePromise();
    console.log(result);
  };
  
  asyncFunction();
  
// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const rejectPromise = () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Promise rejected");
      }, 2000);
    });
  };
  
  const asyncFunctionWithErrorHandling = async () => {
    try {
      const result = await rejectPromise();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  
  asyncFunctionWithErrorHandling();
  
// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const fetchDataAsync = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  fetchDataAsync();
  
// Activity 5: Concurrent Promises
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promise1 = Promise.resolve('Promise 1 resolved');
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Promise 2 resolved'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 3 resolved'));

Promise.all([promise1, promise2, promise3])
  .then(values => console.log(values))
  .catch(error => console.error('Error:', error));

//  Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promiseA = new Promise((resolve) => setTimeout(resolve, 3000, 'Promise A resolved'));
const promiseB = new Promise((resolve) => setTimeout(resolve, 2000, 'Promise B resolved'));
const promiseC = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise C resolved'));

Promise.race([promiseA, promiseB, promiseC])
  .then(value => console.log(value))
  .catch(error => console.error('Error:', error));
