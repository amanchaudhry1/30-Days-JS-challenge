// Day 5: Functions

// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

// Task 2: Write a function to calculate the square of a number and return the result.
function square(number) {
    return number * number;
}

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findMax = function(a, b) {
    let max = (a > b) ? a : b;
    console.log(`Maximum is ${max}`);
};

// Task 4: Write a function expression to concatenate two strings and return the result.
const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (a, b) => a + b;

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsChar = (str, char) => str.includes(char);

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter. 
function multiply(a, b = 1) {
    return a * b;
}

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = 'unknown') {
    return `Hello, ${name}! You are ${age} years old.`;
}

// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}
