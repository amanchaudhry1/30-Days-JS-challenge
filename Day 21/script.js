// Day 21: LeetCode Easy
// Activity 1: Two Sum
// Task 1: Solve the Two Sum problem on LeetCode.
// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// Log the indices for a few test cases.
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return null;
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]

// Activity 2: Reverse Integer
// Task 2: Solve the Reverse Integer problem on LeetCode.
// Write a function that takes an integer and returns it with its digits reversed. Handle edge cases like negative numbers and numbers ending in zero.
// Log the reversed integers for a few test cases.
function reverseInteger(x) {
    const isNegative = x < 0;
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''), 10);
    if (reversed > 2**31 - 1) return 0;
    return isNegative ? -reversed : reversed;
}

// Test cases
console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-123)); // Output: -321
console.log(reverseInteger(120)); // Output: 21
console.log(reverseInteger(0)); // Output: 0

// Activity 3: Palindrome Number
// Task 3: Solve the "Palindrome Number" problem on LeetCode.
// Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// Log the result for a few test cases, including edge cases like negative numbers.
function isPalindrome(x) {
    if (x < 0) return false;
    const str = x.toString();
    return str === str.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
console.log(isPalindrome(-101)); // Output: false

// Activity 4: Merge Two Sorted Lists
// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// Create a few test cases with linked lists and log the merged list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(-1);
    let current = dummy;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 !== null ? l1 : l2;
    return dummy.next;
}

// Test cases
let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
console.log(mergeTwoLists(l1, l2)); // Output: [1, 1, 2, 3, 4, 4]

// Activity 5: Valid Parentheses
// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// Write a function that takes a string containing just the characters T. 1. [. J. and ], and determines if the input string is valid. A string is valid if open brackets are closed in the correct order.
// Log the result for a few test cases.
function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let char of s) {
        if (!map[char]) {
            stack.push(char);
        } else if (stack.pop() !== map[char]) {
            return false;
        }
    }
    return stack.length === 0;
}

// Test cases
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true
