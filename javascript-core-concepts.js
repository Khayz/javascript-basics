// TODO: What is the difference between var, let and const in JavaScript?
var name = 'Jahid';
let age = 24;
const hasHobbies = true;

/**
 * var is function scoped, let and const are block scoped
 * var can be redeclared and updated, let can be updated but not redeclared, const can't be redeclared or updated
 * var is hoisted, let and const are not hoisted
 * var is initialized with undefined, let and const are not initialized
 */

// TODO: hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution
// var example
console.log(example); // undefined
var example = 'example';
console.log(example); // example

// let - const / example
console.log(letExample); // ReferenceError: Cannot access 'example' before initialization
let letExample = 'example';
console.log(letExample); // example

// TODO: Function expression vs function declaration
// Function declaration
const sum = (a, b) => {
  return a + b;
}

// Function expression
function divide(a, b) {
  return a / b;
}

// TODO: What's the difference between map and forEach?
// map returns a new array, forEach doesn't return anything
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

numbers.forEach(number => console.log(number)); // 1 2 3 4 5

// TODO: tricky question, about event loop
console.log('1');
setTimeout(() => {
  console.log('2');
}, 0);
console.log('3');

// TODO: Why the output is 1 3 2?
// The setTimeout function is an asynchronous function that will be executed after the synchronous code has been executed

// Another example but now using promises
console.log('1');
setTimeout(() => {
  console.log('2');
}, 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');

// TODO: Why the output is 1 4 3 2?
// The promise is a microtask that will be executed before the setTimeout function

// What is microtask and macrotask?
// Microtasks are tasks that are executed before the next macrotask, macrotasks are tasks that are executed after the microtasks
// Microtasks: process.nextTick, promises, Object.observe, MutationObserver
// Macrotasks: setTimeout, setInterval, setImmediate, I/O, UI rendering

// TODO: What is the difference between synchronous and asynchronous code?
// Synchronous code is executed in sequence, asynchronous code is executed after a task that runs in the background has been completed
// Here are two examples of synchronous and asynchronous code
// Synchronous code
console.log('1');
console.log('2');
console.log('3');

// Asynchronous code
console.log('1');
setTimeout(() => {
  console.log('2');
}, 0);
console.log('3');

// TODO: What is the difference between == and === in JavaScript?
// == compares only the value, === compares the value and the type
console.log(1 == '1'); // true
console.log(1 === '1'); // false

// TODO: What is the difference between null and undefined in JavaScript?
// null is an assigned value, undefined is a type
let example = null;
let anotherExample;
console.log(example); // null
console.log(anotherExample); // undefined

// TODO: What is the difference between event bubbling and event capturing?
// Event bubbling is the event starts from the target element and bubbles up to the root element, event capturing is the opposite
// Event bubbling
document.querySelector('.child').addEventListener('click', () => {
  console.log('Child clicked');
}, false);

document.querySelector('.parent').addEventListener('click', () => {
  console.log('Parent clicked');
}, false);  // false is the default value

// Event capturing
document.querySelector('.child').addEventListener('click', () => {
  console.log('Child clicked');
}, true);

document.querySelector('.parent').addEventListener('click', () => {
  console.log('Parent clicked');  // Parent clicked Child clicked
}, true);

// TODO: What is closure in JavaScript?
// A closure is the combination of a function bundled together with references to its surrounding state
function outerFunction() {
  const outer = 'I see the outer variable';
  function innerFunction() {
    console.log(outer);
  }
  return innerFunction;
}

const inner = outerFunction();
inner(); // I see the outer variable

// TODO: What is the difference between event.preventDefault() and event.stopPropagation()?
// event.preventDefault() prevents the default behavior of the event, event.stopPropagation() stops the event from bubbling up the DOM tree
document.querySelector('.child').addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('Child clicked');
});

document.querySelector('.parent').addEventListener('click', () => {
  console.log('Parent clicked');
} );

