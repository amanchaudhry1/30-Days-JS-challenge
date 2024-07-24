// Day 10: Event Handling

// Activity 1: Basic Event Handling
// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
// HTML: <img id="toggleImage" src="image.jpg" alt="Image">
document.getElementById('toggleImage').addEventListener('dblclick', function() {
    this.style.display = (this.style.display === 'none') ? 'block' : 'none';
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
// HTML: <div id="hoverElement">Hover over me</div>
document.getElementById('hoverElement').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightgreen';
});

// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color.
// HTML: <div id="hoverElement">Hover over me</div>
document.getElementById('hoverElement').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightgreen';
});

// Task 4: Add a mouseout event listener to an element that resets its background color.
document.getElementById('hoverElement').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console. 
// HTML: <input id="keyDownInput" type="text">
document.getElementById('keyDownInput').addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
// HTML: <input id="keyUpInput" type="text">
//       <p id="inputValueDisplay">Current value: </p>

document.getElementById('keyUpInput').addEventListener('keyup', function() {
    document.getElementById('inputValueDisplay').textContent = 'Current value: ' + this.value;
});

// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console. 
// HTML: <form id="myForm">
//         <input type="text" name="username" placeholder="Username">
//         <button type="submit">Submit</button>
//       </form>

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    console.log('Form data:', Object.fromEntries(formData));
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
// HTML: <select id="mySelect">
//         <option value="Option 1">Option 1</option>
//         <option value="Option 2">Option 2</option>
//       </select>
//       <p id="selectedValue">Selected value: </p>

document.getElementById('mySelect').addEventListener('change', function() {
    document.getElementById('selectedValue').textContent = 'Selected value: ' + this.value;
});

// Activity 5: Event Delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
// HTML: <ul id="myList">
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//       </ul>

document.getElementById('myList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('Clicked item:', event.target.textContent);
    }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
// HTML: <div id="parentElement"></div>
//       <button id="addChildButton">Add Child</button>

document.getElementById('parentElement').addEventListener('click', function(event) {
    if (event.target && event.target.className === 'childElement') {
        console.log('Clicked on dynamically added child:', event.target.textContent);
    }
});

document.getElementById('addChildButton').addEventListener('click', function() {
    const newChild = document.createElement('div');
    newChild.className = 'childElement';
    newChild.textContent = 'I am a new child';
    document.getElementById('parentElement').appendChild(newChild);
});
