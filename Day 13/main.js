import { add } from './add.js';
import { person } from './person.js';
import { add, subtract } from './math.js';
import multiply from './multiply.js';
import * as constants from './constants.js';
import _ from 'lodash';
import axios from 'axios';

console.log(add(2, 3)); // Outputs: 5

person.greet(); // Outputs: Hello, my name is John Doe and I am 30 years old.

console.log(add(5, 3)); // Outputs: 8
console.log(subtract(5, 3)); // Outputs: 2

console.log(multiply(4, 2)); // Outputs: 8

console.log(constants.PI); // Outputs: 3.14
console.log(constants.circumference(5)); // Outputs: 31.400000000000002
console.log(constants.area(5)); // Outputs: 78.5


const numbers = [1, 2, 3, 4, 5];
console.log(_.shuffle(numbers)); // Outputs: [3, 1, 4, 5, 2] (example)


axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
