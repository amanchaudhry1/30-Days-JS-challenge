// Day-1

// Activity.1:- Variable Declaration.
// Task.1:- Declare a variable using var , assign it is a number, and log the value to the console.
var num = 22;
console.log(num)

// Task.2:- Declare a variable using let , assign it is a string, and log the value to the console.
let str = "Aman";
console.log(str)

// Activity.2:- Constant Declaration.
// Task.3:- Declare a variable using const , assign it is boolean value, and log value on console.
const bValue = true;
console.log(bValue)

// Activity.3:- Data Types.
// Task.4:- create a variable of different datatype (number, string, boolean, obj, array) and log each variable type using the typeof operator.
let num1 = 22;
console.log(typeof num1)

var str2 = "heyWhatsup";
console.log(typeof str2)

const boo1 = true;
console.log(typeof boo1);

let obj = {
    name:"Aman",
    day:1,
    activity:true
}
console.log(typeof obj)

let arr = [4,7,17,21,22,46,74]
console.log(typeof arr);

// Activity.4:- Reassining Variables.
// Task.5:- Declare a variable using let assign it an initial value, reasign a new value and log both values to the console.
let inValue = 72;
console.log(inValue);
inValue = 27;
console.log(inValue);

// Activity.5:- Understanding const.
// Task.6:- Try Reassigning a variable declared with const and observe the error.
const bValue = 24;
console.log(bValue);
// error occurs:- SyntaxError: Identifier 'bValue' has already been declared.

// Miscellaneous:-string variable typeof string,boolean variable typeof boolean, num variable typeof num, object and array considered both typeof as object in javascript.

// diff b/w :- let & const.
// when we use let to assign a value in a variable and then we reassign a new value with the name of same variable and print to console than the new value overrides the previous one because let is muteable and with const we cannot reassign a new value in it because const is immutable(we use const keyword when we don't want to change the value of variable in future, example- const pi = 3.14;)


