// Day 17: Data Structures
// Activity 1: Linked List
// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove() {
        if (this.head === null) return;
        if (this.head.next === null) {
            this.head = null;
        } else {
            let current = this.head;
            while (current.next.next) {
                current = current.next;
            }
            current.next = null;
        }
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Activity 2: Stack
// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
function reverseString(str) {
    const stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }
    let reversed = '';
    while (stack.items.length > 0) {
        reversed += stack.pop();
    }
    return reversed;
}

console.log(reverseString('hello')); // Logs: 'olleh'

// Activity 3: Queue
// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element). 
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }
}

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
function printJobs(jobs) {
    const queue = new Queue();
    jobs.forEach(job => queue.enqueue(job));

    while (queue.items.length > 0) {
        console.log(`Printing job: ${queue.dequeue()}`);
    }
}

printJobs(['Document1', 'Document2', 'Document3']); 

// Activity 4: Binary Tree
// Task 7: Implement a Treefiode class to represent a node in a binary tree with properties value, left, and right. 
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Task 8: Implement a Binary Tree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

// Activity 5: Graph (Optional)
// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS). 
class Graph {
    constructor() {
        this.vertices = new Map();
    }

    addVertex(vertex) {
        this.vertices.set(vertex, []);
    }

    addEdge(v1, v2) {
        this.vertices.get(v1).push(v2);
        this.vertices.get(v2).push(v1);
    }

    bfs(start) {
        const visited = new Set();
        const queue = [start];
        visited.add(start);

        while (queue.length > 0) {
            const vertex = queue.shift();
            console.log(vertex);

            for (const neighbor of this.vertices.get(vertex)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}

// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nades.
// Add vertices and edges to the graph
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

// Perform BFS
graph.bfs('A'); // Logs: A, B, C, D
