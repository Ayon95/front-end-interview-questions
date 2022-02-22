// function declarations are hoisted
sayHello();

function sayHello() {
  console.log("Hello!");
}

// var variables (only declarations) are hoisted
console.log(myName); // undefined
// initialization
myName = "Mushfiq";
console.log(myName); // Mushfiq
// declaration
var myName;

// let and const variables are hoisted but they are not initialized with any default value
console.log(myClub); // ReferenceError: cannot access 'myClub' before initialization
const myClub = "Chelsea";
console.log(score); // ReferenceError: cannot access 'score' before initialization
let score;
console.log(score); // undefined
score = 0;
console.log(score); // 0

// class declarations are hoisted; however, they are not initialized with a default value
const car = new Car("BMW", "silver"); // this will throw a ReferenceError
class Car {
  constructor(make, color) {
    this.make = make;
    this.color = color;
  }
}
