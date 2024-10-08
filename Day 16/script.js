// Day 16: Recursion
// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases. 
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Logs: 5
console.log(fibonacci(7)); // Logs: 13

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5])); // Logs: 15
console.log(sumArray([10, 20, 30])); // Logs: 60

// Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5])); // Logs: 15
console.log(sumArray([10, 20, 30])); // Logs: 60

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function findMax(arr) {
    if (arr.length === 1) return arr[0];
    return Math.max(arr[0], findMax(arr.slice(1)));
}

console.log(findMax([1, 5, 3, 9, 2])); // Logs: 9
console.log(findMax([-1, -5, -3])); // Logs: -1

// Activity 3: String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
    if (str === '') return '';
    return reverseString(str.substr(1)) + str[0];
}

console.log(reverseString('hello')); // Logs: 'olleh'
console.log(reverseString('world')); // Logs: 'dlrow'

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.substring(1, str.length - 1));
}

console.log(isPalindrome('radar')); // Logs: true
console.log(isPalindrome('hello')); // Logs: false

// Activity 4: Recursive Search
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    const mid = Math.floor((low + high) / 2);
    
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return binarySearch(arr, target, mid + 1, high);
    return binarySearch(arr, target, low, mid - 1);
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(sortedArray, 5)); // Logs: 4
console.log(binarySearch(sortedArray, 10)); // Logs: -1

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target) {
    if (arr.length === 0) return 0;
    return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
}

console.log(countOccurrences([1, 2, 3, 2, 2, 4], 2)); // Logs: 3
console.log(countOccurrences([5, 5, 6, 7, 8, 5], 5)); // Logs: 3

// Activity 5: Tree Traversal
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(node) {
    if (node === null) return;
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}

const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
inOrderTraversal(root); // Logs: 2, 1, 3

// * Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
function calculateDepth(node) {
    if (node === null) return 0;
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

const root = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));
console.log(calculateDepth(root)); // Logs: 3
