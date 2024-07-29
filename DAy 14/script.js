// Day 14: Classes
// Activity 1: Class Definition
// Task 1: Define a class Person with properties nase and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  const person1 = new Person('Alice', 30);
  console.log(person1.greeting());
  
// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age: ${this.age}`);
    }
  }
  
  const person1 = new Person('Alice', 30);
  person1.updateAge(31);
  
// Activity 2: Class Inheritance
// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
    }
  
    getStudentId() {
      return `Student ID: ${this.studentId}`;
    }
  }
  
  const student1 = new Student('Bob', 20, 'S12345');
  console.log(student1.getStudentId());
  
// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
    }
  
    greeting() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  
    getStudentId() {
      return `Student ID: ${this.studentId}`;
    }
  }
  
  const student1 = new Student('Bob', 20, 'S12345');
  console.log(student1.greeting());
  
// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    static genericGreeting() {
      return 'Hello, this is a generic gr
      eeting from the Person class.';
    }
  }
  
  console.log(Person.genericGreeting());
  
// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
class Student extends Person {
    static studentCount = 0;
  
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
      Student.studentCount++;
    }
  
    static getStudentCount() {
      return `Total number of students: ${Student.studentCount}`;
    }
  }
  
  const student1 = new Student('Bob', 20, 'S12345');
  const student2 = new Student('Alice', 22, 'S12346');
  console.log(Student.getStudentCount());
  
// Activity 4: Getters and Setters
// Task 7: Add a getter method to the Person class to return the full name (assume a firstlane and lastliame property). Create an instance and log the full name using the getter.
class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  const person1 = new Person('Alice', 'Johnson', 30);
  console.log(person1.fullName);
  
// Task 8: Add a setter method to the Person class to update the name properties (firstflame and lasthane). Update the name using the setter and log the updated full name.
class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    set fullName(name) {
      const parts = name.split(' ');
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  }
  
  const person1 = new Person('Alice', 'Johnson', 30);
  console.log(person1.fullName);
  person1.fullName = 'Bob Smith';
  console.log(person1.fullName);
  
// Activity 5: Private Fields (Optional)
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods. Task
class Account {
    #balance;
  
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}`);
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew: $${amount}`);
      } else {
        console.log('Insufficient funds');
      }
    }
  
    getBalance() {
      return `Balance: $${this.#balance}`;
    }
  }
  
  const account1 = new Account(100);
  account1.deposit(50);
  console.log(account1.getBalance());
  account1.withdraw(30);
  console.log(account1.getBalance());
  account1.withdraw(200); // Insufficient funds
  
// 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age: ${this.age}`);
    }
  }
  
  const person1 = new Person('Alice', 30);
  console.log(person1.greeting());
  person1.updateAge(31);
