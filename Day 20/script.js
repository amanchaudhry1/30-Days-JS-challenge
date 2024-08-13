// Day 20: LocalStorage and SessionStorage
// Activity 1: Understanding LocalStorage
// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
// Save to localStorage
localStorage.setItem('myString', 'Hello, LocalStorage!');
// Retrieve from localStorage
let retrievedString = localStorage.getItem('myString');
console.log(retrievedString);

// * Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
// Save object to localStorage
let myObject = { name: 'John', age: 30 };
localStorage.setItem('myObject', JSON.stringify(myObject));
// Retrieve and parse object from localStorage
let retrievedObject = JSON.parse(localStorage.getItem('myObject'));
console.log(retrievedObject);

// Activity 2: Using LocalStorage
// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.
<!DOCTYPE html>
<html>
<body>
  <form id="userForm">
    Name: <input type="text" id="name" name="name">
    Email: <input type="text" id="email" name="email">
    <input type="submit" value="Save">
  </form>
  <p id="savedData"></p>

  <script>
    document.getElementById('userForm').addEventListener('submit', function(event) {
      event.preventDefault();
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      localStorage.setItem('userName', name);
      localStorage.setItem('userEmail', email);
      displayData();
    });

    function displayData() {
      let name = localStorage.getItem('userName');
      let email = localStorage.getItem('userEmail');
      document.getElementById('savedData').innerText = `Name: ${name}, Email: ${email}`;
    }

    window.onload = displayData;
  </script>
</body>
</html>

// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
<!DOCTYPE html>
<html>
<body>
  <form id="userForm">
    Name: <input type="text" id="name" name="name">
    Email: <input type="text" id="email" name="email">
    <input type="submit" value="Save">
  </form>
  <p id="savedData"></p>

  <script>
    document.getElementById('userForm').addEventListener('submit', function(event) {
      event.preventDefault();
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      localStorage.setItem('userName', name);
      localStorage.setItem('userEmail', email);
      displayData();
    });

    function displayData() {
      let name = localStorage.getItem('userName');
      let email = localStorage.getItem('userEmail');
      document.getElementById('savedData').innerText = `Name: ${name}, Email: ${email}`;
    }

    window.onload = displayData;
  </script>
</body>
</html>

// Activity 3: Understanding SessionStorage
// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
sessionStorage.setItem('mySessionString', 'Hello, SessionStorage!');
let retrievedSessionString = sessionStorage.getItem('mySessionString');
console.log(retrievedSessionString);

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
// Save object to sessionStorage
let mySessionObject = { name: 'Jane', age: 25 };
sessionStorage.setItem('mySessionObject', JSON.stringify(mySessionObject));
// Retrieve and parse object from sessionStorage
let retrievedSessionObject = JSON.parse(sessionStorage.getItem('mySessionObject'));
console.log(retrievedSessionObject);

// Activity 4: Using SessionStorage
// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
<!DOCTYPE html>
<html>
<body>
  <form id="sessionForm">
    Name: <input type="text" id="sessionName" name="name">
    Email: <input type="text" id="sessionEmail" name="email">
    <input type="submit" value="Save">
  </form>
  <p id="sessionSavedData"></p>

  <script>
    document.getElementById('sessionForm').addEventListener('submit', function(event) {
      event.preventDefault();
      let name = document.getElementById('sessionName').value;
      let email = document.getElementById('sessionEmail').value;
      sessionStorage.setItem('sessionUserName', name);
      sessionStorage.setItem('sessionUserEmail', email);
      displaySessionData();
    });

    function displaySessionData() {
      let name = sessionStorage.getItem('sessionUserName');
      let email = sessionStorage.getItem('sessionUserEmail');
      document.getElementById('sessionSavedData').innerText = `Name: ${name}, Email: ${email}`;
    }

    window.onload = displaySessionData;
  </script>
</body>
</html>

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
// Log sessionStorage content before removal
console.log(sessionStorage.getItem('mySessionString'));
// Remove item from sessionStorage
sessionStorage.removeItem('mySessionString');
// Log sessionStorage content after removal
console.log(sessionStorage.getItem('mySessionString'));

// Activity 5: Comparing LocalStorage and SessionStorage
// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
function saveToBothStorages(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);

  console.log('localStorage:', localStorage.getItem(key));
  console.log('sessionStorage:', sessionStorage.getItem(key));
}

saveToBothStorages('sharedKey', 'sharedValue');

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearBothStorages() {
  localStorage.clear();
  sessionStorage.clear();

  console.log('localStorage is empty:', localStorage.length === 0);
  console.log('sessionStorage is empty:', sessionStorage.length === 0);
}

clearBothStorages();
