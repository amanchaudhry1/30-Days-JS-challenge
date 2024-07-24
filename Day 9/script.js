// Day 9: DOM Manipulation

// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML element by its ID and change its text content.
// HTML: <p id="myParagraph">Old Text</p>
document.getElementById('myParagraph').textContent = 'New Text';

// Task 2: Select an HTML element by its class and change its background color.
// HTML: <div class="myClass">Content</div>
document.querySelector('.myClass').style.backgroundColor = 'lightblue';

// Activity 2: Creating and Appending Elements
// Task 3: Create a new div element with some text content and append it to the body.
const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div element';
document.body.appendChild(newDiv);

// Task 4: Create a new 11 element and add it to an existing ul list.
// HTML: <ul id="myList"></ul>
const newLi = document.createElement('li');
newLi.textContent = 'New list item';
document.getElementById('myList').appendChild(newLi);

// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.
// HTML: <div id="removeThis">Remove me!</div>
const elementToRemove = document.getElementById('removeThis');
elementToRemove.parentNode.removeChild(elementToRemove);

// Task 6: Remove the last child of a specific HTML element.
// HTML: <ul id="myList"><li>Item 1</li><li>Item 2</li></ul>
const list = document.getElementById('myList');
list.removeChild(list.lastElementChild);

// Activity 4: Modifying Attributes and Classes
// Task 7: Select an HTML element and change one of its attributes (e.g., src of an ing tag).
// HTML: <img id="myImage" src="old.jpg" alt="Old Image">
document.getElementById('myImage').setAttribute('src', 'new.jpg');

// Task 8: Add and remove a CSS class to/from an HTML element.
// HTML: <div id="myElement" class="oldClass">Content</div>
const element = document.getElementById('myElement');
element.classList.add('newClass');
element.classList.remove('oldClass');

// Activity 5: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
// HTML: <button id="myButton">Click me</button>
//       <p id="myParagraph">Old Text</p>
document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('myParagraph').textContent = 'New Text';
});

// Task 10: Add a mouseover event listener to an element that changes its border color.
// HTML: <div id="hoverElement">Hover over me</div>
document.getElementById('hoverElement').addEventListener('mouseover', function() {
    this.style.borderColor = 'red';
});

