// Day 23: LeetCode Hard
// Activity 1: Median of Two Sorted Arrays
// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays. Log the median for a few test cases, including edge cases.
function findMedianSortedArrays(nums1, nums2) {
    let combined = [...nums1, ...nums2].sort((a, b) => a - b);
    let mid = Math.floor(combined.length / 2);
    
    if (combined.length % 2 === 0) {
        return (combined[mid - 1] + combined[mid]) / 2;
    } else {
        return combined[mid];
    }
}

// Test Cases
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
console.log(findMedianSortedArrays([], [1])); // Output: 1

// Activity 2: Merge k Sorted Lists
// Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into ane sorted linked list.
// Create a few test cases with linked lists and log the merged list.
function mergeKLists(lists) {
    let heap = new MinHeap();
    for (let list of lists) {
        while (list) {
            heap.insert(list.val);
            list = list.next;
        }
    }
    
    let dummy = new ListNode(0);
    let current = dummy;
    
    while (!heap.isEmpty()) {
        current.next = new ListNode(heap.extractMin());
        current = current.next;
    }
    
    return dummy.next;
}
// Test Cases
// Define ListNode and MinHeap for testing

// Activity 3: Trapping Rain Water
// Task 3: Solve the Trapping Rain Water problem on LeetCode.
// Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining Log the amount of trapped water for a few test cases.
function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let totalWater = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= leftMax ? leftMax = height[left] : totalWater += (leftMax - height[left]);
            left++;
        } else {
            height[right] >= rightMax ? rightMax = height[right] : totalWater += (rightMax - height[right]);
            right--;
        }
    }
    
    return totalWater;
}

// Test Cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
console.log(trap([4,2,0,3,2,5])); // Output: 9

// Activity 4: N-Queens
// Task 4: Solve the "N-Queens" problem on LeetCode.
// Write a function that places n queens on an nen chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle. Log the distinct solutions for a few test cases.
function solveNQueens(n) {
    let results = [];
    let board = new Array(n).fill().map(() => new Array(n).fill('.'));
    
    function isSafe(board, row, col) {
        for (let i = 0; i < col; i++) if (board[row][i] === 'Q') return false;
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) if (board[i][j] === 'Q') return false;
        for (let i = row, j = col; i < n && j >= 0; i++, j--) if (board[i][j] === 'Q') return false;
        return true;
    }
    
    function solve(col) {
        if (col >= n) {
            results.push(board.map(row => row.join('')));
            return;
        }
        
        for (let i = 0; i < n; i++) {
            if (isSafe(board, i, col)) {
                board[i][col] = 'Q';
                solve(col + 1);
                board[i][col] = '.';
            }
        }
    }
    
    solve(0);
    return results;
}

// Test Cases
console.log(solveNQueens(4)); // Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

// Activity 5: Word Ladder
// Task 5: Solve the Word Ladder problem on LeetCode.
// Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
// Log the length of the shortest transformation sequence for a few test cases.
function ladderLength(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    
    let queue = [[beginWord, 1]];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    while (queue.length) {
        let [word, length] = queue.shift();
        
        if (word === endWord) return length;
        
        for (let i = 0; i < word.length; i++) {
            for (let char of alphabet) {
                let newWord = word.slice(0, i) + char + word.slice(i + 1);
                if (wordSet.has(newWord)) {
                    queue.push([newWord, length + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }
    
    return 0;
}

// Test Cases
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // Output: 5
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); // Output: 0