// TODO: What is the difference between local storage and session storage?
// Local storage has no expiration time, session storage has expiration time
localStorage.setItem('example', 'example');
sessionStorage.setItem('example', 'example');

// TODO: What is the difference between a promise and an observable?
// A promise emits a single value, an observable emits multiple values over time
// A promise is eager, an observable is lazy
// A promise is not cancellable, an observable is cancellable
// Example of a promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolved');
  }, 1000);
});

promise.then((value) => {
  console.log(value);
});

// Example of an observable
const observable = new Observable((observer) => {
  setTimeout(() => {
    observer.next('resolved');
  }, 1000);
});

observable.subscribe((value) => {
  console.log(value);
});

// TODO: What is a web worker?
// A web worker is a JavaScript running in the background, without affecting the performance of the page
// Example of a web worker
const worker = new Worker('worker.js');
worker.postMessage('Hello');
worker.onmessage = (event) => {
  console.log(event.data);
};

// worker.js
self.onmessage = (event) => {
  self.postMessage(event.data);
};

// TODO: What is code splitting?
// Code splitting is a technique used to split the code into various bundles which can then be loaded on demand or in parallel
// Example of code splitting
import('./module.js').then((module) => {
  module.default();
});

// module.js
export default () => {
  console.log('Hello');
};

// TODO: What is the difference between a deep copy and a shallow copy?
// A shallow copy copies the references, a deep copy copies the values
// Example of a shallow copy
const original = { key: 'value' };
const shallow = Object.assign({}, original);
original.key = 'new value';
console.log(shallow.key); // value
// Why the output is value and not new value? Because the Object.assign method copies the references

// Example of a deep copy
const original = { key: 'value' };
const deep = JSON.parse(JSON.stringify(original));
original.key = 'new value';
console.log(deep.key); // value
// Why the output is value and not new value? Because the JSON.stringify method copies the values

// TODO: What is the difference between a stack and a queue?
// A stack is a collection of elements with two main operations: push and pop, a queue is a collection of elements with two main operations: enqueue and dequeue

// Example of a stack
const stack = [];
stack.push('first');
stack.push('second');
stack.pop(); // second

// Example of a queue
const queue = [];
queue.push('first');
queue.push('second');
queue.shift(); // first

// TODO: What are solid principles?
// SOLID is an acronym for five design principles intended to make software designs more understandable, flexible and maintainable
// Single responsibility principle, open/closed principle, Liskov substitution principle, interface segregation principle, dependency inversion principle

// Single responsibility principle
// A class should have one, and only one, reason to change
class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

// Open/closed principle
// Software entities should be open for extension but closed for modification
class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class UserWithAge extends User {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  getAge() {
    return this.age;
  }
}

// Liskov substitution principle
// Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

// Interface segregation principle
// A client should never be forced to implement an interface that it doesn't use or clients shouldn't be forced to depend on methods they do not use
class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class UserWithAge {
  constructor(name, age) {
    this.name = name; // getName method is not used
    this.age = age; // getAge method is used
  }

  getAge() {
    return this.age;
  }
}

// Dependency inversion principle
// High-level modules should not depend on low-level modules, both should depend on abstractions
// Abstractions should not depend on details, details should depend on abstractions
class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class UserService {
  constructor(user) {
    this.user = user;
  }

  getUser() {
    return this.user.getName();
  }
}

const user = new User('Jahid');
const userService = new UserService(user);
console.log(userService.getUser()); // Jahid

// TODO: What is the difference between a promise and a callback?
// A promise is an object that may produce a single value some time in the future, a callback is a function that is passed as an argument to another function

// Example of a callback
function callback(value) {
  console.log(value);
}

function fetchData(callback) {
  setTimeout(() => {
    callback('data');
  }, 1000);
}

fetchData(callback);

// TODO: What is a design pattern?
// A design pattern is a general repeatable solution to a commonly occurring problem in software design
// Example of a design pattern
// Singleton pattern
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
