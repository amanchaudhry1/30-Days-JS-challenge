// Day 15: Closures
// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outerFunction() {
    let outerVariable = 'I am from the outer function';
    
    return function innerFunction() {
        console.log(outerVariable);
    }
}

const myInnerFunction = outerFunction();
myInnerFunction(); // Logs: I am from the outer function

//  Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
    let count = 0;
    
    return {
        increment: function() {
            count++;
        },
        getValue: function() {
            return count;
        }
    }
}

const counter = createCounter();
counter.increment();
console.log(counter.getValue()); // Logs: 1
counter.increment();
console.log(counter.getValue()); // Logs: 2

// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function uniqueIDGenerator() {
    let lastID = 0;
    
    return function() {
        lastID++;
        return lastID;
    }
}

const generateID = uniqueIDGenerator();
console.log(generateID()); // Logs: 1
console.log(generateID()); // Logs: 2
console.log(generateID()); // Logs: 3

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function createGreeting(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    }
}

const greetJohn = createGreeting('John');
greetJohn(); // Logs: Hello, John!

// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function createLoggers() {
    const loggers = [];
    
    for (let i = 0; i < 5; i++) {
        loggers.push(function() {
            console.log(i);
        });
    }
    
    return loggers;
}

const loggers = createLoggers();
loggers.forEach(logger => logger());\

// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const itemManager = (function() {
    const items = [];
    
    return {
        addItem: function(item) {
            items.push(item);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
            }
        },
        listItems: function() {
            return items;
        }
    }
})();

itemManager.addItem('Apple');
itemManager.addItem('Banana');
console.log(itemManager.listItems()); // Logs: [ 'Apple', 'Banana' ]
itemManager.removeItem('Apple');
console.log(itemManager.listItems()); // Logs: [ 'Banana' ]

// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
    const cache = {};
    
    return function(arg) {
        if (cache[arg] !== undefined) {
            return cache[arg];
        }
        const result = fn(arg);
        cache[arg] = result;
        return result;
    }
}

function slowFunction(n) {
    // Simulate a slow computation
    for (let i = 0; i < 1e6; i++);
    return n * 2;
}

const memoizedFunction = memoize(slowFunction);
console.log(memoizedFunction(5)); // Computes and logs: 10
console.log(memoizedFunction(5)); // Retrieves from cache and logs: 10

// Task 8: Create a memoized version of a function that calculates the factorial of a number.
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Logs: 120
console.log(memoizedFactorial(5)); // Logs: 120

