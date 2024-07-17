// Day 2: Operators

// Activity 1:- Arithmetic Operations
// Task 1: Write a program to add two numbers and log the result to the console.
let a = 2;
let b = 3;
let c = a+b;
console.log(c);

//  Task 2: Write a program to subtract two numbers and log the result to the console.
var a1 = 31;
let b1 = 69;
console.log(b1-a1); 

// Task 3: Write a program to multiply two numbers and log the result to the console.
var a2 = 21;
var b2 = 22;
console.log(b2*a2); 

// Task 4: Write a program to divide two numbers and log the result to the console.
let a3 = 211;
var b3 = 622;
console.log(b3/a3); 

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let a4 = 71;
let b4 = 9;
console.log(a4%b4); 


// Activity 2:- Assignment Operators
// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let a5 = 69;
let b5 = 'Aman';
console.log(a5 += 96);
console.log(b5 += ' Chaudhry');

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let a6 = 2;
let b6 = "aman chaudhary"
console.log(a6 -= 3);
console.log(b6 -= "chaudhary");
console.log(a6 -= "aman");


// Activity 3:- Comparison Operators
// Task 8: Write a program to compare numbers using > and < and log the result to the console.
let a7 = 9;
let b7 = 5;
let c7 = a7>b7;
console.log(c7);
console.log(a7<b7);
console.log(a7>b7);

// Task 9: Write a program to compare numbers using >= and <= and log the result to the console.
let a8 = 91;
let b8 = 56;
let c8 = 56;
console.log(a8<=b8);
console.log(a8>=b8);
console.log(c8>=b8);

// Task 10: Write a program to compare two numbers using == and === and and log the result to the console.
let a9 = 91;
let b9 = "91";
console.log(a9==b9);
console.log(a9===b9);


// Activity 4:- Logical Operators
// Task 11: Write a program that uses the as && operator to combine two conditions and log the result to the console.
let a10 = 2;
let b10 = 56;
let c10 = 13;
if((a10<b10)&&(a10<c10)){
    console.log("a10 is smallest");
}
else if((b10<c10)&&(c10<a10)){
    console.log("b10 is smallest");
}
else{
    console.log("c10 is smallest");
}

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
let a11 = 2;
let b11 = 56;
if((a11<5)||(a11=b11)){
    console.log("hello");
}

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
let isRaining = true;
let isNotRaining = !isRaining;
console.log("Is it raining?", isRaining);
console.log("Is it not raining?", isNotRaining);


// Activity 5: Ternary Operator
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let number = -5;
let result = (number >= 0) ? "The number is positive" : "The number is negative";
console.log(result);


// Achievement:
// By the end of these activities, we will learn:

// Understand and use anthmetic operators to perform basic calculations.
// Use assignment operators to modify variable values.
// Compare values using comparison operators.
// Combine conditions using logical operators.  
// Use the ternary operator for concise conditional expressions.