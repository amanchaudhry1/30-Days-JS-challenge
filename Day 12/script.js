// Day 12: Error Handling
// Activity 1: Basic Error Handling with Try-Catch
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
const throwError = () => {
    throw new Error("Intentional Error");
  };
  
  try {
    throwError();
  } catch (error) {
    console.error("Caught an error:", error.message);
  }
  
// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
const divideNumbers = (numerator, denominator) => {
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero");
    }
    return numerator / denominator;
  };
  
  try {
    console.log(divideNumbers(10, 2)); // Should log 5
    console.log(divideNumbers(10, 0)); // Should throw an error
  } catch (error) {
    console.error("Error:", error.message);
  }
  
// Activity 2: Finally Block
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
const testFinallyBlock = () => {
    try {
      console.log("In try block");
      throw new Error("An error occurred");
    } catch (error) {
      console.error("In catch block:", error.message);
    } finally {
      console.log("In finally block");
    }
  };
  
  testFinallyBlock();
  
// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }
  
  const throwCustomError = () => {
    throw new CustomError("This is a custom error");
  };
  
  try {
    throwCustomError();
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
  
// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
  const validateInput = (input) => {
    if (input.trim() === "") {
      throw new ValidationError("Input cannot be empty");
    }
    return input;
  };
  
  try {
    console.log(validateInput("Hello, world!")); // Should log "Hello, world!"
    console.log(validateInput("")); // Should throw an error
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
  
// Activity 4: Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const randomPromise = () => {
    return new Promise((resolve, reject) => {
      const isSuccess = Math.random() > 0.5;
      setTimeout(() => {
        if (isSuccess) {
          resolve("Promise resolved successfully");
        } else {
          reject("Promise rejected");
        }
      }, 1000);
    });
  };
  
  randomPromise()
    .then((message) => console.log(message))
    .catch((error) => console.error("Error:", error));
  
// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
const randomPromiseAsync = async () => {
    try {
      const message = await randomPromise();
      console.log(message);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  randomPromiseAsync();
  
// Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using catch(). Log an appropriate error message to the console. Task 9: Use the fetich API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
fetch('https://invalid-url')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Fetch error:', error));
