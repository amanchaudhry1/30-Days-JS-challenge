// Day 8: ES6+ Features
// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = "John";
const age = 30;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

// Task 2: Create a multi-line string using template literals and log it to the console.
const multiLineString = `This is a string
that spans multiple
lines using template literals.`;
console.log(multiLineString);

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first, second); // Output: 1 2

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};
const { title, author } = book;
console.log(title, author); // Output: The Great Gatsby F. Scott Fitzgerald

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5, 6];
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5, 2)); // Output: 10
console.log(multiply(5));    // Output: 5

// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const name1 = "Alice";
const age1 = 25;

const person = {
    name1,
    age1,
    greet() {
        console.log(`Hello, my name is ${this.name1} and I am ${this.age1} years old.`);
    }
};

console.log(person);
person.greet();

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const propName = "age";
const propValue = 30;

const obj = {
    [propName]: propValue
};

console.log(obj); // Output: { age: 30 }

