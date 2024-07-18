// Day 3: Control Structures

// Activity 1:- If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 0;
if (num > 0) {
    console.log(`${num} is Positive`);
} else if(num===0){
    console.log(`${num} is 0`);
}
else{
    console.log(`${num} is Negative`);
}

//  Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 27;
if (age >= 18) {
    console.log("you are eligible for vote");
} else {
    console.log("you are not eligible for vote");
}


// Activity 2:- Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 600
let num2 = 1222
let num3 = 35555
if (num1 >= num2) {
    if (num1 >= num3) {
        console.log(num1);
    }
    else {
        console.log(num3);
    }
}
else  {
    if (num3 >= num2) {
        console.log(num3);
    }
    else {
        console.log(num2);
    }
}

// Activity 3:- Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console. 
let day = 5;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");

}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C, 'D', 'F) based on a score and log the grade to the console.
let score = 36;
switch (true) {
    case score >= 80 && score >= 0:
        console.log("A");
        break;
    case score >= 70 && score >= 0:
        console.log("B");
        break;
    case score >= 60 && score >= 0:
        console.log("C");
        break;
    case score >= 50 && score >= 0:
        console.log("D");
        break;
    case score >= 0 && score <= 40:
        console.log("F");
        break;
    default:
        console.log("Invalid Grade");
}

// Activity 4:- Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let evenOdd = 13;
let result = (evenOdd % 2 === 0) ? "Even" : "Odd";
console.log(result);

// Activity 5:- Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2023;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(year + " is a leap year.");

        } else {
            console.log(year + " is not a leap year.");
        }
    } else {
        console.log(year + " is a leap year.");
    }
} else {
    console.log(year + " is not a leap year.");
}

